/* 
Producto
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades 
código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores 
de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDtos() {
    document.write(
      `<br>Producto: Código: ${this.codigo}, nombre: ${this.nombre}, precio: ${this.precio}`
    );
  }
}

let productos = [
  new Producto("sda4541", "gorra", 1500),
  new Producto("edas4554", "remera", 2500),
  new Producto("seas4545", "medias", 500),
];

for (let i = 0; i < productos.length; i++) {
  productos[i].imprimeDtos();
}
