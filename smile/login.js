import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from '../firebase/init.js';
import { setDoc, getDoc, getDocs, doc, collection, serverTimestamp, query, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { Mensaje, savels, getls, accederRol, showLoading, witip, fechaLocal, calcularEdad } from '../widev.js';

// =====================================================
// CONFIGURACIÓN
// =====================================================
const config = {
  colUsuarios: 'smiles',
  colConfig: 'configuracion',
  keyAuthIn: 'wiAuthIn',
  keyAuthRol: 'wiAuthRol',
  rolDefault: 'smile',
  temaDefault: 'Cielo',
  registroActivo: 'no' // ✅ Cambiar a 'no' para deshabilitar
};

let usuListo = false;
let emlListo = false;
let temaAsig = config.temaDefault;

// =====================================================
// VERIFICAR SESIÓN Y CONFIGURAR REGISTRO
// =====================================================
$(() => {
  const authIn = getls(config.keyAuthIn);
  const authRol = getls(config.keyAuthRol);
  
  if (authIn === 'wIn' && authRol) {
    accederRol(authRol);
    return;
  }

  // Mostrar/ocultar registro
  if (config.registroActivo === 'si') {
    $('.crearCuenta').show();
  }
});

// =====================================================
// NAVEGACIÓN ENTRE FORMS
// =====================================================
const cambiar = (ocultar, mostrar) => {
  $(ocultar).removeClass('active').addClass('hidden');
  $(mostrar).removeClass('hidden').addClass('active');
};

$('.olvidastePass').click(e => { e.preventDefault(); cambiar('.login-form', '.recovery-form'); });
$('.volverLogin').click(e => { e.preventDefault(); cambiar('.recovery-form, .registro-form', '.login-form'); });
$('.crearCuenta').click(e => { e.preventDefault(); cambiar('.login-form', '.registro-form'); });
$('.conCuenta').click(e => { e.preventDefault(); cambiar('.registro-form', '.login-form'); });

// =====================================================
// TOGGLE PASSWORD
// =====================================================
$('.toggle-password').click(function(e) {
  e.preventDefault();
  const $inp = $('#' + $(this).data('target'));
  $inp.attr('type', $inp.attr('type') === 'password' ? 'text' : 'password');
  $(this).find('i').toggleClass('fa-eye fa-eye-slash');
});

// =====================================================
// CONVERTIR A MINÚSCULAS
// =====================================================
$('#email, #recEmail, #regEmail, #regUsuario').on('input', function() {
  $(this).val($(this).val().toLowerCase().trim());
});

// =====================================================
// ENTER PARA BOTONES
// =====================================================
[['#password','#Login'], ['#regPassword1','#Registrar'], ['#recFechaNacimiento','#Recuperar']].forEach(([inp, btn]) => {
  $(inp).on('keyup', e => e.key === 'Enter' && $(btn).click());
});

// =====================================================
// VALIDACIONES REGISTRO
// =====================================================
const reglas = {
  regEmail: [v => v.toLowerCase(), v => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v) || 'Correo inválido'],
  regUsuario: [v => v.toLowerCase().replace(/[^a-z0-9_]/g, ''), v => v.length >= 3 || 'Usuario 3-20 caracteres'],
  regNombre: [v => v.trim(), v => v.length > 0 || 'Ingrese nombre'],
  regApellidos: [v => v.trim(), v => v.length > 0 || 'Ingrese apellidos'],
  regGenero: [v => v, v => ['femenino','masculino'].includes(v) || 'Selecciona género'],
  regFechaNacimiento: [v => v, v => calcularEdad(v) >= 13 || 'Mayor de 13 años requerido'],
  regPassword: [v => v, v => v.length >= 6 || 'Mínimo 6 caracteres'],
  regPassword1: [v => v, v => v === $('#regPassword').val() || 'Contraseñas no coinciden']
};

$.each(reglas, (idCampo, [trans, validar]) => {
  $(`#${idCampo}`).on('blur change', function() {
    const valor = trans($(this).val());
    $(this).val(valor);
    const resultado = validar(valor);
    if (resultado !== true) witip(this, resultado, 'error');
  });
});

// Validar usuario disponible
$('#regUsuario').on('blur', async function() {
  const usuario = $(this).val();
  if (usuario.length >= 3) {
    try {
      const snap = await getDoc(doc(db, config.colUsuarios, usuario));
      usuListo = !snap.exists();
      witip(this, `Usuario ${snap.exists() ? 'no disponible' : 'disponible ✅'}`, snap.exists() ? 'error' : 'success', 'top', 7000);
    } catch(e) { console.error(e); }
  }
});

// Validar email disponible
$('#regEmail').on('blur', async function() {
  const email = $(this).val();
  if (email.length >= 3) {
    try {
      const snap = await getDocs(query(collection(db, config.colUsuarios), where('email', '==', email)));
      emlListo = snap.empty;
      witip(this, `Email ${snap.empty ? 'disponible ✅' : 'no disponible'}`, snap.empty ? 'success' : 'error', 'top', 7000);
    } catch(e) { console.error(e); }
  }
});

