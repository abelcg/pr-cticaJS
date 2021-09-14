// crear una clase. Con buena parctica con la 1era letra en mayuscula

class Funkopop {
  //aqui comienzo a crear mi clase o molde
  constructor(nombrefunko, precio, version, numSerie) {
    //crear estructura de mi objeto
    this.nombre = nombrefunko;
    this.disponible = true; //propiedad por defecto
    this.precio = precio;
    this.version = version;
    this.numSerie = numSerie;
  }

  // metodos
  mostrarDatos() {
    document.write(`<h5>Funkopop</h5>
        Nombre: ${this.nombre}
        <br>Precio: $${this.precio}
        <br>Versión: ${this.version} 
        <br>Numero de serie: ${this.numSerie}
        <br>Disponible: ${this.disponible}`);
  }

  // propiedades conmutadas get y set
  get mostrarNombre() {
    return this.nombre;
  }

  get mostrarPrecio() {
    return this.precio;
  }

  set modificarPrecio(precioNuevo) {
    this.precio = precioNuevo;
  }
}

class Persona {
  constructor(nombre, apellido, dni, mail, telefono, edad, usuario, pass) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.mail = mail;
    this.telefono = telefono;
    this.edad = edad;
    this.usuario = usuario;
    this.pass = pass;
  }

  mostrarDatos() {
    document.write(`
        <br>
        <br>Nombre: ${this.nombre} 
        <br>Apellido: ${this.apellido} 
        <br>DNI: ${this.dni} 
        <br>Email: ${this.mail} 
        <br>Telefono: ${this.telefono} 
        <br>Edad: ${this.edad} 
        <br>Usuario: ${this.usuario} 
        <br>Contraseña: ${this.pass} 
         `);
  }
}

//herencia

class Alumno extends Persona {
  constructor(
    nombre,
    apellido,
    dni,
    mail,
    telefono,
    edad,
    usuario,
    pass,
    matricula,
    comision,
    notas,
    curso
  ) {
    // invocar el metodo constructor de la clase persona
    super(nombre, apellido, dni, mail, telefono, edad, usuario, pass);
    this.matricula = matricula;
    this.comision = comision;
    this.notas = notas;
    this.curso = curso;
  }
  // sobreescribir metodos: modifico el metodo heredado: polimorfismo
  mostrarDatos() {
    document.write(`
        <br>
        <br>Nombre: ${this.nombre} 
        <br>Apellido: ${this.apellido} 
        <br>DNI: ${this.dni} 
        <br>Email: ${this.mail} 
        <br>Telefono: ${this.telefono} 
        <br>Edad: ${this.edad} 
        <br>Usuario: ${this.usuario} 
        <br>Matricula: ${this.matricula} 
        <br>Comision: ${this.comision}
        <br>Notas: ${this.notas}
        <br>Curso: ${this.curso} 
         `);
  }

  //todos los metodos que quiera crear, set y get
  get getNombre(){
    return this._nombre;
  }

  set setNombre(name){
    this._nombre = name;
  }

}

class Tutor extends Persona {
  constructor(
    nombre,
    apellido,
    dni,
    mail,
    telefono,
    edad,
    usuario,
    pass,
    legajo,
    comision,
    antiguedad
  ) {
    super(nombre, apellido, dni, mail, telefono, edad, usuario, pass);
    this.legajo = legajo;
    this.comision = comision;
    this.antiguedad = antiguedad;
  }

  mostrarDatosTutor() {
    document.write(`
        <br>
        <br>Nombre: ${this.nombre} 
        <br>Apellido: ${this.apellido} 
        <br>DNI: ${this.dni} 
        <br>Email: ${this.mail} 
        <br>Telefono: ${this.telefono} 
        <br>Edad: ${this.edad} 
        <br>Usuario: ${this.usuario} 
        <br>Legajo: ${this.legajo}
        <br>Comision: ${this.comision}
        <br>Antiguedad: ${this.antiguedad}
         `);
  }
 
}

// alumno: notas, usuario, contraseña, matricula, curso, comision
// tutor: usuario, contraseña, legajo, comision

console.log("prueba");

// Crear una instancia de un objeto
let strange = new Funkopop(
  "Stephen Vicent Strange",
  5000,
  "End-Game",
  "dfghk3356"
);
let Hulk = new Funkopop("Bruce Banner", 5000, "End-Game", "qwer4515");
let ViudaNegra = new Funkopop("Natasha Romanoff", 5000, "End-Game", "jdjd4125");

//usar el metodp mostrarDatos del objeto
strange.mostrarDatos();
Hulk.mostrarDatos();
ViudaNegra.mostrarDatos();

// utilizar las propiedades conmutadas

document.write("<br><br>Propiedad Nombre: " + strange.mostrarNombre);
document.write("<br><br>Propiedad Precio anterior: $" + strange.mostrarPrecio);
// modificar el precio de un funko
strange.modificarPrecio = 6000;
document.write("<br><br>Propiedad Precio Nuevo: $" + strange.mostrarPrecio);

let juan = new Persona(
  "Juan",
  "Alanis",
  32451215,
  "juan@gmail.com",
  "155414748",
  35,
  "jalaniz",
  "12345jkjakjsk"
);
let abel = new Alumno(
  "Abel",
  "Cordoba",
  32459279,
  "abelcg86@gmail.com",
  "3815415613",
  34,
  "acordoba",
  "323232sdsads",
  3435,
  "16i",
  "A",
  "FullStack"
);

juan.mostrarDatos();

//polimorfismo: llamo a un metodo que sobre escribí. Mismo nombre, distinto resultado
abel.mostrarDatos();

let jony = new Tutor(
  "Jonathan",
  "Plodzien",
  37657986,
  "jplodzien@gmail.com",
  "156854123",
  27,
  "jplodzien",
  "4515aaddf",
  456,
  '16i',
  2
);

jony.mostrarDatosTutor();
