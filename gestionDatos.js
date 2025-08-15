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

//PUNTO 2
console.log(`\nOperaciones Basicas:`); 
//MUESTRA CANTIDAD DE PRODUCTOS
console.log(`2.1 - Cantidad de productos: ${productos.length}`);

//IMPRIMER SEGUNDO Y CUARTO PRODUCTO
console.log(`2.2 - Segundo producto: ${productos[1].nombre}`);
console.log(`2.2 - Cuarto producto: ${productos[3].nombre}`);

//PUNTO 3
console.log(`\n===================================`); 
console.log(`3. Recorrido del Array`); 
console.log(`3.1 Recorrer array utilizando for .. of`); 
for (let producto of productos) {
  console.log(`${producto.nombre}, $${producto.precio}`);
}

console.log(`\n3.1 Recorrer array utilizando forEach`); 
productos.forEach(function(producto) {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});

//PUNTO 4
console.log(`\n===================================`); 
console.log(`4. Manipulación de Arrays`);
console.log(`\n4.1 Agregar dos elementos con push()`);
let nuevoProducto1 = { id: 6, nombre: `Impresora`, precio: 30000, stock: 10 };
let nuevoProducto2 = { id: 7, nombre: `Scaner`, precio: 20000, stock: 8 };
productos.push(nuevoProducto1, nuevoProducto2);
//MOSTRAR PRODUCTOS
console.log(`Listado de productos con elementos agregados:`);
console.table(productos);

console.log(`\n4.2 Eliminar el último elemento con pop()`);
const productoEliminado = productos.pop();
console.log(`Producto eliminado:${productoEliminado.nombre}`);

//unshift().
console.log(`\n4.3 Agregar un nuevo elemento al inicio del array productos utilizando unshift()`);
let nuevoProducto3 = { id: 8, nombre: `Parlantes`, precio: 22000, stock: 15 };
productos.unshift(nuevoProducto3);
console.log(`Listado de productos con elemento agregado al inicio:`);
console.table(productos);

//shift().
console.log(`\n4.4 Eliminar el primer elemento del array productos utilizando shift()`);
const ProductoEliminado2 = productos.shift();
console.log(`Producto eliminado: ${ProductoEliminado2.nombre}`);

//filter().
let productosConStock = productos.filter(producto => producto.stock > 0);
console.log(`\n4.5 Productos con stock mayor a 0:`);
console.table(productosConStock);
