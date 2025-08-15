//TP1 - Programación III - UNER
//Integrantes: Alejandro Flores, Fernando Gómez
//Fecha: 2025
//Archivo: gestionDatos.js


//PUNTO 1
let productos = [
  { id: 1, nombre: "Teclado", precio: 15000, stock: 12 },
  { id: 2, nombre: "Mouse", precio: 8000, stock: 0 },
  { id: 3, nombre: "Monitor", precio: 45000, stock: 0 },
  { id: 4, nombre: "Bluetooth", precio: 12000, stock: 18 },
  { id: 5, nombre: "Notebook", precio: 250000, stock: 5 }
];

//MOSTRAR PRODUCTOS
function mostrarProductos(){
  console.log("Listado de productos:");
  console.table(productos);
}
//PUNTO 2
function mostrarCantidadProductos() {
  console.log(`2.1 - Cantidad de productos: ${productos.length}`);
}
function mostrarSegundoYCuartoProducto() {
  console.log(`2.2 - Segundo producto: ${productos[1].nombre}`);
  console.log(`2.2 - Cuarto producto: ${productos[3].nombre}`);
}
//PUNTO 3
function recorrerForOf() {
  console.log(`3. Recorrido del Array utilizando for .. of`);
  for (let producto of productos) {
    console.log(`Producto: ${producto.nombre},  Precio: $${producto.precio}`);
  }
}
function recorrerForEach() {
  console.log(`3.1 Recorrer array utilizando forEach`);
  productos.forEach(function(producto) {
    console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
  });
}
//PUNTO 4
function agregarDosElementosConPush() {
  console.log(`4.1 Agregar dos elementos con push()`);
  let nuevoProducto1 = { id: 6, nombre: `Impresora`, precio: 30000, stock: 10 };
  console.log("Nuevo producto agregado: ",nuevoProducto1);
  let nuevoProducto2 = { id: 7, nombre: `Scaner`, precio: 20000, stock: 8 };
  console.log("Nuevo producto agregado: ",nuevoProducto2);
  productos.push(nuevoProducto1, nuevoProducto2);
  mostrarProductos();
}
function eliminarUltimoProductoConPop() {
  console.log(`4.2 Eliminar el último elemento con pop()`);
  const productoEliminado = productos.pop();
  console.log(`Producto eliminado: ${productoEliminado.nombre}`);
  mostrarProductos();
}
function agregarElementoAlInicioConUnshif() {
  console.log(`4.3 Agregar un nuevo elemento al inicio del array productos utilizando unshift()`);
  let nuevoProducto3 = { id: 8, nombre: `Parlantes`, precio: 22000, stock: 15 };
  console.log("Nuevo producto agregado:",nuevoProducto3);
  productos.unshift(nuevoProducto3);
  mostrarProductos();
}
function eliminarPrimerProductoConShift() {
  console.log(`4.4 Eliminar el primer elemento del array productos utilizando shift()`);
  const ProductoEliminado2 = productos.shift();
  console.log(`Producto eliminado: ${ProductoEliminado2.nombre}`);
  mostrarProductos();
}
function mostrarProductosFiltradosConFilter() {
  let productosConStock = productos.filter(producto => producto.stock > 0); 
  console.log(`4.5 Productos con stock mayor a 0:`);
  console.table(productosConStock);
  mostrarProductos();
}
function crearNuevoArrayConMap() {
  let nombresProductos = productos.map(producto => producto.nombre);
  console.log("4.6 Array de nombres de productos:");
  console.table(nombresProductos);
  mostrarProductos();
}
function buscarProductoPorId(id) {
  let productoEncontrado = productos.find(producto => producto.id === id);
  if (productoEncontrado) {
    console.log(`Producto encontrado con id ${id}:`, productoEncontrado);
  } else {
    console.log(`No existe un producto con id ${id}.`);
  }
  mostrarProductos();
}
function ordenarProductosPorPrecioConShort() {
  let productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);
  console.log("4.8 Productos ordenados por precio (decreciente):");
  console.table(productosOrdenados);
  mostrarProductos();
}


mostrarProductos();
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
mostrarCantidadProductos();
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
mostrarSegundoYCuartoProducto();
console.log('\x1b[31m%s\x1b[0m',`\n===================================`);
recorrerForOf();
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
recorrerForEach();
console.log('\x1b[31m%s\x1b[0m',`\n===================================`); 
agregarDosElementosConPush();
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
eliminarUltimoProductoConPop();
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
agregarElementoAlInicioConUnshif();
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
eliminarPrimerProductoConShift();
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
mostrarProductosFiltradosConFilter();
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
crearNuevoArrayConMap();
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
console.log("\n4.7 Buscando producto con id específico: 3");
buscarProductoPorId(3);
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
ordenarProductosPorPrecioConShort();
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
