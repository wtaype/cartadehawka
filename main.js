import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { db } from './firebase/init.js';
import { getDocs, collection, query, limit, where } from 'firebase/firestore';
import { savels, getls, removels, Mensaje, Notificacion } from './widev.js';
import { } from './wiauth.js';

// Alturas sincronizadas (compacto)
const syncHeights = () => $('.webz').each((_, el) => $(el).find('.webx').height($(el).find('.weby').outerHeight()));
const debounced = (() => { let t; return () => (clearTimeout(t), t = setTimeout(syncHeights, 120)); })();
$(debounced); $(window).on('load resize orientationchange', debounced);

// Idiomas (toggle)
$(() => {
  const $w = $('.midw_v1'), $c = $w.find('.wilang-content');
  $w.on('click', '.wilang-trigger', e => (e.stopPropagation(), $c.toggleClass('show'), $w.find('.fa-chevron-down').toggleClass('rotated')))
    .on('click', '.wilang-item', function(){ $c.removeClass('show'); setTimeout(()=>location.href=$(this).data('url'),200); });
  $(document).on('click', () => ($c.removeClass('show'), $w.find('.fa-chevron-down').removeClass('rotated')));
});

// Config desde smile.js (opcional)
const SM = window.smile || {};
const CFG = {
  COL_CARTAS: SM.colCartas || 'cartasdb',
  COL_HOJAS: SM.colHojas || 'hojasdb',
  C_CARTAS: SM.cacheCartasKey || 'cartasdbCachePublic',
  C_HOJAS: SM.cacheHojasKey || 'hojasdbCachePublic',
  HRS: SM.cacheHoras || 6,
  LIM_CARTAS: SM.limCartas || 500,
  LIM_HOJAS: SM.limHojas || 50,
  IMG_FALLBACK: SM.imgFallback || 'smile.png',
  ICONO_HOJA: SM.iconoHoja || 'fa-utensils',
  CURRENCY: SM.currency || 'S/',
  SHOW_ICONS: SM.showIcons !== false
};
const isAct = s => String(s||'').toLowerCase()==='activo';
const money = v => (v==null || v==='') ? '' : `${CFG.CURRENCY}${(+v).toFixed(2)}`;

// Templating
const itemHTML = it => {
  const ico = (CFG.SHOW_ICONS && it.icono) ? `<i class="fas ${it.icono}"></i> ` : '';
  return `
    <div class="menu-item">
      <div class="item-header">
        <h3>${ico}${it.titulo||''}</h3>
        <span class="price">${money(it.precio)}</span>
      </div>
      ${it.descripcion?`<p class="description">${it.descripcion}</p>`:''}
      <div class="dotted-line"></div>
    </div>`;
};

const hojaHTML = (num, items, headers) => {
  const h = headers[num] || {}, iconH = h.icono || CFG.ICONO_HOJA, img = h.imagen || CFG.IMG_FALLBACK;
  const note = h.nota ? `<p class="menu-note"><i class="fas fa-info-circle"></i> ${h.nota}</p>` : '';
  return `
    <div class="webz" data-hoja="${num}">
      <div class="webx">
        <img src="${img}" alt="Menú ${h.titulo||`Hoja ${num}`}" loading="lazy"
             onerror="this.src='${CFG.IMG_FALLBACK}';this.onerror=null;">
        <div class="image-overlay"><i class="fas ${iconH}"></i></div>
      </div>
      <div class="weby">
        <div class="menu-column">
          <header class="menu-header">
            <h2 class="menu-category"><i class="fas ${iconH}"></i> ${h.titulo||`Hoja ${num}`}</h2>
            ${note}
          </header>
          <div class="menu-content">
            ${items.length ? items.map(itemHTML).join('') : '<p class="no-items">No hay elementos disponibles</p>'}
          </div>
        </div>
      </div>
    </div> 
    <div class="separador"><span class="sep-number">${num}</span></div>`;
};

// Generar header con selector de idiomas
const renderHeader = () => {
  const langs = {
    es: { name: 'Español', flag: 'https://www.svgrepo.com/show/405610/flag-for-flag-spain.svg', url: 'https://cartadehawka.web.app' },
    en: { name: 'English', flag: 'https://www.svgrepo.com/show/508668/flag-us.svg', url: 'https://coffeehawka.web.app' }
  };
  const items = Object.entries(langs).map(([k,v]) => `<div class="wilang-item" data-lang="${k}" data-url="${v.url}"><img src="${v.flag}" alt="${v.name}" class="flag-icon"><span>${v.name}</span></div>`).join('');
  
  return `<header class="hd"><h1 class="wilang"><span class="wilang_titu">Idioma: </span><div class="midw_v1"><div class="wilang-trigger"><div class="wilang-selected"><img src="${langs.es.flag}" alt="${langs.es.name}" class="flag-icon"><span>${langs.es.name}</span></div><i class="fas fa-chevron-down"></i></div><div class="wilang-content">${items}</div></div></h1></header>`;
};

