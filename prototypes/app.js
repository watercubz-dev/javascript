function Cliente(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
}

const juan = new Cliente('pedro', 500);

function formatearCliente(Cliente) {
    const {nombre, valor} = Cliente;
    return `el cliente ${nombre} tiene un saldo de  ${valor}`;

}

console.log(formatearCliente (juan));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const cc3 = new Empresa('codigo con juan', 400, 'cursos en linea');
console.log(formatearCliente(cc3));
