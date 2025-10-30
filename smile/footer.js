import $ from 'jquery';
import { Mensaje, Notificacion } from '../widev.js';

// =====================================================
// CONFIGURACIÓN FOOTER
// =====================================================
const configFooter = {
  whatsapp: '51992472706',
  anoActual: new Date().getFullYear(),
  urlPortfolio: 'https://wtaype.github.io/',
  imagenLibro: './libroReclamos.png'
};

// Extender desde window.smile si existe
if (window.smile?.whatsReclamos) {
  configFooter.whatsapp = window.smile.whatsReclamos;
}

// =====================================================
// TEMPLATES HTML
// =====================================================
const htmlModales = () => `
  <div id="foo-about" class="foomodal" aria-hidden="true" role="dialog">
    <div class="foo-dialog">
      <button class="foo-close" aria-label="Cerrar">&times;</button>
      <div class="foo-head">
        <div class="foo-badge"><i class="fas fa-info-circle"></i></div>
        <h3>Acerca del app</h3>
      </div>
      <p>Cartas Hawka muestra tu menú optimizado con caché local y diseño responsive.</p>
      <ul class="foo-list">
        <li>Carga rápida con caché inteligente</li>
        <li>Multi-idioma (Español/English)</li>
        <li>Diseño responsive y accesible</li>
        <li>Actualización automática de contenido</li>
      </ul>
      <div class="foo-actions">
        <button class="foo-btn foo-btn--primary foo-ok">Entendido</button>
      </div>
    </div>
  </div>

  <div id="foo-priv" class="foomodal" aria-hidden="true" role="dialog">
    <div class="foo-dialog">
      <button class="foo-close" aria-label="Cerrar">&times;</button>
      <div class="foo-head">
        <div class="foo-badge"><i class="fas fa-user-shield"></i></div>
        <h3>Políticas de privacidad</h3>
      </div>
      <p>Respetamos tu privacidad. No recopilamos datos personales sin tu consentimiento.</p>
      <ul class="foo-list">
        <li>Sin cookies de rastreo</li>
        <li>Caché local para rendimiento</li>
        <li>Carga lazy de imágenes</li>
        <li>Cumplimiento GDPR</li>
      </ul>
      <div class="foo-actions">
        <button class="foo-btn foo-btn--primary foo-ok">Entendido</button>
      </div>
    </div>
  </div>

  <div id="foo-recl" class="foomodal" aria-hidden="true" role="dialog">
    <div class="foo-dialog">
      <button class="foo-close" aria-label="Cerrar">&times;</button>
      <div class="foo-head">
        <img src="${configFooter.imagenLibro}" alt="Libro" class="foo-hero">
        <h3>Libro de reclamaciones</h3>
      </div>
      <form id="reclamosForm" class="foo-form" novalidate>
        <div class="foo-grid">
          <label>
            Nombres y apellidos
            <input name="nombres" type="text" required placeholder="Tu nombre completo">
          </label>
          <label>
            Email
            <input name="email" type="email" required placeholder="correo@dominio.com">
          </label>
          <label>
            Teléfono
            <input name="telefono" type="tel" placeholder="+51 999 999 999">
          </label>
          <label>
            N° pedido
            <input name="pedido" type="text" placeholder="Ej: A123">
          </label>
          <label class="foo-span2">
            Detalle del reclamo
            <textarea name="detalle" required rows="4" placeholder="Describe tu reclamo de forma clara..."></textarea>
          </label>
          <label class="foo-span2 foo-chk">
            <input type="checkbox" name="consent" required>
            <span>Acepto el uso de mis datos para procesar este reclamo</span>
          </label>
        </div>
        <div class="foo-actions">
          <button type="button" class="foo-btn foo-btn--ghost foo-cancel">Cancelar</button>
          <button type="submit" class="foo-btn foo-btn--primary">Enviar Reclamo</button>
        </div>
      </form>
    </div>
  </div>`;

