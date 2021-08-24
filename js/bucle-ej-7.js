/* 
7- Haz un script que escriba una pirámide inversa de los números del 1
 al número que indique el usuario (no mayor de 50)  de la siguiente forma :
 (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

*/

let filas = parseInt(prompt('Ingrese un numero no mayor a 50'));
//bucle para imprimir las líneas de la pirámide
if(filas <= 50){
    for (let i = filas; i >= 1; i--) {
        //bucle para repetir la impresión del índice empezando por el número de filas
        for (let rep = i; rep >= 0; rep--) {
          document.write(i);
        }
        document.write("<br>"); // salto de línea
      }
}else{
    alert('Ingrese un número menor igual a 50');
}
