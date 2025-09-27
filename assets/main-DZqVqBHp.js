import{$ as e,r as S,g as C,a as f,q as g,c as v,d as w,w as A,l as b,s as $}from"./widev-BeKaoXyd.js";/* empty css              */const y=()=>e(".webz").each((o,a)=>e(a).find(".webx").height(e(a).find(".weby").outerHeight())),O=(()=>{let o;return()=>(clearTimeout(o),o=setTimeout(y,120))})();e(O);e(window).on("load resize orientationchange",O);e(()=>{const o=e(".midw_v1"),a=o.find(".wilang-content");o.on("click",".wilang-trigger",d=>(d.stopPropagation(),a.toggleClass("show"),o.find(".fa-chevron-down").toggleClass("rotated"))).on("click",".wilang-item",function(){a.removeClass("show"),setTimeout(()=>location.href=e(this).data("url"),200)}),e(document).on("click",()=>(a.removeClass("show"),o.find(".fa-chevron-down").removeClass("rotated")))});const l=window.smile||{},n={COL_CARTAS:l.colCartas||"cartasdb",COL_HOJAS:l.colHojas||"hojasdb",C_CARTAS:l.cacheCartasKey||"cartasdbCachePublic",C_HOJAS:l.cacheHojasKey||"hojasdbCachePublic",HRS:l.cacheHoras||6,LIM_CARTAS:l.limCartas||500,LIM_HOJAS:l.limHojas||50,IMG_FALLBACK:l.imgFallback||"https://i.postimg.cc/KvN8qF2P/menu-default.jpg",ICONO_HOJA:l.iconoHoja||"fa-utensils",CURRENCY:l.currency||"S/",SHOW_ICONS:l.showIcons!==!1},u=o=>String(o||"").toLowerCase()==="activo",j=o=>o==null||o===""?"":`${n.CURRENCY}${(+o).toFixed(2)}`,R=o=>`
    <div class="menu-item">
      <div class="item-header">
        <h3>${n.SHOW_ICONS&&o.icono?`<i class="fas ${o.icono}"></i> `:""}${o.titulo||""}</h3>
        <span class="price">${j(o.precio)}</span>
      </div>
      ${o.descripcion?`<p class="description">${o.descripcion}</p>`:""}
      <div class="dotted-line"></div>
    </div>`,L=(o,a,d)=>{const t=d[o]||{},i=t.icono||n.ICONO_HOJA,c=t.imagen||n.IMG_FALLBACK,h=t.nota?`<p class="menu-note"><i class="fas fa-info-circle"></i> ${t.nota}</p>`:"";return`
    <div class="webz" data-hoja="${o}">
      <div class="webx">
        <img src="${c}" alt="Menú ${t.titulo||`Hoja ${o}`}" loading="lazy"
             onerror="this.src='${n.IMG_FALLBACK}';this.onerror=null;">
        <div class="image-overlay"><i class="fas ${i}"></i></div>
      </div>
      <div class="weby">
        <div class="menu-column">
          <header class="menu-header">
            <h2 class="menu-category"><i class="fas ${i}"></i> ${t.titulo||`Hoja ${o}`}</h2>
            ${h}
          </header>
          <div class="menu-content">
            ${a.length?a.map(R).join(""):'<p class="no-items">No hay elementos disponibles</p>'}
          </div>
        </div>
      </div>
    </div>
    <div class="separador"><span class="sep-number">${o}</span></div>`},H=(o,a)=>{const d=e("#menu-app"),i=o.filter(s=>u(s.estado)).reduce((s,r)=>((s[r.hoja=+r.hoja||0]||(s[r.hoja]=[])).push(r),s),{}),c=Object.keys(a).map(Number).filter(s=>s>0).sort((s,r)=>s-r);if(!c.length)return d.html('<p class="no-items txc">No hay menús disponibles</p>');d.html(c.map(s=>{const r=(i[s]||[]).sort((m,p)=>+(m.orden||0)-+(p.orden||0)||String(m.titulo||"").localeCompare(String(p.titulo||"")));return L(s,r,a)}).join(""));const h=d.find("img").toArray();Promise.all(h.map(s=>s.complete?Promise.resolve():new Promise(r=>{s.onload=s.onerror=r}))).then(()=>document.fonts?.ready||Promise.resolve()).then(()=>setTimeout(y,80))};async function _(){const o=/\brefresh=1\b/i.test(location.search)||l.noCache,a=(C(n.C_CARTAS)||[]).filter(i=>u(i.estado)),d=(C(n.C_HOJAS)||[]).filter(i=>u(i.estado)),t=Object.fromEntries(d.map(i=>[i.numero,i]));a.length&&Object.keys(t).length&&!o&&H(a,t);try{const[i,c]=await Promise.all([f(g(v(w,n.COL_CARTAS),A("estado","==","activo"),b(n.LIM_CARTAS))),f(g(v(w,n.COL_HOJAS),A("estado","==","activo"),b(n.LIM_HOJAS)))]),h=i.docs.map(m=>({id:m.id,...m.data()})),s=c.docs.map(m=>({id:m.id,...m.data()})),r=Object.fromEntries(s.map(m=>[m.numero,m]));$(n.C_CARTAS,h,n.HRS),$(n.C_HOJAS,s,n.HRS),H(h,r)}catch(i){console.error("Error cargando menú:",i),a.length||e("#menu-app").html(`
      <div class="error-state">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>No se pudo cargar el menú</h2>
        <p>Verifica tu conexión e intenta nuevamente.</p>
        <button class="retry-btn" onclick="location.reload()"><i class="fas fa-redo"></i> Reintentar</button>
      </div>`)}}e(()=>{_(),e(document).on("keydown",o=>{o.ctrlKey&&o.shiftKey&&o.key.toUpperCase()==="R"&&(S(n.C_CARTAS,n.C_HOJAS),location.reload())})});window.hawkaMenu={reload:_,clearCache:()=>S(n.C_CARTAS,n.C_HOJAS)};e(()=>{const o=t=>e(t).addClass("show").attr("aria-hidden","false"),a=t=>t.removeClass("show").attr("aria-hidden","true");e(document).on("click","[data-modal]",function(t){t.preventDefault(),o(e(this).data("modal"))}),e(document).on("click",".modal-close,.modal .modal-ok,.modal .modal-cancel",function(){a(e(this).closest(".modal"))}),e(document).on("click",".modal",function(t){t.target===this&&a(e(this))});const d=window.smile?.emailReclamos||"hawka.reclamos@example.com";e(document).on("submit","#reclamosForm",function(t){t.preventDefault();const i=new FormData(this),c=Object.fromEntries(i.entries());if(!c.nombres||!c.email||!c.detalle||!i.get("consent"))return alert("Completa los campos obligatorios.");const h=[`Nombre: ${c.nombres}`,`Email: ${c.email}`,`Teléfono: ${c.telefono||"-"}`,`Pedido: ${c.pedido||"-"}`,"Detalle:",c.detalle].join(`
`),s=`mailto:${encodeURIComponent(d)}?subject=${encodeURIComponent("Reclamo - Cartas Hawka")}&body=${encodeURIComponent(h)}`;window.location.href=s,alert("Gracias. Tu reclamo será atendido."),this.reset(),a(e("#modal-recl"))}),e(".wty").text(new Date().getFullYear())});
