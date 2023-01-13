//const Cliente = new Map();
//
//Cliente.set('nombre', 'karen');
//Cliente.set('tipo', 'premiun');
//Cliente.set('saldo', 500);
//
//
//console.log(Cliente.get(`karen`));
//
//console.log(Cliente.has(`nombre`));
//
//Cliente.delete(`saldo`);
//
//console.log(Cliente.get(`saldo`));
//console.log(Cliente.has(`nombre`));
//
//
//Cliente.clear();
//console.log(Cliente);
//
//const paciente = new Map([ [`nombre`, `paciente`], [`cuarto`, `no definido'`] ]);
//
//
//paciente.set(`dr`, `dr asignado`);
//paciente.set(`dr`, `dr asignado`);
//
//console.log(paciente);
//
//paciente.forEach( (datos, index) => {
//    console.log(index);
//
//})




// weak maps

const producto = {
    idProducto : 10
}

const weakmap = new WeakMap();

weakmap.set(producto, 'monitor');

console.log(weakmap);