// =====================================================
// REGISTRO
// =====================================================
$('#Registrar').click(async function() {
  const validaciones = [
    [usuListo, $('#regUsuario')[0], 'Usuario no disponible'],
    [emlListo, $('#regEmail')[0], 'Email no disponible'],
    ...Object.entries(reglas).map(([idCampo, [trans, validar]]) => {
      const campo = $(`#${idCampo}`);
      const valor = trans(campo.val());
      const resultado = validar(valor);
      return [resultado === true, campo[0], resultado !== true ? resultado : ''];
    })
  ];

  for (const [valido, campo, mensaje] of validaciones) {
    if (!valido && mensaje) {
      witip(campo, mensaje, 'error');
      campo.focus();
      return;
    }
  }

  showLoading(true);

  try {
    const [email, usuario, nombre, apellidos, genero, password] = 
      ['regEmail', 'regUsuario', 'regNombre', 'regApellidos', 'regGenero', 'regPassword']
        .map(id => $('#' + id).val().trim());

    // Asignar tema por género
    const temas = {
      masculino: ['Cielo|#0EBEFF', 'Paz|#29C72E'],
      femenino: ['Dulce|#FF5C69', 'Mora|#7000FF']
    };
    const pool = temas[genero] || temas.masculino;
    temaAsig = pool[Math.floor(Math.random() * pool.length)];

    // Registro en Auth
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await Promise.all([
      updateProfile(user, { displayName: usuario }),
      sendEmailVerification(user)
    ]);

    // Firestore - Usuario
    await setDoc(doc(db, config.colUsuarios, usuario), {
      usuario, email, nombre, apellidos, genero,
      rol: config.rolDefault,
      fechaNacimiento: fechaLocal($('#regFechaNacimiento').val()),
      creacion: serverTimestamp(),
      participa: 'si',
      imagen: '',
      descripcion: '',
      uid: user.uid
    });

    // Firestore - Configuración
    await setDoc(doc(db, config.colConfig, usuario), {
      usuario, email,
      tema: temaAsig,
      actualizacion: serverTimestamp()
    });

    Mensaje('Registro completado! ✅');

  } catch(e) {
    const errs = {
      'auth/email-already-in-use': 'Email ya registrado',
      'auth/weak-password': 'Contraseña muy débil'
    };
    Mensaje(errs[e.code] || e.message, 'error');
    console.error(e);
  } finally {
    showLoading(false);
    savels(config.keyAuthIn, 'wIn', 24);
    savels(config.keyAuthRol, config.rolDefault, 24);
    savels('wiTema', temaAsig, 72);
    setTimeout(() => accederRol(config.rolDefault), 3000);
  }
});

// =====================================================
// LOGIN
// =====================================================
$('#Login').click(async function() {
  showLoading(true);

  try {
    const [usuario, password] = ['#email', '#password'].map(id => $(id).val().trim());
    if (!usuario || !password) throw new Error('Completa todos los campos');

    let email = usuario;
    let busq = null;
    let tema = null;

    if (!usuario.includes('@')) {
      busq = await getDoc(doc(db, config.colUsuarios, usuario));
      if (!busq.exists()) throw new Error('Usuario no encontrado');
      email = busq.data().email;
      
      try {
        const cfgSnap = await getDoc(doc(db, config.colConfig, usuario));
        tema = cfgSnap.data()?.tema;
      } catch(e) {}
    }

    await signInWithEmailAndPassword(auth, email, password);
    const rol = busq?.data()?.rol || config.rolDefault;

    savels(config.keyAuthIn, 'wIn', 24);
    savels(config.keyAuthRol, rol, 24);
    if (tema) savels('wiTema', tema, 72);
    
    Mensaje('¡Bienvenido! ✅');
    setTimeout(() => accederRol(rol), 1500);

  } catch(e) {
    const errs = {
      'auth/invalid-credential': 'Contraseña incorrecta',
      'auth/invalid-email': 'Email no registrado',
      'auth/user-not-found': 'Usuario no encontrado'
    };
    Mensaje(errs[e.code] || e.message, 'error');
    console.error(e);
  } finally {
    showLoading(false);
  }
});

// =====================================================
// RECUPERAR CONTRASEÑA
// =====================================================
$('#Recuperar').click(async function() {
  showLoading(true);

  try {
    const [campo, fecha] = ['#recEmail', '#recFechaNacimiento'].map(id => $(id).val().trim());
    if (!campo || !fecha) throw new Error('Completa todos los campos');

    if (calcularEdad(fecha) < 13) throw new Error('Mayor de 13 años requerido');

    const email = campo.includes('@') ? campo : await (async () => {
      const busq = await getDoc(doc(db, config.colUsuarios, campo));
      return busq.exists() ? busq.data().email : null;
    })();

    if (!email) throw new Error('Usuario no registrado');

    const qry = await getDocs(query(collection(db, config.colUsuarios), where('email', '==', email)));
    if (qry.empty) throw new Error('Email incorrecto');

    const fechaBD = qry.docs[0].data().fechaNacimiento.toDate().toISOString().split('T')[0];
    if (fechaBD !== fecha) throw new Error('Fecha de nacimiento incorrecta');

    await sendPasswordResetEmail(auth, email);
    Mensaje('Correo enviado. Revisa tu bandeja o spam ✅', 'success');
    setTimeout(() => cambiar('.recovery-form', '.login-form'), 2000);

  } catch(e) {
    Mensaje(e.message, 'error');
    console.error(e);
  } finally {
    showLoading(false);
  }
});