const htmlFooter = () => `
  <footer class="foo">
    <nav class="foo-links">
      <button class="lk about" data-foomodal="#foo-about">
        <i class="fas fa-info-circle"></i> Acerca del app
      </button>
      <button class="lk priv" data-foomodal="#foo-priv">
        <i class="fas fa-shield-alt"></i> Políticas de privacidad
      </button>
      <button class="lk recl" data-foomodal="#foo-recl">
        <img src="${configFooter.imagenLibro}" alt="Libro" style="width:20px;height:20px;vertical-align:middle;margin-right:5px;">
        Libro de reclamaciones
      </button>
    </nav>
    <div class="brand">
      Creado con <i class="fa fa-heart"></i> por
      <a class="lkme" href="${configFooter.urlPortfolio}" target="_blank" rel="noopener">@wilder.taype</a>
      | <span class="Login" style="cursor:pointer;text-decoration:underline;">Login</span> 
      | <span class="wty">${configFooter.anoActual}</span>
    </div>
  </footer>`;

// =====================================================
// FUNCIONES MODALES
// =====================================================
const abrirModal = idModal => {
  $(idModal).addClass('show').attr('aria-hidden', 'false');
  $('body').css('overflow', 'hidden');
};

const cerrarModal = $modal => {
  $modal.removeClass('show').attr('aria-hidden', 'true');
  if (!$('.foomodal.show').length) {
    $('body').css('overflow', '');
  }
};

const enviarReclamo = datos => {
  const mensaje = `*📋 Reclamo Hawka*
  
👤 *Nombre:* ${datos.nombres}
📧 *Email:* ${datos.email}
📱 *Teléfono:* ${datos.telefono || 'No proporcionado'}
🎫 *N° Pedido:* ${datos.pedido || 'No proporcionado'}

📝 *Detalle:*
${datos.detalle}

---
_Enviado desde Carta Hawka_`;

  const urlWhats = `https://wa.me/${configFooter.whatsapp}?text=${encodeURIComponent(mensaje)}`;
  window.open(urlWhats, '_blank', 'noopener,noreferrer');
  Notificacion('Abriendo WhatsApp...', 'success', 2200);
};

// =====================================================
// EVENTOS FOOTER
// =====================================================
const iniciarEventosFooter = () => {
  $(document)
    // Abrir modales
    .on('click', '[data-foomodal]', function(e) {
      e.preventDefault();
      abrirModal($(this).data('foomodal'));
    })
    
    // Cerrar modales
    .on('click', '.foo-close, .foomodal .foo-ok, .foomodal .foo-cancel', function(e) {
      e.preventDefault();
      cerrarModal($(this).closest('.foomodal'));
    })
    
    // Cerrar al hacer click fuera
    .on('click', '.foomodal', function(e) {
      if (e.target === this) {
        cerrarModal($(this));
      }
    })
    
    // Cerrar con ESC
    .on('keydown', evento => {
      if (evento.key === 'Escape' && $('.foomodal.show').length) {
        cerrarModal($('.foomodal.show'));
      }
    })
    
    // Enviar formulario reclamos
    .on('submit', '#reclamosForm', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const datos = Object.fromEntries(formData.entries());
      
      // Validaciones
      if (!datos.nombres || !datos.email || !datos.detalle) {
        return Mensaje('Por favor completa los campos obligatorios', 'error');
      }
      
      if (!formData.get('consent')) {
        return Mensaje('Debes aceptar el uso de tus datos', 'error');
      }
      
      // Validar email
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!emailRegex.test(datos.email)) {
        return Mensaje('Email inválido', 'error');
      }
      
      // Enviar
      enviarReclamo(datos);
      this.reset();
      cerrarModal($('#foo-recl'));
    });
};

// =====================================================
// REDIRECCIÓN LOGIN
// =====================================================
const iniciarRedireccionLogin = () => {
  $(document).on('click', '.Login', function(e) {
    e.preventDefault();
    window.location.href = './login.html';
  });
};

// =====================================================
// INICIALIZACIÓN
// =====================================================
export function iniciarFooter() {
  // Agregar HTML al DOM
  $('body').append(htmlModales());
  $('#menu-app').append(htmlFooter());
  
  // Iniciar eventos
  iniciarEventosFooter();
  iniciarRedireccionLogin();
  
  console.log('✅ Footer inicializado correctamente');
}

// Auto-inicializar cuando el DOM esté listo
$(() => iniciarFooter());