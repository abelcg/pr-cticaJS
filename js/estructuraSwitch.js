/* 
switch(operacion){
    case 1:
        // todo el codigo a ejecutar si la opcion que eligio el usario es 1
     break;
    case 2:
        // ...
     break;
    case 'otros':
     ....
     break;
    default:
        //codigo a ejecutar por defecto
}
*/

let estacion = prompt('Ingrese su estacion del año preferida: 1. verano, 2. invierno, 3. otoño, 4. primavera');

switch(estacion){
    case '1':
    case 'verano':
        document.write('El usuario selecciono la estación verano');
        break;
    case '2':
        document.write('El usuario selecciono la estación invierno');
        break;
    case '3':
        document.write('El usuario selecciono la estación otoño');
        break;
    case '4':
        document.write('El usuario selecciono la estación primavera');
        break;
    default:
        alert('Ingreso una opcion invalida'); 
}