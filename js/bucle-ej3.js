/* 
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/

//declaro una variable para guardar la cadena y la defino por defecto a una string vacia,
// para el caso de que no se ingrese nada.

let resultado = "";

do {
  let texto = prompt("Ingrese un texto");
  //Si no se ingresa nada
  if (resultado == "") { //No uso guión para concatenar
    resultado = resultado + texto;
  } else { //Concateno el resultado con guión
    resultado = resultado + "-" + texto;
  }
  //Mientras se presione Ok
} while (confirm("presione OK para reingresar o Cancelar para salir"));
//Al presionar Cancelar
document.write(resultado);
