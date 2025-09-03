import $ from 'jquery';
import { wiAuth } from './wiauth.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { db } from './firebase/init.js';
import { getDocs, collection, query, limit } from "firebase/firestore";
import { wiTema, Mensaje, Notificacion, savels, getls, removels, accederRol, gosaves, getsaves, showLoading, infoo } from './widev.js';

// Alturas compactas
const syncHeights = () => $('.webz').each((_, el) => {
  const $el = $(el);
  $el.find('.webx').css('height', $el.find('.weby').outerHeight());
});
const debouncedSync = (() => {
  let t; return () => (clearTimeout(t), t = setTimeout(syncHeights, 120));
})(); 
$(debouncedSync);
$(window).on('load resize orientationchange', debouncedSync);

// Config compacta
const CFG = {
  COL_CARTAS: 'cartasdb',
  COL_HOJAS: 'hojasdb',
  C_CARTAS: 'cartasdbCachePublic',
  C_HOJAS: 'hojasdbCachePublic',
  HRS: 6,
  LIM_CARTAS: 500,
  LIM_HOJAS: 50,
  IMG_FALLBACK: 'https://i.postimg.cc/KvN8qF2P/menu-default.jpg'
};
 
const money = v => (v == null || v === '') ? '' : `S/${Number(v).toFixed(2)}`;

// Render de una hoja con imagen/título/nota/icono dinámicos
const renderHoja = (num, items, headers) => {
  const h = headers[num] || {};
  const note = h.nota ? `<p class="menu-note"><i class="fas fa-info-circle"></i> ${h.nota}</p>` : '';
  const img = h.imagen || CFG.IMG_FALLBACK;
  const itemsHtml = items.map(it => `
    <div class="menu-item">
      <div class="item-header">
        <h3>${it.titulo || ''}</h3>
        <span class="price">${money(it.precio)}</span>
      </div>
      ${it.descripcion ? `<p class="description">${it.descripcion}</p>` : ''}
      <div class="dotted-line"></div>
    </div>
  `).join('');

  return `
    <div class="webz" data-hoja="${num}">
      <div class="webx">
        <img src="${img}" alt="Menú ${h.titulo || `Hoja ${num}`}" loading="lazy"
             onerror="this.src='${CFG.IMG_FALLBACK}';this.onerror=null;">
        <div class="image-overlay"><i class="fas ${h.icono || 'fa-utensils'}"></i></div>
      </div>
      <div class="weby">
        <div class="menu-column">
          <header class="menu-header">
            <h2 class="menu-category">
              <i class="fas ${h.icono || 'fa-utensils'}"></i>
              ${h.titulo || `Hoja ${num}`}
            </h2>
            ${note}
          </header>
          <div class="menu-content">
            ${itemsHtml || '<p class="no-items">No hay elementos disponibles</p>'}
          </div>
        </div>
      </div>
    </div>
    <div class="separador">
      <span class="sep-number">${num}</span>
    </div>
  `;
};

// Pintar menú desde arrays
const pintarMenu = (cartas, headers) => {
  const $root = $('#menu-app');
  const grupos = cartas
    .filter(c => (c.estado || '').toLowerCase() === 'activo')
    .reduce((acc, c) => {
      const n = Number(c.hoja || 0);
      if (n > 0) (acc[n] = acc[n] || []).push(c);
      return acc;
    }, {});
  
  const hojasKeys = Array.from(
    new Set([...Object.keys(grupos).map(Number), ...Object.keys(headers).map(Number)])
  ).sort((a,b)=>a-b);

  const html = hojasKeys.map(num => {
    const items = (grupos[num] || []).sort((a,b) => {
      const d = (Number(a.orden||0)) - (Number(b.orden||0));
      return d !== 0 ? d : String(a.titulo||'').localeCompare(String(b.titulo||''));
    });
    return renderHoja(num, items, headers);
  }).join('');

  $root.html(html);

  // Esperar imágenes y fuentes para ajustar altura
  const imgs = $root.find('img').toArray();
  const waitImgs = Promise.all(imgs.map(img => img.complete ? Promise.resolve() :
    new Promise(res => { img.onload = img.onerror = res; })));
  const waitFonts = (document.fonts?.ready) || Promise.resolve();
  Promise.all([waitImgs, waitFonts]).then(() => setTimeout(syncHeights, 80));
};

// Carga pública con cache ultracorto
async function cargarCartasPublico() {
  const needsRefresh = /\brefresh=1\b/i.test(location.search);
  const cacheCartas = getls(CFG.C_CARTAS) || [];
  const cacheHojasArr = getls(CFG.C_HOJAS) || [];
  const cacheHeaders = cacheHojasArr.reduce((a,h)=>(a[h.numero]=h,a), {});

  if (cacheCartas.length && Object.keys(cacheHeaders).length && !needsRefresh) {
    pintarMenu(cacheCartas, cacheHeaders);
  }

  try {
    const [snapCartas, snapHojas] = await Promise.all([
      getDocs(query(collection(db, CFG.COL_CARTAS), limit(CFG.LIM_CARTAS))),
      getDocs(query(collection(db, CFG.COL_HOJAS), limit(CFG.LIM_HOJAS)))
    ]);
    const cartas = snapCartas.docs.map(d => ({ id:d.id, ...d.data() }));
    const hojasArr = snapHojas.docs.map(d => ({ id:d.id, ...d.data() }));
    const headers = hojasArr.reduce((a,h)=>(a[h.numero]=h,a), {});
    savels(CFG.C_CARTAS, cartas, CFG.HRS);
    savels(CFG.C_HOJAS, hojasArr, CFG.HRS);
    pintarMenu(cartas, headers);
  } catch (e) {
    console.error('Error cargando menú:', e);
    if (!cacheCartas.length) {
      $('#menu-app').html(`
        <div class="error-state">
          <i class="fas fa-exclamation-triangle"></i>
          <h2>No se pudo cargar el menú</h2>
          <p>Verifica tu conexión e intenta nuevamente.</p>
          <button class="retry-btn" onclick="location.reload()">
            <i class="fas fa-redo"></i> Reintentar
          </button>
        </div>
      `);
    }
  }
}

$(document).ready(() => {
  cargarCartasPublico();

  // Atajo para limpiar cache y recargar: Ctrl+Shift+R
  $(document).on('keydown', e => {
    if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === 'R') {
      removels(CFG.C_CARTAS, CFG.C_HOJAS);
      location.reload();
    }
  });
});

// Exponer utilidades mínimas
window.hawkaMenu = {
  reload: cargarCartasPublico,
  clearCache: () => removels(CFG.C_CARTAS, CFG.C_HOJAS)
};