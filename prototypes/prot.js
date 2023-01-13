function Cliente(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
}


Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.valor > 10000) {
        tipo = 'gold';
    }else if(this.valor > 1000) {
        tipo = 'platino';
    } else {
        tipo = 'normal';
    }
    return tipo;
}

Cliente.prototype.nombreCliente = function() {
    return `nombre: ${this.nombre}, saldo ${this.valor} tipo cliente ${this.tipoCliente() }`;
}

// instanciarlo
const pedro = new Cliente('pedro', 6000);
pedro.tipoCliente();

console.log(pedro.tipoCliente());
console.log(pedro.nombreCliente());
console.log(pedro);