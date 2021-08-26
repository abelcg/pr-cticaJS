/* 
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, 
luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

let ciudades = [];
let ok = confirm("Presione Ok para agregar otra ciudad o Cancelar para salir");
while(ok){
    
    ciudades.push(prompt('Ingrese una ciudad'));
    //recorro el array para saber si se ingreso un 0
    for (let i = 0; i < ciudades.length; i++) {
       //si es 0 entonces ok sera falso que es lo mismo que presionar cancelar
        if(ciudades[i] == '0' || ok == false || ciudades[i] == null){
            ok = false;
        }
    }
}
//muestro el arreglo
console.log(ciudades);
document.write('El array de ciudades es: ' + ciudades + '<br>');
//muestro la longitud del arreglo
document.write('La longitud del array es: ' + ciudades.length + '<br>');
//Muestro los ítems de las posiciones primera, tercera y última.
document.write('Primer ítem: ' + ciudades[0] + '<br>  Segundo ítem: ' + ciudades[1] + '<br>  Tercer ítem: ' + ciudades[2] + '<br>');
//Añado en última posición la ciudad de París.
ciudades.push('París');
document.write('El array de ciudades agregando París: ' +ciudades + '<br>');
console.log(ciudades);
//Muestro el segundo elemento
document.write('El 2do elemento es: '+ciudades[1] + '<br>');
//Sustituyo el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = 'Barcelona';
document.write('El array de ciudades sustituyendo por Barcelona la 2da posisición: ' +ciudades + '<br>');
console.log(ciudades);

