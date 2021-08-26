/* 
4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función 
y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

*/

let numero = parseInt(prompt('Ingrese un número para mostrar su tabla'));
//Guardo en una variable el array que retorno la función tablaMultiplicar(numero)
let resultado = tablaMultiplicar(numero);
console.log(resultado);

//Escribo en el documento el numero y su tabla
document.write("La tabla del " + numero + " es: <br>" + resultado)

function tablaMultiplicar(numero){
    //Defino un array vacio para guardar la tabla de  multiplicar generada
    let resultadoMulti = [];
    //genero la tabla de multiplicar hasta con 10 resultados
    for (let i = 1; i <= 10; i++) {
       //agrego cada resultado de la tabla como un elemento del array
       resultadoMulti.push(numero*i)
    }

    console.log(resultadoMulti);
    //retorno el array generado para ser usado cuando invoque la función
    return resultadoMulti;
}