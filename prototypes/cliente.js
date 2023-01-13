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

function Persona(nombre, valor, telefono) {
    Cliente.call(this, nombre, valor);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

const juan = new Persona('juan', 5000, 903456789);
console.log(juan);