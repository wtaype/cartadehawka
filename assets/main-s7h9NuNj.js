import{$ as a,w as M,g as F,d as k,a as w,b as R,q as $,c as S,e as E,f as ea,h as O,u as oa,s as sa,i as U,j as z,k as ia,M as y,l as C,m as D,n as ta,o as ra,p as na,r as K,N as ca,t as J,v as G}from"./widev-ClkmwPNz.js";/* empty css              */function la(){const o=`
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
</div>`,p=`
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
</div>`;a(function(){let s="smiles",l="configuracion",h=3e3,A="wiAuthIn",T="wiAuthRol",j="smile",L="Cielo";a(".Login").click(()=>n("loginModal")),a(".registrar").click(()=>n("registroModal")),a(".crearCuenta").click(()=>{n("registroModal"),u("loginModal")}),a(".conCuenta").click(()=>{n("loginModal"),u("registroModal")}),a(".olvidastePass").click(()=>{n("recuperarModal"),u("loginModal")}),a(".volverLogin").click(()=>{n("loginModal"),u("recuperarModal")}),a(".togglePass").click(function(){const e=a(this).siblings("input"),t=e.attr("type")==="password";e.attr("type",t?"text":"password"),a(this).toggleClass("fa-eye fa-eye-slash")}),a('.miauth input:not([type="checkbox"])').on("click",function(){M(this,a(this).attr("placeholder"))}),a("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){a(this).val(a(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recFechaNacimiento","#Recuperar"],["#recEmail","#Recuperar"]].forEach(([e,t])=>{a(e).on("input keyup",r=>{a(t).removeClass("inactivo"),r.key==="Enter"&&(a(t).click(),a(t).addClass("inactivo"))})});const _={regEmail:[e=>e.toLowerCase(),e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e)||"Correo inválido"],regUsuario:[e=>e.toLowerCase().replace(/[^a-z0-9_]/g,""),e=>e.length>=3||"Usuario 3-20 caracteres"],regNombre:[e=>e.trim(),e=>e.length>0||"Ingrese nombre"],regApellidos:[e=>e.trim(),e=>e.length>0||"Ingrese apellidos"],regGenero:[e=>e,e=>["femenino","masculino"].includes(e)||"Selecciona género"],regFechaNacimiento:[e=>e,e=>na(e)>=13||"Tienes que ser mayor de 13 años"],regPassword:[e=>e,e=>e.length>=6||"Mínimo 6 caracteres"],regPassword1:[e=>e,e=>e===a("#regPassword").val()||"Contraseñas no coinciden"]};a.each(_,function(e,[t,r]){a(`#${e}`).on("blur change",function(){const d=t(a(this).val());a(this).val(d);const g=r(d);g!==!0&&M(this,g,"error")})});let N=!1;a("#regUsuario").on("blur focus",async function(){const e=a(this).val();if(e.length>=3)try{const r=(await F(k(w,s,e))).exists();N=!r,M(this,`Usuario ${r?"no disponible":"disponible ✅"}`,r?"error":"success","top",7e3)}catch(t){console.error(t)}});let I=!1;a("#regEmail").on("blur focus",async function(){const e=a(this).val();if(e.length>=3)try{const r=!(await R($(S(w,s),E("email","==",e)))).empty;I=!r,M(this,`Email ${r?"no disponible":"disponible ✅"}`,r?"error":"success","top",7e3)}catch(t){console.error(t)}}),a("#Registrar").click(async function(){const e=[[N,a("#regUsuario")[0],"Usuario no disponible"],[I,a("#regEmail")[0],"Email no disponible"],...Object.entries(_).map(([t,[r,d]])=>{const g=a(`#${t}`),v=r(g.val()),x=d(v);return[x===!0,g[0],x!==!0?x:""]})];for(const[t,r,d]of e)if(!t&&d&&(M(r,d,"error"),r.focus(),!0))return;try{const t=["regEmail","regUsuario","regNombre","regApellidos","regGenero","regPassword"],[r,d,g,v,x,Z]=t.map(aa=>a("#"+aa).val().trim()),q={masculino:["Cielo|#0EBEFF","Paz|#29C72E"],femenino:["Dulce|#FF5C69","Mora|#7000FF"]}[x]||["Paz|#29C72E","Cielo|#0EBEFF"];L=q[Math.floor(Math.random()*q.length)];const{user:P}=await ea(O,r,Z);await Promise.all([oa(P,{displayName:d}),sa(P)]),console.log("Registro completo en Auth ✅"+Date());const Q=k(w,s,d);await U(Q,{usuario:d,email:r,nombre:g,apellidos:v,genero:x,rol:j,fechaNacimiento:ia(a("#regFechaNacimiento").val()),creacion:z(),uid:P.uid});const X=k(w,l,d);await U(X,{usuario:d,email:r,tema:L,actualizacion:z()}),console.log("Registro completo en Firestore ✅"+Date()),y("Registro completado! ✅")}catch(t){y({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[t.code]||t.message)||console.error(t)}finally{C(A,"wIn",24),C(T,j,24),C("wiTema",L,72),setTimeout(()=>D(j),h)}}),a("#Login").click(async function(){try{const[e,t]=["#email","#password"].map(x=>a(x).val());let r=e,d=null,g=null;if(!e.includes("@")){if(d=await F(k(w,s,e)),!d.exists())throw new Error("Usuario no encontrado");r=d.data().email;try{g=(await F(k(w,"configuracion",e))).data()?.tema}catch{}}await ta(O,r,t);const v=d?.data()?.rol||"smile";C(A,"wIn",24),C(T,v,24),g&&C("wiTema",g,72),D(v)}catch(e){y({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[e.code]||e.message,"error"),console.error(e)}finally{showLoading(!1)}}),a("#Recuperar").click(async function(){try{const[e,t]=["#recEmail","#recFechaNacimiento"].map(v=>a(v).val()),r=e.includes("@")?e:await(async()=>{const v=await F(k(w,s,e));return v.exists()?v.data().email:null})();if(!r)return y("Usuario no registrado","error");const d=await R($(S(w,s),E("email","==",r)));if(d.empty)return y("Email incorrecto o no existe","error");if(d.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==t)return y("Fecha de nacimiento incorrecta","error");await ra(O,r),y("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(e){console.error(e)}})}),a("body").append(o+c+p);function i(){const s=".modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.input-icon input,.input-icon select{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus,.input-icon select:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}",l=a(".wiAuthCss");l.length?l.text(s):a("head").append(`<style class="wiAuthCss">${s}</style>`)}const n=s=>{const l=a(`#${s}`).addClass("active");a("body").addClass("modal-open"),setTimeout(()=>{l.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},u=s=>{a(`#${s}`).removeClass("active"),a(".modal.active").length||a("body").removeClass("modal-open")},b=()=>{const s=()=>{a(".modal").removeClass("active"),a("body").removeClass("modal-open")};a(document).off(".authModals").on("click.authModals",".close-modal",s).on("click.authModals",".modal",l=>{a(l.target).is(".modal")&&s()}).on("keydown.authModals",l=>{l.key==="Escape"&&s()})};i(),b()}la();const V=()=>a(".webz").each((o,c)=>a(c).find(".webx").height(a(c).find(".weby").outerHeight())),Y=(()=>{let o;return()=>(clearTimeout(o),o=setTimeout(V,120))})();a(Y);a(window).on("load resize orientationchange",Y);a(()=>{const o=a(".midw_v1"),c=o.find(".wilang-content");o.on("click",".wilang-trigger",p=>(p.stopPropagation(),c.toggleClass("show"),o.find(".fa-chevron-down").toggleClass("rotated"))).on("click",".wilang-item",function(){c.removeClass("show"),setTimeout(()=>location.href=a(this).data("url"),200)}),a(document).on("click",()=>(c.removeClass("show"),o.find(".fa-chevron-down").removeClass("rotated")))});const f=window.smile||{},m={COL_CARTAS:f.colCartas||"cartasdb",COL_HOJAS:f.colHojas||"hojasdb",C_CARTAS:f.cacheCartasKey||"cartasdbCachePublic",C_HOJAS:f.cacheHojasKey||"hojasdbCachePublic",HRS:f.cacheHoras||6,LIM_CARTAS:f.limCartas||500,LIM_HOJAS:f.limHojas||50,IMG_FALLBACK:f.imgFallback||"https://i.postimg.cc/KvN8qF2P/menu-default.jpg",ICONO_HOJA:f.iconoHoja||"fa-utensils",CURRENCY:f.currency||"S/",SHOW_ICONS:f.showIcons!==!1},H=o=>String(o||"").toLowerCase()==="activo",da=o=>o==null||o===""?"":`${m.CURRENCY}${(+o).toFixed(2)}`,ua=o=>`
    <div class="menu-item">
      <div class="item-header">
        <h3>${m.SHOW_ICONS&&o.icono?`<i class="fas ${o.icono}"></i> `:""}${o.titulo||""}</h3>
        <span class="price">${da(o.precio)}</span>
      </div>
      ${o.descripcion?`<p class="description">${o.descripcion}</p>`:""}
      <div class="dotted-line"></div>
    </div>`,ma=(o,c,p)=>{const i=p[o]||{},n=i.icono||m.ICONO_HOJA,u=i.imagen||m.IMG_FALLBACK,b=i.nota?`<p class="menu-note"><i class="fas fa-info-circle"></i> ${i.nota}</p>`:"";return`
    <div class="webz" data-hoja="${o}">
      <div class="webx">
        <img src="${u}" alt="Menú ${i.titulo||`Hoja ${o}`}" loading="lazy"
             onerror="this.src='${m.IMG_FALLBACK}';this.onerror=null;">
        <div class="image-overlay"><i class="fas ${n}"></i></div>
      </div>
      <div class="weby">
        <div class="menu-column">
          <header class="menu-header">
            <h2 class="menu-category"><i class="fas ${n}"></i> ${i.titulo||`Hoja ${o}`}</h2>
            ${b}
          </header>
          <div class="menu-content">
            ${c.length?c.map(ua).join(""):'<p class="no-items">No hay elementos disponibles</p>'}
          </div>
        </div>
      </div>
    </div> 
    <div class="separador"><span class="sep-number">${o}</span></div>`},B=(o,c)=>{const p=a("#menu-app"),n=o.filter(s=>H(s.estado)).reduce((s,l)=>((s[l.hoja=+l.hoja||0]||(s[l.hoja]=[])).push(l),s),{}),u=Object.keys(c).map(Number).filter(s=>s>0).sort((s,l)=>s-l);if(!u.length)return p.html('<p class="no-items txc">No hay menús disponibles</p>');p.html(u.map(s=>{const l=(n[s]||[]).sort((h,A)=>+(h.orden||0)-+(A.orden||0)||String(h.titulo||"").localeCompare(String(A.titulo||"")));return ma(s,l,c)}).join(""));const b=p.find("img").toArray();Promise.all(b.map(s=>s.complete?Promise.resolve():new Promise(l=>{s.onload=s.onerror=l}))).then(()=>document.fonts?.ready||Promise.resolve()).then(()=>setTimeout(V,80))};async function W(){const o=/\brefresh=1\b/i.test(location.search)||f.noCache,c=(J(m.C_CARTAS)||[]).filter(n=>H(n.estado)),p=(J(m.C_HOJAS)||[]).filter(n=>H(n.estado)),i=Object.fromEntries(p.map(n=>[n.numero,n]));c.length&&Object.keys(i).length&&!o&&B(c,i);try{const[n,u]=await Promise.all([R($(S(w,m.COL_CARTAS),E("estado","==","activo"),G(m.LIM_CARTAS))),R($(S(w,m.COL_HOJAS),E("estado","==","activo"),G(m.LIM_HOJAS)))]),b=n.docs.map(h=>({id:h.id,...h.data()})),s=u.docs.map(h=>({id:h.id,...h.data()})),l=Object.fromEntries(s.map(h=>[h.numero,h]));C(m.C_CARTAS,b,m.HRS),C(m.C_HOJAS,s,m.HRS),B(b,l)}catch(n){console.error("Error cargando menú:",n),c.length||a("#menu-app").html(`
      <div class="error-state">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>No se pudo cargar el menú</h2>
        <p>Verifica tu conexión e intenta nuevamente.</p>
        <button class="retry-btn" onclick="location.reload()"><i class="fas fa-redo"></i> Reintentar</button>
      </div>`)}}a(()=>{W(),a(document).on("keydown",o=>{o.ctrlKey&&o.shiftKey&&o.key.toUpperCase()==="R"&&(K(m.C_CARTAS,m.C_HOJAS),location.reload())})});window.hawkaMenu={reload:W,clearCache:()=>K(m.C_CARTAS,m.C_HOJAS)};a(()=>{const o=i=>a(i).addClass("show").attr("aria-hidden","false"),c=i=>i.removeClass("show").attr("aria-hidden","true"),p=window.smile?.whatsReclamos||"51992472706";a(document).on("click","[data-foomodal]",i=>(i.preventDefault(),o(a(i.currentTarget).data("foomodal")))).on("click",".foo-close,.foomodal .foo-ok,.foomodal .foo-cancel",i=>c(a(i.currentTarget).closest(".foomodal"))).on("click",".foomodal",i=>{i.target===i.currentTarget&&c(a(i.currentTarget))}).on("submit","#reclamosForm",i=>{i.preventDefault();const n=new FormData(i.currentTarget),u=Object.fromEntries(n.entries());if(!u.nombres||!u.email||!u.detalle||!n.get("consent"))return y("Completa los campos obligatorios.","error");const b=`*Reclamo Hawka*
Nombre: ${u.nombres}
Email: ${u.email}
Teléfono: ${u.telefono||"-"}
Pedido: ${u.pedido||"-"}
Detalle: ${u.detalle}`;window.open(`https://wa.me/${p}?text=${encodeURIComponent(b)}`,"_blank"),ca("Abriendo WhatsApp...","success",2200),i.currentTarget.reset(),c(a("#foo-recl"))}),a(".wty").text(new Date().getFullYear())});
