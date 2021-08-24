//15- Realiza un script que cuente el número de vocales que tiene un texto.

let cadena = prompt("Introduce una cadena de texto:");
let contador = 0;
for (let i = 0; i < cadena.length; i++) {

    let  car = cadena.charAt(i);    //recupera el caracter i del string.
    if ((car == "a") || (car == "e") || (car == "i") || (car == "o") || (car == "u")) {
        contador++;
    } 
}
document.write("Cantidad de Vocales: " + contador);