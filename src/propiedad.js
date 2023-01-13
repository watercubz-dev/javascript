//class Cliente {
    
   // #nombre;


   // constructor(nombre, saldo) {
     this.#nombre = nombre;
     this.saldo = saldo;
 
   // }
  
   // mostrarInformacion() {
       return `Cliente: ${this.#nombre} tu saldo es de ${this.saldo}`
   // }
     
    //static bienvienido() {
        return `bienenido al cajero`
    //}
    
 //}



class Cliente {
    #nombre;

    setNombre(hombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }
}





 const juan = new Cliente('juan', 300);
 console.log(juan.mostrarInformacion());
console.log(juan.getNombre() );