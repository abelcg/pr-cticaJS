/* 
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

*/
let filas = parseInt(prompt('Ingrese un numero no mayor a 50'));
//bucle para imprimir las líneas de la pirámide
if(filas <= 50){
    for (let i = 1; i <= filas; i++) {
        //bucle para repetir la impresión del índice hasta el número de filas
        for (let rep = 1; rep <= i; rep++) {
          document.write(rep);
        }
        document.write("<br>"); // salto de línea
      }
}else{
    alert('Ingrese un número menor igual a 50');
}
