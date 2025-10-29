import{$ as a,w as A,s as y,a as J,M as x,c as G,r as q,N as K,g as F}from"./widev-BM5yT9qV.js";/* empty css              */import{g as M,d as $,a as v,b as R,q as S,c as L,w as O,s as Y,e as _,f as B,l as H}from"./init-Cp9lDRip.js";function V(){const e=`
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
</div>`,r=`
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
</div>`,m=`
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
</div>`;a(function(){let l="smiles",i="wiAuthIn",n="wiAuthRol";a(document).on("click",".Login",function(){t("loginModal")}),a(".registrar").click(()=>t("registroModal")),a(".crearCuenta").click(()=>{t("registroModal"),c("loginModal")}),a(".conCuenta").click(()=>{t("loginModal"),c("registroModal")}),a(".olvidastePass").click(()=>{t("recuperarModal"),c("loginModal")}),a(".volverLogin").click(()=>{t("loginModal"),c("recuperarModal")}),a(".togglePass").click(function(){const o=a(this).siblings("input"),p=o.attr("type")==="password";o.attr("type",p?"text":"password"),a(this).toggleClass("fa-eye fa-eye-slash")}),a('.miauth input:not([type="checkbox"])').on("click",function(){A(this,a(this).attr("placeholder"))}),a("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){a(this).val(a(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recFechaNacimiento","#Recuperar"],["#recEmail","#Recuperar"]].forEach(([o,p])=>{a(o).on("input keyup",u=>{a(p).removeClass("inactivo"),u.key==="Enter"&&(a(p).click(),a(p).addClass("inactivo"))})});const C={regEmail:[o=>o.toLowerCase(),o=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(o)||"Correo inválido"],regUsuario:[o=>o.toLowerCase().replace(/[^a-z0-9_]/g,""),o=>o.length>=3||"Usuario 3-20 caracteres"],regNombre:[o=>o.trim(),o=>o.length>0||"Ingrese nombre"],regApellidos:[o=>o.trim(),o=>o.length>0||"Ingrese apellidos"],regGenero:[o=>o,o=>["femenino","masculino"].includes(o)||"Selecciona género"],regFechaNacimiento:[o=>o,o=>G(o)>=13||"Tienes que ser mayor de 13 años"],regPassword:[o=>o,o=>o.length>=6||"Mínimo 6 caracteres"],regPassword1:[o=>o,o=>o===a("#regPassword").val()||"Contraseñas no coinciden"]};a.each(C,function(o,[p,u]){a(`#${o}`).on("blur change",function(){const f=p(a(this).val());a(this).val(f);const b=u(f);b!==!0&&A(this,b,"error")})});let k=!1;a("#regUsuario").on("blur focus",async function(){const o=a(this).val();if(o.length>=3)try{const u=(await M($(v,l,o))).exists();k=!u,A(this,`Usuario ${u?"no disponible":"disponible ✅"}`,u?"error":"success","top",7e3)}catch(p){console.error(p)}});let D=!1;a("#regEmail").on("blur focus",async function(){const o=a(this).val();if(o.length>=3)try{const u=!(await R(S(L(v,l),O("email","==",o)))).empty;D=!u,A(this,`Email ${u?"no disponible":"disponible ✅"}`,u?"error":"success","top",7e3)}catch(p){console.error(p)}}),a("#Login").click(async function(){try{const[o,p]=["#email","#password"].map(E=>a(E).val());let u=o,f=null,b=null;if(!o.includes("@")){if(f=await M($(v,l,o)),!f.exists())throw new Error("Usuario no encontrado");u=f.data().email;try{b=(await M($(v,"configuracion",o))).data()?.tema}catch{}}await Y(_,u,p);const w=f?.data()?.rol||"smile";y(i,"wIn",24),y(n,w,24),b&&y("wiTema",b,72),J(w)}catch(o){x({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[o.code]||o.message,"error"),console.error(o)}finally{showLoading(!1)}}),a("#Recuperar").click(async function(){try{const[o,p]=["#recEmail","#recFechaNacimiento"].map(w=>a(w).val()),u=o.includes("@")?o:await(async()=>{const w=await M($(v,l,o));return w.exists()?w.data().email:null})();if(!u)return x("Usuario no registrado","error");const f=await R(S(L(v,l),O("email","==",u)));if(f.empty)return x("Email incorrecto o no existe","error");if(f.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==p)return x("Fecha de nacimiento incorrecta","error");await B(_,u),x("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(o){console.error(o)}})}),a("body").append(e+r+m);function s(){const l=`
  .modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.input-icon input,.input-icon select{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus,.input-icon select:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}
  `,i=a(".wiAuthCss");i.length?i.text(l):a("head").append(`<style class="wiAuthCss">${l}</style>`)}const t=l=>{const i=a(`#${l}`).addClass("active");a("body").addClass("modal-open"),setTimeout(()=>{i.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},c=l=>{a(`#${l}`).removeClass("active"),a(".modal.active").length||a("body").removeClass("modal-open")},g=()=>{const l=()=>{a(".modal").removeClass("active"),a("body").removeClass("modal-open")};a(document).off(".authModals").on("click.authModals",".close-modal",l).on("click.authModals",".modal",i=>{a(i.target).is(".modal")&&l()}).on("keydown.authModals",i=>{i.key==="Escape"&&l()})};s(),g()}V();const I=()=>a(".webz").each((e,r)=>a(r).find(".webx").height(a(r).find(".weby").outerHeight())),z=(()=>{let e;return()=>(clearTimeout(e),e=setTimeout(I,120))})();a(z);a(window).on("load resize orientationchange",z);const W=()=>a(document).off(".wilang").on("click.wilang",".wilang-trigger",e=>{e.stopPropagation();const r=a(e.currentTarget).closest(".midw_v1");r.find(".wilang-content").toggleClass("show"),r.find(".fa-chevron-down").toggleClass("rotated")}).on("click.wilang",".wilang-item",function(e){e.stopPropagation(),a(".wilang-content").removeClass("show"),a(".fa-chevron-down").removeClass("rotated"),setTimeout(()=>location.href=a(this).data("url"),200)}).on("click.wilang",e=>{a(e.target).closest(".midw_v1").length||(a(".wilang-content").removeClass("show"),a(".fa-chevron-down").removeClass("rotated"))});a(()=>W());const h=window.smile||{},d={COL_CARTAS:h.colCartas||"cartasdb",COL_HOJAS:h.colHojas||"hojasdb",C_CARTAS:h.cacheCartasKey||"cartasdbCachePublic",C_HOJAS:h.cacheHojasKey||"hojasdbCachePublic",HRS:h.cacheHoras||6,LIM_CARTAS:h.limCartas||500,LIM_HOJAS:h.limHojas||50,IMG_FALLBACK:h.imgFallback||"smile.png",ICONO_HOJA:h.iconoHoja||"fa-utensils",CURRENCY:h.currency||"S/",SHOW_ICONS:h.showIcons!==!1},j=e=>String(e||"").toLowerCase()==="activo",Z=e=>e==null||e===""?"":`${d.CURRENCY}${(+e).toFixed(2)}`,Q=e=>`
    <div class="menu-item">
      <div class="item-header">
        <h3>${d.SHOW_ICONS&&e.icono?`<i class="fas ${e.icono}"></i> `:""}${e.titulo||""}</h3>
        <span class="price">${Z(e.precio)}</span>
      </div>
      ${e.descripcion?`<p class="description">${e.descripcion}</p>`:""}
      <div class="dotted-line"></div>
    </div>`,X=(e,r,m)=>{const s=m[e]||{},t=s.icono||d.ICONO_HOJA,c=s.imagen||d.IMG_FALLBACK,g=s.nota?`<p class="menu-note"><i class="fas fa-info-circle"></i> ${s.nota}</p>`:"";return`
    <div class="webz" data-hoja="${e}">
      <div class="webx">
        <img src="${c}" alt="Menú ${s.titulo||`Hoja ${e}`}" loading="lazy"
             onerror="this.src='${d.IMG_FALLBACK}';this.onerror=null;">
        <div class="image-overlay"><i class="fas ${t}"></i></div>
      </div>
      <div class="weby">
        <div class="menu-column">
          <header class="menu-header">
            <h2 class="menu-category"><i class="fas ${t}"></i> ${s.titulo||`Hoja ${e}`}</h2>
            
          </header>
          <div class="menu-content">
            ${r.length?r.map(Q).join(""):'<p class="no-items">No hay elementos disponibles</p>'}
          </div>
         ${g}
        </div>
      </div>
    </div> 
    <div class="separador"><span class="sep-number">${e}</span></div>`},P=()=>{const e={es:{name:"Español",flag:"https://www.svgrepo.com/show/405610/flag-for-flag-spain.svg",url:"https://cartadehawka.web.app"},en:{name:"English",flag:"https://www.svgrepo.com/show/508668/flag-us.svg",url:"https://coffeehawka.web.app"}},r=Object.entries(e).map(([m,s])=>`<div class="wilang-item" data-lang="${m}" data-url="${s.url}"><img src="${s.flag}" alt="${s.name}" class="flag-icon"><span>${s.name}</span></div>`).join("");return`<header class="hd"><h1 class="wilang"><span class="wilang_titu">Idioma: </span><div class="midw_v1"><div class="wilang-trigger"><div class="wilang-selected"><img src="${e.es.flag}" alt="${e.es.name}" class="flag-icon"><span>${e.es.name}</span></div><i class="fas fa-chevron-down"></i></div><div class="wilang-content">${r}</div></div></h1></header>`},T=()=>`
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
  </footer>`,N=(e,r)=>{const m=a("#menu-app"),t=e.filter(i=>j(i.estado)).reduce((i,n)=>((i[n.hoja=+n.hoja||0]||(i[n.hoja]=[])).push(n),i),{}),c=Object.keys(r).map(Number).filter(i=>i>0).sort((i,n)=>i-n);if(!c.length)return m.html(P()+'<p class="no-items txc">No hay menús disponibles</p>'+T());const g=c.map(i=>{const n=(t[i]||[]).sort((C,k)=>+(C.orden||0)-+(k.orden||0)||String(C.titulo||"").localeCompare(String(k.titulo||"")));return X(i,n,r)}).join("");m.html(P()+g+T());const l=m.find("img").toArray();Promise.all(l.map(i=>i.complete?Promise.resolve():new Promise(n=>{i.onload=i.onerror=n}))).then(()=>document.fonts?.ready||Promise.resolve()).then(()=>setTimeout(I,80))};async function U(){const e=/\brefresh=1\b/i.test(location.search)||h.noCache,r=(F(d.C_CARTAS)||[]).filter(t=>j(t.estado)),m=(F(d.C_HOJAS)||[]).filter(t=>j(t.estado)),s=Object.fromEntries(m.map(t=>[t.numero,t]));r.length&&Object.keys(s).length&&!e&&N(r,s);try{const[t,c]=await Promise.all([R(S(L(v,d.COL_CARTAS),O("estado","==","activo"),H(d.LIM_CARTAS))),R(S(L(v,d.COL_HOJAS),O("estado","==","activo"),H(d.LIM_HOJAS)))]),g=t.docs.map(n=>({id:n.id,...n.data()})),l=c.docs.map(n=>({id:n.id,...n.data()})),i=Object.fromEntries(l.map(n=>[n.numero,n]));y(d.C_CARTAS,g,d.HRS),y(d.C_HOJAS,l,d.HRS),N(g,i)}catch(t){console.error("Error cargando menú:",t),r.length||a("#menu-app").html(`
      <div class="error-state">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>No se pudo cargar el menú</h2>
        <p>Verifica tu conexión e intenta nuevamente.</p>
        <button class="retry-btn" onclick="location.reload()"><i class="fas fa-redo"></i> Reintentar</button>
      </div>`)}}a(()=>{U(),a(document).on("keydown",e=>{e.ctrlKey&&e.shiftKey&&e.key.toUpperCase()==="R"&&(q(d.C_CARTAS,d.C_HOJAS),location.reload())})});window.hawkaMenu={reload:U,clearCache:()=>q(d.C_CARTAS,d.C_HOJAS)};a(()=>{const e=s=>a(s).addClass("show").attr("aria-hidden","false"),r=s=>s.removeClass("show").attr("aria-hidden","true"),m=window.smile?.whatsReclamos||"51992472706";a(document).on("click","[data-foomodal]",s=>(s.preventDefault(),e(a(s.currentTarget).data("foomodal")))).on("click",".foo-close,.foomodal .foo-ok,.foomodal .foo-cancel",s=>r(a(s.currentTarget).closest(".foomodal"))).on("click",".foomodal",s=>{s.target===s.currentTarget&&r(a(s.currentTarget))}).on("submit","#reclamosForm",s=>{s.preventDefault();const t=new FormData(s.currentTarget),c=Object.fromEntries(t.entries());if(!c.nombres||!c.email||!c.detalle||!t.get("consent"))return x("Completa los campos obligatorios.","error");const g=`*Reclamo Hawka*
Nombre: ${c.nombres}
Email: ${c.email}
Teléfono: ${c.telefono||"-"}
Pedido: ${c.pedido||"-"}
Detalle: ${c.detalle}`;window.open(`https://wa.me/${m}?text=${encodeURIComponent(g)}`,"_blank"),K("Abriendo WhatsApp...","success",2200),s.currentTarget.reset(),r(a("#foo-recl"))}),a(".wty").text(new Date().getFullYear())});
