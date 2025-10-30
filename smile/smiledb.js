import { db } from '../firebase/init.js';
import { doc, setDoc, getDocs, deleteDoc, collection, query, writeBatch, serverTimestamp, limit, where } from "firebase/firestore";
import { savels, getls, removels } from '../widev.js';

// Constantes reutilizables
export const nombresDb = {
  colecciones: { hojas: 'hojasdb', cartas: 'cartasdb', perfil: 'smiles', config: 'configuracion' },
  cache: { hojas: 'hojasdbCache', cartas: 'cartasdbCache', perfil: 'wiSmile' },
  horas: { hojas: 24, cartas: 6, perfil: 450 }
};

// Marca de tiempo del servidor
export const selloServidor = () => serverTimestamp();

// Limpiar caches locales de datos de hojas y cartas
export function limpiarCachesDb() {
  removels(nombresDb.cache.hojas, nombresDb.cache.cartas);
}

// Leer caches iniciales (sin ir a la red)
export function leerCachesIniciales() {
  return {
    hojas: getls(nombresDb.cache.hojas) || [],
    cartas: getls(nombresDb.cache.cartas) || []
  };
}

// Cargar perfil (usuario, empresa, etc) con cache
export async function cargarPerfilSmile(nombreUsuario) {
  try {
    const enCache = getls(nombresDb.cache.perfil);
    if (enCache) return enCache;
    const qry = query(collection(db, nombresDb.colecciones.perfil), where('usuario', '==', nombreUsuario));
    const res = await getDocs(qry);
    const datos = res.docs[0]?.data() || null;
    if (datos) savels(nombresDb.cache.perfil, datos, nombresDb.horas.perfil);
    return datos;
  } catch (e) {
    console.error('cargarPerfilSmile', e);
    return null;
  }
}

// Cargar hojas y cartas (con opción forzar red) y actualizar cache
export async function cargarHojasCartas({ forzar = false } = {}) {
  const cacheH = getls(nombresDb.cache.hojas) || [];
  const cacheC = getls(nombresDb.cache.cartas) || [];
  if (!forzar && cacheH.length && cacheC.length) {
    return { hojas: cacheH, cartas: cacheC };
  }
  try {
    const [resH, resC] = await Promise.all([
      getDocs(query(collection(db, nombresDb.colecciones.hojas), limit(50))),
      getDocs(query(collection(db, nombresDb.colecciones.cartas), limit(500)))
    ]);
    const hojas = resH.docs.map(d => ({ id: d.id, ...d.data() }));
    const cartas = resC.docs.map(d => ({ id: d.id, ...d.data() }));
    savels(nombresDb.cache.hojas, hojas, nombresDb.horas.hojas);
    savels(nombresDb.cache.cartas, cartas, nombresDb.horas.cartas);
    return { hojas, cartas };
  } catch (e) {
    console.error('cargarHojasCartas', e);
    return { hojas: cacheH, cartas: cacheC };
  }
}

// Guardar o actualizar una hoja por id
export async function guardarHojaDB(idHoja, datos) {
  await setDoc(doc(db, nombresDb.colecciones.hojas, idHoja), datos);
  return { id: idHoja, ...datos };
}

// Guardar o actualizar un plato por id
export async function guardarPlatoDB(idPlato, datos) {
  await setDoc(doc(db, nombresDb.colecciones.cartas, idPlato), datos);
  return { id: idPlato, ...datos };
}

// Eliminar un plato por id
export async function eliminarPlatoDB(idPlato) {
  await deleteDoc(doc(db, nombresDb.colecciones.cartas, idPlato));
}

// Eliminar una hoja y sus platos (batch)
export async function eliminarHojaConPlatosDB(idHoja, idsPlatos = []) {
  const lote = writeBatch(db);
  lote.delete(doc(db, nombresDb.colecciones.hojas, idHoja));
  idsPlatos.forEach(pid => lote.delete(doc(db, nombresDb.colecciones.cartas, pid)));
  await lote.commit();
}

// Guardar tema de usuario
export async function guardarTemaDB(nombreUsuario, temaCadena) {
  await setDoc(
    doc(db, nombresDb.colecciones.config, nombreUsuario),
    { tema: temaCadena, actualizado: serverTimestamp() },
    { merge: true }
  );
}