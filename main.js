import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { db } from './firebase/init.js';
import { getDocs, collection, query, limit, where } from 'firebase/firestore';
import { savels, getls, removels } from './widev.js';
import { iniciarFooter } from './smile/footer.js';

// =====================================================
// CONFIGURACIÓN
// =====================================================
const config = {
  colCartas: 'cartasdb',
  colHojas: 'hojasdb',
  cacheCartas: 'cartasdbCachePublic',
  cacheHojas: 'hojasdbCachePublic',
  horasCache: 6,
  limiteCartas: 500,
  limiteHojas: 50,
  imagenDefault: 'smile.png',
  iconoHoja: 'fa-utensils',
  moneda: 'S/',
  mostrarIconos: true
};

if (window.smile) Object.assign(config, window.smile);

// =====================================================
// UTILIDADES
// =====================================================
const estaActivo = estado => String(estado || '').toLowerCase() === 'activo';
const formatearPrecio = valor => (valor == null || valor === '') ? '' : `${config.moneda}${(+valor).toFixed(2)}`;

const sincronizarAlturas = () => $('.webz').each((_, elem) => {
  $(elem).find('.webx').height($(elem).find('.weby').outerHeight());
});

const ajustarAlturas = (() => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(sincronizarAlturas, 120);
  };
})();

$(ajustarAlturas);
$(window).on('load resize orientationchange', ajustarAlturas);

// =====================================================
// SELECTOR DE IDIOMAS
// =====================================================
const idiomas = {
  es: { nombre: 'Español', bandera: 'https://www.svgrepo.com/show/405610/flag-for-flag-spain.svg', url: 'https://cartadehawka.web.app' },
  en: { nombre: 'English', bandera: 'https://www.svgrepo.com/show/508668/flag-us.svg', url: 'https://coffeehawka.web.app' }
};

const iniciarIdiomas = () => {
  $(document).off('.wilang')
    .on('click.wilang', '.wilang-trigger', e => {
      e.stopPropagation();
      const $contenedor = $(e.currentTarget).closest('.midw_v1');
      $contenedor.find('.wilang-content').toggleClass('show');
      $contenedor.find('.fa-chevron-down').toggleClass('rotated');
    })
    .on('click.wilang', '.wilang-item', function(e) {
      e.stopPropagation();
      setTimeout(() => location.href = $(this).data('url'), 200);
    })
    .on('click.wilang', e => {
      if (!$(e.target).closest('.midw_v1').length) {
        $('.wilang-content').removeClass('show');
        $('.fa-chevron-down').removeClass('rotated');
      }
    });
};

$(() => iniciarIdiomas());

// =====================================================
// TEMPLATES HTML
// =====================================================
const htmlItem = item => {
  const icono = (config.mostrarIconos && item.icono) ? `<i class="fas ${item.icono}"></i> ` : '';
  return `
    <div class="menu-item">
      <div class="item-header">
        <h3>${icono}${item.titulo || ''}</h3>
        <span class="price">${formatearPrecio(item.precio)}</span>
      </div>
      ${item.descripcion ? `<p class="description">${item.descripcion}</p>` : ''}
      <div class="dotted-line"></div>
    </div>`;
};

const htmlHoja = (numero, items, cabeceras) => {
  const cabecera = cabeceras[numero] || {};
  const icono = cabecera.icono || config.iconoHoja;
  const imagen = cabecera.imagen || config.imagenDefault;
  const nota = cabecera.nota ? `<p class="menu-note"><i class="fas fa-info-circle"></i> ${cabecera.nota}</p>` : '';
  
  return `
    <div class="webz" data-hoja="${numero}">
      <div class="webx">
        <img src="${imagen}" alt="Menú ${cabecera.titulo || `Hoja ${numero}`}" loading="lazy"
             onerror="this.src='${config.imagenDefault}';this.onerror=null;">
      </div>
      <div class="weby">
        <div class="menu-column">
          <header class="menu-header">
            <h2 class="menu-category"><i class="fas ${icono}"></i> ${cabecera.titulo || `Hoja ${numero}`}</h2>
          </header>
          <div class="menu-content">
            ${items.length ? items.map(htmlItem).join('') : '<p class="no-items">No hay elementos disponibles</p>'}
          </div>
          ${nota}
        </div>
      </div>
    </div>
    <div class="separador"><span class="sep-number">${numero}</span></div>`;
};

