/* 
Libros
Crear una clase Libro que contenga al menos las siguientes propiedades:
●	ISBN
●	Título
●	Autor
●	Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro{
    constructor(isbn, titulo, autor, nroPaginas){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.nroPaginas = nroPaginas;
    }

    get getIsbn(){
        return this.isbn;
    }

    set setIsbn(isbn){
        this.isbn = isbn;
    }
    
    get getTitulo(){
        return this.titulo;
    }

    set setTitulo(titulo){
        this.titulo = titulo;
    }

    get getAutor(){
        return this.autor;
    }

    set setAutor(autor){
        this.autor = autor;
    }

    get getPaginas(){
        return this.nroPaginas;
    }

    set setPaginas(nroPaginas){
        this.nroPaginas = nroPaginas;
    }

    mostrarLibro(){
        document.write(`<br>“El libro ${this.titulo} con ISBN ${this.isbn} 
        creado por el autor ${this.autor} tiene ${this.nroPaginas} páginas”<br>`);
    }
}

let libro1 = new Libro(9780060929794, 'Cien años de soledad', 'Garcia Marquez, Gabriel',464);

let libro2 = new Libro(9789875666481, 'El Aleph', ' Borges, Jorge Luis',214);

libro1.mostrarLibro();

libro2.mostrarLibro();

let masPaginas = () => {
    if(libro1.getPaginas > libro2.getPaginas){
        document.write(`<br><br>"${libro1.getTitulo}" posee mas páginas que "${libro2.getTitulo}"`);
    }else{
        document.write(`<br><br>"${libro2.getTitulo}" posee mas páginas que "${libro1.getTitulo}"`);
    }
}

masPaginas();