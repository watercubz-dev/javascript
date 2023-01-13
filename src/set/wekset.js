// weakset
// puede alamcenar solo objetos

const weakset = new WeakSet();

const Cliente = {
    nombre: 'eury',
    saldo: 400
}


weakset.add(Cliente);

console.log(weakset.has(Cliente));


console.log(weakset);