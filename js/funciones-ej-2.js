/* 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.
 */

let cadena = prompt("Ingrese un texto");

let resultado = mayusMinus(cadena);

alert("La  cadena: "+ cadena + ", esta formada por "+ resultado);

function mayusMinus(cadena){

    if(cadena == cadena.toUpperCase()){
        return "mayúsculas"
    }else if(cadena == cadena.toLowerCase()){
        return "minúsculas"
    }else{
        return "una mezcla entre mayúsculas y minúsculas"
    }
}