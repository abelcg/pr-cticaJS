/* 
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….

*/

//bucle para imprimir las 30 líneas de la pirámide
for (let i = 1; i <= 30; i++) {
  //bucle para repetir la impresión del índice
  for (let rep = 0; rep < i; rep++) {
    document.write(i);
  }
  document.write("<br>"); // salto de línea
}
