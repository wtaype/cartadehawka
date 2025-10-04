import{$ as a,w as $,f as sa,M as y,s as C,a as z,c as ia,r as Y,N as ta,g as U}from"./widev-Dx3a2SVK.js";/* empty css              */import{g as R,d as k,a as w,b as E,q as F,c as S,w as L,e as ra,f as T,u as la,s as na,h as D,i as J,j as ca,k as da,l as G}from"./init-PKQicA5Y.js";function pa(){const e=`
<div id="loginModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Login</h2>
      
      <form id="loginForm" class="dfd">
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" id="rememberMe">
          <label for="rememberMe">Recordar mis datos</label>
        </div>
        <button type="button" id="Login" class="inactivo btn-auth">Iniciar Sesión</button>
      </form>
      
      <div class="auth-links">
        <span class="olvidastePass">¿Olvidaste tu contraseña?</span>
                <!-- <span class="crearCuenta">Crear cuenta</span> -->
      </div>
    </div>
  </div>
</div>`,l=`
<div id="registroModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Crear Cuenta</h2>
      
      <form id="registroForm" class="dfd">
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-envelope"></i>
            <input type="email" id="regEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user"></i>
            <input type="text" id="regUsuario" placeholder="Crear usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regNombre" placeholder="Nombre" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regApellidos" placeholder="Apellidos" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-cake-candles"></i>
            <input type="date" id="regFechaNacimiento" placeholder="Fecha de nacimiento" class="datepicker" required>
          </div>
        </div>

        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-venus-mars"></i>
            <select id="regGenero" required>
              <option value="femenino" selected>Femenino</option>
              <option value="masculino">Masculino</option>
            </select>
          </div>
        </div>
        
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword1" placeholder="Confirmar Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <button type="button" id="Registrar" class="inactivo btn-auth">Registrarme</button>
      </form>
      
      <div class="auth-links">
        <span class="conCuenta">Ya tengo cuenta</span>
      </div>
    </div>
  </div>
</div>`,f=`
<div id="recuperarModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Restablecer Contraseña</h2>
      <form id="recuperarForm" class="dfd">
        <p class="auth-text">Ingresa tu Correo o usuario:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="recEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <p class="auth-text">Valida tu fecha de nacimiento:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-cake-candles"></i>
            <input type="date" id="recFechaNacimiento" placeholder="Fecha Nacimiento" class="datepicker" required>
          </div>
        </div>
        <button type="button" id="Recuperar" class="inactivo btn-auth">Restablecer Contraseña</button>
      </form>
      <div class="auth-links">
        <span class="volverLogin"><i class="fas fa-arrow-left"></i> Volver a Inicio</span>
      </div>
    </div>
  </div>
</div>`;a(function(){let d="smiles",i="configuracion",p=3e3,A="wiAuthIn",M="wiAuthRol",j="smile",O="Cielo";a(document).on("click",".Login",function(){n("loginModal")}),a(".registrar").click(()=>n("registroModal")),a(".crearCuenta").click(()=>{n("registroModal"),m("loginModal")}),a(".conCuenta").click(()=>{n("loginModal"),m("registroModal")}),a(".olvidastePass").click(()=>{n("recuperarModal"),m("loginModal")}),a(".volverLogin").click(()=>{n("loginModal"),m("recuperarModal")}),a(".togglePass").click(function(){const o=a(this).siblings("input"),t=o.attr("type")==="password";o.attr("type",t?"text":"password"),a(this).toggleClass("fa-eye fa-eye-slash")}),a('.miauth input:not([type="checkbox"])').on("click",function(){$(this,a(this).attr("placeholder"))}),a("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){a(this).val(a(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recFechaNacimiento","#Recuperar"],["#recEmail","#Recuperar"]].forEach(([o,t])=>{a(o).on("input keyup",r=>{a(t).removeClass("inactivo"),r.key==="Enter"&&(a(t).click(),a(t).addClass("inactivo"))})});const H={regEmail:[o=>o.toLowerCase(),o=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(o)||"Correo inválido"],regUsuario:[o=>o.toLowerCase().replace(/[^a-z0-9_]/g,""),o=>o.length>=3||"Usuario 3-20 caracteres"],regNombre:[o=>o.trim(),o=>o.length>0||"Ingrese nombre"],regApellidos:[o=>o.trim(),o=>o.length>0||"Ingrese apellidos"],regGenero:[o=>o,o=>["femenino","masculino"].includes(o)||"Selecciona género"],regFechaNacimiento:[o=>o,o=>ia(o)>=13||"Tienes que ser mayor de 13 años"],regPassword:[o=>o,o=>o.length>=6||"Mínimo 6 caracteres"],regPassword1:[o=>o,o=>o===a("#regPassword").val()||"Contraseñas no coinciden"]};a.each(H,function(o,[t,r]){a(`#${o}`).on("blur change",function(){const c=t(a(this).val());a(this).val(c);const h=r(c);h!==!0&&$(this,h,"error")})});let N=!1;a("#regUsuario").on("blur focus",async function(){const o=a(this).val();if(o.length>=3)try{const r=(await R(k(w,d,o))).exists();N=!r,$(this,`Usuario ${r?"no disponible":"disponible ✅"}`,r?"error":"success","top",7e3)}catch(t){console.error(t)}});let I=!1;a("#regEmail").on("blur focus",async function(){const o=a(this).val();if(o.length>=3)try{const r=!(await E(F(S(w,d),L("email","==",o)))).empty;I=!r,$(this,`Email ${r?"no disponible":"disponible ✅"}`,r?"error":"success","top",7e3)}catch(t){console.error(t)}}),a("#Registrar").click(async function(){const o=[[N,a("#regUsuario")[0],"Usuario no disponible"],[I,a("#regEmail")[0],"Email no disponible"],...Object.entries(H).map(([t,[r,c]])=>{const h=a(`#${t}`),v=r(h.val()),x=c(v);return[x===!0,h[0],x!==!0?x:""]})];for(const[t,r,c]of o)if(!t&&c&&($(r,c,"error"),r.focus(),!0))return;try{const t=["regEmail","regUsuario","regNombre","regApellidos","regGenero","regPassword"],[r,c,h,v,x,X]=t.map(ea=>a("#"+ea).val().trim()),q={masculino:["Cielo|#0EBEFF","Paz|#29C72E"],femenino:["Dulce|#FF5C69","Mora|#7000FF"]}[x]||["Paz|#29C72E","Cielo|#0EBEFF"];O=q[Math.floor(Math.random()*q.length)];const{user:P}=await ra(T,r,X);await Promise.all([la(P,{displayName:c}),na(P)]),console.log("Registro completo en Auth ✅"+Date());const aa=k(w,d,c);await D(aa,{usuario:c,email:r,nombre:h,apellidos:v,genero:x,rol:j,fechaNacimiento:sa(a("#regFechaNacimiento").val()),creacion:J(),uid:P.uid});const oa=k(w,i,c);await D(oa,{usuario:c,email:r,tema:O,actualizacion:J()}),console.log("Registro completo en Firestore ✅"+Date()),y("Registro completado! ✅")}catch(t){y({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[t.code]||t.message)||console.error(t)}finally{C(A,"wIn",24),C(M,j,24),C("wiTema",O,72),setTimeout(()=>z(j),p)}}),a("#Login").click(async function(){try{const[o,t]=["#email","#password"].map(x=>a(x).val());let r=o,c=null,h=null;if(!o.includes("@")){if(c=await R(k(w,d,o)),!c.exists())throw new Error("Usuario no encontrado");r=c.data().email;try{h=(await R(k(w,"configuracion",o))).data()?.tema}catch{}}await ca(T,r,t);const v=c?.data()?.rol||"smile";C(A,"wIn",24),C(M,v,24),h&&C("wiTema",h,72),z(v)}catch(o){y({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[o.code]||o.message,"error"),console.error(o)}finally{showLoading(!1)}}),a("#Recuperar").click(async function(){try{const[o,t]=["#recEmail","#recFechaNacimiento"].map(v=>a(v).val()),r=o.includes("@")?o:await(async()=>{const v=await R(k(w,d,o));return v.exists()?v.data().email:null})();if(!r)return y("Usuario no registrado","error");const c=await E(F(S(w,d),L("email","==",r)));if(c.empty)return y("Email incorrecto o no existe","error");if(c.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==t)return y("Fecha de nacimiento incorrecta","error");await da(T,r),y("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(o){console.error(o)}})}),a("body").append(e+l+f);function s(){const d=`
  .modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.input-icon input,.input-icon select{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus,.input-icon select:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}
  `,i=a(".wiAuthCss");i.length?i.text(d):a("head").append(`<style class="wiAuthCss">${d}</style>`)}const n=d=>{const i=a(`#${d}`).addClass("active");a("body").addClass("modal-open"),setTimeout(()=>{i.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},m=d=>{a(`#${d}`).removeClass("active"),a(".modal.active").length||a("body").removeClass("modal-open")},b=()=>{const d=()=>{a(".modal").removeClass("active"),a("body").removeClass("modal-open")};a(document).off(".authModals").on("click.authModals",".close-modal",d).on("click.authModals",".modal",i=>{a(i.target).is(".modal")&&d()}).on("keydown.authModals",i=>{i.key==="Escape"&&d()})};s(),b()}pa();const W=()=>a(".webz").each((e,l)=>a(l).find(".webx").height(a(l).find(".weby").outerHeight())),Z=(()=>{let e;return()=>(clearTimeout(e),e=setTimeout(W,120))})();a(Z);a(window).on("load resize orientationchange",Z);a(()=>{const e=a(".midw_v1"),l=e.find(".wilang-content");e.on("click",".wilang-trigger",f=>(f.stopPropagation(),l.toggleClass("show"),e.find(".fa-chevron-down").toggleClass("rotated"))).on("click",".wilang-item",function(){l.removeClass("show"),setTimeout(()=>location.href=a(this).data("url"),200)}),a(document).on("click",()=>(l.removeClass("show"),e.find(".fa-chevron-down").removeClass("rotated")))});const g=window.smile||{},u={COL_CARTAS:g.colCartas||"cartasdb",COL_HOJAS:g.colHojas||"hojasdb",C_CARTAS:g.cacheCartasKey||"cartasdbCachePublic",C_HOJAS:g.cacheHojasKey||"hojasdbCachePublic",HRS:g.cacheHoras||6,LIM_CARTAS:g.limCartas||500,LIM_HOJAS:g.limHojas||50,IMG_FALLBACK:g.imgFallback||"smile.png",ICONO_HOJA:g.iconoHoja||"fa-utensils",CURRENCY:g.currency||"S/",SHOW_ICONS:g.showIcons!==!1},_=e=>String(e||"").toLowerCase()==="activo",ma=e=>e==null||e===""?"":`${u.CURRENCY}${(+e).toFixed(2)}`,ua=e=>`
    <div class="menu-item">
      <div class="item-header">
        <h3>${u.SHOW_ICONS&&e.icono?`<i class="fas ${e.icono}"></i> `:""}${e.titulo||""}</h3>
        <span class="price">${ma(e.precio)}</span>
      </div>
      ${e.descripcion?`<p class="description">${e.descripcion}</p>`:""}
      <div class="dotted-line"></div>
    </div>`,fa=(e,l,f)=>{const s=f[e]||{},n=s.icono||u.ICONO_HOJA,m=s.imagen||u.IMG_FALLBACK,b=s.nota?`<p class="menu-note"><i class="fas fa-info-circle"></i> ${s.nota}</p>`:"";return`
    <div class="webz" data-hoja="${e}">
      <div class="webx">
        <img src="${m}" alt="Menú ${s.titulo||`Hoja ${e}`}" loading="lazy"
             onerror="this.src='${u.IMG_FALLBACK}';this.onerror=null;">
        <div class="image-overlay"><i class="fas ${n}"></i></div>
      </div>
      <div class="weby">
        <div class="menu-column">
          <header class="menu-header">
            <h2 class="menu-category"><i class="fas ${n}"></i> ${s.titulo||`Hoja ${e}`}</h2>
            ${b}
          </header>
          <div class="menu-content">
            ${l.length?l.map(ua).join(""):'<p class="no-items">No hay elementos disponibles</p>'}
          </div>
        </div>
      </div>
    </div> 
    <div class="separador"><span class="sep-number">${e}</span></div>`},B=()=>{const e={es:{name:"Español",flag:"https://www.svgrepo.com/show/405610/flag-for-flag-spain.svg",url:"https://cartadehawka.web.app"},en:{name:"English",flag:"https://www.svgrepo.com/show/508668/flag-us.svg",url:"https://coffeehawka.web.app"}},l=Object.entries(e).map(([f,s])=>`<div class="wilang-item" data-lang="${f}" data-url="${s.url}"><img src="${s.flag}" alt="${s.name}" class="flag-icon"><span>${s.name}</span></div>`).join("");return`<header class="hd"><h1 class="wilang"><span class="wilang_titu">Idioma: </span><div class="midw_v1"><div class="wilang-trigger"><div class="wilang-selected"><img src="${e.es.flag}" alt="${e.es.name}" class="flag-icon"><span>${e.es.name}</span></div><i class="fas fa-chevron-down"></i></div><div class="wilang-content">${l}</div></div></h1></header>`},K=()=>`
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
  </footer>`,V=(e,l)=>{const f=a("#menu-app"),n=e.filter(i=>_(i.estado)).reduce((i,p)=>((i[p.hoja=+p.hoja||0]||(i[p.hoja]=[])).push(p),i),{}),m=Object.keys(l).map(Number).filter(i=>i>0).sort((i,p)=>i-p);if(!m.length)return f.html(B()+'<p class="no-items txc">No hay menús disponibles</p>'+K());const b=m.map(i=>{const p=(n[i]||[]).sort((A,M)=>+(A.orden||0)-+(M.orden||0)||String(A.titulo||"").localeCompare(String(M.titulo||"")));return fa(i,p,l)}).join("");f.html(B()+b+K());const d=f.find("img").toArray();Promise.all(d.map(i=>i.complete?Promise.resolve():new Promise(p=>{i.onload=i.onerror=p}))).then(()=>document.fonts?.ready||Promise.resolve()).then(()=>setTimeout(W,80))};async function Q(){const e=/\brefresh=1\b/i.test(location.search)||g.noCache,l=(U(u.C_CARTAS)||[]).filter(n=>_(n.estado)),f=(U(u.C_HOJAS)||[]).filter(n=>_(n.estado)),s=Object.fromEntries(f.map(n=>[n.numero,n]));l.length&&Object.keys(s).length&&!e&&V(l,s);try{const[n,m]=await Promise.all([E(F(S(w,u.COL_CARTAS),L("estado","==","activo"),G(u.LIM_CARTAS))),E(F(S(w,u.COL_HOJAS),L("estado","==","activo"),G(u.LIM_HOJAS)))]),b=n.docs.map(p=>({id:p.id,...p.data()})),d=m.docs.map(p=>({id:p.id,...p.data()})),i=Object.fromEntries(d.map(p=>[p.numero,p]));C(u.C_CARTAS,b,u.HRS),C(u.C_HOJAS,d,u.HRS),V(b,i)}catch(n){console.error("Error cargando menú:",n),l.length||a("#menu-app").html(`
      <div class="error-state">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>No se pudo cargar el menú</h2>
        <p>Verifica tu conexión e intenta nuevamente.</p>
        <button class="retry-btn" onclick="location.reload()"><i class="fas fa-redo"></i> Reintentar</button>
      </div>`)}}a(()=>{Q(),a(document).on("keydown",e=>{e.ctrlKey&&e.shiftKey&&e.key.toUpperCase()==="R"&&(Y(u.C_CARTAS,u.C_HOJAS),location.reload())})});window.hawkaMenu={reload:Q,clearCache:()=>Y(u.C_CARTAS,u.C_HOJAS)};a(()=>{const e=s=>a(s).addClass("show").attr("aria-hidden","false"),l=s=>s.removeClass("show").attr("aria-hidden","true"),f=window.smile?.whatsReclamos||"51992472706";a(document).on("click","[data-foomodal]",s=>(s.preventDefault(),e(a(s.currentTarget).data("foomodal")))).on("click",".foo-close,.foomodal .foo-ok,.foomodal .foo-cancel",s=>l(a(s.currentTarget).closest(".foomodal"))).on("click",".foomodal",s=>{s.target===s.currentTarget&&l(a(s.currentTarget))}).on("submit","#reclamosForm",s=>{s.preventDefault();const n=new FormData(s.currentTarget),m=Object.fromEntries(n.entries());if(!m.nombres||!m.email||!m.detalle||!n.get("consent"))return y("Completa los campos obligatorios.","error");const b=`*Reclamo Hawka*
Nombre: ${m.nombres}
Email: ${m.email}
Teléfono: ${m.telefono||"-"}
Pedido: ${m.pedido||"-"}
Detalle: ${m.detalle}`;window.open(`https://wa.me/${f}?text=${encodeURIComponent(b)}`,"_blank"),ta("Abriendo WhatsApp...","success",2200),s.currentTarget.reset(),l(a("#foo-recl"))}),a(".wty").text(new Date().getFullYear())});
