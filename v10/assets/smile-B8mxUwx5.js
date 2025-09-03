import{o as R,$ as n,b as D,r as k,M as b,g as y,a as w,q as H,c as $,d as f,w as L,s as j,e as S,i as W,N as u,f as _,h as E,j as A,k as I,l as P,m as M,n as Z,p as O,t as x}from"./widev-BzlULCAM.js";import"./wiauth-DFjqR4O4.js";R(S,async g=>{if(!g)return window.location.href="/";try{const r=y("wiSmile");if(r)return T(r);const c=(await w(H($(f,"smiles"),L("usuario","==",g.displayName)))).docs[0].data();j("wiSmile",c,450),T(c)}catch(r){console.error(r)}});n(document).on("click",".bt_salir",async()=>{await D(S),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(r=>localStorage.removeItem(r))}});n(document).on("click",".bt_cargar",()=>{k("hojasdbCache","cartasdbCache","wiSmile"),b("Cache limpiado"),setTimeout(()=>location.reload(),800)});function T(g){console.log(g.nombre),b(`¡Bienvenido ${g.nombre}!`),n(".app").html(`
    <header class="hd">
      <nav class="nv dfw wdp">
        <a class="logo nv_left" href="#Logo">
          <h1>
            <span class="nv_titulo"><i class="fas fa-utensils logo-icon"></i> Cartas Hawka</span>
            <span class="nv_descri">| Administra títulos, descripciones y precios</span>
          </h1>
        </a>
        <div class="logo nv_right dfw">
          <div class="witemas dpf"></div>
          <button class="bt_recargar" title="Recargar datos"><i class="fa-solid fa-arrow-rotate-right"></i></button>
          <button class="bt_login"><i class="fas fa-user"></i> ${g.usuario}</button>
          <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> Salir</button>
        </div>
      </nav>
    </header>

    <main class="dashboard-grid">
      <section class="section-1">
        <div class="section-header">
          <h2><i class="fas fa-layer-group"></i> Hojas</h2>
          <button class="bt_add_hoja"><i class="fa fa-plus"></i> ADD</button>
        </div>
        <div class="hojas-list" id="hojasList"></div>
      </section>

      <section class="section-2">
        <div class="section-header">
          <h2><i class="fas fa-list"></i> Seleccionado: <span id="hojaSeleccionada">Hoja 1</span></h2>
          <button class="bt_add_plato"><i class="fa fa-plus"></i> ADD</button>
        </div>
        <div class="platos-list" id="platosList"></div>
      </section>

      <section class="section-3">
        <div class="section-header">
          <h2><i class="fas fa-edit"></i> Seleccionado: <span id="platoSeleccionado">Selecciona un plato</span></h2>
        </div>
        <div class="plato-editor" id="platoEditor">
          <div class="editor-field">
            <label>Título <span class="field-tip">Ingresa el nombre del plato</span></label>
            <input type="text" id="editorTitulo" placeholder="Ej: CONTINENTAL" />
          </div>
          <div class="editor-field">
            <label>Descripción <span class="field-tip">Detalla los ingredientes</span></label>
            <textarea id="editorDescripcion" placeholder="Jugo de piña o papaya + pan con mantequilla..."></textarea>
          </div>
          <div class="editor-field">
            <label>Precio <span class="field-tip">Solo números con decimales. Ej: 19.90</span></label>
            <input type="number" id="editorPrecio" placeholder="19.90" min="0" step="0.01" />
          </div>
          <div class="editor-field">
            <label>Orden <span class="field-tip">Orden de aparición (se asigna automáticamente)</span></label>
            <input type="number" id="editorOrden" placeholder="1" min="0" step="1" />
          </div>
          <div class="editor-field">
            <label>Estado</label>
            <select id="editorEstado">
              <option value="activo">Disponible</option>
              <option value="desactivo">No disponible</option>
            </select>
          </div>
          <div class="editor-actions">
            <button class="bt_guardar_plato"><i class="fa fa-save"></i> Guardar</button>
            <button class="bt_eliminar_plato"><i class="fa fa-trash"></i> Eliminar</button>
          </div>
        </div>
      </section>

      <section class="section-4">
        <div class="section-header">
          <h2><i class="fas fa-eye"></i> Vista previa de Hoja</h2>
        </div>
        <div class="preview-container" id="previewContainer"></div>
      </section>
    </main>

    <footer class='foo hwb txc'>
      <p>Creado con<i class="fa fa-heart"></i>by<a class='ftx lkme' href='https://wtaype.github.io/' target='_blank'>@wilder.taype</a>2025 - <span class="wty"></span><span class="abw tm11042025" id="101542394703517594">| Acerca del app | Actualizado</span><span class="wtu"></span></p>
    </footer>
  `);const r={COL_HOJAS:"hojasdb",COL_CARTAS:"cartasdb",CACHE_HOJAS:"hojasdbCache",CACHE_CARTAS:"cartasdbCache",CACHE_HRS:{hojas:24,cartas:6}},t={hojas:y(r.CACHE_HOJAS)||[],cartas:y(r.CACHE_CARTAS)||[],hojaActiva:1,platoActivo:null,dirtyItems:{hojas:new Set,cartas:new Set},tempCounter:1},c={fmtPrecio:a=>a==null?"0.00":Number(a).toFixed(2),getHoja:a=>t.hojas.find(e=>e.numero===a),getPlatos:a=>t.cartas.filter(e=>e.hoja===a),nextIds:{hoja:()=>`hoja_${Math.max(0,...t.hojas.filter(a=>!a.id.startsWith("temp_")&&a.id.startsWith("hoja_")).map(a=>parseInt(a.id.replace("hoja_",""))||0))+1}`,carta:()=>`carta_h${String(Math.max(0,...t.cartas.map(a=>+(a.id.match(/carta_h(\d+)/)?.[1]||0)))+1).padStart(2,"0")}`,temp:()=>`temp_${t.tempCounter++}`},spinner:{set:(a,e,i="Guardando...")=>{e?a.data("original",a.html()).prop("disabled",!0).addClass("spinning").html(`<i class="fa fa-spinner fa-spin"></i> ${i}`):a.prop("disabled",!1).removeClass("spinning").html(a.data("original")||a.html())}}},p={hojas:()=>{const a=n("#hojasList"),e=t.hojas.slice().sort((s,l)=>(s.numero||0)-(l.numero||0));if(!e.length)return a.html('<div class="empty-state"><i class="fas fa-layer-group"></i><p>No hay hojas creadas</p></div>');const i=e.map(s=>{const l=c.getPlatos(s.numero).filter(d=>d.estado==="activo").length;return`
          <div class="hoja-item ${[t.hojaActiva===s.numero?"active":"",t.dirtyItems.hojas.has(s.id)?"dirty":"",s.id.startsWith("temp_")?"temp-item":""].filter(Boolean).join(" ")}" data-hoja="${s.numero}" data-id="${s.id}">
            <div class="hoja-content">
              <div class="hoja-icon">
                <i class="fas ${s.icono||"fa-utensils"}"></i>
              </div>
              <div class="hoja-info">
                <h3>Hoja ${s.numero}</h3>
                <input type="text" class="hoja-titulo" value="${s.titulo||""}" placeholder="Título de la hoja" data-temp-id="ht_${s.id}" />
                <div class="imagen-group">
                  <input type="url" class="hoja-imagen" value="${s.imagen||""}" placeholder="https://i.postimg.cc/..." data-temp-id="hi_${s.id}" />
                  <i class="fas fa-info-circle imagen-info" title="Ingresa un link de imagen válido (postimg.cc recomendado)"></i>
                </div>
                <div class="nota-group">
                  <input type="text" class="hoja-nota" value="${s.nota||""}" placeholder="Nota adicional (opcional)" data-temp-id="hn_${s.id}" />
                  <i class="fas fa-info-circle nota-info" title="Texto que aparecerá debajo del título en el menú público"></i>
                </div>
                <small>${l} platos activos ${s.id.startsWith("temp_")?"(sin guardar)":""}</small>
              </div>
            </div>
            <div class="hoja-actions">
              <button class="bt_guardar_hoja" title="Guardar cambios"><i class="fa fa-save"></i></button>
              <button class="bt_eliminar_hoja" title="Eliminar hoja"><i class="fa fa-trash"></i></button>
            </div>
          </div>
        `}).join("");a.html(i)},platos:()=>{const a=n("#platosList"),e=n("#hojaSeleccionada"),i=c.getHoja(t.hojaActiva),s=c.getPlatos(t.hojaActiva).sort((o,d)=>{const m=Number(o.orden||0),h=Number(d.orden||0);return m!==h?m-h:String(o.titulo||"").localeCompare(String(d.titulo||""))});if(e.text(i?.titulo||"Sin título"),!s.length)return a.html('<div class="empty-state"><i class="fas fa-utensils"></i><p>No hay platos en esta hoja</p></div>');const l=s.map(o=>`
          <div class="plato-item ${[t.platoActivo===o.id?"active":"",t.dirtyItems.cartas.has(o.id)?"dirty":"",o.id.startsWith("temp_")?"temp-item":"",o.estado==="activo"?"disponible":"no-disponible"].filter(Boolean).join(" ")}" data-id="${o.id}">
            <div class="plato-content">
              <div class="plato-orden">${o.orden||0}</div>
              <div class="plato-info">
                <h4>${o.titulo||"Sin título"} ${o.id.startsWith("temp_")?"(nuevo)":""}</h4>
                <p>${(o.descripcion||"").substring(0,50)}${(o.descripcion||"").length>50?"...":""}</p>
                <span class="plato-precio">S/ ${c.fmtPrecio(o.precio)}</span>
              </div>
              <div class="plato-estado">
                <i class="fas ${o.estado==="activo"?"fa-check-circle":"fa-times-circle"}"></i>
              </div>
            </div>
          </div>
        `).join("");a.html(l)},editor:()=>{const a=t.platoActivo?t.cartas.find(l=>l.id===t.platoActivo):null,e=n("#platoSeleccionado");if(!a){e.text("Selecciona un plato para editar"),["#editorTitulo","#editorDescripcion","#editorPrecio","#editorOrden"].forEach(l=>n(l).val("")),n("#editorEstado").val("activo");return}const i=a.id.startsWith("temp_")?" (nuevo - sin guardar)":"";e.text(`Hoja ${a.hoja} - ${a.titulo||"Sin título"}${i}`);const s={"#editorTitulo":a.titulo||"","#editorDescripcion":a.descripcion||"","#editorPrecio":a.precio||"","#editorOrden":a.orden||0,"#editorEstado":a.estado||"activo"};Object.entries(s).forEach(([l,o])=>n(l).val(o))},preview:()=>{const a=n("#previewContainer"),e=c.getHoja(t.hojaActiva),i=c.getPlatos(t.hojaActiva).filter(o=>o.estado==="activo").sort((o,d)=>{const m=Number(o.orden||0),h=Number(d.orden||0);return m!==h?m-h:String(o.titulo||"").localeCompare(String(d.titulo||""))}),s=i.map(o=>`
        <div class="preview-item">
          <div class="preview-header">
            <h3>${o.titulo||"Sin título"}</h3>
            <span class="preview-price">S/ ${c.fmtPrecio(o.precio)}</span>
          </div>
          <p class="preview-description">${o.descripcion||""}</p>
          <div class="preview-divider"></div>
        </div>
      `).join(""),l=e?.imagen?`<img src="${e.imagen}" alt="Menu imagen" class="preview-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBlbmNvbnRyYWRhPC90ZXh0Pjwvc3ZnPg=='" />`:'<div class="no-image"><i class="fas fa-image"></i><p>Sin imagen</p></div>';a.html(`
        <div class="mobile-preview">
          <div class="preview-header-section">
            ${l}
          </div>
          <div class="preview-content">
            <h2 class="preview-title">
              <i class="fas ${e?.icono||"fa-utensils"}"></i>
              ${e?.titulo||"Sin título"}
            </h2>
            <p class="nota_preview">${e?.nota||""}</p>
            <div class="preview-items">
              ${i.length?s:'<p class="no-items">No hay platos disponibles</p>'}
            </div>
          </div>
        </div>
      `)},all:()=>{p.hojas(),p.platos(),p.editor(),p.preview()}},C={load:async()=>{try{I(!0);const[a,e]=await Promise.all([w(H($(f,r.COL_HOJAS),P(50))),w(H($(f,r.COL_CARTAS),P(500)))]);t.hojas=a.docs.map(i=>({id:i.id,...i.data()})),t.cartas=e.docs.map(i=>({id:i.id,...i.data()})),j(r.CACHE_HOJAS,t.hojas,r.CACHE_HRS.hojas),j(r.CACHE_CARTAS,t.cartas,r.CACHE_HRS.cartas),p.all(),u("Datos cargados exitosamente","success",1800)}catch(a){console.error(a),u("Error al cargar datos","error")}finally{I(!1)}},saveHoja:async a=>{const e=n(`.hoja-item[data-id="${a}"]`),i=t.hojas.find(v=>v.id===a);if(!i)return;const[s,l,o]=[".hoja-titulo",".hoja-imagen",".hoja-nota"].map(v=>e.find(v).val().trim());if(!s)return u("El título es requerido","warning");const d=a.startsWith("temp_"),m=d?c.nextIds.hoja():a,h={numero:i.numero,titulo:s,imagen:l,nota:o,icono:i.icono||"fa-utensils",estado:i.estado||"activo",orden:i.orden||i.numero,creacion:d?_():i.creacion,actualizacion:_(),poremail:S.currentUser?.email||"sin-email",porusuario:S.currentUser?.displayName||"sin-usuario"};if(await E(A(f,r.COL_HOJAS,m),h),d){const v=t.hojas.findIndex(N=>N.id===a);t.hojas[v]={id:m,...h},t.dirtyItems.hojas.delete(a)}else Object.assign(i,{titulo:s,imagen:l,nota:o}),t.dirtyItems.hojas.delete(a);j(r.CACHE_HOJAS,t.hojas,r.CACHE_HRS.hojas),p.all(),b("Hoja guardada exitosamente")},savePlato:async a=>{const e=t.cartas.find(d=>d.id===a);if(!e)return;const i=["#editorTitulo","#editorDescripcion","#editorPrecio","#editorOrden","#editorEstado"].reduce((d,m)=>{const h=n(m),v=m.replace("#editor","").toLowerCase();return d[v]=v==="precio"?h.val()===""?null:Number(h.val()):v==="orden"?Number(h.val())||0:h.val().trim(),d},{});if(!i.titulo)return u("El título es requerido","warning");if(i.precio!==null&&(isNaN(i.precio)||i.precio<0))return u("Precio debe ser un número válido","warning");const s=a.startsWith("temp_"),l=s?c.nextIds.carta():a,o={titulo:i.titulo,descripcion:i.descripcion,precio:i.precio,orden:i.orden,estado:i.estado,hoja:e.hoja,creacion:s?_():e.creacion,actualizacion:_()};if(await E(A(f,r.COL_CARTAS,l),o),s){const d=t.cartas.findIndex(m=>m.id===a);t.cartas[d]={id:l,...o},t.dirtyItems.cartas.delete(a),t.platoActivo=l}else Object.assign(e,i),t.dirtyItems.cartas.delete(a);j(r.CACHE_CARTAS,t.cartas,r.CACHE_HRS.cartas),p.all(),b("Plato guardado exitosamente")}};({init:()=>{n(document).on("click",".hoja-item",function(){const a=Number(n(this).data("hoja"));a!==t.hojaActiva&&(t.hojaActiva=a,t.platoActivo=null,n(".hoja-item").removeClass("active"),n(this).addClass("active"),p.platos(),p.editor(),p.preview())}),n(document).on("click",".plato-item",function(){const a=n(this).data("id");a!==t.platoActivo&&(t.platoActivo=a,n(".plato-item").removeClass("active"),n(this).addClass("active"),p.editor())}),n(document).on("input",".hoja-titulo, .hoja-imagen, .hoja-nota",function(){const a=n(this).closest(".hoja-item").data("id");t.dirtyItems.hojas.add(a),n(this).closest(".hoja-item").addClass("dirty")}),n(document).on("input change","#editorTitulo, #editorDescripcion, #editorPrecio, #editorOrden, #editorEstado",function(){t.platoActivo&&(t.dirtyItems.cartas.add(t.platoActivo),n(`.plato-item[data-id="${t.platoActivo}"]`).addClass("dirty"))}),n(document).on("click",".bt_add_hoja",function(){const a=Math.max(0,...t.hojas.map(i=>i.numero||0))+1,e={id:c.nextIds.temp(),numero:a,titulo:`Nueva Hoja ${a}`,icono:"fa-utensils",imagen:"",nota:"",estado:"activo",orden:a};t.hojas.push(e),t.dirtyItems.hojas.add(e.id),t.hojaActiva=a,p.all(),u("Nueva hoja agregada - Recuerda guardar","info",2e3)}),n(document).on("click",".bt_add_plato",function(){if(!c.getHoja(t.hojaActiva))return u("Crea una hoja primero","warning");const a=Math.max(0,...c.getPlatos(t.hojaActiva).map(i=>+i.orden||0))+1,e={id:c.nextIds.temp(),titulo:"NUEVO PLATO",descripcion:"",precio:null,estado:"activo",hoja:t.hojaActiva,orden:a};t.cartas.push(e),t.dirtyItems.cartas.add(e.id),t.platoActivo=e.id,p.all(),u("Nuevo plato agregado - Recuerda guardar","info",2e3)}),n(document).on("click",".bt_guardar_hoja",async function(){const a=n(this),e=a.closest(".hoja-item").data("id");try{c.spinner.set(a,!0),await C.saveHoja(e)}catch(i){console.error(i),u("Error al guardar hoja","error")}finally{c.spinner.set(a,!1)}}),n(document).on("click",".bt_guardar_plato",async function(){if(!t.platoActivo)return u("Selecciona un plato","warning");const a=n(this);try{c.spinner.set(a,!0),await C.savePlato(t.platoActivo)}catch(e){console.error(e),u("Error al guardar plato","error")}finally{c.spinner.set(a,!1)}}),n(document).on("click",".bt_eliminar_plato",async function(){if(!t.platoActivo)return u("Selecciona un plato","warning");const a=t.cartas.find(i=>i.id===t.platoActivo);if(!confirm(`¿Eliminar "${a?.titulo||t.platoActivo}"?`))return;const e=n(this);try{c.spinner.set(e,!0,"Eliminando..."),t.platoActivo.startsWith("temp_")||await M(A(f,r.COL_CARTAS,t.platoActivo)),t.cartas=t.cartas.filter(i=>i.id!==t.platoActivo),t.dirtyItems.cartas.delete(t.platoActivo),j(r.CACHE_CARTAS,t.cartas,r.CACHE_HRS.cartas),t.platoActivo=null,p.all(),b("Plato eliminado exitosamente")}catch(i){console.error(i),u("Error al eliminar plato","error")}finally{c.spinner.set(e,!1)}}),n(document).on("click",".bt_eliminar_hoja",async function(){const a=n(this),e=a.closest(".hoja-item").data("id"),i=t.hojas.find(o=>o.id===e);if(!i)return;const s=c.getPlatos(i.numero);let l=`¿Eliminar hoja "${i.titulo}"?`;if(s.length>0&&(l+=`

Advertencia: También se eliminarán ${s.length} platos de esta hoja.`),!!confirm(l))try{if(c.spinner.set(a,!0,"Eliminando..."),!e.startsWith("temp_")){const o=Z(f);o.delete(A(f,r.COL_HOJAS,e)),s.forEach(d=>{d.id.startsWith("temp_")||o.delete(A(f,r.COL_CARTAS,d.id))}),await o.commit()}t.hojas=t.hojas.filter(o=>o.id!==e),t.cartas=t.cartas.filter(o=>o.hoja!==i.numero),j(r.CACHE_HOJAS,t.hojas,r.CACHE_HRS.hojas),j(r.CACHE_CARTAS,t.cartas,r.CACHE_HRS.cartas),t.dirtyItems.hojas.delete(e),t.platoActivo=null,t.hojaActiva===i.numero&&(t.hojaActiva=t.hojas.length>0?t.hojas[0].numero:1),p.all(),b(`Hoja eliminada${s.length>0?` junto con ${s.length} platos`:""}`)}catch(o){console.error(o),u("Error al eliminar hoja","error")}finally{c.spinner.set(a,!1)}}),n(document).on("click",".bt_recargar",C.load),O(".hoja-titulo, .hoja-imagen, .hoja-nota","data-temp-id",a=>a.val()),O("#editorTitulo, #editorDescripcion, #editorPrecio, #editorOrden, #editorEstado","id",a=>a.val()),x(".hoja-titulo, .hoja-imagen, .hoja-nota","data-temp-id",(a,e)=>a.val(e)),x("#editorTitulo, #editorDescripcion, #editorPrecio, #editorOrden, #editorEstado","id",(a,e)=>a.val(e))}}).init(),p.all(),W(),(t.hojas.length===0||t.cartas.length===0)&&C.load()}