// Pintar menú (solo hojas activas + cartas activas) con header incluido
// Generar footer con modales
const renderFooter = () => `
  <!-- Modales (FOOTER) -->
  <div id="foo-about" class="foomodal" aria-hidden="true" role="dialog" aria-modal="true">
    <div class="foo-dialog">
      <button class="foo-close" aria-label="Cerrar">&times;</button>
      <div class="foo-head">
        <div class="foo-badge"><i class="fas fa-info-circle"></i></div>
        <h3>Acerca del app</h3>
      </div>
      <p>Cartas Hawka permite mostrar tu menú por hojas con precios, descripciones e íconos. Optimizado para móviles y caché local.</p>
      <ul class="foo-list">
        <li>Carga rápida con caché</li>
        <li>Soporte multi-idioma (selector en el header)</li>
        <li>Diseño responsive y accesible</li>
      </ul>
      <div class="foo-actions">
        <button class="foo-btn foo-btn--primary foo-ok">Entendido</button>
      </div>
    </div>
  </div>

  <div id="foo-priv" class="foomodal" aria-hidden="true" role="dialog" aria-modal="true">
    <div class="foo-dialog">
      <button class="foo-close" aria-label="Cerrar">&times;</button>
      <div class="foo-head">
        <div class="foo-badge"><i class="fas fa-user-shield"></i></div>
        <h3>Políticas de privacidad</h3>
      </div>
      <p>No recopilamos datos personales sin tu consentimiento. El contenido del menú se procesa y se cachea en tu navegador.</p>
      <ul class="foo-list">
        <li>Sin cookies de rastreo</li>
        <li>Control local de caché (Ctrl+Shift+R para limpiar)</li>
        <li>Imágenes con carga diferida (lazy)</li>
      </ul>
      <div class="foo-actions">
        <button class="foo-btn foo-btn--primary foo-ok">Entendido</button>
      </div>
    </div>
  </div>

  <div id="foo-recl" class="foomodal" aria-hidden="true" role="dialog" aria-modal="true">
    <div class="foo-dialog">
      <button class="foo-close" aria-label="Cerrar">&times;</button>
      <div class="foo-head">
        <img src="./libroReclamos.png" alt="Libro de Reclamaciones" class="foo-hero">
        <h3>Libro de reclamaciones</h3>
      </div>
      <form id="reclamosForm" class="foo-form" novalidate>
        <div class="foo-grid">
          <label> Nombres y apellidos
            <input name="nombres" type="text" required placeholder="Tu nombre completo" />
          </label>
          <label> Email
            <input name="email" type="email" required placeholder="tucorreo@dominio.com" />
          </label>
          <label> Teléfono
            <input name="telefono" type="tel" placeholder="+51 999 999 999" />
          </label>
          <label> N° pedido (opcional)
            <input name="pedido" type="text" placeholder="Ej: A123" />
          </label>
          <label class="foo-span2"> Detalle del reclamo
            <textarea name="detalle" required rows="4" placeholder="Describe tu reclamo..."></textarea>
          </label>
          <label class="foo-span2 foo-chk">
            <input type="checkbox" name="consent" required />
            Acepto el uso de mis datos para dar seguimiento a mi reclamo.
          </label>
        </div>
        <div class="foo-actions">
          <button type="button" class="foo-btn foo-btn--ghost foo-cancel">Cancelar</button>
          <button type="submit" class="foo-btn foo-btn--primary">Enviar</button>
        </div>
      </form>
    </div>
  </div>

  <footer class="foo">
    <div class="foo-inner">
      <nav class="foo-links">
        <button class="lk about" data-foomodal="#foo-about" type="button">Acerca del app</button>
        <button class="lk priv" data-foomodal="#foo-priv" type="button">Políticas de privacidad</button>
        <button class="lk recl" data-foomodal="#foo-recl" type="button">
          <img src="./libroReclamos.png" alt="Libro de Reclamaciones" style="width:20px;height:20px;vertical-align:middle;margin-right:5px;">
          Libro de reclamaciones
        </button>
      </nav>
      <div class="brand">
        Creado con <i class="fa fa-heart"></i> por
        <a class="lkme" href="https://wtaype.github.io/" target="_blank" rel="noopener">@wilder.taype</a>
        | <span class="Login"> Login</span> | <span class="wty">2025</span>
      </div>
    </div>
  </footer>`;

