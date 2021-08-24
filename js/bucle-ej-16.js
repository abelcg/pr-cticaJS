//16- Realiza un script que pida una cadena de texto y la devuelva al revés. 
//Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt('Introduce un texto');

let invTexto = "";

for (let i = texto.length-1; i >= 0; i--) {
    
    let car = texto.charAt(i); // recupera el caracter i del string

    invTexto = invTexto + car;
}
document.write(invTexto);
