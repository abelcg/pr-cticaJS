/* Modelando clases

Cuenta bancaria
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
●	Una propiedad titular con el valor "Alex".
●	Una propiedad saldo, teniendo como valor inicial 0.
●	Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
●	Un método extraer() que permita retirar la cantidad pasada como parámetro.
●	Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, 
ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */

class Cuenta {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo
    }

    set ingresar(nuevoSaldo){
        this.saldo += nuevoSaldo;
    }
    get informar(){
        return this.saldo;
    }

    extraer(cantidad){
     document.write(`<br>La cantidad a extraer es: ${cantidad}
     <br> Su saldo actual es: ${this.saldo -= cantidad} `);
    }

    descripcion(){
        document.write(`<h3>Cuenta</h3> Titular: ${this.titular}, Saldo: ${this.saldo}`);
    }

}

//creo el objeto cuenta

let cuenta = new Cuenta('Alex',0);

//muestro la descripción de la cuenta
cuenta.descripcion();

//Ingreso dinero a la cuenta y muestro su nuevo saldo
let cantidad = 1000;

cuenta.ingresar = cantidad;

document.write(`<br>Usted ingreso: ${cantidad} y su nuevo saldo es: ${cuenta.informar}`);

//Extraemos dinero

cuenta.extraer(200);


