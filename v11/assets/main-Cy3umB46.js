import{$ as i,r as w,g as u,a as f,q as g,c as A,d as S,w as v,l as H,s as O}from"./widev-CXG1Fo2-.js";/* empty css              */const $=()=>i(".webz").each((o,e)=>i(e).find(".webx").height(i(e).find(".weby").outerHeight())),b=(()=>{let o;return()=>(clearTimeout(o),o=setTimeout($,120))})();i(b);i(window).on("load resize orientationchange",b);i(()=>{const o=i(".midw_v1"),e=o.find(".wilang-content");o.on("click",".wilang-trigger",d=>(d.stopPropagation(),e.toggleClass("show"),o.find(".fa-chevron-down").toggleClass("rotated"))).on("click",".wilang-item",function(){e.removeClass("show"),setTimeout(()=>location.href=i(this).data("url"),200)}),i(document).on("click",()=>(e.removeClass("show"),o.find(".fa-chevron-down").removeClass("rotated")))});const c=window.smile||{},a={COL_CARTAS:c.colCartas||"cartasdb",COL_HOJAS:c.colHojas||"hojasdb",C_CARTAS:c.cacheCartasKey||"cartasdbCachePublic",C_HOJAS:c.cacheHojasKey||"hojasdbCachePublic",HRS:c.cacheHoras||6,LIM_CARTAS:c.limCartas||500,LIM_HOJAS:c.limHojas||50,IMG_FALLBACK:c.imgFallback||"https://i.postimg.cc/KvN8qF2P/menu-default.jpg",ICONO_HOJA:c.iconoHoja||"fa-utensils",CURRENCY:c.currency||"S/",SHOW_ESTADO:c.showEstado!==!1,SHOW_ITEM_STATUS:!!c.showItemStatus,SHOW_ICONS:c.showIcons!==!1},h=o=>String(o||"").toLowerCase()==="activo",j=o=>o==null||o===""?"":`${a.CURRENCY}${(+o).toFixed(2)}`,T=o=>{const e=h(o.estado),d=a.SHOW_ICONS&&o.icono?`<i class="fas ${o.icono}"></i> `:"",t=a.SHOW_ITEM_STATUS&&o.estado?`<span class="badge ${e?"ok":"off"}">${o.estado}</span>`:"";return`
    <div class="menu-item${e?"":" is-off"}">
      <div class="item-header">
        <h3>${d}${o.titulo||""} ${t}</h3>
        <span class="price">${j(o.precio)}</span>
      </div>
      ${o.descripcion?`<p class="description">${o.descripcion}</p>`:""}
      <div class="dotted-line"></div>
    </div>`},R=(o,e,d)=>{const t=d[o]||{},n=t.icono||a.ICONO_HOJA,p=t.imagen||a.IMG_FALLBACK,m=t.nota?`<p class="menu-note"><i class="fas fa-info-circle"></i> ${t.nota}</p>`:"",s=a.SHOW_ESTADO&&t.estado?`<span class="badge ${h(t.estado)?"ok":"off"}">${t.estado}</span>`:"";return`
    <div class="webz" data-hoja="${o}">
      <div class="webx">
        <img src="${p}" alt="Menú ${t.titulo||`Hoja ${o}`}" loading="lazy"
             onerror="this.src='${a.IMG_FALLBACK}';this.onerror=null;">
        <div class="image-overlay"><i class="fas ${n}"></i></div>
      </div>
      <div class="weby">
        <div class="menu-column">
          <header class="menu-header">
            <h2 class="menu-category"><i class="fas ${n}"></i> ${t.titulo||`Hoja ${o}`} ${s}</h2>
            ${m}
          </header>
          <div class="menu-content">
            ${e.length?e.map(T).join(""):'<p class="no-items">No hay elementos disponibles</p>'}
          </div>
        </div>
      </div>
    </div>
    <div class="separador"><span class="sep-number">${o}</span></div>`},_=(o,e)=>{const d=i("#menu-app"),n=o.filter(s=>h(s.estado)).reduce((s,r)=>((s[r.hoja=+r.hoja||0]||(s[r.hoja]=[])).push(r),s),{}),p=Object.keys(e).map(Number).filter(s=>s>0&&h(e[s].estado)).sort((s,r)=>s-r);d.html(p.map(s=>{const r=(n[s]||[]).sort((l,C)=>+(l.orden||0)-+(C.orden||0)||String(l.titulo||"").localeCompare(String(C.titulo||"")));return R(s,r,e)}).join(""));const m=d.find("img").toArray();Promise.all(m.map(s=>s.complete?Promise.resolve():new Promise(r=>{s.onload=s.onerror=r}))).then(()=>document.fonts?.ready||Promise.resolve()).then(()=>setTimeout($,80))};async function y(){const o=/\brefresh=1\b/i.test(location.search)||c.noCache,e=(u(a.C_CARTAS)||[]).filter(n=>h(n.estado)),d=(u(a.C_HOJAS)||[]).filter(n=>h(n.estado)),t=Object.fromEntries(d.map(n=>[n.numero,n]));e.length&&Object.keys(t).length&&!o&&_(e,t);try{const[n,p]=await Promise.all([f(g(A(S,a.COL_CARTAS),v("estado","==","activo"),H(a.LIM_CARTAS))),f(g(A(S,a.COL_HOJAS),v("estado","==","activo"),H(a.LIM_HOJAS)))]),m=n.docs.map(l=>({id:l.id,...l.data()})),s=p.docs.map(l=>({id:l.id,...l.data()})),r=Object.fromEntries(s.map(l=>[l.numero,l]));O(a.C_CARTAS,m,a.HRS),O(a.C_HOJAS,s,a.HRS),_(m,r)}catch(n){console.error("Error cargando menú:",n),e.length||i("#menu-app").html(`
      <div class="error-state">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>No se pudo cargar el menú</h2>
        <p>Verifica tu conexión e intenta nuevamente.</p>
        <button class="retry-btn" onclick="location.reload()"><i class="fas fa-redo"></i> Reintentar</button>
      </div>`)}}i(document).ready(()=>{y(),i(document).on("keydown",o=>{o.ctrlKey&&o.shiftKey&&o.key.toUpperCase()==="R"&&(w(a.C_CARTAS,a.C_HOJAS),location.reload())})});window.hawkaMenu={reload:y,clearCache:()=>w(a.C_CARTAS,a.C_HOJAS)};
