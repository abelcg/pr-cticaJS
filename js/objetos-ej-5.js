/* Generaciones
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
 año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación 
pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

 */

class Personas {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    let nacimiento = this.anioNacimiento;
    if (nacimiento >= 1994 && nacimiento <= 2010) {
      document.write(
        `<br>Pertenece a la generación Z, rasgo característico: la irreverencia`
      );
    } else if (nacimiento >= 1981 && nacimiento <= 1993) {
      document.write(
        `<br>Pertenece a la generación Y "millennials", rasgo característico: la frustración`
      );
    } else if (nacimiento >= 1969 && nacimiento <= 1980) {
      document.write(
        `<br>Pertenece a la generación X, rasgo característico: la obsesión por el éxito`
      );
    } else if (nacimiento >= 1949 && nacimiento <= 1968) {
      document.write(
        `<br>Pertenece a la generación Baby Boom, rasgo característico: la ambición`
      );
    } else if (nacimiento >= 1930 && nacimiento <= 1948) {
      document.write(
        `<br>Pertenece a la Silent Generation, rasgo característico: la austeridad`
      );
    }
  }

  esMayorDeEdad() {
    let edad = this.edad;

    if (edad >= 18) {
      document.write(`<br>Es mayor de edad`);
    } else {
      document.write(`<br>Es menor de edad`);
    }
  }

  mostrarDatos() {
    document.write(`
            <br>
            <br>Nombre: ${this.nombre} 
            <br>Edad: ${this.edad} 
            <br>DNI: ${this.dni} 
            <br>Sexo: ${this.sexo} 
            <br>Peso: ${this.peso}  
            <br>Altura: ${this.altura}
            <br>Año de nacimiento: ${this.anioNacimiento}
             `);
  }

  generaDNI(){
    this.dni = Math.floor(Math.random() * (99999999 - 11111111 + 1) + 11111111);
  }

}

let maría = new Personas('María', 16, 'dni', 'mujer', 56, 1.60, 2005);

maría.generaDNI();
maría.mostrarDatos();
maría.esMayorDeEdad();
maría.mostrarGeneracion();


let eze = new Personas('Ezequiel', 34, 'dni', 'hombre', 90, 1.76, 1986);

eze.generaDNI();

eze.mostrarDatos();

eze.esMayorDeEdad();

eze.mostrarGeneracion();

let ivan = new Personas('Ivan', 39, 'dni', 'hombre', 100, 1.75, 1981);

ivan.generaDNI();
ivan.mostrarDatos();
ivan.esMayorDeEdad();
ivan.mostrarGeneracion();

let juana = new Personas('Juana', 50, 'dni', 'mujer', 70, 1.55, 1971);

juana.generaDNI();
juana.mostrarDatos();
juana.esMayorDeEdad();
juana.mostrarGeneracion();

let omar = new Personas('Omar', 60, 'dni', 'hombre', 82, 1.90, 1961);

omar.generaDNI();
omar.mostrarDatos();
omar.esMayorDeEdad();
omar.mostrarGeneracion();

let irma = new Personas('Irma', 85, 'dni', 'mujer', 85, 1.65, 1936);

irma.generaDNI();
irma.mostrarDatos();
irma.esMayorDeEdad();
irma.mostrarGeneracion();
