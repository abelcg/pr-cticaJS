//8.- Escribe un programa que pida un número y diga si es divisible por 2 
/*
let number = parseInt(prompt('Ingrese un numero'));

if(number % 2 == 0 ){
    document.write('<br>El numero es divisible por 2')
}else{
    document.write('<br>El numero NO es divisible por 2')
};
*/
//10.- Escribe un programa que pida un número
// y nos diga si es divisible por 2, 3, 5 o 7 
//(sólo hay que comprobar si lo es por uno de los cuatro)
/*
let n = parseInt(prompt('Ingrese un numero'));

if(n % 2 || n % 3 || n % 5 || n % 7){
    document.write('<br>El numero es divisible por 2, 3, 5 o 7');
}else{
    document.write('<br>El numero NO es divisible por 2, 3, 5 o 7')
};
*/
//11.- Añadir al ejercicio anterior que nos diga
// por cuál de los cuatro es divisible 
//(hay que decir todos por los que es divisible)

let n = parseInt(prompt('Ingrese un numero'));

if(n % 2 == 0 && n % 3 == 0 && n % 5 == 0 && n % 7 == 0){
    document.write('<br>El numero es divisible por 2, 3, 5 y 7');
}else if(n % 2 == 0 && n % 3 == 0 && n % 5 == 0){
    document.write('<br>El numero es divisible por 2, 3 y 5')
}else if(n % 2 == 0 && n % 3 == 0){
    document.write('<br>El numero es divisible por 2 y 3')
}else if(n % 2 == 0 && n % 7 == 0 && n % 5 == 0){
    document.write('<br>El numero es divisible por 2, 5 y 7')
}else if(n % 2 == 0 && n % 5 == 0){
    document.write('<br>El numero es divisible por 2 y 5')
}else if(n % 2 == 0 && n % 7 == 0){
    document.write('<br>El numero es divisible por 2 y 7')
}else if(n % 2 == 0){
    document.write('<br>El numero es divisible por 2')
}else if(n % 3 == 0 && n % 5 == 0 && n % 7 == 0){
    document.write('<br>El numero es divisible por 3, 5 y 7')
}else if(n % 3 == 0 && n % 5 == 0){
    document.write('<br>El numero es divisible por 3 y 5')
}else if(n % 3 == 0 && n % 7 == 0){
    document.write('<br>El numero es divisible por 3 y 7')
}else if(n % 3 == 0){
    document.write('<br>El numero es divisible por 3')
}else if(n % 5 == 0 && n % 7 == 0){
    document.write('<br>El numero es divisible por 5 y 7')
}else if(n % 5 == 0){
    document.write('<br>El numero es divisible por 5')
}else if(n % 7 == 0){
    document.write('<br>El numero es divisible por 7')
};