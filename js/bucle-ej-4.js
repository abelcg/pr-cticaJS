/* 
4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

*/

let suma = 0;

do {
  let Num = parseInt(prompt("Ingrese un número a sumar"));

  //Comparamos los números para asegurarnos que se ingreso un número
  if (Num === Num) {

    suma = suma + Num;

  } else {

    alert("No es un número!!");
  }

} while (confirm("Presione Ok para seguir ingresando o Cancelar para ver el resultado"));

alert(`El resultado de la suma es ${suma}`);
