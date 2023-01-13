// puede alamacenar cualquier cosa
// Set();

const carrito = new Set();

carrito.add('camisa');
carrito.add('perro');
carrito.add('disco');

//console.log(carrito.delete('camisa'));
//console.log(carrito.has('camisa'));

console.log(carrito.size);

carrito.forEach( (producto, index) => {
    console.log(producto);
})
 console.log(carrito);


const numero = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numero);

console.log(noDuplicados);