const htmlCabecera = () => {
  const itemsIdioma = Object.entries(idiomas)
    .map(([clave, valor]) => `<div class="wilang-item" data-lang="${clave}" data-url="${valor.url}">
      <img src="${valor.bandera}" alt="${valor.nombre}" class="flag-icon">
      <span>${valor.nombre}</span>
    </div>`).join('');
  
  return `
    <header class="hd">
      <h1 class="wilang">
        <span class="wilang_titu">Idioma: </span>
        <div class="midw_v1">
          <div class="wilang-trigger">
            <div class="wilang-selected">
              <img src="${idiomas.es.bandera}" alt="${idiomas.es.nombre}" class="flag-icon">
              <span>${idiomas.es.nombre}</span>
            </div>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="wilang-content">${itemsIdioma}</div>
        </div>
      </h1>
    </header>`;
};

// =====================================================
// RENDERIZADO
// =====================================================
const renderizarMenu = (cartas, cabeceras) => {
  const $raiz = $('#menu-app');
  const cartasActivas = cartas.filter(carta => estaActivo(carta.estado));
  const grupos = cartasActivas.reduce((mapa, carta) => {
    const hoja = +(carta.hoja || 0);
    (mapa[hoja] || (mapa[hoja] = [])).push(carta);
    return mapa;
  }, {});

    const numeros = Object.keys(cabeceras).map(Number).filter(num => num > 0)
    .sort((a, b) => {
      const hojaA = Object.values(cabeceras).find(h => h.numero === a);
      const hojaB = Object.values(cabeceras).find(h => h.numero === b);
      return (hojaA?.orden || 0) - (hojaB?.orden || 0);
    });

  if (!numeros.length) {
    $raiz.html(htmlCabecera() + '<p class="no-items txc">No hay menús disponibles</p>');
    iniciarFooter(); // ✅ Iniciar después del contenido
    return;
  }

  const contenido = numeros.map(num => {
    const items = (grupos[num] || []).sort((a, b) => 
      (+(a.orden || 0)) - (+(b.orden || 0)) || String(a.titulo || '').localeCompare(String(b.titulo || ''))
    );
    return htmlHoja(num, items, cabeceras);
  }).join('');

  $raiz.html(htmlCabecera() + contenido);
  iniciarFooter(); // ✅ Iniciar después de renderizar

  const imagenes = $raiz.find('img').toArray();
  Promise.all(imagenes.map(img => img.complete ? Promise.resolve() : new Promise(resolve => {
    img.onload = img.onerror = resolve;
  })))
    .then(() => document.fonts?.ready || Promise.resolve())
    .then(() => setTimeout(sincronizarAlturas, 80));
};

// =====================================================
// CARGA DE DATOS
// =====================================================
async function cargarMenu() {
  const refrescar = /\brefresh=1\b/i.test(location.search);
  const cartasCache = (getls(config.cacheCartas) || []).filter(carta => estaActivo(carta.estado));
  const hojasCache = (getls(config.cacheHojas) || []).filter(hoja => estaActivo(hoja.estado));
  const cabeceras = Object.fromEntries(hojasCache.map(hoja => [hoja.numero, hoja]));

  if (cartasCache.length && Object.keys(cabeceras).length && !refrescar) {
    renderizarMenu(cartasCache, cabeceras);
  }

  try {
    const [snapCartas, snapHojas] = await Promise.all([
      getDocs(query(collection(db, config.colCartas), where('estado', '==', 'activo'), limit(config.limiteCartas))),
      getDocs(query(collection(db, config.colHojas), where('estado', '==', 'activo'), limit(config.limiteHojas)))
    ]);

    const cartasNuevas = snapCartas.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const hojasNuevas = snapHojas.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const cabecerasNuevas = Object.fromEntries(hojasNuevas.map(hoja => [hoja.numero, hoja]));

    savels(config.cacheCartas, cartasNuevas, config.horasCache);
    savels(config.cacheHojas, hojasNuevas, config.horasCache);

    renderizarMenu(cartasNuevas, cabecerasNuevas);

  } catch(error) {
    console.error('Error cargando menú:', error);
    if (!cartasCache.length) {
      $('#menu-app').html(`
        <div class="error-state">
          <i class="fas fa-exclamation-triangle"></i>
          <h2>No se pudo cargar el menú</h2>
          <p>Verifica tu conexión e intenta nuevamente.</p>
          <button class="retry-btn" onclick="location.reload()"><i class="fas fa-redo"></i> Reintentar</button>
        </div>`);
    }
  }
}

// =====================================================
// INICIALIZACIÓN
// =====================================================
$(() => {
  cargarMenu();
  
  $(document).on('keydown', evento => {
    if (evento.ctrlKey && evento.shiftKey && evento.key.toUpperCase() === 'R') {
      removels(config.cacheCartas, config.cacheHojas);
      location.reload();
    }
  });
});

window.hawkaMenu = {
  recargar: cargarMenu,
  limpiarCache: () => removels(config.cacheCartas, config.cacheHojas)
};
