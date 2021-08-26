// funciones sin parametros

function holaMundo(){
    //todo el codigo que quiero que tenga la funcion
    document.write('Hola mundo');
}

//funciones con parametros
function saludar(nombre, apellido){
    document.write('<br>Hola mi nombre es: ' + nombre + ' y mi apellido es ' + apellido);
}

//funciones que retornan un valor
function convertirDolaresPesos(dolares){
    let pesos = dolares * 190;
    //siempre el return es la ultima linea de una funcion
    return pesos;
}

//ejecutar o invocar o llamar una funcion
holaMundo();

//llamar a una función con parámetro

saludar('Abel','Córdoba');

/* let nombreRequerido = prompt('Ingrese un nombre');
let apellidoRequerido = prompt('Ingrese un apellido');
saludar(nombreRequerido,apellidoRequerido); */

let precioIphone = convertirDolaresPesos(599);
document.write('<br><b>Iphone SE $</b>'+ precioIphone);
document.write('<br><b>Jordan SE $</b>'+ convertirDolaresPesos(200));