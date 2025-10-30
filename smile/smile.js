import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth } from '../firebase/init.js';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Mensaje, Notificacion, savels, getls, removels, gosaves, getsaves, showLoading, infoo } from '../widev.js';
import {
  cargarPerfilSmile, leerCachesIniciales, cargarHojasCartas,
  guardarHojaDB, guardarPlatoDB, eliminarPlatoDB, eliminarHojaConPlatosDB,
  guardarTemaDB, nombresDb, selloServidor, limpiarCachesDb
} from './smiledb.js';

let usuarioAuth = null;

onAuthStateChanged(auth, async persona => {
  if (!persona) return location.href = '/';
  usuarioAuth = persona;
  try {
    const perfil = await cargarPerfilSmile(persona.displayName);
    if (perfil) iniciarApp(perfil);
  } catch (e) { console.error(e); }
});

$(document).on('click', '.bt_salir', async () => {
  await signOut(auth); try { localStorage.clear(); } catch (_) { }
  location.href = '/';
});

$(document).on('click', '.bt_cargar', () => {
  limpiarCachesDb(); removels(nombresDb.cache.perfil);
  Mensaje('Cache limpiado'); setTimeout(() => location.reload(), 700);
});

function iniciarApp(perfil) {
  $('.app').html(`
  <header class="hd">
    <nav class="nv dfw wdp">
      <a class="logo nv_left"><h1><span class="nv_titulo"><i class="fas fa-utensils logo-icon"></i> Cartas Hawka</span><span class="nv_descri">| Administra títulos, descripciones y precios</span></h1></a>
      <div class="logo nv_right dfw">
        <div class="witemas dpf"></div>
        <button class="bt_recargar" title="Recargar datos"><i class="fa-solid fa-arrow-rotate-right"></i></button>
        <button class="bt_login"><i class="fas fa-user"></i> ${perfil.usuario}</button>
        <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> Salir</button>
      </div>
    </nav>
  </header>
  <main class="dashboard-grid">
    <section class="section-1">
      <div class="section-header"><h2><i class="fas fa-layer-group"></i> Hojas</h2><button class="bt_add_hoja"><i class="fa fa-plus"></i> Agregar</button></div>
      <div class="hojas-list" id="hojasList"></div>
    </section>
    <section class="section-2">
      <div class="section-header"><h2><i class="fas fa-list"></i> Seleccionado: <span id="hojaSeleccionada">Hoja 1</span></h2><button class="bt_add_plato"><i class="fa fa-plus"></i> ADD</button></div>
      <div class="platos-list" id="platosList"></div>
    </section>
    <section class="section-3">
      <div class="section-header"><h2><i class="fas fa-edit"></i> Seleccionado: <span id="platoSeleccionado">Selecciona un plato</span></h2></div>
      <div class="plato-editor" id="platoEditor">
        <div class="editor-field"><label>Título</label><input type="text" id="editorTitulo" placeholder="Ej: CONTINENTAL"/></div>
        <div class="editor-field"><label>Descripción</label><textarea id="editorDescripcion" placeholder="Ingredientes..."></textarea></div>
        <div class="editor-field"><label>Precio</label><input type="number" id="editorPrecio" min="0" step="0.01" placeholder="19.90"/></div>
        <div class="editor-field"><label>Orden</label><input type="number" id="editorOrden" min="0" step="1" placeholder="1"/></div>
        <div class="editor-field"><label>Estado</label>
          <select id="editorEstado"><option value="activo">Disponible</option><option value="desactivo">No disponible</option></select>
        </div>
        <div class="editor-actions">
          <button class="bt_guardar_plato"><i class="fa fa-save"></i> Guardar</button>
          <button class="bt_eliminar_plato"><i class="fa fa-trash"></i> Eliminar</button>
        </div>
      </div>
    </section>
    <section class="section-4">
      <div class="section-header"><h2><i class="fas fa-eye"></i> Vista previa de Hoja</h2></div>
      <div class="preview-container" id="previewContainer"></div>
    </section>
  </main>
  <footer class='foo hwb txc'>
    <p>Creado con<i class="fa fa-heart"></i>by<a class='ftx lkme' href='https://wtaype.github.io/' target='_blank'>@wilder.taype</a>2025 - <span class="wty"></span><span class="abw tm11042025">| Acerca del app | Actualizado</span></p>
  </footer>`);

  Mensaje(`¡Bienvenido ${perfil.nombre}!`);

  const iconosBase = [
    { valor: 'fa-utensils', titulo: 'Tenedores' },
    { valor: 'fa-mug-hot', titulo: 'Café' },
    { valor: 'fa-bread-slice', titulo: 'Sandwich' }
  ];
  const estadosBase = {
    activo: { valor: 'activo', icono: 'fa-eye', titulo: 'Activo' },
    desactivo: { valor: 'desactivo', icono: 'fa-eye-slash', titulo: 'Desactivo' }
  };

  const estado = {
    hojas: leerCachesIniciales().hojas,
    cartas: leerCachesIniciales().cartas,
    hojaActiva: 1,
    platoActivo: null,
    sucios: { hojas: new Set(), cartas: new Set() },
    conteoTemp: 1
  };

  const utiles = {
    moneda: v => v == null ? '0.00' : Number(v).toFixed(2),
    hojaPorNumero: n => estado.hojas.find(h => h.numero === n),
    platosPorHoja: n => estado.cartas.filter(c => c.hoja === n),
    idsSiguientes: {
      hoja: () => `hoja_${Math.max(0, ...estado.hojas.filter(h => !h.id.startsWith('temp_') && /^hoja_/.test(h.id)).map(h => +h.id.replace('hoja_', '') || 0)) + 1}`,
      carta: () => `carta_h${String(Math.max(0, ...estado.cartas.map(d => +(d.id.match(/carta_h(\d+)/)?.[1] || 0))) + 1).padStart(2, '0')}`,
      temp: () => `temp_${estado.conteoTemp++}`
    },
    metaIcono: v => iconosBase.find(i => i.valor === v) || iconosBase[0],
    rotarIcono: v => iconosBase[(iconosBase.findIndex(i => i.valor === v) + 1 + iconosBase.length) % iconosBase.length].valor,
    metaEstado: v => estadosBase[v] || estadosBase.activo,
    spinner: ($b, on, txt = '') => {
      if (on) { $b.data('orig', $b.html()).prop('disabled', true).html(`<i class="fa fa-spinner fa-spin"></i> ${txt}`); }
      else { $b.prop('disabled', false).html($b.data('orig') || $b.html()); }
    }
  };

  const pintar = {
    hojas: () => {
      const $lienzo = $('#hojasList');
      const orden = [...estado.hojas].sort((a, b) => (a.orden || 0) - (b.orden || 0));
      if (!orden.length) return $lienzo.html('<div class="empty-state"><i class="fas fa-layer-group"></i><p>No hay hojas</p></div>');
      $lienzo.html(orden.map(h => {
        h.icono = h.icono || 'fa-utensils';
        h.estado = h.estado || 'activo';
        const ico = utiles.metaIcono(h.icono), est = utiles.metaEstado(h.estado);
        const activos = utiles.platosPorHoja(h.numero).filter(c => c.estado === 'activo').length;
        const clase = [
          estado.hojaActiva === h.numero ? 'active' : '',
          estado.sucios.hojas.has(h.id) ? 'dirty' : '',
          h.id.startsWith('temp_') ? 'temp-item' : '',
          h.estado === 'desactivo' ? 'inactive' : ''
        ].filter(Boolean).join(' ');
        return `
        <div class="hoja-item ${clase}" data-hoja="${h.numero}" data-id="${h.id}">
          <div class="hoja-content">
            <button type="button" class="hoja-icono-toggle" title="${ico.titulo}" data-icono="${ico.valor}">
              <i class="fas ${ico.valor}"></i>
            </button>
            <div class="hoja-info">
              <h3>${h.titulo}</h3>
              <input type="text" class="hoja-titulo" value="${h.titulo || ''}" placeholder="Título"/>
              <input type="url" class="hoja-imagen" value="${h.imagen || ''}" placeholder="https://i.postimg.cc/..."/>
              <input type="text" class="hoja-nota" value="${h.nota || ''}" placeholder="Nota (opcional)"/>
              <p class="nplatos">${activos} platos activos ${h.id.startsWith('temp_') ? '(sin guardar)' : ''}</p>
            </div>
          </div>
          <div class="hoja-actions">
            <button class="subir_hoja" title="Subir Orden"><i class="fa-solid fa-arrow-up"></i></button>
            <button class="bajar_hoja" title="Bajar Orden"><i class="fa-solid fa-arrow-down"></i></button>
            <button type="button" class="hoja-estado-toggle" title="${est.titulo}" data-estado="${est.valor}">
              <i class="fas ${est.icono}"></i>
            </button>
            <button class="bt_guardar_hoja" title="Guardar"><i class="fa fa-save"></i></button>
            <button class="bt_eliminar_hoja" title="Eliminar"><i class="fa fa-trash"></i></button>
          </div>
        </div>`;
      }).join(''));
    },
    platos: () => {
      const $lienzo = $('#platosList'), hoja = utiles.hojaPorNumero(estado.hojaActiva);
      $('#hojaSeleccionada').text(hoja?.titulo || 'Sin título');
      const platos = utiles.platosPorHoja(estado.hojaActiva).sort((a, b) => {
        const ao = +a.orden || 0, bo = +b.orden || 0;
        return ao !== bo ? ao - bo : String(a.titulo || '').localeCompare(b.titulo || '');
      });
      if (!platos.length) return $lienzo.html('<div class="empty-state"><i class="fas fa-utensils"></i><p>No hay platos</p></div>');
      $lienzo.html(platos.map(p => {
        const clase = [
          estado.platoActivo === p.id ? 'active' : '',
          estado.sucios.cartas.has(p.id) ? 'dirty' : '',
          p.id.startsWith('temp_') ? 'temp-item' : '',
          p.estado === 'activo' ? 'disponible' : 'no-disponible'
        ].filter(Boolean).join(' ');
        return `<div class="plato-item ${clase}" data-id="${p.id}">
          <div class="plato-content">
            <div class="plato-orden">${p.orden || 0}</div>
            <div class="plato-info">
              <h4>${p.titulo || 'Sin título'} ${p.id.startsWith('temp_') ? '(nuevo)' : ''}</h4>
              <p>${(p.descripcion || '').slice(0, 60)}${(p.descripcion || '').length > 60 ? '...' : ''}</p>
              <span class="plato-precio">S/ ${utiles.moneda(p.precio)}</span>
            </div>
            <div class="plato-estado"><i class="fas ${p.estado === 'activo' ? 'fa-check-circle' : 'fa-times-circle'}"></i></div>
          </div>
        </div>`;
      }).join(''));
    },
    editor: () => {
      const p = estado.platoActivo ? estado.cartas.find(x => x.id === estado.platoActivo) : null;
      if (!p) {
        $('#platoSeleccionado').text('Selecciona un plato para editar');
        $('#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden').val('');
        $('#editorEstado').val('activo'); return;
      }
      $('#platoSeleccionado').text(`Hoja ${p.hoja} - ${p.titulo || 'Sin título'}${p.id.startsWith('temp_') ? ' (nuevo)' : ''}`);
      $('#editorTitulo').val(p.titulo || '');
      $('#editorDescripcion').val(p.descripcion || '');
      $('#editorPrecio').val(p.precio == null ? '' : p.precio);
      $('#editorOrden').val(p.orden || 0);
      $('#editorEstado').val(p.estado || 'activo');
    },
    previa: () => {
      const h = utiles.hojaPorNumero(estado.hojaActiva) || {};
      const ico = utiles.metaIcono(h.icono);
      const activos = utiles.platosPorHoja(estado.hojaActiva).filter(p => p.estado === 'activo')
        .sort((a, b) => (a.orden || 0) - (b.orden || 0));
      $('#previewContainer').html(`
        <div class="mobile-preview">
          <div class="preview-header-section">
            ${h.imagen ? `<img src="${h.imagen}" alt="imagen" class="preview-image" onerror="this.remove()">` : `<div class="no-image"><i class="fas fa-image"></i><p>Sin imagen</p></div>`}
          </div>
          <div class="preview-content">
            <h2 class="preview-title"><i class="fas ${ico.valor}"></i> ${h.titulo || 'Sin título'}</h2>
            <p class="nota_preview">${h.nota || ''}</p>
            <div class="preview-items">
              ${activos.length ? activos.map(p => `
                <div class="preview-item">
                  <div class="preview-header">
                    <h3>${p.titulo || 'Sin título'}</h3>
                    <span class="preview-price">S/ ${utiles.moneda(p.precio)}</span>
                  </div>
                  <p class="preview-description">${p.descripcion || ''}</p>
                  <div class="preview-divider"></div>
                </div>`).join('') : '<p class="no-items">No hay platos disponibles</p>'}
            </div>
          </div>
        </div>`);
    },
    todo() { this.hojas(); this.platos(); this.editor(); this.previa(); }
  };

  async function recargarRemoto() {
    try {
      showLoading(true);
      const { hojas, cartas } = await cargarHojasCartas({ forzar: true });
      estado.hojas = hojas;
      estado.cartas = cartas;
      pintar.todo();
      Notificacion('Datos cargados', 'success', 1500);
    } catch (e) {
      console.error(e); Notificacion('Error al cargar', 'error');
    } finally { showLoading(false); }
  }

  function vincularEventos() {
    $(document).on('click', '.hoja-item', function (e) {
      if ($(e.target).closest('.hoja-actions,button').length) return;
      const num = +$(this).data('hoja');
      if (num !== estado.hojaActiva) { estado.hojaActiva = num; estado.platoActivo = null; pintar.platos(); pintar.editor(); pintar.previa(); }
      $('.hoja-item').removeClass('active'); $(this).addClass('active');
    });

    $(document).on('click', '.plato-item', function () {
      const pid = $(this).data('id');
      if (pid !== estado.platoActivo) { estado.platoActivo = pid; pintar.editor(); }
      $('.plato-item').removeClass('active'); $(this).addClass('active');
    });

    $(document).on('input', '.hoja-titulo,.hoja-imagen,.hoja-nota', function () {
      const hid = $(this).closest('.hoja-item').data('id');
      estado.sucios.hojas.add(hid);
      $(this).closest('.hoja-item').addClass('dirty');
    });

    $(document).on('input change', '#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden,#editorEstado', () => {
      if (estado.platoActivo) {
        estado.sucios.cartas.add(estado.platoActivo);
        $(`.plato-item[data-id="${estado.platoActivo}"]`).addClass('dirty');
      }
    });

    $(document).on('click', '.bt_add_hoja', () => {
      const num = Math.max(0, ...estado.hojas.map(h => h.numero || 0)) + 1;
      const hoj = { id: utiles.idsSiguientes.temp(), numero: num, titulo: `Nueva Hoja ${num}`, icono: 'fa-utensils', imagen: '', nota: '', estado: 'activo', orden: num };
      estado.hojas.push(hoj); estado.sucios.hojas.add(hoj.id); estado.hojaActiva = num; pintar.todo();
      Notificacion('Hoja agregada', 'info', 1500);
    });

    $(document).on('click', '.bt_add_plato', () => {
      if (!utiles.hojaPorNumero(estado.hojaActiva)) return Notificacion('Crea una hoja', 'warning');
      const ord = Math.max(0, ...utiles.platosPorHoja(estado.hojaActiva).map(p => +p.orden || 0)) + 1;
      const pla = { id: utiles.idsSiguientes.temp(), titulo: 'NUEVO PLATO', descripcion: '', precio: null, estado: 'activo', hoja: estado.hojaActiva, orden: ord };
      estado.cartas.push(pla); estado.sucios.cartas.add(pla.id); estado.platoActivo = pla.id; pintar.todo();
      Notificacion('Plato agregado', 'info', 1500);
    });

    $(document).on('click', '.bt_guardar_hoja', async function () {
      const hid = $(this).closest('.hoja-item').data('id');
      try {
        utiles.spinner($(this), true);
        const idx = estado.hojas.findIndex(h => h.id === hid);
        if (idx < 0) return;
        const $el = $(`.hoja-item[data-id="${hid}"]`);
        const titulo = $el.find('.hoja-titulo').val().trim();
        if (!titulo) return Notificacion('Título requerido', 'warning');
        const imagen = $el.find('.hoja-imagen').val().trim();
        const nota = $el.find('.hoja-nota').val().trim();
        const hoja = estado.hojas[idx];
        const esTemp = hid.startsWith('temp_');
        const idReal = esTemp ? utiles.idsSiguientes.hoja() : hid;
        const datos = {
          numero: hoja.numero,
          titulo, imagen, nota,
          icono: hoja.icono || 'fa-utensils',
          estado: hoja.estado === 'desactivo' ? 'desactivo' : 'activo',
          orden: hoja.orden || hoja.numero,
          creacion: esTemp ? selloServidor() : hoja.creacion,
          actualizacion: selloServidor(),
          poremail: auth.currentUser?.email || 'sin-email',
          porusuario: auth.currentUser?.displayName || 'sin-usuario'
        };
        await guardarHojaDB(idReal, datos);
        if (esTemp) estado.hojas[idx] = { id: idReal, ...datos }; else Object.assign(estado.hojas[idx], datos);
        estado.sucios.hojas.delete(hid);
        savels(nombresDb.cache.hojas, estado.hojas, nombresDb.horas.hojas);
        pintar.todo(); Mensaje('Hoja guardada');
      } catch (e) { console.error(e); Notificacion('Error', 'error'); }
      finally { utiles.spinner($(this), false); }
    });

    $(document).on('click', '.bt_guardar_plato', async function () {
      if (!estado.platoActivo) return Notificacion('Selecciona un plato', 'warning');
      try {
        utiles.spinner($(this), true);
        const p = estado.cartas.find(x => x.id === estado.platoActivo);
        if (!p) return;
        const campos = {
          titulo: $('#editorTitulo').val().trim(),
          descripcion: $('#editorDescripcion').val().trim(),
          precio: ($('#editorPrecio').val() === '' ? null : Number($('#editorPrecio').val())),
          orden: Number($('#editorOrden').val()) || 0,
          estado: $('#editorEstado').val()
        };
        if (!campos.titulo) return Notificacion('Título requerido', 'warning');
        if (campos.precio != null && (isNaN(campos.precio) || campos.precio < 0)) return Notificacion('Precio inválido', 'warning');
        const esTemp = p.id.startsWith('temp_');
        const idReal = esTemp ? utiles.idsSiguientes.carta() : p.id;
        const datos = { ...campos, hoja: p.hoja, creacion: esTemp ? selloServidor() : p.creacion, actualizacion: selloServidor() };
        await guardarPlatoDB(idReal, datos);
        if (esTemp) {
          const idx = estado.cartas.findIndex(x => x.id === p.id);
          estado.cartas[idx] = { id: idReal, ...datos };
          estado.platoActivo = idReal;
        } else {
          Object.assign(p, campos);
        }
        estado.sucios.cartas.delete(p.id);
        savels(nombresDb.cache.cartas, estado.cartas, nombresDb.horas.cartas);
        pintar.todo(); Mensaje('Plato guardado');
      } catch (e) { console.error(e); Notificacion('Error', 'error'); }
      finally { utiles.spinner($(this), false); }
    });

    $(document).on('click', '.bt_eliminar_plato', async function () {
      if (!estado.platoActivo) return;
      const p = estado.cartas.find(x => x.id === estado.platoActivo);
      if (!confirm(`¿Eliminar "${p?.titulo || 'Plato'}"?`)) return;
      try {
        utiles.spinner($(this), true, 'Eliminando...');
        if (!estado.platoActivo.startsWith('temp_')) await eliminarPlatoDB(estado.platoActivo);
        estado.cartas = estado.cartas.filter(x => x.id !== estado.platoActivo);
        estado.sucios.cartas.delete(estado.platoActivo);
        estado.platoActivo = null;
        savels(nombresDb.cache.cartas, estado.cartas, nombresDb.horas.cartas);
        pintar.todo(); Mensaje('Plato eliminado');
      } catch (e) { console.error(e); Notificacion('Error', 'error'); }
      finally { utiles.spinner($(this), false); }
    });

    $(document).on('click', '.bt_eliminar_hoja', async function () {
      const hid = $(this).closest('.hoja-item').data('id');
      const ho = estado.hojas.find(x => x.id === hid); if (!ho) return;
      const platos = utiles.platosPorHoja(ho.numero);
      if (!confirm(`¿Eliminar hoja "${ho.titulo}"${platos.length ? ` y ${platos.length} platos` : ''}?`)) return;
      try {
        utiles.spinner($(this), true, 'Eliminando...');
        if (!hid.startsWith('temp_')) {
          await eliminarHojaConPlatosDB(hid, platos.filter(p => !p.id.startsWith('temp_')).map(p => p.id));
        }
        estado.hojas = estado.hojas.filter(x => x.id !== hid);
        estado.cartas = estado.cartas.filter(c => c.hoja !== ho.numero);
        estado.sucios.hojas.delete(hid);
        if (estado.hojaActiva === ho.numero) estado.hojaActiva = estado.hojas[0]?.numero || 1;
        estado.platoActivo = null;
        savels(nombresDb.cache.hojas, estado.hojas, nombresDb.horas.hojas);
        savels(nombresDb.cache.cartas, estado.cartas, nombresDb.horas.cartas);
        pintar.todo(); Mensaje('Hoja eliminada');
      } catch (e) { console.error(e); Notificacion('Error', 'error'); }
      finally { utiles.spinner($(this), false); }
    });

    $(document).on('click', '.bt_recargar', recargarRemoto);

    // Alternar icono
    $(document).on('click', '.hoja-icono-toggle', function (e) {
      e.stopPropagation();
      const hid = $(this).closest('.hoja-item').data('id');
      const h = estado.hojas.find(x => x.id === hid); if (!h) return;
      h.icono = utiles.rotarIcono(h.icono);
      estado.sucios.hojas.add(hid);
      pintar.hojas(); pintar.previa();
    });

    // Alternar estado
    $(document).on('click', '.hoja-estado-toggle', function (e) {
      e.stopPropagation();
      const hid = $(this).closest('.hoja-item').data('id');
      const h = estado.hojas.find(x => x.id === hid); if (!h) return;
      h.estado = h.estado === 'activo' ? 'desactivo' : 'activo';
      estado.sucios.hojas.add(hid);
      pintar.hojas(); pintar.previa();
    });

    // Persistencia UX (widev)
    gosaves('.hoja-titulo,.hoja-imagen,.hoja-nota', 'data-id', $el => $el.val());
    gosaves('#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden,#editorEstado', 'id', $el => $el.val());
    getsaves('.hoja-titulo,.hoja-imagen,.hoja-nota', 'data-id', ($el, v) => $el.val(v));
    getsaves('#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden,#editorEstado', 'id', ($el, v) => $el.val(v));

    // Actualizar orden
    $(document).on('click', '.subir_hoja', function (e) {
      e.stopPropagation();
      const hid = $(this).closest('.hoja-item').data('id');
      const h = estado.hojas.find(x => x.id === hid);
      if (!h || h.orden <= 1) return;
      
      // Buscar hoja con orden anterior
      const anterior = estado.hojas.find(x => x.orden === h.orden - 1);
      if (anterior) {
        anterior.orden = h.orden;
        estado.sucios.hojas.add(anterior.id);
      }
      h.orden--;
      estado.sucios.hojas.add(hid);
      pintar.hojas();
    });

    $(document).on('click', '.bajar_hoja', function (e) {
      e.stopPropagation();
      const hid = $(this).closest('.hoja-item').data('id');
      const h = estado.hojas.find(x => x.id === hid);
      const maxOrden = Math.max(...estado.hojas.map(x => x.orden || 0));
      if (!h || h.orden >= maxOrden) return;
      
      // Buscar hoja con orden siguiente
      const siguiente = estado.hojas.find(x => x.orden === h.orden + 1);
      if (siguiente) {
        siguiente.orden = h.orden;
        estado.sucios.hojas.add(siguiente.id);
      }
      h.orden++;
      estado.sucios.hojas.add(hid);
      pintar.hojas();
    });
  }

  vincularEventos(); pintar.todo(); infoo();
  if (!estado.hojas.length || !estado.cartas.length) recargarRemoto();
}

// Guardar tema (BD separada)
$(document).on('click', '.tema', async function () {
  const miTema = $(this).data('tema');
  try {
    await guardarTemaDB(usuarioAuth.displayName, miTema);
    savels('wiTema', miTema, 72);
    Mensaje('Tema guardado <i class="fa-solid fa-circle-check"></i>');
  } catch (e) { console.error(e); }
});