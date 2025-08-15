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
console.log("Listado de productos:");
console.table(productos);
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
//PUNTO 2
console.log(`\nOperaciones Basicas:`); 
//MUESTRA CANTIDAD DE PRODUCTOS
console.log(`2.1 - Cantidad de productos: ${productos.length}`);
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
//IMPRIMER SEGUNDO Y CUARTO PRODUCTO
console.log(`2.2 - Segundo producto: ${productos[1].nombre}`);
console.log(`2.2 - Cuarto producto: ${productos[3].nombre}`);
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
//PUNTO 3
console.log('\x1b[31m%s\x1b[0m',`\n===================================`);
console.log(`3. Recorrido del Array`); 
console.log(`3.1 Recorrer array utilizando for .. of`); 
for (let producto of productos) {
  console.log(`Producto: ${producto.nombre},  Precio: $${producto.precio}`);
}
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
console.log(`\n3.1 Recorrer array utilizando forEach`); 
productos.forEach(function(producto) {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
//PUNTO 4
console.log('\x1b[31m%s\x1b[0m',`\n===================================`); 
console.log(`4. Manipulación de Arrays`);
console.log(`\n4.1 Agregar dos elementos con push()`);
let nuevoProducto1 = { id: 6, nombre: `Impresora`, precio: 30000, stock: 10 };
console.log("Nuevo producto agregado: ",nuevoProducto1);
let nuevoProducto2 = { id: 7, nombre: `Scaner`, precio: 20000, stock: 8 };
console.log("Nuevo producto agregado: ",nuevoProducto2);
productos.push(nuevoProducto1, nuevoProducto2);
//MOSTRAR PRODUCTOS
console.log(`Listado de productos con elementos agregados:`);
console.table(productos);
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
console.log(`\n4.2 Eliminar el último elemento con pop()`);
const productoEliminado = productos.pop();
console.log(`Producto eliminado:${productoEliminado.nombre}`);
console.log(`Listado de productos resultantes`);
console.table(productos);
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
//unshift().
console.log(`\n4.3 Agregar un nuevo elemento al inicio del array productos utilizando unshift()`);
let nuevoProducto3 = { id: 8, nombre: `Parlantes`, precio: 22000, stock: 15 };
console.log("Nuevo producto agregado:",nuevoProducto3);
productos.unshift(nuevoProducto3);
console.log(`Listado de productos con elemento agregado al inicio:`);
console.table(productos);
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
//shift().
console.log(`\n4.4 Eliminar el primer elemento del array productos utilizando shift()`);
const ProductoEliminado2 = productos.shift();
console.log(`Producto eliminado: ${ProductoEliminado2.nombre}`);
console.log(`Listado de productos resultantes`);
console.table(productos);
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
//filter().
let productosConStock = productos.filter(producto => producto.stock > 0);
console.log(`\n4.5 Productos con stock mayor a 0:`);
console.table(productosConStock);
console.log("Lista de productos original:");
console.table(productos);
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
/**6.  Crear   un   nuevo   array   llamado  nombresProductos  que   contenga   solo   los   nombres   de   todos   los 
productos en el inventario utilizando map().**/
let nombresProductos = productos.map(producto => producto.nombre);
console.log("\n4.6 Array de nombres de productos:");
console.table(nombresProductos);
console.log("Lista de productos original:");
console.table(productos);
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
/**7. Encontrar y guardar en una variable el primer producto en productos que tenga un id específico (ej. id:3) 
utilizando find(). Si no lo encuentra, indicar que no existe.**/
console.log("\n4.7 Buscando producto con id específico: 3");
let idBuscado = 3;
let productoEncontrado = productos.find(producto => producto.id === idBuscado);
if (productoEncontrado) {
  console.log(`Producto encontrado con id ${idBuscado}:`, productoEncontrado);
} else {
    console.log(`No existe un producto con id ${idBuscado}.`);
}
console.log("Lista de productos original:");
console.table(productos);
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
/**8. Crear un nuevo array llamado  productosOrdenados que contenga los productos ordenados por precio 
en orden decreciente. (investigar método sort()).**/
let productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);
console.log("\n4.8 Productos ordenados por precio (decreciente):");
console.table(productos);
console.log("Lista de productos original:");
console.table(productos);
console.log('\x1b[32m%s\x1b[0m',"-------------------------------------------------");
