import{$ as e,w as A,g as O,d as M,a as x,b as R,q as $,c as S,e as j,f as B,h as P,u as W,s as Z,i as Q,j as X,k as ee,M as w,l as y,m as T,n as ae,o as oe,p as se,r as z,N as ie,t as I,v as q}from"./widev-BsixQhRF.js";/* empty css              */function te(){const o=`
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
        <span class="crearCuenta">Crear cuenta</span>
      </div>
    </div>
  </div>
</div>`,c=`
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
</div>`,h=`
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
</div>`;e(function(){let s="smiles",l=3e3,m="wiAuthIn",C="wiAuthRol",F="smile";e(".Login").click(()=>n("loginModal")),e(".registrar").click(()=>n("registroModal")),e(".crearCuenta").click(()=>{n("registroModal"),d("loginModal")}),e(".conCuenta").click(()=>{n("loginModal"),d("registroModal")}),e(".olvidastePass").click(()=>{n("recuperarModal"),d("loginModal")}),e(".volverLogin").click(()=>{n("loginModal"),d("recuperarModal")}),e(".togglePass").click(function(){const a=e(this).siblings("input"),r=a.attr("type")==="password";a.attr("type",r?"text":"password"),e(this).toggleClass("fa-eye fa-eye-slash")}),e('.miauth input:not([type="checkbox"])').on("click",function(){A(this,e(this).attr("placeholder"))}),e("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){e(this).val(e(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recFechaNacimiento","#Recuperar"],["#recEmail","#Recuperar"]].forEach(([a,r])=>{e(a).on("input keyup",t=>{e(r).removeClass("inactivo"),t.key==="Enter"&&(e(r).click(),e(r).addClass("inactivo"))})});const H={regEmail:[a=>a.toLowerCase(),a=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(a)||"Correo inválido"],regUsuario:[a=>a.toLowerCase().replace(/[^a-z0-9_]/g,""),a=>a.length>=3||"Usuario 3-20 caracteres"],regNombre:[a=>a.trim(),a=>a.length>0||"Ingrese nombre"],regApellidos:[a=>a.trim(),a=>a.length>0||"Ingrese apellidos"],regGenero:[a=>a,a=>["femenino","masculino"].includes(a)||"Selecciona género"],regFechaNacimiento:[a=>a,a=>se(a)>=13||"Tienes que ser mayor de 13 años"],regPassword:[a=>a,a=>a.length>=6||"Mínimo 6 caracteres"],regPassword1:[a=>a,a=>a===e("#regPassword").val()||"Contraseñas no coinciden"]};e.each(H,function(a,[r,t]){e(`#${a}`).on("blur change",function(){const u=r(e(this).val());e(this).val(u);const g=t(u);g!==!0&&A(this,g,"error")})});let _=!1;e("#regUsuario").on("blur focus",async function(){const a=e(this).val();if(a.length>=3)try{const t=(await O(M(x,s,a))).exists();_=!t,A(this,`Usuario ${t?"no disponible":"disponible ✅"}`,t?"error":"success","top",7e3)}catch(r){console.error(r)}});let N=!1;e("#regEmail").on("blur focus",async function(){const a=e(this).val();if(a.length>=3)try{const t=!(await R($(S(x,s),j("email","==",a)))).empty;N=!t,A(this,`Email ${t?"no disponible":"disponible ✅"}`,t?"error":"success","top",7e3)}catch(r){console.error(r)}}),e("#Registrar").click(async function(){const a=[[_,e("#regUsuario")[0],"Usuario no disponible"],[N,e("#regEmail")[0],"Email no disponible"],...Object.entries(H).map(([r,[t,u]])=>{const g=e(`#${r}`),b=t(g.val()),k=u(b);return[k===!0,g[0],k!==!0?k:""]})];for(const[r,t,u]of a)if(!r&&u&&(A(t,u,"error"),t.focus(),!0))return;try{const r=["regEmail","regUsuario","regNombre","regApellidos","regGenero","regPassword"],[t,u,g,b,k,K]=r.map(Y=>e("#"+Y).val().trim()),{user:L}=await B(P,t,K);await Promise.all([W(L,{displayName:u}),Z(L)]),console.log("Registro completo en Auth ✅"+Date());const V=M(x,s,u);await Q(V,{usuario:u,email:t,nombre:g,apellidos:b,genero:k,rol:F,fechaNacimiento:ee(e("#regFechaNacimiento").val()),creacion:X(),uid:L.uid}),console.log("Registro completo en Firestore ✅"+Date()),w("Registro completado! ✅")}catch(r){w({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[r.code]||r.message)||console.error(r)}finally{y(m,"wIn",24),y(C,F,24),setTimeout(()=>T(F),l)}}),e("#Login").click(async function(){try{const[a,r]=["#email","#password"].map(g=>e(g).val());let t=null,u=a;if(!a.includes("@"))try{t=await O(M(x,s,a)),u=t.exists()?t.data().email:null}catch(g){console.error("ebdUsuario",g),u=null}await ae(P,u,r),y(m,"wIn",24),y(C,t.data().rol,24),T(t.data().rol)}catch(a){w({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[a.code]||a.message,"error"),console.error(a)}}),e("#Recuperar").click(async function(){try{const[a,r]=["#recEmail","#recFechaNacimiento"].map(b=>e(b).val()),t=a.includes("@")?a:await(async()=>{const b=await O(M(x,s,a));return b.exists()?b.data().email:null})();if(!t)return w("Usuario no registrado","error");const u=await R($(S(x,s),j("email","==",t)));if(u.empty)return w("Email incorrecto o no existe","error");if(u.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==r)return w("Fecha de nacimiento incorrecta","error");await oe(P,t),w("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(a){console.error(a)}})}),e("body").append(o+c+h);function i(){const s=".modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.input-icon input,.input-icon select{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus,.input-icon select:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}",l=e(".wiAuthCss");l.length?l.text(s):e("head").append(`<style class="wiAuthCss">${s}</style>`)}const n=s=>{const l=e(`#${s}`).addClass("active");e("body").addClass("modal-open"),setTimeout(()=>{l.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},d=s=>{e(`#${s}`).removeClass("active"),e(".modal.active").length||e("body").removeClass("modal-open")},v=()=>{const s=()=>{e(".modal").removeClass("active"),e("body").removeClass("modal-open")};e(document).off(".authModals").on("click.authModals",".close-modal",s).on("click.authModals",".modal",l=>{e(l.target).is(".modal")&&s()}).on("keydown.authModals",l=>{l.key==="Escape"&&s()})};i(),v()}te();const D=()=>e(".webz").each((o,c)=>e(c).find(".webx").height(e(c).find(".weby").outerHeight())),J=(()=>{let o;return()=>(clearTimeout(o),o=setTimeout(D,120))})();e(J);e(window).on("load resize orientationchange",J);e(()=>{const o=e(".midw_v1"),c=o.find(".wilang-content");o.on("click",".wilang-trigger",h=>(h.stopPropagation(),c.toggleClass("show"),o.find(".fa-chevron-down").toggleClass("rotated"))).on("click",".wilang-item",function(){c.removeClass("show"),setTimeout(()=>location.href=e(this).data("url"),200)}),e(document).on("click",()=>(c.removeClass("show"),o.find(".fa-chevron-down").removeClass("rotated")))});const f=window.smile||{},p={COL_CARTAS:f.colCartas||"cartasdb",COL_HOJAS:f.colHojas||"hojasdb",C_CARTAS:f.cacheCartasKey||"cartasdbCachePublic",C_HOJAS:f.cacheHojasKey||"hojasdbCachePublic",HRS:f.cacheHoras||6,LIM_CARTAS:f.limCartas||500,LIM_HOJAS:f.limHojas||50,IMG_FALLBACK:f.imgFallback||"https://i.postimg.cc/KvN8qF2P/menu-default.jpg",ICONO_HOJA:f.iconoHoja||"fa-utensils",CURRENCY:f.currency||"S/",SHOW_ICONS:f.showIcons!==!1},E=o=>String(o||"").toLowerCase()==="activo",re=o=>o==null||o===""?"":`${p.CURRENCY}${(+o).toFixed(2)}`,ne=o=>`
    <div class="menu-item">
      <div class="item-header">
        <h3>${p.SHOW_ICONS&&o.icono?`<i class="fas ${o.icono}"></i> `:""}${o.titulo||""}</h3>
        <span class="price">${re(o.precio)}</span>
      </div>
      ${o.descripcion?`<p class="description">${o.descripcion}</p>`:""}
      <div class="dotted-line"></div>
    </div>`,ce=(o,c,h)=>{const i=h[o]||{},n=i.icono||p.ICONO_HOJA,d=i.imagen||p.IMG_FALLBACK,v=i.nota?`<p class="menu-note"><i class="fas fa-info-circle"></i> ${i.nota}</p>`:"";return`
    <div class="webz" data-hoja="${o}">
      <div class="webx">
        <img src="${d}" alt="Menú ${i.titulo||`Hoja ${o}`}" loading="lazy"
             onerror="this.src='${p.IMG_FALLBACK}';this.onerror=null;">
        <div class="image-overlay"><i class="fas ${n}"></i></div>
      </div>
      <div class="weby">
        <div class="menu-column">
          <header class="menu-header">
            <h2 class="menu-category"><i class="fas ${n}"></i> ${i.titulo||`Hoja ${o}`}</h2>
            ${v}
          </header>
          <div class="menu-content">
            ${c.length?c.map(ne).join(""):'<p class="no-items">No hay elementos disponibles</p>'}
          </div>
        </div>
      </div>
    </div>
    <div class="separador"><span class="sep-number">${o}</span></div>`},U=(o,c)=>{const h=e("#menu-app"),n=o.filter(s=>E(s.estado)).reduce((s,l)=>((s[l.hoja=+l.hoja||0]||(s[l.hoja]=[])).push(l),s),{}),d=Object.keys(c).map(Number).filter(s=>s>0).sort((s,l)=>s-l);if(!d.length)return h.html('<p class="no-items txc">No hay menús disponibles</p>');h.html(d.map(s=>{const l=(n[s]||[]).sort((m,C)=>+(m.orden||0)-+(C.orden||0)||String(m.titulo||"").localeCompare(String(C.titulo||"")));return ce(s,l,c)}).join(""));const v=h.find("img").toArray();Promise.all(v.map(s=>s.complete?Promise.resolve():new Promise(l=>{s.onload=s.onerror=l}))).then(()=>document.fonts?.ready||Promise.resolve()).then(()=>setTimeout(D,80))};async function G(){const o=/\brefresh=1\b/i.test(location.search)||f.noCache,c=(I(p.C_CARTAS)||[]).filter(n=>E(n.estado)),h=(I(p.C_HOJAS)||[]).filter(n=>E(n.estado)),i=Object.fromEntries(h.map(n=>[n.numero,n]));c.length&&Object.keys(i).length&&!o&&U(c,i);try{const[n,d]=await Promise.all([R($(S(x,p.COL_CARTAS),j("estado","==","activo"),q(p.LIM_CARTAS))),R($(S(x,p.COL_HOJAS),j("estado","==","activo"),q(p.LIM_HOJAS)))]),v=n.docs.map(m=>({id:m.id,...m.data()})),s=d.docs.map(m=>({id:m.id,...m.data()})),l=Object.fromEntries(s.map(m=>[m.numero,m]));y(p.C_CARTAS,v,p.HRS),y(p.C_HOJAS,s,p.HRS),U(v,l)}catch(n){console.error("Error cargando menú:",n),c.length||e("#menu-app").html(`
      <div class="error-state">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>No se pudo cargar el menú</h2>
        <p>Verifica tu conexión e intenta nuevamente.</p>
        <button class="retry-btn" onclick="location.reload()"><i class="fas fa-redo"></i> Reintentar</button>
      </div>`)}}e(()=>{G(),e(document).on("keydown",o=>{o.ctrlKey&&o.shiftKey&&o.key.toUpperCase()==="R"&&(z(p.C_CARTAS,p.C_HOJAS),location.reload())})});window.hawkaMenu={reload:G,clearCache:()=>z(p.C_CARTAS,p.C_HOJAS)};e(()=>{const o=i=>e(i).addClass("show").attr("aria-hidden","false"),c=i=>i.removeClass("show").attr("aria-hidden","true"),h=window.smile?.whatsReclamos||"51992472706";e(document).on("click","[data-foomodal]",i=>(i.preventDefault(),o(e(i.currentTarget).data("foomodal")))).on("click",".foo-close,.foomodal .foo-ok,.foomodal .foo-cancel",i=>c(e(i.currentTarget).closest(".foomodal"))).on("click",".foomodal",i=>{i.target===i.currentTarget&&c(e(i.currentTarget))}).on("submit","#reclamosForm",i=>{i.preventDefault();const n=new FormData(i.currentTarget),d=Object.fromEntries(n.entries());if(!d.nombres||!d.email||!d.detalle||!n.get("consent"))return w("Completa los campos obligatorios.","error");const v=`*Reclamo Hawka*
Nombre: ${d.nombres}
Email: ${d.email}
Teléfono: ${d.telefono||"-"}
Pedido: ${d.pedido||"-"}
Detalle: ${d.detalle}`;window.open(`https://wa.me/${h}?text=${encodeURIComponent(v)}`,"_blank"),ie("Abriendo WhatsApp...","success",2200),i.currentTarget.reset(),c(e("#foo-recl"))}),e(".wty").text(new Date().getFullYear())});
