/* 
3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los 
lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
repitiendo 50 veces esta operación.
 */

/*Para generar numeros aleatorios entre 1 y 6 usamos Math.random(). Esta genera números en el intervalo [0,1)
  Entonces como no incluye al 1 abrá que sumarle 1 y luego multiplicar por 6 para generar números entre 1.0 y 6.9.
  Por último, redondeamos para abajo con Math.floor() para quedarnos con los enteros del 1 al 6.
*/

let dado1 = 0;
let dado2 = 0;
let suma = 0;
let repSuma = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let s2 = (s3 = s4 = s5 = s6 = s7 = s8 = s9 = s10 = s11 = s12 = 0);

console.log(dado1);
console.log(dado2);
console.log(suma);
console.log(repSuma);

//sumamos 50 veces los dados y anotamos en un array las veces que se repitió el resultado de la suma.

document.write(`Con dos dados las posibles sumas darán como resultado un número del 2 al 12 
                <br><br> Las sumas de los dados fueron:  <br><br>`);

for (let i = 0; i < 50; i++) {
  dado1 = Math.floor(Math.random() * 6 + 1);
  dado2 = Math.floor(Math.random() * 6 + 1);

  console.log(dado1);
  console.log(dado2);

  suma = dado1 + dado2;

  document.write(suma + ",   ");

  console.log(suma);
  console.log(repSuma);

  switch (suma) {
    case 2:
      s2++;
      repSuma[0] = s2;
      break;
    case 3:
      s3++;
      repSuma[1] = s3;
      break;
    case 4:
      s4++;
      repSuma[2] = s4;
      break;
    case 5:
      s5++;
      repSuma[3] = s5;
      break;
    case 6:
      s6++;
      repSuma[4] = s6;
      break;
    case 7:
      s7++;
      repSuma[5] = s7;
      break;
    case 8:
      s8++;
      repSuma[6] = s8;
      break;
    case 9:
      s9++;
      repSuma[7] = s9;
      break;
    case 10:
      s10++;
      repSuma[8] = s10;
      break;
    case 11:
      s11++;
      repSuma[9] = s11;
      break;
    case 12:
      s12++;
      repSuma[10] = s12;
      break;

    default:
      break;
  }
}
for (let j = 0; j < repSuma.length; j++) {
  document.write(
    `<br>La suma de los dados = ${j + 2}, apareció:  ` + repSuma[j] + " veces."
  );
}
