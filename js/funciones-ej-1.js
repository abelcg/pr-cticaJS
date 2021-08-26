/* 
Funciones

1- Escribir el código de una función a la que se pasa como parámetro un número entero y 
devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.

*/
let numero = prompt("Introduce un número entero");

let resultado = parImpar(numero);

if(resultado != undefined){

    alert("El número "+ numero + " es "+resultado);
}

function parImpar(numero) {
  
  if(Number(numero) == numero){
    if(numero % 2 == 0) {
        return "par";
      }
      else {
        return "impar";
      }
  } else {
      return alert('NO ES UN NÚMERO');
  }
}