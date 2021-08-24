/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro cada una de las celdas deberá escribirse 
un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

let filas = parseInt(prompt('Ingrese el número de filas'));
let columnas = parseInt(prompt('Ingrese el número de columnas'));
let celdas = filas * columnas;

//Imprimiendo la tabla
document.write('<table border>');

//Bucle para generar las filas
for (let i = 0; i < filas; i++) {
    document.write('<tr>');
    //bucle para generar las columnas
    for (let j = 0; j < columnas; j++) {
        document.write('<td>');
        //el contenido de la celda
        document.write(celdas);
        //resto 1 a celdas para ir guardando en orden descendiente
        celdas--
        //cierro las etiquetas td
        document.write('</td>');
    }
    //cierro las etiquetas tr
    document.write('</tr>');
}
//cierro la etiqueta table
document.write('</table>');
