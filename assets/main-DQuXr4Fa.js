import"./modulepreload-polyfill-B5Qt9EMX.js";import{$ as a,M as v,N as F,r as N,g as y,s as C}from"./widev-ClXCCnou.js";import{g as j,q as k,c as H,d as x,w as E,l as A}from"./init-ckCATEbZ.js";const f={whatsapp:"51992472706",anoActual:new Date().getFullYear(),urlPortfolio:"https://wtaype.github.io/",imagenLibro:"./libroReclamos.png"};window.smile?.whatsReclamos&&(f.whatsapp=window.smile.whatsReclamos);const M=()=>`
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
        <img src="${f.imagenLibro}" alt="Libro" class="foo-hero">
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
  </div>`,O=()=>`
  <footer class="foo">
    <nav class="foo-links">
      <button class="lk about" data-foomodal="#foo-about">
        <i class="fas fa-info-circle"></i> Acerca del app
      </button>
      <button class="lk priv" data-foomodal="#foo-priv">
        <i class="fas fa-shield-alt"></i> Políticas de privacidad
      </button>
      <button class="lk recl" data-foomodal="#foo-recl">
        <img src="${f.imagenLibro}" alt="Libro" style="width:20px;height:20px;vertical-align:middle;margin-right:5px;">
        Libro de reclamaciones
      </button>
    </nav>
    <div class="brand">
      Creado con <i class="fa fa-heart"></i> por
      <a class="lkme" href="${f.urlPortfolio}" target="_blank" rel="noopener">@wilder.taype</a>
      | <span class="Login" style="cursor:pointer;text-decoration:underline;">Login</span> 
      | <span class="wty">${f.anoActual}</span>
    </div>
  </footer>`,_=o=>{a(o).addClass("show").attr("aria-hidden","false"),a("body").css("overflow","hidden")},h=o=>{o.removeClass("show").attr("aria-hidden","true"),a(".foomodal.show").length||a("body").css("overflow","")},T=o=>{const e=`*📋 Reclamo Hawka*
  
👤 *Nombre:* ${o.nombres}
📧 *Email:* ${o.email}
📱 *Teléfono:* ${o.telefono||"No proporcionado"}
🎫 *N° Pedido:* ${o.pedido||"No proporcionado"}

📝 *Detalle:*
${o.detalle}

---
_Enviado desde Carta Hawka_`,s=`https://wa.me/${f.whatsapp}?text=${encodeURIComponent(e)}`;window.open(s,"_blank","noopener,noreferrer"),F("Abriendo WhatsApp...","success",2200)},I=()=>{a(document).on("click","[data-foomodal]",function(o){o.preventDefault(),_(a(this).data("foomodal"))}).on("click",".foo-close, .foomodal .foo-ok, .foomodal .foo-cancel",function(o){o.preventDefault(),h(a(this).closest(".foomodal"))}).on("click",".foomodal",function(o){o.target===this&&h(a(this))}).on("keydown",o=>{o.key==="Escape"&&a(".foomodal.show").length&&h(a(".foomodal.show"))}).on("submit","#reclamosForm",function(o){o.preventDefault();const e=new FormData(this),s=Object.fromEntries(e.entries());if(!s.nombres||!s.email||!s.detalle)return v("Por favor completa los campos obligatorios","error");if(!e.get("consent"))return v("Debes aceptar el uso de tus datos","error");if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(s.email))return v("Email inválido","error");T(s),this.reset(),h(a("#foo-recl"))})},q=()=>{a(document).on("click",".Login",function(o){o.preventDefault(),window.location.href="./login.html"})};function w(){a("body").append(M()),a("#menu-app").append(O()),I(),q(),console.log("✅ Footer inicializado correctamente")}a(()=>w());const t={colCartas:"cartasdb",colHojas:"hojasdb",cacheCartas:"cartasdbCachePublic",cacheHojas:"hojasdbCachePublic",horasCache:6,limiteCartas:500,limiteHojas:50,imagenDefault:"smile.png",iconoHoja:"fa-utensils",moneda:"S/",mostrarIconos:!0};window.smile&&Object.assign(t,window.smile);const $=o=>String(o||"").toLowerCase()==="activo",S=o=>o==null||o===""?"":`${t.moneda}${(+o).toFixed(2)}`,R=()=>a(".webz").each((o,e)=>{a(e).find(".webx").height(a(e).find(".weby").outerHeight())}),z=(()=>{let o;return()=>{clearTimeout(o),o=setTimeout(R,120)}})();a(z);a(window).on("load resize orientationchange",z);const b={es:{nombre:"Español",bandera:"https://www.svgrepo.com/show/405610/flag-for-flag-spain.svg",url:"https://cartadehawka.web.app"},en:{nombre:"English",bandera:"https://www.svgrepo.com/show/508668/flag-us.svg",url:"https://coffeehawka.web.app"}},K=()=>{a(document).off(".wilang").on("click.wilang",".wilang-trigger",o=>{o.stopPropagation();const e=a(o.currentTarget).closest(".midw_v1");e.find(".wilang-content").toggleClass("show"),e.find(".fa-chevron-down").toggleClass("rotated")}).on("click.wilang",".wilang-item",function(o){o.stopPropagation(),setTimeout(()=>location.href=a(this).data("url"),200)}).on("click.wilang",o=>{a(o.target).closest(".midw_v1").length||(a(".wilang-content").removeClass("show"),a(".fa-chevron-down").removeClass("rotated"))})};a(()=>K());const U=o=>`
    <div class="menu-item">
      <div class="item-header">
        <h3>${t.mostrarIconos&&o.icono?`<i class="fas ${o.icono}"></i> `:""}${o.titulo||""}</h3>
        <span class="price">${S(o.precio)}</span>
      </div>
      ${o.descripcion?`<p class="description">${o.descripcion}</p>`:""}
      <div class="dotted-line"></div>
    </div>`,W=(o,e,s)=>{const r=s[o]||{},l=r.icono||t.iconoHoja,d=r.imagen||t.imagenDefault,m=r.nota?`<p class="menu-note"><i class="fas fa-info-circle"></i> ${r.nota}</p>`:"";return`
    <div class="webz" data-hoja="${o}">
      <div class="webx">
        <img src="${d}" alt="Menú ${r.titulo||`Hoja ${o}`}" loading="lazy"
             onerror="this.src='${t.imagenDefault}';this.onerror=null;">
      </div>
      <div class="weby">
        <div class="menu-column">
          <header class="menu-header">
            <h2 class="menu-category"><i class="fas ${l}"></i> ${r.titulo||`Hoja ${o}`}</h2>
          </header>
          <div class="menu-content">
            ${e.length?e.map(U).join(""):'<p class="no-items">No hay elementos disponibles</p>'}
          </div>
          ${m}
        </div>
      </div>
    </div>
    <div class="separador"><span class="sep-number">${o}</span></div>`},D=()=>{const o=Object.entries(b).map(([e,s])=>`<div class="wilang-item" data-lang="${e}" data-url="${s.url}">
      <img src="${s.bandera}" alt="${s.nombre}" class="flag-icon">
      <span>${s.nombre}</span>
    </div>`).join("");return`
    <header class="hd">
      <h1 class="wilang">
        <span class="wilang_titu">Idioma: </span>
        <div class="midw_v1">
          <div class="wilang-trigger">
            <div class="wilang-selected">
              <img src="${b.es.bandera}" alt="${b.es.nombre}" class="flag-icon">
              <span>${b.es.nombre}</span>
            </div>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="wilang-content">${o}</div>
        </div>
      </h1>
    </header>`},P=(o,e)=>{const s=a("#menu-app"),l=o.filter(i=>$(i.estado)).reduce((i,n)=>{const c=+(n.hoja||0);return(i[c]||(i[c]=[])).push(n),i},{}),d=Object.keys(e).map(Number).filter(i=>i>0).sort((i,n)=>{const c=Object.values(e).find(g=>g.numero===i),u=Object.values(e).find(g=>g.numero===n);return(c?.orden||0)-(u?.orden||0)});if(!d.length){s.html(D()+'<p class="no-items txc">No hay menús disponibles</p>'),w();return}const m=d.map(i=>{const n=(l[i]||[]).sort((c,u)=>+(c.orden||0)-+(u.orden||0)||String(c.titulo||"").localeCompare(String(u.titulo||"")));return W(i,n,e)}).join("");s.html(D()+m),w();const p=s.find("img").toArray();Promise.all(p.map(i=>i.complete?Promise.resolve():new Promise(n=>{i.onload=i.onerror=n}))).then(()=>document.fonts?.ready||Promise.resolve()).then(()=>setTimeout(R,80))};async function L(){const o=/\brefresh=1\b/i.test(location.search),e=(y(t.cacheCartas)||[]).filter(l=>$(l.estado)),s=(y(t.cacheHojas)||[]).filter(l=>$(l.estado)),r=Object.fromEntries(s.map(l=>[l.numero,l]));e.length&&Object.keys(r).length&&!o&&P(e,r);try{const[l,d]=await Promise.all([j(k(H(x,t.colCartas),E("estado","==","activo"),A(t.limiteCartas))),j(k(H(x,t.colHojas),E("estado","==","activo"),A(t.limiteHojas)))]),m=l.docs.map(n=>({id:n.id,...n.data()})),p=d.docs.map(n=>({id:n.id,...n.data()})),i=Object.fromEntries(p.map(n=>[n.numero,n]));C(t.cacheCartas,m,t.horasCache),C(t.cacheHojas,p,t.horasCache),P(m,i)}catch(l){console.error("Error cargando menú:",l),e.length||a("#menu-app").html(`
        <div class="error-state">
          <i class="fas fa-exclamation-triangle"></i>
          <h2>No se pudo cargar el menú</h2>
          <p>Verifica tu conexión e intenta nuevamente.</p>
          <button class="retry-btn" onclick="location.reload()"><i class="fas fa-redo"></i> Reintentar</button>
        </div>`)}}a(()=>{L(),a(document).on("keydown",o=>{o.ctrlKey&&o.shiftKey&&o.key.toUpperCase()==="R"&&(N(t.cacheCartas,t.cacheHojas),location.reload())})});window.hawkaMenu={recargar:L,limpiarCache:()=>N(t.cacheCartas,t.cacheHojas)};
