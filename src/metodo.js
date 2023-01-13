class Cliente { // obeto en javascript 
    constructor(nombre, saldo) {
     this.nombre = nombre;
     this.saldo = saldo;
 
    }
  
    mostrarInformacion() {
       return `Cliente: ${this.nombre} tu saldo es de ${this.saldo}`
    }
 
    
 }

// herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this. telefono = telefono;
        this.categoria = categoria;
    }

}


 const juan = new Cliente('juan', 500);
 const empresa = new Empresa('codigo con eury', 600);
 console.log(empresa.mostrarInformacion());
 console.log(empresa);