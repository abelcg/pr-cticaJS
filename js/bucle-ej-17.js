//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.


let texto = prompt('Ingresa un texto');

for (let i = 0; i < texto.length; i++) {
   
    let vocal = texto.charAt(i);
    if ((vocal == "a") || (vocal == "e") || (vocal == "i") || (vocal == "o") || (vocal == "u")) {
        document.write(i);
        break
    }
}