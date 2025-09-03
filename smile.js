import $ from 'jquery';
import { wiAuth } from './wiauth.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from './firebase/init.js';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc, getDocs, deleteDoc, collection, query, writeBatch, serverTimestamp, limit, where } from "firebase/firestore";
import { wiTema, Mensaje, Notificacion, savels, getls, removels, accederRol, gosaves, getsaves, showLoading, infoo } from './widev.js';

// 🔐 AUTENTICACIÓN OPTIMIZADA
onAuthStateChanged(auth, async user => {
  if(!user) return window.location.href = '/'; 
  try{
    const wi = getls('wiSmile');
    if(wi) return smileContenido(wi); 
    const busq = await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)));
    const widt = busq.docs[0].data(); 
    savels('wiSmile', widt, 450); 
    smileContenido(widt);
  }catch(e){console.error(e)}
});

$(document).on('click', '.bt_salir', async () => {
  await signOut(auth); window.location.href = '/';
  try{localStorage.clear();}catch(_){Object.keys(localStorage).forEach(k=>localStorage.removeItem(k));}
});

// 🧹 LIMPIAR CACHE OPTIMIZADO
$(document).on('click','.bt_cargar',()=>{
  removels('hojasdbCache', 'cartasdbCache', 'wiSmile');
  Mensaje('Cache limpiado'); 
  setTimeout(()=>location.reload(),800);
});

