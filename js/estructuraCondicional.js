//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

/* let numero1 = parseInt(prompt('Ingrese un numero'));
let numero2 = parseInt(prompt('Ingrese un segundo numero'));  */

/* document.write("Numero 1= " + numero1);
document.write("<br>Numero 2= " + numero2); */

// Estructura if
/* if(condicion logica){
    codigo a ejecutar si la respuesta es true   
} 
 */
/*
if (numero1 > numero2) {
  document.write("<br> El numero 1 es mayor al numero 2");
} else if (numero2 == numero1) {
  // codigo a ejecutar cuando no se cumpla la condicion
  document.write("<br>Los numeros ingresados son iguales");
} else {
  document.write("<br> El numero 2 es mayor al numero 1");
}
*/

// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = parseInt(prompt('Ingrese el primer numero'));
let num2 = parseInt(prompt('Ingrese un segundo numero'));
let num3 = parseInt(prompt('Ingrese un tercer numero'));

document.write("Numero 1= " + num1);
document.write("<br>Numero 2= " + num2);
document.write("<br>Numero 3= " + num3);
//comparando tambien igualdades
if(num1 > num2 && num1 > num3){
    document.write("<br> El primer numero es el mayor ");
}else if(num2 == num1 && num2 > num3){
    document.write("<br> El primer y segundo numero son iguales y el mayor ");
}else if(num2 == num3 && num2 > num1){
    document.write("<br> El segundo y tercer numero son iguales y el mayor ");
}else if(num1 == num3 && num1 > num2){
    document.write("<br> El primer y tercer numero son iguales y el mayor ");
}else if(num1 == num2 && num1 == num3){
    document.write("<br>Los numeros ingresados son iguales");
}else if(num2 > num1 && num2 > num3){
    document.write("<br> El segundo numero es el mayor ");
}else {
    document.write("<br> El tercer numero es el mayor ");
}
//sin comparar eigualdades
/*
if(num1 > num2 && num1 > num3){
    document.write("<br> El primer numero es el mayor ");
}else if(num2 > num1 && num2 > num3){
    document.write("<br> El segundo numero es el mayor ");
}else {
    document.write("<br> El tercer numero es el mayor ");
}
*/

