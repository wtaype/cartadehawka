import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from './firebase/init.js';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc, getDocs, deleteDoc, collection, query, writeBatch, serverTimestamp, limit, where } from "firebase/firestore";
import { Mensaje, Notificacion, savels, getls, removels, gosaves, getsaves, showLoading, infoo } from './widev.js';

let userAuth = null; //Para guardar usuario
onAuthStateChanged(auth, async user=>{
  if(!user) return location.href='/';
  userAuth = user; //Guardando usuario
  try{
    const wi=getls('wiSmile');
    if(wi) return main(wi);
    const q=await getDocs(query(collection(db,'smiles'), where('usuario','==', user.displayName)));
    const data=q.docs[0]?.data(); if(!data) return;
    savels('wiSmile',data,450); main(data);
  }catch(e){console.error(e)}
});

$(document).on('click','.bt_salir',async()=>{
  await signOut(auth); try{localStorage.clear()}catch(_){};
  location.href='/';
});
$(document).on('click','.bt_cargar',()=>{
  removels('hojasdbCache','cartasdbCache','wiSmile');
  Mensaje('Cache limpiado'); setTimeout(()=>location.reload(),700);
});

function main(wi){
  $('.app').html(`
  <header class="hd">
    <nav class="nv dfw wdp">
      <a class="logo nv_left"><h1><span class="nv_titulo"><i class="fas fa-utensils logo-icon"></i> Cartas Hawka</span><span class="nv_descri">| Administra títulos, descripciones y precios</span></h1></a>
      <div class="logo nv_right dfw">
        <div class="witemas dpf"></div>
        <button class="bt_recargar" title="Recargar datos"><i class="fa-solid fa-arrow-rotate-right"></i></button>
        <button class="bt_login"><i class="fas fa-user"></i> ${wi.usuario}</button>
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
  </footer>`);

  Mensaje(`¡Bienvenido ${wi.nombre}!`);

  const CONFIG={COL_HOJAS:'hojasdb',COL_CARTAS:'cartasdb',CACHE_HOJAS:'hojasdbCache',CACHE_CARTAS:'cartasdbCache',CACHE_HRS:{hojas:24,cartas:6}};
  const ICONS=[
    {value:'fa-utensils',title:'Tenedores'},
    {value:'fa-mug-hot',title:'Café'},
    {value:'fa-bread-slice',title:'Sandwich'}
  ];
  const ESTADOS={
    activo:{value:'activo',icon:'fa-eye',title:'Activo'},
    desactivo:{value:'desactivo',icon:'fa-eye-slash',title:'Desactivo'}
  };
  const state={
    hojas:getls(CONFIG.CACHE_HOJAS)||[],
    cartas:getls(CONFIG.CACHE_CARTAS)||[],
    hojaActiva:1, platoActivo:null,
    dirty:{hojas:new Set(),cartas:new Set()},
    tempCounter:1
  };
  const utils={
    fmt:p=>p==null?'0.00':Number(p).toFixed(2),
    getHoja:n=>state.hojas.find(h=>h.numero===n),
    getPlatos:n=>state.cartas.filter(c=>c.hoja===n),
    nextIds:{
      hoja:()=>`hoja_${Math.max(0,...state.hojas.filter(h=>!h.id.startsWith('temp_')&&/^hoja_/.test(h.id)).map(h=>+h.id.replace('hoja_','')||0))+1}`,
      carta:()=>`carta_h${String(Math.max(0,...state.cartas.map(d=>+(d.id.match(/carta_h(\d+)/)?.[1]||0)))+1).padStart(2,'0')}`,
      temp:()=>`temp_${state.tempCounter++}`
    },
    iconMeta:v=>ICONS.find(i=>i.value===v)||ICONS[0],
    nextIcon:v=>ICONS[(ICONS.findIndex(i=>i.value===v)+1+ICONS.length)%ICONS.length].value,
    estadoMeta:v=>ESTADOS[v]||ESTADOS.activo,
    spin:($b,a,t='Guardando...')=>{
      if(a){$b.data('o',$b.html()).prop('disabled',true).html(`<i class="fa fa-spinner fa-spin"></i> ${t}`);}
      else{$b.prop('disabled',false).html($b.data('o')||$b.html());}
    }
  };

  const render={
    hojas:()=>{
      const $l=$('#hojasList');
      const arr=[...state.hojas].sort((a,b)=>(a.numero||0)-(b.numero||0));
      if(!arr.length) return $l.html('<div class="empty-state"><i class="fas fa-layer-group"></i><p>No hay hojas</p></div>');
      $l.html(arr.map(h=>{
        h.icono=h.icono||'fa-utensils'; h.estado=h.estado||'activo';
        const ic=utils.iconMeta(h.icono), es=utils.estadoMeta(h.estado);
        const platosAct=utils.getPlatos(h.numero).filter(c=>c.estado==='activo').length;
        const cls=[
          state.hojaActiva===h.numero?'active':'',
          state.dirty.hojas.has(h.id)?'dirty':'',
          h.id.startsWith('temp_')?'temp-item':'',
          h.estado==='desactivo'?'inactive':''
        ].filter(Boolean).join(' ');
        return `
        <div class="hoja-item ${cls}" data-hoja="${h.numero}" data-id="${h.id}">
          <div class="hoja-content">
            <button type="button" class="hoja-icon-toggle" title="${ic.title}" data-icon="${ic.value}">
              <i class="fas ${ic.value}"></i>
            </button>
            <div class="hoja-info">
              <h3>Hoja ${h.numero}</h3>
              <input type="text" class="hoja-titulo" value="${h.titulo||''}" placeholder="Título"/>
              <input type="url" class="hoja-imagen" value="${h.imagen||''}" placeholder="https://i.postimg.cc/..."/>
              <input type="text" class="hoja-nota" value="${h.nota||''}" placeholder="Nota (opcional)"/>
              <p class="nplatos">${platosAct} platos activos ${h.id.startsWith('temp_')?'(sin guardar)':''}</p>
            </div>
          </div>
          <div class="hoja-actions">
            <button type="button" class="hoja-estado-toggle" title="${es.title}" data-estado="${es.value}">
              <i class="fas ${es.icon}"></i>
            </button>
            <button class="bt_guardar_hoja" title="Guardar"><i class="fa fa-save"></i></button>
            <button class="bt_eliminar_hoja" title="Eliminar"><i class="fa fa-trash"></i></button>
          </div>
        </div>`;
      }).join(''));
    },
    platos:()=>{
      const $l=$('#platosList'), hoja=utils.getHoja(state.hojaActiva);
      $('#hojaSeleccionada').text(hoja?.titulo||'Sin título');
      const platos=utils.getPlatos(state.hojaActiva).sort((a,b)=>{
        const ao=+a.orden||0,bo=+b.orden||0; return ao!==bo?ao-bo:String(a.titulo||'').localeCompare(b.titulo||'');
      });
      if(!platos.length) return $l.html('<div class="empty-state"><i class="fas fa-utensils"></i><p>No hay platos</p></div>');
      $l.html(platos.map(p=>{
        const cls=[
          state.platoActivo===p.id?'active':'',
          state.dirty.cartas.has(p.id)?'dirty':'',
          p.id.startsWith('temp_')?'temp-item':'',
          p.estado==='activo'?'disponible':'no-disponible'
        ].filter(Boolean).join(' ');
        return `<div class="plato-item ${cls}" data-id="${p.id}">
          <div class="plato-content">
            <div class="plato-orden">${p.orden||0}</div>
            <div class="plato-info">
              <h4>${p.titulo||'Sin título'} ${p.id.startsWith('temp_')?'(nuevo)':''}</h4>
              <p>${(p.descripcion||'').slice(0,60)}${(p.descripcion||'').length>60?'...':''}</p>
              <span class="plato-precio">S/ ${utils.fmt(p.precio)}</span>
            </div>
            <div class="plato-estado"><i class="fas ${p.estado==='activo'?'fa-check-circle':'fa-times-circle'}"></i></div>
          </div>
        </div>`;
      }).join(''));
    },
    editor:()=>{
      const p=state.platoActivo?state.cartas.find(x=>x.id===state.platoActivo):null;
      if(!p){
        $('#platoSeleccionado').text('Selecciona un plato para editar');
        $('#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden').val('');
        $('#editorEstado').val('activo'); return;
      }
      $('#platoSeleccionado').text(`Hoja ${p.hoja} - ${p.titulo||'Sin título'}${p.id.startsWith('temp_')?' (nuevo)':''}`);
      $('#editorTitulo').val(p.titulo||'');
      $('#editorDescripcion').val(p.descripcion||'');
      $('#editorPrecio').val(p.precio==null?'':p.precio);
      $('#editorOrden').val(p.orden||0);
      $('#editorEstado').val(p.estado||'activo');
    },
    preview:()=>{
      const h=utils.getHoja(state.hojaActiva)||{};
      const ic=utils.iconMeta(h.icono);
      const platos=utils.getPlatos(state.hojaActiva).filter(p=>p.estado==='activo')
        .sort((a,b)=> (a.orden||0)-(b.orden||0));
      $('#previewContainer').html(`
        <div class="mobile-preview">
          <div class="preview-header-section">
            ${h.imagen?`<img src="${h.imagen}" alt="imagen" class="preview-image" onerror="this.remove()">`:`<div class="no-image"><i class="fas fa-image"></i><p>Sin imagen</p></div>`}
          </div>
          <div class="preview-content">
            <h2 class="preview-title"><i class="fas ${ic.value}"></i> ${h.titulo||'Sin título'}</h2>
            <p class="nota_preview">${h.nota||''}</p>
            <div class="preview-items">
              ${platos.length?platos.map(p=>`
                <div class="preview-item">
                  <div class="preview-header">
                    <h3>${p.titulo||'Sin título'}</h3>
                    <span class="preview-price">S/ ${utils.fmt(p.precio)}</span>
                  </div>
                  <p class="preview-description">${p.descripcion||''}</p>
                  <div class="preview-divider"></div>
                </div>`).join(''):'<p class="no-items">No hay platos disponibles</p>'}
            </div>
          </div>
        </div>`);
    },
    all(){this.hojas();this.platos();this.editor();this.preview();}
  };

  const firebase={
    load:async()=>{
      try{
        showLoading(true);
        const [hs,ps]=await Promise.all([
          getDocs(query(collection(db,CONFIG.COL_HOJAS),limit(50))),
          getDocs(query(collection(db,CONFIG.COL_CARTAS),limit(500)))
        ]);
        state.hojas=hs.docs.map(d=>({id:d.id,...d.data()}));
        state.cartas=ps.docs.map(d=>({id:d.id,...d.data()}));
        savels(CONFIG.CACHE_HOJAS,state.hojas,CONFIG.CACHE_HRS.hojas);
        savels(CONFIG.CACHE_CARTAS,state.cartas,CONFIG.CACHE_HRS.cartas);
        render.all(); Notificacion('Datos cargados','success',1500);
      }catch(e){console.error(e);Notificacion('Error al cargar','error')}
      finally{showLoading(false)}
    },
    saveHoja:async(id)=>{
      const hoja=state.hojas.find(h=>h.id===id); if(!hoja) return;
      const $el=$(`.hoja-item[data-id="${id}"]`);
      const titulo=$el.find('.hoja-titulo').val().trim();
      if(!titulo) return Notificacion('Título requerido','warning');
      const imagen=$el.find('.hoja-imagen').val().trim();
      const nota=$el.find('.hoja-nota').val().trim();
      const isTemp=id.startsWith('temp_'); const realId=isTemp?utils.nextIds.hoja():id;
      const data={
        numero:hoja.numero,
        titulo,imagen,nota,
        icono:hoja.icono||'fa-utensils',
        estado:hoja.estado==='desactivo'?'desactivo':'activo',
        orden:hoja.orden||hoja.numero,
        creacion:isTemp?serverTimestamp():hoja.creacion,
        actualizacion:serverTimestamp(),
        poremail:auth.currentUser?.email||'sin-email',
        porusuario:auth.currentUser?.displayName||'sin-usuario'
      };
      await setDoc(doc(db,CONFIG.COL_HOJAS,realId),data);
      if(isTemp){
        const idx=state.hojas.findIndex(h=>h.id===id);
        state.hojas[idx]={id:realId,...data};
      }else Object.assign(hoja,data);
      state.dirty.hojas.delete(id);
      savels(CONFIG.CACHE_HOJAS,state.hojas,CONFIG.CACHE_HRS.hojas);
      render.all(); Mensaje('Hoja guardada');
    },
    savePlato:async(id)=>{
      const p=state.cartas.find(x=>x.id===id); if(!p) return;
      const campos={
        titulo:$('#editorTitulo').val().trim(),
        descripcion:$('#editorDescripcion').val().trim(),
        precio:($('#editorPrecio').val()===''?null:Number($('#editorPrecio').val())),
        orden:Number($('#editorOrden').val())||0,
        estado:$('#editorEstado').val()
      };
      if(!campos.titulo) return Notificacion('Título requerido','warning');
      if(campos.precio!=null && (isNaN(campos.precio)||campos.precio<0)) return Notificacion('Precio inválido','warning');
      const isTemp=id.startsWith('temp_'); const realId=isTemp?utils.nextIds.carta():id;
      const data={...campos,hoja:p.hoja,creacion:isTemp?serverTimestamp():p.creacion,actualizacion:serverTimestamp()};
      await setDoc(doc(db,CONFIG.COL_CARTAS,realId),data);
      if(isTemp){
        const idx=state.cartas.findIndex(x=>x.id===id);
        state.cartas[idx]={id:realId,...data}; state.platoActivo=realId;
      }else Object.assign(p,campos);
      state.dirty.cartas.delete(id);
      savels(CONFIG.CACHE_CARTAS,state.cartas,CONFIG.CACHE_HRS.cartas);
      render.all(); Mensaje('Plato guardado');
    }
  };

  const events=()=>{
    $(document).on('click','.hoja-item',function(e){
      if($(e.target).closest('.hoja-actions,button').length) return;
      const n=+$(this).data('hoja');
      if(n!==state.hojaActiva){state.hojaActiva=n;state.platoActivo=null;render.platos();render.editor();render.preview();}
      $('.hoja-item').removeClass('active');$(this).addClass('active');
    });
    $(document).on('click','.plato-item',function(){
      const id=$(this).data('id'); if(id!==state.platoActivo){state.platoActivo=id;render.editor();}
      $('.plato-item').removeClass('active');$(this).addClass('active');
    });
    $(document).on('input','.hoja-titulo,.hoja-imagen,.hoja-nota',function(){
      const id=$(this).closest('.hoja-item').data('id'); state.dirty.hojas.add(id); $(this).closest('.hoja-item').addClass('dirty');
    });
    $(document).on('input change','#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden,#editorEstado',()=>{
      if(state.platoActivo){state.dirty.cartas.add(state.platoActivo);$(`.plato-item[data-id="${state.platoActivo}"]`).addClass('dirty');}
    });
    $(document).on('click','.bt_add_hoja',()=>{
      const num=Math.max(0,...state.hojas.map(h=>h.numero||0))+1;
      const h={id:utils.nextIds.temp(),numero:num,titulo:`Nueva Hoja ${num}`,icono:'fa-utensils',imagen:'',nota:'',estado:'activo',orden:num};
      state.hojas.push(h); state.dirty.hojas.add(h.id); state.hojaActiva=num; render.all(); Notificacion('Hoja agregada','info',1500);
    });
    $(document).on('click','.bt_add_plato',()=>{
      if(!utils.getHoja(state.hojaActiva)) return Notificacion('Crea una hoja','warning');
      const ord=Math.max(0,...utils.getPlatos(state.hojaActiva).map(p=>+p.orden||0))+1;
      const p={id:utils.nextIds.temp(),titulo:'NUEVO PLATO',descripcion:'',precio:null,estado:'activo',hoja:state.hojaActiva,orden:ord};
      state.cartas.push(p); state.dirty.cartas.add(p.id); state.platoActivo=p.id; render.all(); Notificacion('Plato agregado','info',1500);
    });
    $(document).on('click','.bt_guardar_hoja',async function(){
      const id=$(this).closest('.hoja-item').data('id'); try{utils.spin($(this),true); await firebase.saveHoja(id);}catch(e){console.error(e);Notificacion('Error','error')}finally{utils.spin($(this),false);}
    });
    $(document).on('click','.bt_guardar_plato',async function(){
      if(!state.platoActivo) return Notificacion('Selecciona un plato','warning');
      try{utils.spin($(this),true); await firebase.savePlato(state.platoActivo);}catch(e){console.error(e);Notificacion('Error','error')}finally{utils.spin($(this),false);}
    });
    $(document).on('click','.bt_eliminar_plato',async function(){
      if(!state.platoActivo) return;
      const p=state.cartas.find(x=>x.id===state.platoActivo);
      if(!confirm(`¿Eliminar "${p?.titulo||'Plato'}"?`)) return;
      try{
        utils.spin($(this),true,'Eliminando...');
        if(!state.platoActivo.startsWith('temp_')) await deleteDoc(doc(db,CONFIG.COL_CARTAS,state.platoActivo));
        state.cartas=state.cartas.filter(x=>x.id!==state.platoActivo);
        state.dirty.cartas.delete(state.platoActivo); state.platoActivo=null;
        savels(CONFIG.CACHE_CARTAS,state.cartas,CONFIG.CACHE_HRS.cartas); render.all(); Mensaje('Plato eliminado');
      }catch(e){console.error(e);Notificacion('Error','error')}
      finally{utils.spin($(this),false);}
    });
    $(document).on('click','.bt_eliminar_hoja',async function(){
      const id=$(this).closest('.hoja-item').data('id');
      const h=state.hojas.find(x=>x.id===id); if(!h) return;
      const platos=utils.getPlatos(h.numero);
      if(!confirm(`¿Eliminar hoja "${h.titulo}"${platos.length?` y ${platos.length} platos`:''}?`)) return;
      try{
        utils.spin($(this),true,'Eliminando...');
        if(!id.startsWith('temp_')){
          const batch=writeBatch(db);
            batch.delete(doc(db,CONFIG.COL_HOJAS,id));
            platos.forEach(p=>{if(!p.id.startsWith('temp_')) batch.delete(doc(db,CONFIG.COL_CARTAS,p.id));});
          await batch.commit();
        }
        state.hojas=state.hojas.filter(x=>x.id!==id);
        state.cartas=state.cartas.filter(c=>c.hoja!==h.numero);
        state.dirty.hojas.delete(id);
        if(state.hojaActiva===h.numero) state.hojaActiva=state.hojas[0]?.numero||1;
        state.platoActivo=null;
        savels(CONFIG.CACHE_HOJAS,state.hojas,CONFIG.CACHE_HRS.hojas);
        savels(CONFIG.CACHE_CARTAS,state.cartas,CONFIG.CACHE_HRS.cartas);
        render.all(); Mensaje('Hoja eliminada');
      }catch(e){console.error(e);Notificacion('Error','error')}
      finally{utils.spin($(this),false);}
    });
    $(document).on('click','.bt_recargar',firebase.load);

    // Toggle icon
    $(document).on('click','.hoja-icon-toggle',function(e){
      e.stopPropagation();
      const id=$(this).closest('.hoja-item').data('id');
      const h=state.hojas.find(x=>x.id===id); if(!h) return;
      h.icono=utils.nextIcon(h.icono); state.dirty.hojas.add(id);
      render.hojas(); render.preview();
    });
    // Toggle estado
    $(document).on('click','.hoja-estado-toggle',function(e){
      e.stopPropagation();
      const id=$(this).closest('.hoja-item').data('id');
      const h=state.hojas.find(x=>x.id===id); if(!h) return;
      h.estado=h.estado==='activo'?'desactivo':'activo'; state.dirty.hojas.add(id);
      render.hojas(); render.preview();
    });

    gosaves('.hoja-titulo,.hoja-imagen,.hoja-nota','data-id',$el=>$el.val());
    gosaves('#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden,#editorEstado','id',$el=>$el.val());
    getsaves('.hoja-titulo,.hoja-imagen,.hoja-nota','data-id',($el,v)=>$el.val(v));
    getsaves('#editorTitulo,#editorDescripcion,#editorPrecio,#editorOrden,#editorEstado','id',($el,v)=>$el.val(v));
  };

  events(); render.all(); infoo();
  if(!state.hojas.length||!state.cartas.length) firebase.load();
}


// PARA GUARDAR EL TEMA
$(document).on('click','.tema',async function(){
  const miTema = $(this).data('tema');
  try {
    await setDoc(doc(db, 'configuracion', userAuth.displayName), {
      tema: miTema,
      actualizado: serverTimestamp()
    }, { merge: true });
    savels('wiTema', miTema, 72);
    Mensaje('Tema guardado <i class="fa-solid fa-circle-check"></i>');
  }catch(e){console.error(e)}
});