// Pintar menú (solo hojas activas + cartas activas) con header y footer incluido
const pintarMenu = (cartas, headers) => {
  const $root = $('#menu-app');
  const activos = cartas.filter(c => isAct(c.estado));
  const grupos = activos.reduce((m,c)=>((m[c.hoja=+c.hoja||0]||(m[c.hoja]=[])).push(c), m), {});
  const keys = Object.keys(headers).map(Number).filter(n=>n>0).sort((a,b)=>a-b);

  if (!keys.length) return $root.html(renderHeader() + '<p class="no-items txc">No hay menús disponibles</p>' + renderFooter());

  const menuContent = keys.map(n => {
    const items = (grupos[n]||[]).sort((a,b)=> (+(a.orden||0))-(+(b.orden||0)) || String(a.titulo||'').localeCompare(String(b.titulo||'')));
    return hojaHTML(n, items, headers);
  }).join('');

  $root.html(renderHeader() + menuContent + renderFooter());

  const imgs = $root.find('img').toArray();
  Promise.all(imgs.map(i=>i.complete?Promise.resolve():new Promise(r=>{i.onload=i.onerror=r;})))
    .then(()=> (document.fonts?.ready||Promise.resolve()))
    .then(()=> setTimeout(syncHeights, 80));
};
// Carga con caché corta (solo activos)
async function cargarCartasPublico() {
  const refresh = /\brefresh=1\b/i.test(location.search) || SM.noCache;
  const cacheCartas = (getls(CFG.C_CARTAS)||[]).filter(c=>isAct(c.estado));
  const hojasArr = (getls(CFG.C_HOJAS)||[]).filter(h=>isAct(h.estado));
  const headers = Object.fromEntries(hojasArr.map(h=>[h.numero,h]));
  if (cacheCartas.length && Object.keys(headers).length && !refresh) pintarMenu(cacheCartas, headers);

  try {
    const [snapCartas, snapHojas] = await Promise.all([
      getDocs(query(collection(db, CFG.COL_CARTAS), where('estado','==','activo'), limit(CFG.LIM_CARTAS))),
      getDocs(query(collection(db, CFG.COL_HOJAS), where('estado','==','activo'), limit(CFG.LIM_HOJAS)))
    ]);
    const cartas = snapCartas.docs.map(d=>({id:d.id, ...d.data()}));
    const hojas = snapHojas.docs.map(d=>({id:d.id, ...d.data()}));
    const hdrs = Object.fromEntries(hojas.map(h=>[h.numero,h]));
    savels(CFG.C_CARTAS, cartas, CFG.HRS);
    savels(CFG.C_HOJAS, hojas, CFG.HRS);
    pintarMenu(cartas, hdrs);
  } catch(e){
    console.error('Error cargando menú:', e);
    if (!cacheCartas.length) $('#menu-app').html(`
      <div class="error-state">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>No se pudo cargar el menú</h2>
        <p>Verifica tu conexión e intenta nuevamente.</p>
        <button class="retry-btn" onclick="location.reload()"><i class="fas fa-redo"></i> Reintentar</button>
      </div>`);
  }
}

// Init + atajos
$(() => {
  cargarCartasPublico();
  $(document).on('keydown', e => {
    if (e.ctrlKey && e.shiftKey && e.key.toUpperCase()==='R') { removels(CFG.C_CARTAS, CFG.C_HOJAS); location.reload(); }
  });
});

// API mínima
window.hawkaMenu = { reload: cargarCartasPublico, clearCache: () => removels(CFG.C_CARTAS, CFG.C_HOJAS) };

 //Para footer y forms [START]
$(()=>{const OMFoo=m=>$(m).addClass('show').attr('aria-hidden','false'),CMFoo=$m=>$m.removeClass('show').attr('aria-hidden','true'),WFoo=window.smile?.whatsReclamos||'51992472706';$(document).on('click','[data-foomodal]',e=>(e.preventDefault(),OMFoo($(e.currentTarget).data('foomodal')))).on('click','.foo-close,.foomodal .foo-ok,.foomodal .foo-cancel',e=>CMFoo($(e.currentTarget).closest('.foomodal'))).on('click','.foomodal',e=>{if(e.target===e.currentTarget)CMFoo($(e.currentTarget));}).on('submit','#reclamosForm',e=>{e.preventDefault();const fd=new FormData(e.currentTarget),d=Object.fromEntries(fd.entries());if(!d.nombres||!d.email||!d.detalle||!fd.get('consent'))return Mensaje('Completa los campos obligatorios.','error');const msg=`*Reclamo Hawka*\nNombre: ${d.nombres}\nEmail: ${d.email}\nTeléfono: ${d.telefono||'-'}\nPedido: ${d.pedido||'-'}\nDetalle: ${d.detalle}`;window.open(`https://wa.me/${WFoo}?text=${encodeURIComponent(msg)}`,'_blank');Notificacion('Abriendo WhatsApp...','success',2200);e.currentTarget.reset();CMFoo($('#foo-recl'));});$('.wty').text(new Date().getFullYear());});
//Para footer y forms [END]