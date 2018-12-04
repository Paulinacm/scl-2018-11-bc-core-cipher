/* Acá va tu código */
let ingresoTexto = document.getElementById("textoCifrar");
let nroOffsetCifrado = document.getElementById("offsetCifrado");
let textoCifrado = document.getElementById("textoCifrado");
let ingresoTexto1 = document.getElementById("textoDescifrar");
let textoDescifrado = document.getElementById("textoDescifrado");
let nroOffsetDescifrado = document.getElementById("offsetDescifrado")

//funcion mostrar texto cifrado
function cifrarTexto() {
  // Agrego condiciones para que se ejecute la función
  // El número offset debe tener algo escrito
  // El número offset debe ser tipo número, por lo que utilizo la negación de la expresión isNaN, al negarlo solo cuando el valor ingresado sea número devolvera true
  if ((nroOffsetCifrado.value.length > 0 && !isNaN(nroOffsetCifrado.value)) && (ingresoTexto.value.length > 0)) {
    // Asigno texto cifrado como valor de elemento html
    // para desplegar texto codificado en página web
    textoCifrado.value = cipher.encode(ingresoTexto.value, nroOffsetCifrado.value);
  } else {
    // Si no se cumplen las condiciones, se resetea el campo del texto cifrado 
    textoCifrado.value = "";
  }
}
function descifrarTexto() {
  if ((nroOffsetDescifrado.value.length > 0 && !isNaN(nroOffsetDescifrado.value)) && (ingresoTexto1.value.length > 0)) {
    textoDescifrado.value = cipher.decode(ingresoTexto1.value, nroOffsetDescifrado.value);
  } else {
    textoDescifrado.value = "";
  }
}