/* 
Rectángulos
3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para modificar
 y mostrar sus propiedades, calcular el perímetro y el área.

*/

class Rectangulos {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    // gettter y setters
    get mostrarAlto(){
        return this.alto;
    }

    set modificarAlto(nuevoAlto){
        this.alto = nuevoAlto;
    }

    get mostrarAncho(){
        return this.ancho;
    }

    set modificarAncho(nuevoAncho){
        this.alto = nuevoAncho;
    }
    //metodos
    perimetro(){
        let perimetro = this.alto + this.ancho;
        document.write(`<br>Su perimetro es: ${perimetro}`);
    }

    area(){
        let area = this.ancho*this.alto;
        document.write(`<br>Su área es: ${area}`);
    }
}

let rectanguloLargo = new Rectangulos(5,10);
document.write('<h2>Rectángulo</h2>')
document.write(`<br>Su alto: ${rectanguloLargo.mostrarAlto}`);
document.write(`<br>Su ancho: ${rectanguloLargo.mostrarAncho}`);

//modifico su alto
 document.write(`<br>Su nueva altura: ${rectanguloLargo.modificarAlto = 8}`); 
//modifico su ancho
document.write(`<br>Su nueva base: ${rectanguloLargo.modificarAncho = 16}`);

//muestro su perímetro y área

rectanguloLargo.perimetro();
rectanguloLargo.area();