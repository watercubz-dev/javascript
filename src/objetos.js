class Cliente { // obeto en javascript 
   constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

   }
 
   mostrarInformacion() {
      return `Cliente: ${this.nombre} tu saldo es de ${this.saldo}`
   }

   
}

// creamos una class y le asignamos un nombre luego abrimos llaves
// y con el constructor le pasamos parametros 
// y con this. el valor de los parametros

const juan =  new Cliente('juan', 600);
console.log(juan);
console.log(juan.mostrarInformacion());
