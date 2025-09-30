// ...existing code...
// (Place this script in ./librorecl.js and ensure it's referenced in the HTML)
$(function () {
  let lang = localStorage.getItem('hawka-lang') || 'es';
  let section = 1;
  const total = 4;
  const waNumber = '51992472706';

  const L = {
    es: {
      req: 'Este campo es obligatorio',
      email: 'Email inválido',
      doc: 'Debe ser un DNI (8 dígitos) o CE (9-20 caracteres)',
      canal: 'Seleccione un canal de compra',
      tipo: 'Seleccione el tipo de reclamo',
      costo: 'Ingrese un costo válido',
      terms: 'Debe aceptar los términos y condiciones',
      sent: '¡Reclamo enviado exitosamente!',
      wTitle: '📋 LIBRO DE RECLAMACIONES - HAWKA',
      wNum: '🆔 Número de Reclamo:',
      wDate: '📅 Fecha:',
      wData: '👤 DATOS DEL RECLAMANTE:',
      wName: 'Nombre:',
      wDoc: 'Documento:',
      wEmail: 'Email:',
      wPhone: 'Teléfono:',
      wProd: '🛍️ PRODUCTO/SERVICIO:',
      wChan: 'Canal:',
      wProd2: 'Producto:',
      wCost: 'Costo:',
      wComp: '📝 RECLAMO:',
      wType: 'Tipo:',
      wDet: 'Detalle:',
      wReq: 'Solicitud:',
      wFoot: '⏰ Respuesta en 15 días hábiles máximo'
    },
    en: {
      req: 'This field is required',
      email: 'Invalid email',
      doc: 'Must be a DNI (8 digits) or CE (9-20 characters)',
      canal: 'Select a purchase channel',
      tipo: 'Select the type of complaint',
      costo: 'Enter a valid cost',
      terms: 'You must accept the terms and conditions',
      sent: 'Complaint sent successfully!',
      wTitle: '📋 COMPLAINTS BOOK - HAWKA',
      wNum: '🆔 Complaint Number:',
      wDate: '📅 Date:',
      wData: '👤 COMPLAINANT DATA:',
      wName: 'Name:',
      wDoc: 'Document:',
      wEmail: 'Email:',
      wPhone: 'Phone:',
      wProd: '🛍️ PRODUCT/SERVICE:',
      wChan: 'Channel:',
      wProd2: 'Product:',
      wCost: 'Cost:',
      wComp: '📝 COMPLAINT:',
      wType: 'Type:',
      wDet: 'Details:',
      wReq: 'Request:',
      wFoot: '⏰ Response within 15 business days maximum'
    }
  };

  // Init
  applyLang(lang);
  setToday();
  bindLangUI();
  bindNav();
  bindSteps();
  bindRealtimeValidation();
  updateUI();

  // Language
  function applyLang(l) {
    lang = l;
    $('[data-es],[data-en]').each(function () {
      if ($(this).is('input,textarea')) return;
      const txt = $(this).data(l);
      if (typeof txt !== 'undefined') $(this).text(txt);
    });
    $('[data-es-placeholder],[data-en-placeholder]').each(function () {
      const ph = $(this).data(l + '-placeholder');
      if (typeof ph !== 'undefined') $(this).attr('placeholder', ph);
    });
    if (l === 'es') {
      $('#currentLang').text('Español');
      $('#currentFlag').attr('src',
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c41e3a' d='M0 0h512v341.3H0z'/%3E%3Cpath fill='%23ffc400' d='M0 170.7h512v170.6H0z'/%3E%3C/svg%3E"
      ).attr('alt','Español');
    } else {
      $('#currentLang').text('English');
      $('#currentFlag').attr('src',
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23b22234' d='M0 0h512v512H0z'/%3E%3Cpath stroke='%23fff' stroke-width='40' d='M0 58h512M0 137h512M0 216h512M0 295h512M0 374h512M0 453h512'/%3E%3Cpath fill='%233c3b6e' d='M0 0h256v275H0z'/%3E%3C/svg%3E"
      ).attr('alt','English');
    }
    localStorage.setItem('hawka-lang', l);
  }
  function bindLangUI() {
    $('#langTrigger').on('click', function (e) {
      e.stopPropagation();
      $('#langDropdown').toggleClass('show');
      $(this).toggleClass('active');
    });
    $('.lang-option').on('click', function () {
      const l = $(this).data('lang');
      if (l && l !== lang) applyLang(l);
      $('#langDropdown').removeClass('show'); $('#langTrigger').removeClass('active');
    });
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.language-selector').length) {
        $('#langDropdown').removeClass('show'); $('#langTrigger').removeClass('active');
      }
    });
    const saved = localStorage.getItem('hawka-lang');
    if (saved && saved !== lang) applyLang(saved);
  }

  // Date
  function setToday() {
    const $d = $('#purchaseDate');
    if ($d.length && !$d.val()) {
      const d = new Date(), m = String(d.getMonth() + 1).padStart(2, '0'), day = String(d.getDate()).padStart(2, '0');
      $d.val(`${d.getFullYear()}-${m}-${day}`);
    }
  }

  // Nav
  function bindNav() {
    $('#nextBtn').on('click', function () { if (validate(section)) { section++; updateUI(); } });
    $('#prevBtn').on('click', function () { if (section > 1) { section--; updateUI(); } });
    $('#submitBtn').on('click', function () {
      if (!validate(section) || !validateUpTo(total)) return;
      const data = collect();
      const msg = buildMessage(data);
      const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
      $('#successMessage').addClass('show');
      $('.form-container').slideUp(300);
      window.open(url, '_blank');
    });
    $(document).on('keydown', function (e) {
      if (e.key === 'Enter' && !$(e.target).is('textarea')) { e.preventDefault(); $('#nextBtn:visible').click(); }
    });
  }
  function updateUI() {
    $('.form-section').removeClass('active').hide();
    $('#section' + section).addClass('active').fadeIn(150);
    $('#prevBtn').toggleClass('hidden', section === 1);
    $('#nextBtn').toggleClass('hidden', section === total);
    $('#submitBtn').toggleClass('hidden', section !== total);
    const pct = (section / total) * 100; $('#progressFill').css('width', pct + '%');
    $('.step').each(function () {
      const s = +$(this).data('step');
      $(this).toggleClass('active', s === section).toggleClass('completed', s < section);
    });
    $('html,body').animate({ scrollTop: $('.main-container').offset()?.top || 0 }, 200);
  }
  function bindSteps() {
    $('.step').on('click', function () {
      const target = +$(this).data('step'); if (!target || target === section) return;
      if (target < section || validateUpTo(target - 1)) { section = target; updateUI(); }
      else { $(this).addClass('error'); setTimeout(() => $(this).removeClass('error'), 800); }
    });
  }

  // Realtime validation helpers
  function bindRealtimeValidation() {
    $('#fullName,#documentNumber,#productService,#complaintDetail,#consumerRequest').on('blur input', function(){ if ($(this).val().trim()) hideErr(this); });
    $('#email').on('input', function () {
      const v = $(this).val().trim(); if (!v) return hideErr(this);
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) hideErr(this); else showErr(this, L[lang].email);
    });
    $('#cost').on('input', function () {
      let v = $(this).val().replace(/[^\d.]/g,''); const p=v.split('.'); if (p[1]) v = p[0]+'.'+p[1].slice(0,2); $(this).val(v);
    });
    $('input[name="purchaseChannel"],input[name="complaintType"]').on('change', function(){ hideErr($(this).attr('name'), true); });
    $('#acceptTerms').on('change', function(){ this.checked ? hideErr(this,true) : showErr(this, L[lang].terms,true); });
  }

  // Validation
  function validate(sec) {
    clearErrors();
    if (sec === 1) {
      let ok = true;
      ok &= req('#fullName');
      ok &= req('#documentNumber') && docValid($('#documentNumber').val());
      const em = $('#email').val().trim(); if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { showErr('#email', L[lang].email); ok = false; }
      return !!ok;
    }
    if (sec === 2) {
      let ok = true;
      if ($('input[name="purchaseChannel"]:checked').length === 0) { showErr('purchaseChannel', L[lang].canal, true); ok = false; }
      ok &= req('#productService');
      const cost = $('#cost').val().trim(); if (cost && (isNaN(cost) || parseFloat(cost) < 0)) { showErr('#cost', L[lang].costo); ok = false; }
      return !!ok;
    }
    if (sec === 3) {
      let ok = true;
      if ($('input[name="complaintType"]:checked').length === 0) { showErr('complaintType', L[lang].tipo, true); ok = false; }
      ok &= req('#complaintDetail');
      ok &= req('#consumerRequest');
      return !!ok;
    }
    if (sec === 4) {
      if (!$('#acceptTerms').is(':checked')) { showErr('#acceptTerms', L[lang].terms, true); return false; }
      return true;
    }
    return true;
  }
  function validateUpTo(n) { for (let i = 1; i <= n; i++) if (!validate(i)) return false; return true; }
  function req(sel) { const v = $(sel).val().trim(); if (!v) { showErr(sel, L[lang].req); return false; } return true; }
  function docValid(v) {
    v = (v || '').trim();
    if (/^\d{8}$/.test(v)) return true;
    if (/^[a-zA-Z0-9]{9,20}$/.test(v)) return true;
    showErr('#documentNumber', L[lang].doc); return false;
  }
  function groupOf(elOrName, isGroup) {
    if (isGroup === true && typeof elOrName === 'string') {
      const $el = $(`input[name="${elOrName}"]`).first();
      return $el.closest('.form-group');
    }
    return $(elOrName).closest('.form-group');
  }
  function showErr(selOrName, msg, isGroup = false) {
    const $g = groupOf(selOrName, isGroup);
    let $err = $g.find('.error-message');
    if (!$err.length) {
      $err = $(`<div class="error-message"><i class="fas fa-exclamation-circle"></i><span>${msg}</span></div>`).appendTo($g);
    } else {
      if (msg) $err.find('span').text(msg);
    }
    $err.addClass('show');
  }
  function hideErr(selOrName, isGroup = false) { groupOf(selOrName, isGroup).find('.error-message').removeClass('show'); }
  function clearErrors() { $('.error-message').removeClass('show'); }

  // Collect and build message
  function collect() {
    const ch = $('input[name="purchaseChannel"]:checked');
    const chText = ch.length ? ch.closest('label').text().trim().replace(/\s+/g,' ') : '';
    const tp = $('input[name="complaintType"]:checked');
    const tpText = tp.length ? tp.closest('label').text().trim().replace(/\s+/g,' ') : '';
    return {
      fullName: $('#fullName').val().trim(),
      documentNumber: $('#documentNumber').val().trim(),
      email: $('#email').val().trim(),
      phone: $('#phone').val().trim(),
      address: $('#address').val().trim(),
      district: $('#district').val().trim(),
      province: $('#province').val().trim(),
      department: $('#department').val().trim(),
      purchaseChannelText: chText,
      productService: $('#productService').val().trim(),
      cost: $('#cost').val().trim(),
      purchaseDate: $('#purchaseDate').val(),
      complaintTypeText: tpText,
      complaintDetail: $('#complaintDetail').val().trim(),
      consumerRequest: $('#consumerRequest').val().trim()
    };
  }
  function buildMessage(d) {
    const T = L[lang];
    const id = genId();
    const dateStr = new Date().toLocaleDateString();
    return `${T.wTitle}

${T.wNum} ${id}
${T.wDate} ${dateStr}

${T.wData}
${T.wName} ${d.fullName || 'N/A'}
${T.wDoc} ${d.documentNumber || 'N/A'}
${T.wEmail} ${d.email || 'N/A'}
${T.wPhone} ${d.phone || 'N/A'}

${T.wProd}
${T.wChan} ${d.purchaseChannelText || 'N/A'}
${T.wProd2} ${d.productService || 'N/A'}
${T.wCost} ${d.cost ? 'S/ ' + d.cost : 'N/A'}

${T.wComp}
${T.wType} ${d.complaintTypeText || 'N/A'}
${T.wDet} ${d.complaintDetail || 'N/A'}
${T.wReq} ${d.consumerRequest || 'N/A'}

${T.wFoot}`.trim();
  }
  function genId() {
    const d = new Date();
    return `HWK-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}-${String(d.getTime()).slice(-5)}`;
  }
});