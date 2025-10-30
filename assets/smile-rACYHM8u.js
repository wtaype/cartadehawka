import"./modulepreload-polyfill-B5Qt9EMX.js";import{r as I,g as $,s as j,$ as s,M as b,i as M,a as x,N as p,b as k,c as H}from"./widev-ClXCCnou.js";import{s as N,a as y,b as W,d as f,q as E,c as C,w as q,g as T,l as O,e as R,f as U,o as G,h as V,i as S}from"./init-ckCATEbZ.js";const c={colecciones:{hojas:"hojasdb",cartas:"cartasdb",perfil:"smiles",config:"configuracion"},cache:{hojas:"hojasdbCache",cartas:"cartasdbCache",perfil:"wiSmile"},horas:{hojas:24,cartas:6,perfil:450}},A=()=>W();function F(){I(c.cache.hojas,c.cache.cartas)}function B(){return{hojas:$(c.cache.hojas)||[],cartas:$(c.cache.cartas)||[]}}async function J(l){try{const r=$(c.cache.perfil);if(r)return r;const v=E(C(f,c.colecciones.perfil),q("usuario","==",l)),n=(await T(v)).docs[0]?.data()||null;return n&&j(c.cache.perfil,n,c.horas.perfil),n}catch(r){return console.error("cargarPerfilSmile",r),null}}async function K({forzar:l=!1}={}){const r=$(c.cache.hojas)||[],v=$(c.cache.cartas)||[];if(!l&&r.length&&v.length)return{hojas:r,cartas:v};try{const[o,n]=await Promise.all([T(E(C(f,c.colecciones.hojas),O(50))),T(E(C(f,c.colecciones.cartas),O(500)))]),h=o.docs.map(g=>({id:g.id,...g.data()})),w=n.docs.map(g=>({id:g.id,...g.data()}));return j(c.cache.hojas,h,c.horas.hojas),j(c.cache.cartas,w,c.horas.cartas),{hojas:h,cartas:w}}catch(o){return console.error("cargarHojasCartas",o),{hojas:r,cartas:v}}}async function Q(l,r){return await N(y(f,c.colecciones.hojas,l),r),{id:l,...r}}async function X(l,r){return await N(y(f,c.colecciones.cartas,l),r),{id:l,...r}}async function Y(l){await R(y(f,c.colecciones.cartas,l))}async function Z(l,r=[]){const v=U(f);v.delete(y(f,c.colecciones.hojas,l)),r.forEach(o=>v.delete(y(f,c.colecciones.cartas,o))),await v.commit()}async function aa(l,r){await N(y(f,c.colecciones.config,l),{tema:r,actualizado:W()},{merge:!0})}let z=null;G(S,async l=>{if(!l)return location.href="/";z=l;try{const r=await J(l.displayName);r&&oa(r)}catch(r){console.error(r)}});s(document).on("click",".bt_salir",async()=>{await V(S);try{localStorage.clear()}catch{}location.href="/"});s(document).on("click",".bt_cargar",()=>{F(),I(c.cache.perfil),b("Cache limpiado"),setTimeout(()=>location.reload(),700)});function oa(l){s(".app").html(`
  <header class="hd">
    <nav class="nv dfw wdp">
      <a class="logo nv_left"><h1><span class="nv_titulo"><i class="fas fa-utensils logo-icon"></i> Cartas Hawka</span><span class="nv_descri">| Administra títulos, descripciones y precios</span></h1></a>
      <div class="logo nv_right dfw">
        <div class="witemas dpf"></div>
        <button class="bt_recargar" title="Recargar datos"><i class="fa-solid fa-arrow-rotate-right"></i></button>
        <button class="bt_login"><i class="fas fa-user"></i> ${l.usuario}</button>
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
  </footer>`),b(`¡Bienvenido ${l.nombre}!`);const r=[{valor:"fa-utensils",titulo:"Tenedores"},{valor:"fa-mug-hot",titulo:"Café"},{valor:"fa-bread-slice",titulo:"Sandwich"}],v={activo:{valor:"activo",icono:"fa-eye",titulo:"Activo"},desactivo:{valor:"desactivo",icono:"fa-eye-slash",titulo:"Desactivo"}},o={hojas:B().hojas,cartas:B().cartas,hojaActiva:1,platoActivo:null,sucios:{hojas:new Set,cartas:new Set},conteoTemp:1},n={moneda:a=>a==null?"0.00":Number(a).toFixed(2),hojaPorNumero:a=>o.hojas.find(t=>t.numero===a),platosPorHoja:a=>o.cartas.filter(t=>t.hoja===a),idsSiguientes:{hoja:()=>`hoja_${Math.max(0,...o.hojas.filter(a=>!a.id.startsWith("temp_")&&/^hoja_/.test(a.id)).map(a=>+a.id.replace("hoja_","")||0))+1}`,carta:()=>`carta_h${String(Math.max(0,...o.cartas.map(a=>+(a.id.match(/carta_h(\d+)/)?.[1]||0)))+1).padStart(2,"0")}`,temp:()=>`temp_${o.conteoTemp++}`},metaIcono:a=>r.find(t=>t.valor===a)||r[0],rotarIcono:a=>r[(r.findIndex(t=>t.valor===a)+1+r.length)%r.length].valor,metaEstado:a=>v[a]||v.activo,spinner:(a,t,i="")=>{t?a.data("orig",a.html()).prop("disabled",!0).html(`<i class="fa fa-spinner fa-spin"></i> ${i}`):a.prop("disabled",!1).html(a.data("orig")||a.html())}},h={hojas:()=>{const a=s("#hojasList"),t=[...o.hojas].sort((i,e)=>(i.orden||0)-(e.orden||0));if(!t.length)return a.html('<div class="empty-state"><i class="fas fa-layer-group"></i><p>No hay hojas</p></div>');a.html(t.map(i=>{i.icono=i.icono||"fa-utensils",i.estado=i.estado||"activo";const e=n.metaIcono(i.icono),d=n.metaEstado(i.estado),u=n.platosPorHoja(i.numero).filter(_=>_.estado==="activo").length;return`
        <div class="hoja-item ${[o.hojaActiva===i.numero?"active":"",o.sucios.hojas.has(i.id)?"dirty":"",i.id.startsWith("temp_")?"temp-item":"",i.estado==="desactivo"?"inactive":""].filter(Boolean).join(" ")}" data-hoja="${i.numero}" data-id="${i.id}">
          <div class="hoja-content">
            <button type="button" class="hoja-icono-toggle" title="${e.titulo}" data-icono="${e.valor}">
              <i class="fas ${e.valor}"></i>
            </button>
            <div class="hoja-info">
              <h3>${i.titulo}</h3>
              <input type="text" class="hoja-titulo" value="${i.titulo||""}" placeholder="Título"/>
              <input type="url" class="hoja-imagen" value="${i.imagen||""}" placeholder="https://i.postimg.cc/..."/>
              <input type="text" class="hoja-nota" value="${i.nota||""}" placeholder="Nota (opcional)"/>
              <p class="nplatos">${u} platos activos ${i.id.startsWith("temp_")?"(sin guardar)":""}</p>
            </div>
          </div>
          <div class="hoja-actions">
            <button class="subir_hoja" title="Subir Orden"><i class="fa-solid fa-arrow-up"></i></button>
            <button class="bajar_hoja" title="Bajar Orden"><i class="fa-solid fa-arrow-down"></i></button>
            <button type="button" class="hoja-estado-toggle" title="${d.titulo}" data-estado="${d.valor}">
              <i class="fas ${d.icono}"></i>
            </button>
            <button class="bt_guardar_hoja" title="Guardar"><i class="fa fa-save"></i></button>
            <button class="bt_eliminar_hoja" title="Eliminar"><i class="fa fa-trash"></i></button>
          </div>
        </div>`}).join(""))},platos:()=>{const a=s("#platosList"),t=n.hojaPorNumero(o.hojaActiva);s("#hojaSeleccionada").text(t?.titulo||"Sin título");const i=n.platosPorHoja(o.hojaActiva).sort((e,d)=>{const u=+e.orden||0,m=+d.orden||0;return u!==m?u-m:String(e.titulo||"").localeCompare(d.titulo||"")});if(!i.length)return a.html('<div class="empty-state"><i class="fas fa-utensils"></i><p>No hay platos</p></div>');a.html(i.map(e=>`<div class="plato-item ${[o.platoActivo===e.id?"active":"",o.sucios.cartas.has(e.id)?"dirty":"",e.id.startsWith("temp_")?"temp-item":"",e.estado==="activo"?"disponible":"no-disponible"].filter(Boolean).join(" ")}" data-id="${e.id}">
          <div class="plato-content">
            <div class="plato-orden">${e.orden||0}</div>
            <div class="plato-info">
              <h4>${e.titulo||"Sin título"} ${e.id.startsWith("temp_")?"(nuevo)":""}</h4>
              <p>${(e.descripcion||"").slice(0,60)}${(e.descripcion||"").length>60?"...":""}</p>
              <span class="plato-precio">S/ ${n.moneda(e.precio)}</span>
            </div>
            <div class="plato-estado"><i class="fas ${e.estado==="activo"?"fa-check-circle":"fa-times-circle"}"></i></div>
          </div>
        </div>`).join(""))},editor:()=>{const a=o.platoActivo?o.cartas.find(t=>t.id===o.platoActivo):null;if(!a){s("#platoSeleccionado").text("Selecciona un plato para editar"),s("#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden").val(""),s("#editorEstado").val("activo");return}s("#platoSeleccionado").text(`Hoja ${a.hoja} - ${a.titulo||"Sin título"}${a.id.startsWith("temp_")?" (nuevo)":""}`),s("#editorTitulo").val(a.titulo||""),s("#editorDescripcion").val(a.descripcion||""),s("#editorPrecio").val(a.precio==null?"":a.precio),s("#editorOrden").val(a.orden||0),s("#editorEstado").val(a.estado||"activo")},previa:()=>{const a=n.hojaPorNumero(o.hojaActiva)||{},t=n.metaIcono(a.icono),i=n.platosPorHoja(o.hojaActiva).filter(e=>e.estado==="activo").sort((e,d)=>(e.orden||0)-(d.orden||0));s("#previewContainer").html(`
        <div class="mobile-preview">
          <div class="preview-header-section">
            ${a.imagen?`<img src="${a.imagen}" alt="imagen" class="preview-image" onerror="this.remove()">`:'<div class="no-image"><i class="fas fa-image"></i><p>Sin imagen</p></div>'}
          </div>
          <div class="preview-content">
            <h2 class="preview-title"><i class="fas ${t.valor}"></i> ${a.titulo||"Sin título"}</h2>
            <p class="nota_preview">${a.nota||""}</p>
            <div class="preview-items">
              ${i.length?i.map(e=>`
                <div class="preview-item">
                  <div class="preview-header">
                    <h3>${e.titulo||"Sin título"}</h3>
                    <span class="preview-price">S/ ${n.moneda(e.precio)}</span>
                  </div>
                  <p class="preview-description">${e.descripcion||""}</p>
                  <div class="preview-divider"></div>
                </div>`).join(""):'<p class="no-items">No hay platos disponibles</p>'}
            </div>
          </div>
        </div>`)},todo(){this.hojas(),this.platos(),this.editor(),this.previa()}};async function w(){try{x(!0);const{hojas:a,cartas:t}=await K({forzar:!0});o.hojas=a,o.cartas=t,h.todo(),p("Datos cargados","success",1500)}catch(a){console.error(a),p("Error al cargar","error")}finally{x(!1)}}function g(){s(document).on("click",".hoja-item",function(a){if(s(a.target).closest(".hoja-actions,button").length)return;const t=+s(this).data("hoja");t!==o.hojaActiva&&(o.hojaActiva=t,o.platoActivo=null,h.platos(),h.editor(),h.previa()),s(".hoja-item").removeClass("active"),s(this).addClass("active")}),s(document).on("click",".plato-item",function(){const a=s(this).data("id");a!==o.platoActivo&&(o.platoActivo=a,h.editor()),s(".plato-item").removeClass("active"),s(this).addClass("active")}),s(document).on("input",".hoja-titulo,.hoja-imagen,.hoja-nota",function(){const a=s(this).closest(".hoja-item").data("id");o.sucios.hojas.add(a),s(this).closest(".hoja-item").addClass("dirty")}),s(document).on("input change","#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden,#editorEstado",()=>{o.platoActivo&&(o.sucios.cartas.add(o.platoActivo),s(`.plato-item[data-id="${o.platoActivo}"]`).addClass("dirty"))}),s(document).on("click",".bt_add_hoja",()=>{const a=Math.max(0,...o.hojas.map(i=>i.numero||0))+1,t={id:n.idsSiguientes.temp(),numero:a,titulo:`Nueva Hoja ${a}`,icono:"fa-utensils",imagen:"",nota:"",estado:"activo",orden:a};o.hojas.push(t),o.sucios.hojas.add(t.id),o.hojaActiva=a,h.todo(),p("Hoja agregada","info",1500)}),s(document).on("click",".bt_add_plato",()=>{if(!n.hojaPorNumero(o.hojaActiva))return p("Crea una hoja","warning");const a=Math.max(0,...n.platosPorHoja(o.hojaActiva).map(i=>+i.orden||0))+1,t={id:n.idsSiguientes.temp(),titulo:"NUEVO PLATO",descripcion:"",precio:null,estado:"activo",hoja:o.hojaActiva,orden:a};o.cartas.push(t),o.sucios.cartas.add(t.id),o.platoActivo=t.id,h.todo(),p("Plato agregado","info",1500)}),s(document).on("click",".bt_guardar_hoja",async function(){const a=s(this).closest(".hoja-item").data("id");try{n.spinner(s(this),!0);const t=o.hojas.findIndex(L=>L.id===a);if(t<0)return;const i=s(`.hoja-item[data-id="${a}"]`),e=i.find(".hoja-titulo").val().trim();if(!e)return p("Título requerido","warning");const d=i.find(".hoja-imagen").val().trim(),u=i.find(".hoja-nota").val().trim(),m=o.hojas[t],_=a.startsWith("temp_"),D=_?n.idsSiguientes.hoja():a,P={numero:m.numero,titulo:e,imagen:d,nota:u,icono:m.icono||"fa-utensils",estado:m.estado==="desactivo"?"desactivo":"activo",orden:m.orden||m.numero,creacion:_?A():m.creacion,actualizacion:A(),poremail:S.currentUser?.email||"sin-email",porusuario:S.currentUser?.displayName||"sin-usuario"};await Q(D,P),_?o.hojas[t]={id:D,...P}:Object.assign(o.hojas[t],P),o.sucios.hojas.delete(a),j(c.cache.hojas,o.hojas,c.horas.hojas),h.todo(),b("Hoja guardada")}catch(t){console.error(t),p("Error","error")}finally{n.spinner(s(this),!1)}}),s(document).on("click",".bt_guardar_plato",async function(){if(!o.platoActivo)return p("Selecciona un plato","warning");try{n.spinner(s(this),!0);const a=o.cartas.find(u=>u.id===o.platoActivo);if(!a)return;const t={titulo:s("#editorTitulo").val().trim(),descripcion:s("#editorDescripcion").val().trim(),precio:s("#editorPrecio").val()===""?null:Number(s("#editorPrecio").val()),orden:Number(s("#editorOrden").val())||0,estado:s("#editorEstado").val()};if(!t.titulo)return p("Título requerido","warning");if(t.precio!=null&&(isNaN(t.precio)||t.precio<0))return p("Precio inválido","warning");const i=a.id.startsWith("temp_"),e=i?n.idsSiguientes.carta():a.id,d={...t,hoja:a.hoja,creacion:i?A():a.creacion,actualizacion:A()};if(await X(e,d),i){const u=o.cartas.findIndex(m=>m.id===a.id);o.cartas[u]={id:e,...d},o.platoActivo=e}else Object.assign(a,t);o.sucios.cartas.delete(a.id),j(c.cache.cartas,o.cartas,c.horas.cartas),h.todo(),b("Plato guardado")}catch(a){console.error(a),p("Error","error")}finally{n.spinner(s(this),!1)}}),s(document).on("click",".bt_eliminar_plato",async function(){if(!o.platoActivo)return;const a=o.cartas.find(t=>t.id===o.platoActivo);if(confirm(`¿Eliminar "${a?.titulo||"Plato"}"?`))try{n.spinner(s(this),!0,"Eliminando..."),o.platoActivo.startsWith("temp_")||await Y(o.platoActivo),o.cartas=o.cartas.filter(t=>t.id!==o.platoActivo),o.sucios.cartas.delete(o.platoActivo),o.platoActivo=null,j(c.cache.cartas,o.cartas,c.horas.cartas),h.todo(),b("Plato eliminado")}catch(t){console.error(t),p("Error","error")}finally{n.spinner(s(this),!1)}}),s(document).on("click",".bt_eliminar_hoja",async function(){const a=s(this).closest(".hoja-item").data("id"),t=o.hojas.find(e=>e.id===a);if(!t)return;const i=n.platosPorHoja(t.numero);if(confirm(`¿Eliminar hoja "${t.titulo}"${i.length?` y ${i.length} platos`:""}?`))try{n.spinner(s(this),!0,"Eliminando..."),a.startsWith("temp_")||await Z(a,i.filter(e=>!e.id.startsWith("temp_")).map(e=>e.id)),o.hojas=o.hojas.filter(e=>e.id!==a),o.cartas=o.cartas.filter(e=>e.hoja!==t.numero),o.sucios.hojas.delete(a),o.hojaActiva===t.numero&&(o.hojaActiva=o.hojas[0]?.numero||1),o.platoActivo=null,j(c.cache.hojas,o.hojas,c.horas.hojas),j(c.cache.cartas,o.cartas,c.horas.cartas),h.todo(),b("Hoja eliminada")}catch(e){console.error(e),p("Error","error")}finally{n.spinner(s(this),!1)}}),s(document).on("click",".bt_recargar",w),s(document).on("click",".hoja-icono-toggle",function(a){a.stopPropagation();const t=s(this).closest(".hoja-item").data("id"),i=o.hojas.find(e=>e.id===t);i&&(i.icono=n.rotarIcono(i.icono),o.sucios.hojas.add(t),h.hojas(),h.previa())}),s(document).on("click",".hoja-estado-toggle",function(a){a.stopPropagation();const t=s(this).closest(".hoja-item").data("id"),i=o.hojas.find(e=>e.id===t);i&&(i.estado=i.estado==="activo"?"desactivo":"activo",o.sucios.hojas.add(t),h.hojas(),h.previa())}),k(".hoja-titulo,.hoja-imagen,.hoja-nota","data-id",a=>a.val()),k("#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden,#editorEstado","id",a=>a.val()),H(".hoja-titulo,.hoja-imagen,.hoja-nota","data-id",(a,t)=>a.val(t)),H("#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden,#editorEstado","id",(a,t)=>a.val(t)),s(document).on("click",".subir_hoja",function(a){a.stopPropagation();const t=s(this).closest(".hoja-item").data("id"),i=o.hojas.find(d=>d.id===t);if(!i||i.orden<=1)return;const e=o.hojas.find(d=>d.orden===i.orden-1);e&&(e.orden=i.orden,o.sucios.hojas.add(e.id)),i.orden--,o.sucios.hojas.add(t),h.hojas()}),s(document).on("click",".bajar_hoja",function(a){a.stopPropagation();const t=s(this).closest(".hoja-item").data("id"),i=o.hojas.find(u=>u.id===t),e=Math.max(...o.hojas.map(u=>u.orden||0));if(!i||i.orden>=e)return;const d=o.hojas.find(u=>u.orden===i.orden+1);d&&(d.orden=i.orden,o.sucios.hojas.add(d.id)),i.orden++,o.sucios.hojas.add(t),h.hojas()})}g(),h.todo(),M(),(!o.hojas.length||!o.cartas.length)&&w()}s(document).on("click",".tema",async function(){const l=s(this).data("tema");try{await aa(z.displayName,l),j("wiTema",l,72),b('Tema guardado <i class="fa-solid fa-circle-check"></i>')}catch(r){console.error(r)}});
