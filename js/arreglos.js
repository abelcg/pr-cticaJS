// crear un arreglo con datos

let series = ["Naruto", "The Good Doctor", "Juego de Tronos", 2, 8, true];

// crear un arreglo vacio
let temporadas = [];

// mostrar un valor de un arreglo

document.write(series[2]);

// funcion para mostrar los elementos del arreglo

let mostrarSeries = () => {
  // recorrer cada elemento de un arreglo
  for (let i = 0; i < series.length; i++) {
    document.write("<br> Serie: " + series[i]);
  }
  document.write("<br>");
};

// funcion tradicional para mostrar elemntos del arreglo
function mostrarSeriesNetflix() {
  // recorrer cada elemento de un arreglo
  document.write("<br><h3>Arreglo de series</h3>");
  for (let i = 0; i < series.length; i++) {
    // document.write("<br> Serie: " + series[i]);
    document.write(`<br> Serie: ${series[i]} - posicion: ${i}`);
  }
  document.write("<br>");
}

// agrgar un elemento al final
series.push("Dr. House");

//contar los elementos que tiene el arreglo
console.log(series.length);
document.write("<br>" + series[6]);

// recorrer cada elemento de un arreglo
mostrarSeriesNetflix();

//agregar un elemento en una posicion particular
series.splice(1, 0, "Loky");

mostrarSeriesNetflix();

//eliminar un elemento o varios desde una posicion particular del arreglo
series.splice(4, 2); //borra desde el 4 inclusive, es decir el 4° y 5° elemento

mostrarSeries();

//modificar un elemento desde una posicion particular del arreglo
series[4] = "Vikingos";

mostrarSeries();

//eleiminar todos los elementos desde una posicion particular

series.splice(2);

mostrarSeries();