// 🚀 FUNCIÓN PRINCIPAL OPTIMIZADA
function smileContenido(wi){
  console.log(wi.nombre);
  Mensaje(`¡Bienvenido ${wi.nombre}!`);

  // 📱 HTML COMPACTO
  $('.app').html(`
    <header class="hd">
      <nav class="nv dfw wdp">
        <a class="logo nv_left" href="#Logo">
          <h1>
            <span class="nv_titulo"><i class="fas fa-utensils logo-icon"></i> Cartas Hawka</span>
            <span class="nv_descri">| Administra títulos, descripciones y precios</span>
          </h1>
        </a>
        <div class="logo nv_right dfw">
          <div class="witemas dpf"></div>
          <button class="bt_recargar" title="Recargar datos"><i class="fa-solid fa-arrow-rotate-right"></i></button>
          <button class="bt_login"><i class="fas fa-user"></i> ${wi.usuario}</button>
          <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> Salir</button>
        </div>
      </nav>
    </header>

    <main class="dashboard-grid">
      <section class="section-1">
        <div class="section-header">
          <h2><i class="fas fa-layer-group"></i> Hojas</h2>
          <button class="bt_add_hoja"><i class="fa fa-plus"></i> ADD</button>
        </div>
        <div class="hojas-list" id="hojasList"></div>
      </section>

      <section class="section-2">
        <div class="section-header">
          <h2><i class="fas fa-list"></i> Seleccionado: <span id="hojaSeleccionada">Hoja 1</span></h2>
          <button class="bt_add_plato"><i class="fa fa-plus"></i> ADD</button>
        </div>
        <div class="platos-list" id="platosList"></div>
      </section>

      <section class="section-3">
        <div class="section-header">
          <h2><i class="fas fa-edit"></i> Seleccionado: <span id="platoSeleccionado">Selecciona un plato</span></h2>
        </div>
        <div class="plato-editor" id="platoEditor">
          <div class="editor-field">
            <label>Título <span class="field-tip">Ingresa el nombre del plato</span></label>
            <input type="text" id="editorTitulo" placeholder="Ej: CONTINENTAL" />
          </div>
          <div class="editor-field">
            <label>Descripción <span class="field-tip">Detalla los ingredientes</span></label>
            <textarea id="editorDescripcion" placeholder="Jugo de piña o papaya + pan con mantequilla..."></textarea>
          </div>
          <div class="editor-field">
            <label>Precio <span class="field-tip">Solo números con decimales. Ej: 19.90</span></label>
            <input type="number" id="editorPrecio" placeholder="19.90" min="0" step="0.01" />
          </div>
          <div class="editor-field">
            <label>Orden <span class="field-tip">Orden de aparición (se asigna automáticamente)</span></label>
            <input type="number" id="editorOrden" placeholder="1" min="0" step="1" />
          </div>
          <div class="editor-field">
            <label>Estado</label>
            <select id="editorEstado">
              <option value="activo">Disponible</option>
              <option value="desactivo">No disponible</option>
            </select>
          </div>
          <div class="editor-actions">
            <button class="bt_guardar_plato"><i class="fa fa-save"></i> Guardar</button>
            <button class="bt_eliminar_plato"><i class="fa fa-trash"></i> Eliminar</button>
          </div>
        </div>
      </section>

      <section class="section-4">
        <div class="section-header">
          <h2><i class="fas fa-eye"></i> Vista previa de Hoja</h2>
        </div>
        <div class="preview-container" id="previewContainer"></div>
      </section>
    </main>

    <footer class='foo hwb txc'>
      <p>Creado con<i class="fa fa-heart"></i>by<a class='ftx lkme' href='https://wtaype.github.io/' target='_blank'>@wilder.taype</a>2025 - <span class="wty"></span><span class="abw tm11042025" id="101542394703517594">| Acerca del app | Actualizado</span><span class="wtu"></span></p>
    </footer>
  `); 

  // ⚙️ CONFIGURACIÓN
  const CONFIG = {
    COL_HOJAS: 'hojasdb',
    COL_CARTAS: 'cartasdb',
    CACHE_HOJAS: 'hojasdbCache', 
    CACHE_CARTAS: 'cartasdbCache',
    CACHE_HRS: { hojas: 24, cartas: 6 }
  };

  // 📊 ESTADO GLOBAL
  const state = {
    hojas: getls(CONFIG.CACHE_HOJAS) || [],
    cartas: getls(CONFIG.CACHE_CARTAS) || [],
    hojaActiva: 1,
    platoActivo: null,
    dirtyItems: { hojas: new Set(), cartas: new Set() },
    tempCounter: 1
  };

  // 🛠️ UTILIDADES MODERNAS
  const utils = {
    fmtPrecio: p => p == null ? '0.00' : Number(p).toFixed(2),
    getHoja: num => state.hojas.find(h => h.numero === num),
    getPlatos: num => state.cartas.filter(c => c.hoja === num),
    nextIds: {
      hoja: () => `hoja_${Math.max(0, ...state.hojas.filter(h => !h.id.startsWith('temp_') && h.id.startsWith('hoja_')).map(h => parseInt(h.id.replace('hoja_', '')) || 0)) + 1}`,
      carta: () => `carta_h${String(Math.max(0, ...state.cartas.map(d => +(d.id.match(/carta_h(\d+)/)?.[1]||0))) + 1).padStart(2,'0')}`,
      temp: () => `temp_${state.tempCounter++}`
    },
    spinner: {
      set: ($btn, active, text = 'Guardando...') => {
        if (active) {
          $btn.data('original', $btn.html())
               .prop('disabled', true)
               .addClass('spinning')
               .html(`<i class="fa fa-spinner fa-spin"></i> ${text}`);
        } else {
          $btn.prop('disabled', false)
               .removeClass('spinning')
               .html($btn.data('original') || $btn.html());
        }
      }
    }
  };

  // 🎨 RENDERIZADORES OPTIMIZADOS
  const render = {
    hojas: () => {
      const $lista = $('#hojasList');
      const hojasOrdenadas = state.hojas.slice().sort((a,b) => (a.numero||0) - (b.numero||0));
      
      if (!hojasOrdenadas.length) {
        return $lista.html('<div class="empty-state"><i class="fas fa-layer-group"></i><p>No hay hojas creadas</p></div>');
      }

      const html = hojasOrdenadas.map(hoja => {
        const cantidadPlatos = utils.getPlatos(hoja.numero).filter(c => c.estado === 'activo').length;
        const clases = [
          state.hojaActiva === hoja.numero ? 'active' : '',
          state.dirtyItems.hojas.has(hoja.id) ? 'dirty' : '',
          hoja.id.startsWith('temp_') ? 'temp-item' : ''
        ].filter(Boolean).join(' ');
        
        return `
          <div class="hoja-item ${clases}" data-hoja="${hoja.numero}" data-id="${hoja.id}">
            <div class="hoja-content">
              <div class="hoja-icon">
                <i class="fas ${hoja.icono || 'fa-utensils'}"></i>
              </div>
              <div class="hoja-info">
                <h3>Hoja ${hoja.numero}</h3>
                <input type="text" class="hoja-titulo" value="${hoja.titulo || ''}" placeholder="Título de la hoja" data-temp-id="ht_${hoja.id}" />
                <div class="imagen-group">
                  <input type="url" class="hoja-imagen" value="${hoja.imagen || ''}" placeholder="https://i.postimg.cc/..." data-temp-id="hi_${hoja.id}" />
                  <i class="fas fa-info-circle imagen-info" title="Ingresa un link de imagen válido (postimg.cc recomendado)"></i>
                </div>
                <div class="nota-group">
                  <input type="text" class="hoja-nota" value="${hoja.nota || ''}" placeholder="Nota adicional (opcional)" data-temp-id="hn_${hoja.id}" />
                  <i class="fas fa-info-circle nota-info" title="Texto que aparecerá debajo del título en el menú público"></i>
                </div>
                <small>${cantidadPlatos} platos activos ${hoja.id.startsWith('temp_') ? '(sin guardar)' : ''}</small>
              </div>
            </div>
            <div class="hoja-actions">
              <button class="bt_guardar_hoja" title="Guardar cambios"><i class="fa fa-save"></i></button>
              <button class="bt_eliminar_hoja" title="Eliminar hoja"><i class="fa fa-trash"></i></button>
            </div>
          </div>
        `;
      }).join('');
      
      $lista.html(html);
    },

    platos: () => {
      const $lista = $('#platosList');
      const $titulo = $('#hojaSeleccionada');
      const hoja = utils.getHoja(state.hojaActiva);
      const platos = utils.getPlatos(state.hojaActiva).sort((a,b) => {
        const ao = Number(a.orden||0), bo = Number(b.orden||0);
        return ao !== bo ? ao - bo : String(a.titulo||'').localeCompare(String(b.titulo||''));
      });

      $titulo.text(hoja?.titulo || 'Sin título');
      
      if (!platos.length) {
        return $lista.html('<div class="empty-state"><i class="fas fa-utensils"></i><p>No hay platos en esta hoja</p></div>');
      }

      const html = platos.map(plato => {
        const clases = [
          state.platoActivo === plato.id ? 'active' : '',
          state.dirtyItems.cartas.has(plato.id) ? 'dirty' : '',
          plato.id.startsWith('temp_') ? 'temp-item' : '',
          plato.estado === 'activo' ? 'disponible' : 'no-disponible'
        ].filter(Boolean).join(' ');

        return `
          <div class="plato-item ${clases}" data-id="${plato.id}">
            <div class="plato-content">
              <div class="plato-orden">${plato.orden || 0}</div>
              <div class="plato-info">
                <h4>${plato.titulo || 'Sin título'} ${plato.id.startsWith('temp_') ? '(nuevo)' : ''}</h4>
                <p>${(plato.descripcion || '').substring(0, 50)}${(plato.descripcion||'').length > 50 ? '...' : ''}</p>
                <span class="plato-precio">S/ ${utils.fmtPrecio(plato.precio)}</span>
              </div>
              <div class="plato-estado">
                <i class="fas ${plato.estado === 'activo' ? 'fa-check-circle' : 'fa-times-circle'}"></i>
              </div>
            </div>
          </div>
        `;
      }).join('');
      
      $lista.html(html);
    },

    editor: () => {
      const plato = state.platoActivo ? state.cartas.find(p => p.id === state.platoActivo) : null;
      const $titulo = $('#platoSeleccionado');
      
      if (!plato) {
        $titulo.text('Selecciona un plato para editar');
        ['#editorTitulo', '#editorDescripcion', '#editorPrecio', '#editorOrden'].forEach(id => $(id).val(''));
        $('#editorEstado').val('activo');
        return;
      }

      const statusText = plato.id.startsWith('temp_') ? ' (nuevo - sin guardar)' : '';
      $titulo.text(`Hoja ${plato.hoja} - ${plato.titulo || 'Sin título'}${statusText}`);
      
      const campos = {
        '#editorTitulo': plato.titulo || '',
        '#editorDescripcion': plato.descripcion || '',
        '#editorPrecio': plato.precio || '',
        '#editorOrden': plato.orden || 0,
        '#editorEstado': plato.estado || 'activo'
      };
      
      Object.entries(campos).forEach(([selector, valor]) => $(selector).val(valor));
    },

    preview: () => {
      const $container = $('#previewContainer');
      const hoja = utils.getHoja(state.hojaActiva);
      const platos = utils.getPlatos(state.hojaActiva)
                          .filter(p => p.estado === 'activo')
                          .sort((a,b) => {
                            const ao = Number(a.orden||0), bo = Number(b.orden||0);
                            return ao !== bo ? ao - bo : String(a.titulo||'').localeCompare(String(b.titulo||''));
                          });

      const platosHtml = platos.map(plato => `
        <div class="preview-item">
          <div class="preview-header">
            <h3>${plato.titulo || 'Sin título'}</h3>
            <span class="preview-price">S/ ${utils.fmtPrecio(plato.precio)}</span>
          </div>
          <p class="preview-description">${plato.descripcion || ''}</p>
          <div class="preview-divider"></div>
        </div>
      `).join('');

      const imagenPreview = hoja?.imagen ? 
        `<img src="${hoja.imagen}" alt="Menu imagen" class="preview-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBlbmNvbnRyYWRhPC90ZXh0Pjwvc3ZnPg=='" />` : 
        `<div class="no-image"><i class="fas fa-image"></i><p>Sin imagen</p></div>`;

      $container.html(`
        <div class="mobile-preview">
          <div class="preview-header-section">
            ${imagenPreview}
          </div>
          <div class="preview-content">
            <h2 class="preview-title">
              <i class="fas ${hoja?.icono || 'fa-utensils'}"></i>
              ${hoja?.titulo || 'Sin título'}
            </h2>
            <p class="nota_preview">${hoja?.nota || ''}</p>
            <div class="preview-items">
              ${platos.length ? platosHtml : '<p class="no-items">No hay platos disponibles</p>'}
            </div>
          </div>
        </div>
      `);
    },

    all: () => {
      render.hojas();
      render.platos();
      render.editor();
      render.preview();
    }
  };

  // 🌐 OPERACIONES FIREBASE
  const firebase = {
    load: async () => {
      try {
        showLoading(true);
        const [snapHojas, snapCartas] = await Promise.all([
          getDocs(query(collection(db, CONFIG.COL_HOJAS), limit(50))),
          getDocs(query(collection(db, CONFIG.COL_CARTAS), limit(500)))
        ]);
        
        state.hojas = snapHojas.docs.map(d => ({ id: d.id, ...d.data() }));
        state.cartas = snapCartas.docs.map(d => ({ id: d.id, ...d.data() }));
        
        savels(CONFIG.CACHE_HOJAS, state.hojas, CONFIG.CACHE_HRS.hojas);
        savels(CONFIG.CACHE_CARTAS, state.cartas, CONFIG.CACHE_HRS.cartas);
        
        render.all();
        Notificacion('Datos cargados exitosamente', 'success', 1800);
      } catch(e) { 
        console.error(e); 
        Notificacion('Error al cargar datos', 'error'); 
      } finally { 
        showLoading(false); 
      }
    },

    saveHoja: async (hojaId) => {
      const $item = $(`.hoja-item[data-id="${hojaId}"]`);
      const hoja = state.hojas.find(h => h.id === hojaId);
      if (!hoja) return;

      const [titulo, imagen, nota] = ['.hoja-titulo', '.hoja-imagen', '.hoja-nota']
        .map(sel => $item.find(sel).val().trim());

      if (!titulo) return Notificacion('El título es requerido', 'warning');

      const isTemp = hojaId.startsWith('temp_');
      const realId = isTemp ? utils.nextIds.hoja() : hojaId;
      
      const dataToSave = {
        numero: hoja.numero,
        titulo, imagen, nota,
        icono: hoja.icono || 'fa-utensils',
        estado: hoja.estado || 'activo',
        orden: hoja.orden || hoja.numero,
        creacion: isTemp ? serverTimestamp() : hoja.creacion,
        actualizacion: serverTimestamp(),
        poremail: auth.currentUser?.email || 'sin-email',
        porusuario: auth.currentUser?.displayName || 'sin-usuario'
      };

      await setDoc(doc(db, CONFIG.COL_HOJAS, realId), dataToSave);

      // ✅ ACTUALIZACIÓN LOCAL CORREGIDA (incluye nota)
      if (isTemp) {
        const index = state.hojas.findIndex(h => h.id === hojaId);
        state.hojas[index] = { id: realId, ...dataToSave };
        state.dirtyItems.hojas.delete(hojaId);
      } else {
        Object.assign(hoja, { titulo, imagen, nota }); // ← FIX: Incluir nota
        state.dirtyItems.hojas.delete(hojaId);
      }
      
      savels(CONFIG.CACHE_HOJAS, state.hojas, CONFIG.CACHE_HRS.hojas);
      render.all();
      Mensaje('Hoja guardada exitosamente');
    },

    savePlato: async (platoId) => {
      const plato = state.cartas.find(p => p.id === platoId);
      if (!plato) return;

      const campos = ['#editorTitulo', '#editorDescripcion', '#editorPrecio', '#editorOrden', '#editorEstado']
        .reduce((acc, sel) => {
          const $el = $(sel);
          const key = sel.replace('#editor', '').toLowerCase();
          acc[key] = key === 'precio' ? ($el.val() === '' ? null : Number($el.val())) :
                    key === 'orden' ? Number($el.val()) || 0 : 
                    $el.val().trim();
          return acc;
        }, {});

      if (!campos.titulo) return Notificacion('El título es requerido', 'warning');
      if (campos.precio !== null && (isNaN(campos.precio) || campos.precio < 0)) {
        return Notificacion('Precio debe ser un número válido', 'warning');
      }

      const isTemp = platoId.startsWith('temp_');
      const realId = isTemp ? utils.nextIds.carta() : platoId;
      
      const dataToSave = {
        titulo: campos.titulo,
        descripcion: campos.descripcion,
        precio: campos.precio,
        orden: campos.orden,
        estado: campos.estado,
        hoja: plato.hoja,
        creacion: isTemp ? serverTimestamp() : plato.creacion,
        actualizacion: serverTimestamp()
      };

      await setDoc(doc(db, CONFIG.COL_CARTAS, realId), dataToSave);

      if (isTemp) {
        const index = state.cartas.findIndex(p => p.id === platoId);
        state.cartas[index] = { id: realId, ...dataToSave };
        state.dirtyItems.cartas.delete(platoId);
        state.platoActivo = realId;
      } else {
        Object.assign(plato, campos);
        state.dirtyItems.cartas.delete(platoId);
      }
      
      savels(CONFIG.CACHE_CARTAS, state.cartas, CONFIG.CACHE_HRS.cartas);
      render.all();
      Mensaje('Plato guardado exitosamente');
    }
  };

  // 🎛️ EVENT LISTENERS MODERNOS
  const events = {
    init: () => {
      // Navegación entre hojas
      $(document).on('click', '.hoja-item', function(){
        const nuevaHoja = Number($(this).data('hoja'));
        if (nuevaHoja !== state.hojaActiva) {
          state.hojaActiva = nuevaHoja;
          state.platoActivo = null;

          $('.hoja-item').removeClass('active');
          $(this).addClass('active');

          render.platos();
          render.editor();
          render.preview();
        }
      });

      // Selección de platos
      $(document).on('click', '.plato-item', function(){
        const nuevoPlato = $(this).data('id');
        if (nuevoPlato !== state.platoActivo) {
          state.platoActivo = nuevoPlato;

          $('.plato-item').removeClass('active');
          $(this).addClass('active');
          render.editor();
        }
      });

      // Marcar como dirty (optimizado)
      $(document).on('input', '.hoja-titulo, .hoja-imagen, .hoja-nota', function(){
        const hojaId = $(this).closest('.hoja-item').data('id');
        state.dirtyItems.hojas.add(hojaId);
        $(this).closest('.hoja-item').addClass('dirty');
      });

      $(document).on('input change', '#editorTitulo, #editorDescripcion, #editorPrecio, #editorOrden, #editorEstado', function(){
        if (state.platoActivo) {
          state.dirtyItems.cartas.add(state.platoActivo);
          $(`.plato-item[data-id="${state.platoActivo}"]`).addClass('dirty');
        }
      });

      // CRUD Operations
      $(document).on('click', '.bt_add_hoja', function(){
        const siguienteNumero = Math.max(0, ...state.hojas.map(h => h.numero || 0)) + 1;
        const nuevaHoja = {
          id: utils.nextIds.temp(),
          numero: siguienteNumero,
          titulo: `Nueva Hoja ${siguienteNumero}`,
          icono: 'fa-utensils',
          imagen: '', nota: '',
          estado: 'activo',
          orden: siguienteNumero
        };

        state.hojas.push(nuevaHoja);
        state.dirtyItems.hojas.add(nuevaHoja.id);
        state.hojaActiva = siguienteNumero;
        render.all();
        Notificacion('Nueva hoja agregada - Recuerda guardar', 'info', 2000);
      });

      $(document).on('click', '.bt_add_plato', function(){
        if (!utils.getHoja(state.hojaActiva)) {
          return Notificacion('Crea una hoja primero', 'warning');
        }

        const ordenMax = Math.max(0, ...utils.getPlatos(state.hojaActiva).map(d => +d.orden||0)) + 1;
        const nuevoPlato = {
          id: utils.nextIds.temp(),
          titulo: 'NUEVO PLATO',
          descripcion: '', precio: null,
          estado: 'activo',
          hoja: state.hojaActiva,
          orden: ordenMax
        };

        state.cartas.push(nuevoPlato);
        state.dirtyItems.cartas.add(nuevoPlato.id);
        state.platoActivo = nuevoPlato.id;
        render.all();
        Notificacion('Nuevo plato agregado - Recuerda guardar', 'info', 2000);
      });

      // Guardar con spinners
      $(document).on('click', '.bt_guardar_hoja', async function(){
        const $btn = $(this);
        const hojaId = $btn.closest('.hoja-item').data('id');
        
        try {
          utils.spinner.set($btn, true);
          await firebase.saveHoja(hojaId);
        } catch(e) {
          console.error(e);
          Notificacion('Error al guardar hoja', 'error');
        } finally {
          utils.spinner.set($btn, false);
        }
      });

      $(document).on('click', '.bt_guardar_plato', async function(){
        if (!state.platoActivo) return Notificacion('Selecciona un plato', 'warning');
        
        const $btn = $(this);
        try {
          utils.spinner.set($btn, true);
          await firebase.savePlato(state.platoActivo);
        } catch(e) {
          console.error(e);
          Notificacion('Error al guardar plato', 'error');
        } finally {
          utils.spinner.set($btn, false);
        }
      });

      // Eliminar (optimizado)
      $(document).on('click', '.bt_eliminar_plato', async function(){
        if (!state.platoActivo) return Notificacion('Selecciona un plato', 'warning');
        
        const plato = state.cartas.find(p => p.id === state.platoActivo);
        if (!confirm(`¿Eliminar "${plato?.titulo || state.platoActivo}"?`)) return;

        const $btn = $(this);
        try {
          utils.spinner.set($btn, true, 'Eliminando...');
          
          if (!state.platoActivo.startsWith('temp_')) {
            await deleteDoc(doc(db, CONFIG.COL_CARTAS, state.platoActivo));
          }
          
          state.cartas = state.cartas.filter(p => p.id !== state.platoActivo);
          state.dirtyItems.cartas.delete(state.platoActivo);
          savels(CONFIG.CACHE_CARTAS, state.cartas, CONFIG.CACHE_HRS.cartas);
          state.platoActivo = null;
          render.all();
          Mensaje('Plato eliminado exitosamente');
        } catch(e) {
          console.error(e);
          Notificacion('Error al eliminar plato', 'error');
        } finally {
          utils.spinner.set($btn, false);
        }
      });

      $(document).on('click', '.bt_eliminar_hoja', async function(){
        const $btn = $(this);
        const hojaId = $btn.closest('.hoja-item').data('id');
        const hoja = state.hojas.find(h => h.id === hojaId);
        if (!hoja) return;

        const platosEnHoja = utils.getPlatos(hoja.numero);
        let mensaje = `¿Eliminar hoja "${hoja.titulo}"?`;
        if (platosEnHoja.length > 0) {
          mensaje += `\n\nAdvertencia: También se eliminarán ${platosEnHoja.length} platos de esta hoja.`;
        }
        
        if (!confirm(mensaje)) return;

        try {
          utils.spinner.set($btn, true, 'Eliminando...');
          
          if (!hojaId.startsWith('temp_')) {
            const batch = writeBatch(db);
            batch.delete(doc(db, CONFIG.COL_HOJAS, hojaId));
            
            platosEnHoja.forEach(plato => {
              if (!plato.id.startsWith('temp_')) {
                batch.delete(doc(db, CONFIG.COL_CARTAS, plato.id));
              }
            });
            
            await batch.commit();
          }
          
          state.hojas = state.hojas.filter(h => h.id !== hojaId);
          state.cartas = state.cartas.filter(c => c.hoja !== hoja.numero);
          
          savels(CONFIG.CACHE_HOJAS, state.hojas, CONFIG.CACHE_HRS.hojas);
          savels(CONFIG.CACHE_CARTAS, state.cartas, CONFIG.CACHE_HRS.cartas);
          
          state.dirtyItems.hojas.delete(hojaId);
          state.platoActivo = null;
          
          if (state.hojaActiva === hoja.numero) {
            state.hojaActiva = state.hojas.length > 0 ? state.hojas[0].numero : 1;
          }
          
          render.all();
          Mensaje(`Hoja eliminada${platosEnHoja.length > 0 ? ` junto con ${platosEnHoja.length} platos` : ''}`);
        } catch(e) {
          console.error(e);
          Notificacion('Error al eliminar hoja', 'error');
        } finally {
          utils.spinner.set($btn, false);
        }
      });

      $(document).on('click', '.bt_recargar', firebase.load);

      // Auto-save local con gosaves/getsaves
      gosaves('.hoja-titulo, .hoja-imagen, .hoja-nota', 'data-temp-id', $el => $el.val());
      gosaves('#editorTitulo, #editorDescripcion, #editorPrecio, #editorOrden, #editorEstado', 'id', $el => $el.val());
      
      getsaves('.hoja-titulo, .hoja-imagen, .hoja-nota', 'data-temp-id', ($el, val) => $el.val(val));
      getsaves('#editorTitulo, #editorDescripcion, #editorPrecio, #editorOrden, #editorEstado', 'id', ($el, val) => $el.val(val));
    }
  };
  // 🚀 INICIALIZACIÓN
  events.init();
  render.all();
  infoo(); // Para footer
  
  if (state.hojas.length === 0 || state.cartas.length === 0) {
    firebase.load();
  }
}