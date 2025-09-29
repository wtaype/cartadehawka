import{x as L,$ as e,y as M,r as W,M as j,i as H,d as C,a as u,j as b,l as m,t as $,b as E,q as O,c as T,e as J,h as y,z as q,N as d,A as x,v as P,B as z,C as B,D as N,E as R}from"./widev-CMKF5hkg.js";let D=null;L(y,async p=>{if(!p)return location.href="/";D=p;try{const c=$("wiSmile");if(c)return k(c);const g=(await E(O(T(u,"smiles"),J("usuario","==",p.displayName)))).docs[0]?.data();if(!g)return;m("wiSmile",g,450),k(g)}catch(c){console.error(c)}});e(document).on("click",".bt_salir",async()=>{await M(y);try{localStorage.clear()}catch{}location.href="/"});e(document).on("click",".bt_cargar",()=>{W("hojasdbCache","cartasdbCache","wiSmile"),j("Cache limpiado"),setTimeout(()=>location.reload(),700)});function k(p){e(".app").html(`
  <header class="hd">
    <nav class="nv dfw wdp">
      <a class="logo nv_left"><h1><span class="nv_titulo"><i class="fas fa-utensils logo-icon"></i> Cartas Hawka</span><span class="nv_descri">| Administra títulos, descripciones y precios</span></h1></a>
      <div class="logo nv_right dfw">
        <div class="witemas dpf"></div>
        <button class="bt_recargar" title="Recargar datos"><i class="fa-solid fa-arrow-rotate-right"></i></button>
        <button class="bt_login"><i class="fas fa-user"></i> ${p.usuario}</button>
        <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> Salir</button>
      </div>
    </nav>
  </header>
  <main class="dashboard-grid">
    <section class="section-1">
      <div class="section-header"><h2><i class="fas fa-layer-group"></i> Hojas</h2><button class="bt_add_hoja"><i class="fa fa-plus"></i> Agregar</button></div>
      <div class="hojas-list" id="hojasList"></div>
    </section>
    <section class="section-2">
      <div class="section-header"><h2><i class="fas fa-list"></i> Seleccionado: <span id="hojaSeleccionada">Hoja 1</span></h2><button class="bt_add_plato"><i class="fa fa-plus"></i> ADD</button></div>
      <div class="platos-list" id="platosList"></div>
    </section>
    <section class="section-3">
      <div class="section-header"><h2><i class="fas fa-edit"></i> Seleccionado: <span id="platoSeleccionado">Selecciona un plato</span></h2></div>
      <div class="plato-editor" id="platoEditor">
        <div class="editor-field"><label>Título</label><input type="text" id="editorTitulo" placeholder="Ej: CONTINENTAL"/></div>
        <div class="editor-field"><label>Descripción</label><textarea id="editorDescripcion" placeholder="Ingredientes..."></textarea></div>
        <div class="editor-field"><label>Precio</label><input type="number" id="editorPrecio" min="0" step="0.01" placeholder="19.90"/></div>
        <div class="editor-field"><label>Orden</label><input type="number" id="editorOrden" min="0" step="1" placeholder="1"/></div>
        <div class="editor-field"><label>Estado</label>
          <select id="editorEstado"><option value="activo">Disponible</option><option value="desactivo">No disponible</option></select>
        </div>
        <div class="editor-actions">
          <button class="bt_guardar_plato"><i class="fa fa-save"></i> Guardar</button>
          <button class="bt_eliminar_plato"><i class="fa fa-trash"></i> Eliminar</button>
        </div>
      </div>
    </section>
    <section class="section-4">
      <div class="section-header"><h2><i class="fas fa-eye"></i> Vista previa de Hoja</h2></div>
      <div class="preview-container" id="previewContainer"></div>
    </section>
  </main>
  <footer class='foo hwb txc'>
    <p>Creado con<i class="fa fa-heart"></i>by<a class='ftx lkme' href='https://wtaype.github.io/' target='_blank'>@wilder.taype</a>2025 - <span class="wty"></span><span class="abw tm11042025">| Acerca del app | Actualizado</span></p>
  </footer>`),j(`¡Bienvenido ${p.nombre}!`);const c={COL_HOJAS:"hojasdb",COL_CARTAS:"cartasdb",CACHE_HOJAS:"hojasdbCache",CACHE_CARTAS:"cartasdbCache",CACHE_HRS:{hojas:24,cartas:6}},f=[{value:"fa-utensils",title:"Tenedores"},{value:"fa-mug-hot",title:"Café"},{value:"fa-bread-slice",title:"Sandwich"}],g={activo:{value:"activo",icon:"fa-eye",title:"Activo"},desactivo:{value:"desactivo",icon:"fa-eye-slash",title:"Desactivo"}},t={hojas:$(c.CACHE_HOJAS)||[],cartas:$(c.CACHE_CARTAS)||[],hojaActiva:1,platoActivo:null,dirty:{hojas:new Set,cartas:new Set},tempCounter:1},l={fmt:a=>a==null?"0.00":Number(a).toFixed(2),getHoja:a=>t.hojas.find(i=>i.numero===a),getPlatos:a=>t.cartas.filter(i=>i.hoja===a),nextIds:{hoja:()=>`hoja_${Math.max(0,...t.hojas.filter(a=>!a.id.startsWith("temp_")&&/^hoja_/.test(a.id)).map(a=>+a.id.replace("hoja_","")||0))+1}`,carta:()=>`carta_h${String(Math.max(0,...t.cartas.map(a=>+(a.id.match(/carta_h(\d+)/)?.[1]||0)))+1).padStart(2,"0")}`,temp:()=>`temp_${t.tempCounter++}`},iconMeta:a=>f.find(i=>i.value===a)||f[0],nextIcon:a=>f[(f.findIndex(i=>i.value===a)+1+f.length)%f.length].value,estadoMeta:a=>g[a]||g.activo,spin:(a,i,o="Guardando...")=>{i?a.data("o",a.html()).prop("disabled",!0).html(`<i class="fa fa-spinner fa-spin"></i> ${o}`):a.prop("disabled",!1).html(a.data("o")||a.html())}},r={hojas:()=>{const a=e("#hojasList"),i=[...t.hojas].sort((o,s)=>(o.numero||0)-(s.numero||0));if(!i.length)return a.html('<div class="empty-state"><i class="fas fa-layer-group"></i><p>No hay hojas</p></div>');a.html(i.map(o=>{o.icono=o.icono||"fa-utensils",o.estado=o.estado||"activo";const s=l.iconMeta(o.icono),n=l.estadoMeta(o.estado),v=l.getPlatos(o.numero).filter(A=>A.estado==="activo").length;return`
        <div class="hoja-item ${[t.hojaActiva===o.numero?"active":"",t.dirty.hojas.has(o.id)?"dirty":"",o.id.startsWith("temp_")?"temp-item":"",o.estado==="desactivo"?"inactive":""].filter(Boolean).join(" ")}" data-hoja="${o.numero}" data-id="${o.id}">
          <div class="hoja-content">
            <button type="button" class="hoja-icon-toggle" title="${s.title}" data-icon="${s.value}">
              <i class="fas ${s.value}"></i>
            </button>
            <div class="hoja-info">
              <h3>Hoja ${o.numero}</h3>
              <input type="text" class="hoja-titulo" value="${o.titulo||""}" placeholder="Título"/>
              <input type="url" class="hoja-imagen" value="${o.imagen||""}" placeholder="https://i.postimg.cc/..."/>
              <input type="text" class="hoja-nota" value="${o.nota||""}" placeholder="Nota (opcional)"/>
              <p class="nplatos">${v} platos activos ${o.id.startsWith("temp_")?"(sin guardar)":""}</p>
            </div>
          </div>
          <div class="hoja-actions">
            <button type="button" class="hoja-estado-toggle" title="${n.title}" data-estado="${n.value}">
              <i class="fas ${n.icon}"></i>
            </button>
            <button class="bt_guardar_hoja" title="Guardar"><i class="fa fa-save"></i></button>
            <button class="bt_eliminar_hoja" title="Eliminar"><i class="fa fa-trash"></i></button>
          </div>
        </div>`}).join(""))},platos:()=>{const a=e("#platosList"),i=l.getHoja(t.hojaActiva);e("#hojaSeleccionada").text(i?.titulo||"Sin título");const o=l.getPlatos(t.hojaActiva).sort((s,n)=>{const v=+s.orden||0,h=+n.orden||0;return v!==h?v-h:String(s.titulo||"").localeCompare(n.titulo||"")});if(!o.length)return a.html('<div class="empty-state"><i class="fas fa-utensils"></i><p>No hay platos</p></div>');a.html(o.map(s=>`<div class="plato-item ${[t.platoActivo===s.id?"active":"",t.dirty.cartas.has(s.id)?"dirty":"",s.id.startsWith("temp_")?"temp-item":"",s.estado==="activo"?"disponible":"no-disponible"].filter(Boolean).join(" ")}" data-id="${s.id}">
          <div class="plato-content">
            <div class="plato-orden">${s.orden||0}</div>
            <div class="plato-info">
              <h4>${s.titulo||"Sin título"} ${s.id.startsWith("temp_")?"(nuevo)":""}</h4>
              <p>${(s.descripcion||"").slice(0,60)}${(s.descripcion||"").length>60?"...":""}</p>
              <span class="plato-precio">S/ ${l.fmt(s.precio)}</span>
            </div>
            <div class="plato-estado"><i class="fas ${s.estado==="activo"?"fa-check-circle":"fa-times-circle"}"></i></div>
          </div>
        </div>`).join(""))},editor:()=>{const a=t.platoActivo?t.cartas.find(i=>i.id===t.platoActivo):null;if(!a){e("#platoSeleccionado").text("Selecciona un plato para editar"),e("#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden").val(""),e("#editorEstado").val("activo");return}e("#platoSeleccionado").text(`Hoja ${a.hoja} - ${a.titulo||"Sin título"}${a.id.startsWith("temp_")?" (nuevo)":""}`),e("#editorTitulo").val(a.titulo||""),e("#editorDescripcion").val(a.descripcion||""),e("#editorPrecio").val(a.precio==null?"":a.precio),e("#editorOrden").val(a.orden||0),e("#editorEstado").val(a.estado||"activo")},preview:()=>{const a=l.getHoja(t.hojaActiva)||{},i=l.iconMeta(a.icono),o=l.getPlatos(t.hojaActiva).filter(s=>s.estado==="activo").sort((s,n)=>(s.orden||0)-(n.orden||0));e("#previewContainer").html(`
        <div class="mobile-preview">
          <div class="preview-header-section">
            ${a.imagen?`<img src="${a.imagen}" alt="imagen" class="preview-image" onerror="this.remove()">`:'<div class="no-image"><i class="fas fa-image"></i><p>Sin imagen</p></div>'}
          </div>
          <div class="preview-content">
            <h2 class="preview-title"><i class="fas ${i.value}"></i> ${a.titulo||"Sin título"}</h2>
            <p class="nota_preview">${a.nota||""}</p>
            <div class="preview-items">
              ${o.length?o.map(s=>`
                <div class="preview-item">
                  <div class="preview-header">
                    <h3>${s.titulo||"Sin título"}</h3>
                    <span class="preview-price">S/ ${l.fmt(s.precio)}</span>
                  </div>
                  <p class="preview-description">${s.descripcion||""}</p>
                  <div class="preview-divider"></div>
                </div>`).join(""):'<p class="no-items">No hay platos disponibles</p>'}
            </div>
          </div>
        </div>`)},all(){this.hojas(),this.platos(),this.editor(),this.preview()}},_={load:async()=>{try{x(!0);const[a,i]=await Promise.all([E(O(T(u,c.COL_HOJAS),P(50))),E(O(T(u,c.COL_CARTAS),P(500)))]);t.hojas=a.docs.map(o=>({id:o.id,...o.data()})),t.cartas=i.docs.map(o=>({id:o.id,...o.data()})),m(c.CACHE_HOJAS,t.hojas,c.CACHE_HRS.hojas),m(c.CACHE_CARTAS,t.cartas,c.CACHE_HRS.cartas),r.all(),d("Datos cargados","success",1500)}catch(a){console.error(a),d("Error al cargar","error")}finally{x(!1)}},saveHoja:async a=>{const i=t.hojas.find(w=>w.id===a);if(!i)return;const o=e(`.hoja-item[data-id="${a}"]`),s=o.find(".hoja-titulo").val().trim();if(!s)return d("Título requerido","warning");const n=o.find(".hoja-imagen").val().trim(),v=o.find(".hoja-nota").val().trim(),h=a.startsWith("temp_"),A=h?l.nextIds.hoja():a,S={numero:i.numero,titulo:s,imagen:n,nota:v,icono:i.icono||"fa-utensils",estado:i.estado==="desactivo"?"desactivo":"activo",orden:i.orden||i.numero,creacion:h?b():i.creacion,actualizacion:b(),poremail:y.currentUser?.email||"sin-email",porusuario:y.currentUser?.displayName||"sin-usuario"};if(await H(C(u,c.COL_HOJAS,A),S),h){const w=t.hojas.findIndex(I=>I.id===a);t.hojas[w]={id:A,...S}}else Object.assign(i,S);t.dirty.hojas.delete(a),m(c.CACHE_HOJAS,t.hojas,c.CACHE_HRS.hojas),r.all(),j("Hoja guardada")},savePlato:async a=>{const i=t.cartas.find(h=>h.id===a);if(!i)return;const o={titulo:e("#editorTitulo").val().trim(),descripcion:e("#editorDescripcion").val().trim(),precio:e("#editorPrecio").val()===""?null:Number(e("#editorPrecio").val()),orden:Number(e("#editorOrden").val())||0,estado:e("#editorEstado").val()};if(!o.titulo)return d("Título requerido","warning");if(o.precio!=null&&(isNaN(o.precio)||o.precio<0))return d("Precio inválido","warning");const s=a.startsWith("temp_"),n=s?l.nextIds.carta():a,v={...o,hoja:i.hoja,creacion:s?b():i.creacion,actualizacion:b()};if(await H(C(u,c.COL_CARTAS,n),v),s){const h=t.cartas.findIndex(A=>A.id===a);t.cartas[h]={id:n,...v},t.platoActivo=n}else Object.assign(i,o);t.dirty.cartas.delete(a),m(c.CACHE_CARTAS,t.cartas,c.CACHE_HRS.cartas),r.all(),j("Plato guardado")}};(()=>{e(document).on("click",".hoja-item",function(a){if(e(a.target).closest(".hoja-actions,button").length)return;const i=+e(this).data("hoja");i!==t.hojaActiva&&(t.hojaActiva=i,t.platoActivo=null,r.platos(),r.editor(),r.preview()),e(".hoja-item").removeClass("active"),e(this).addClass("active")}),e(document).on("click",".plato-item",function(){const a=e(this).data("id");a!==t.platoActivo&&(t.platoActivo=a,r.editor()),e(".plato-item").removeClass("active"),e(this).addClass("active")}),e(document).on("input",".hoja-titulo,.hoja-imagen,.hoja-nota",function(){const a=e(this).closest(".hoja-item").data("id");t.dirty.hojas.add(a),e(this).closest(".hoja-item").addClass("dirty")}),e(document).on("input change","#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden,#editorEstado",()=>{t.platoActivo&&(t.dirty.cartas.add(t.platoActivo),e(`.plato-item[data-id="${t.platoActivo}"]`).addClass("dirty"))}),e(document).on("click",".bt_add_hoja",()=>{const a=Math.max(0,...t.hojas.map(o=>o.numero||0))+1,i={id:l.nextIds.temp(),numero:a,titulo:`Nueva Hoja ${a}`,icono:"fa-utensils",imagen:"",nota:"",estado:"activo",orden:a};t.hojas.push(i),t.dirty.hojas.add(i.id),t.hojaActiva=a,r.all(),d("Hoja agregada","info",1500)}),e(document).on("click",".bt_add_plato",()=>{if(!l.getHoja(t.hojaActiva))return d("Crea una hoja","warning");const a=Math.max(0,...l.getPlatos(t.hojaActiva).map(o=>+o.orden||0))+1,i={id:l.nextIds.temp(),titulo:"NUEVO PLATO",descripcion:"",precio:null,estado:"activo",hoja:t.hojaActiva,orden:a};t.cartas.push(i),t.dirty.cartas.add(i.id),t.platoActivo=i.id,r.all(),d("Plato agregado","info",1500)}),e(document).on("click",".bt_guardar_hoja",async function(){const a=e(this).closest(".hoja-item").data("id");try{l.spin(e(this),!0),await _.saveHoja(a)}catch(i){console.error(i),d("Error","error")}finally{l.spin(e(this),!1)}}),e(document).on("click",".bt_guardar_plato",async function(){if(!t.platoActivo)return d("Selecciona un plato","warning");try{l.spin(e(this),!0),await _.savePlato(t.platoActivo)}catch(a){console.error(a),d("Error","error")}finally{l.spin(e(this),!1)}}),e(document).on("click",".bt_eliminar_plato",async function(){if(!t.platoActivo)return;const a=t.cartas.find(i=>i.id===t.platoActivo);if(confirm(`¿Eliminar "${a?.titulo||"Plato"}"?`))try{l.spin(e(this),!0,"Eliminando..."),t.platoActivo.startsWith("temp_")||await z(C(u,c.COL_CARTAS,t.platoActivo)),t.cartas=t.cartas.filter(i=>i.id!==t.platoActivo),t.dirty.cartas.delete(t.platoActivo),t.platoActivo=null,m(c.CACHE_CARTAS,t.cartas,c.CACHE_HRS.cartas),r.all(),j("Plato eliminado")}catch(i){console.error(i),d("Error","error")}finally{l.spin(e(this),!1)}}),e(document).on("click",".bt_eliminar_hoja",async function(){const a=e(this).closest(".hoja-item").data("id"),i=t.hojas.find(s=>s.id===a);if(!i)return;const o=l.getPlatos(i.numero);if(confirm(`¿Eliminar hoja "${i.titulo}"${o.length?` y ${o.length} platos`:""}?`))try{if(l.spin(e(this),!0,"Eliminando..."),!a.startsWith("temp_")){const s=B(u);s.delete(C(u,c.COL_HOJAS,a)),o.forEach(n=>{n.id.startsWith("temp_")||s.delete(C(u,c.COL_CARTAS,n.id))}),await s.commit()}t.hojas=t.hojas.filter(s=>s.id!==a),t.cartas=t.cartas.filter(s=>s.hoja!==i.numero),t.dirty.hojas.delete(a),t.hojaActiva===i.numero&&(t.hojaActiva=t.hojas[0]?.numero||1),t.platoActivo=null,m(c.CACHE_HOJAS,t.hojas,c.CACHE_HRS.hojas),m(c.CACHE_CARTAS,t.cartas,c.CACHE_HRS.cartas),r.all(),j("Hoja eliminada")}catch(s){console.error(s),d("Error","error")}finally{l.spin(e(this),!1)}}),e(document).on("click",".bt_recargar",_.load),e(document).on("click",".hoja-icon-toggle",function(a){a.stopPropagation();const i=e(this).closest(".hoja-item").data("id"),o=t.hojas.find(s=>s.id===i);o&&(o.icono=l.nextIcon(o.icono),t.dirty.hojas.add(i),r.hojas(),r.preview())}),e(document).on("click",".hoja-estado-toggle",function(a){a.stopPropagation();const i=e(this).closest(".hoja-item").data("id"),o=t.hojas.find(s=>s.id===i);o&&(o.estado=o.estado==="activo"?"desactivo":"activo",t.dirty.hojas.add(i),r.hojas(),r.preview())}),N(".hoja-titulo,.hoja-imagen,.hoja-nota","data-id",a=>a.val()),N("#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden,#editorEstado","id",a=>a.val()),R(".hoja-titulo,.hoja-imagen,.hoja-nota","data-id",(a,i)=>a.val(i)),R("#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden,#editorEstado","id",(a,i)=>a.val(i))})(),r.all(),q(),(!t.hojas.length||!t.cartas.length)&&_.load()}e(document).on("click",".tema",async function(){const p=e(this).data("tema");try{await H(C(u,"configuracion",D.displayName),{tema:p,actualizado:b()},{merge:!0}),m("wiTema",p,72),j('Tema guardado <i class="fa-solid fa-circle-check"></i>')}catch(c){console.error(c)}});
