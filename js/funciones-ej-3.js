/* 
3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)

*/

let a = parseInt(prompt('Ingrese la altura'));
let b = parseInt(prompt('Ingrese la base'));




alert('El perimetro es: ' + perimetro(a,b))

function perimetro(a,b){

    p = 2*(a+b);

    return p;
}