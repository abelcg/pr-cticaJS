let nombre = "Tony Stark";
let numeroSerie = "123dfg2";
let precio = 5000;
let version = "end-game";

// crear un objeto con notacion literal

let funkoIronMan = {
  // clave: valor -> son propiedades
  nombre: "Tony Stark",
  numeroSerie: "123dfg2",
  precio: 5000,
  version: "end-game",
  //crear un metodo
  sinStock: function () {
    return false;
  },
  tengoStock: () => {
    return true;
  }
};

// mostrar un objeto
console.log(funkoIronMan);

//mostrar una propiedad del objeto, forma 1: notación punto: nombreObjeto.propiedad
document.write("Articulo Funkopop: " + funkoIronMan.nombre);

// mostrar una propiedad del objeto, forma 2: notacion corchetes: nombreObjeto['propiedad]
document.write("<br>Precio: $" + funkoIronMan["precio"] + "<br>");

// mostrar un objeto
mostrarObjeto();

//modificar una propiedad de mi objeto
funkoIronMan.precio = 5500;

//agregar una propiedad nueva a un objeto
funkoIronMan.disponible = true;

//borrar una propiedad de un objeto

delete funkoIronMan.version;
mostrarObjeto();

//llamar a un metodo de un objeto
console.log( funkoIronMan.tengoStock());


function mostrarObjeto() {
  // mostrar todas las propiedes de un objeto
  let claves = Object.keys(funkoIronMan); //usando el metodo keys del objeto Object obtengo en forma de un arreglo las claves de lsa propiedades
  console.log(claves); //['nombre', 'numSerie',...]
  console.log(claves.length); //la longitud del arreglo de claves

  document.write("<br><br>FunkoIronman<br>");
  for (let i = 0; i < claves.length; i++) {
    let clave = claves[i]; //obtengo el nombre de una de las claves por cada vuelta
    document.write(`<br> ${clave}: ${funkoIronMan[clave]}`);
  }
}

mostrarObjeto();
