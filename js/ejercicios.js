/* 1.- Escribe un programa de una sola línea que 
haga que aparezca en la pantalla un alert que diga “un mensaje”.
 */
//alert('un mensaje'); lo cometo apra que no aparezca cada vez

/* 2.- Escribe un programa de una sola línea que escriba 
en la pantalla un texto que diga «Hello World» (document.write).
 */
document.write("<br>Hello World<br>");

/* 3.- Escribe un programa de una sola línea 
que escriba en la pantalla el resultado de sumar 3 + 5. */

document.write(3+5);
document.write("<br>")

/* 4.- Escribe un programa de dos líneas que pida el nombre del usuario 
con un prompt y escriba un texto que diga «Hola nombreUsuario»
 */
//let nombreUsuario = prompt('Escribe tu nombre de usuario: ');
//document.write("Hola "+nombreUsuario); coemto el resultado para seguir

/* 5.- Escribe un programa de tres líneas que pida un número, 
pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
 */
let primerNum = prompt('Escribe un número: ');
let segundoNum = prompt('Escribe un número: ');
document.write(parseInt(primerNum,10)+parseInt(segundoNum,10));
