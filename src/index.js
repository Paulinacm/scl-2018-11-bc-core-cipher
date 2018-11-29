/* Acá va tu código */
let resultCifra = "";
let resultDescifra = "";
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
    let textoIngresado = ingresoTexto.value;
    //Recorro la palabra cifrando los caracteres
    for (let index = 0; index < textoIngresado.length; index++) {
      // Uso variable local para guardar el caracter en decimal
      let decCaracter = textoIngresado.charCodeAt(index);
      // Uso otra variable local para guardar el nuevo número decimal
      // Al decimal original le sumo el offset definido por el usuario
      // Utilizo parseInt para convertir el valor tipo string a numero entero y poder realizar la suma, de otra forma se concatena como texto
      let element = decCaracter + parseInt(nroOffsetCifrado.value);
      console.log(element); 
      
      if (decCaracter > 64 && decCaracter < 91) {
        // Parte de la función para letras mayúsculas
        // el decimal de caracter debe estar entre 65 y 90
        if (element > 90) {
          // Si el valor del nuevo decimal + offset supera 90, le resto 26, para comenzar nuevamente con la letra "A"
          element -= 26;
          // Convierto el decimal resultante en caracter y lo agrego a variable que guarda texto cifrado
          resultCifra += String.fromCharCode(element);
        } else {
          // Convierto el decimal en caracter y lo agrego a variable que guarda texto cifrado
          resultCifra += String.fromCharCode(element);
        }
      } else if (decCaracter > 96 && decCaracter < 123) {
        // Parte de la función para letras minúsculas
        // el decimal de caracter debe estar entre 97 y 122
        if (element > 122) {
          // Si el valor del nuevo decimal + offset supera 122, le resto 26, para comenzar nuevamente con la letra "a"
          element -= 26;
          // Convierto el decimal resultante en caracter y lo agrego a variable que guarda texto cifrado
          resultCifra += String.fromCharCode(element);
        } else {
          // Convierto el decimal en caracter y lo agrego a variable que guarda texto cifrado
          resultCifra += String.fromCharCode(element);
        }
      } else {
        // Si el caracter que evalúo no es una letra mayúscula o minúscula, no lo intervengo
        resultCifra += textoIngresado.charAt(index); 
      }
    }
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
    let textoIngresado1 = ingresoTexto1.value;
    for (let index = 0; index < textoIngresado1.length; index++) {
      let codeCaracter = textoIngresado1.charCodeAt(index);
      let element = codeCaracter - parseInt(nroOffsetDescifrado.value);
      if (index === 0) {
        resultDescifra = "";
      }
      if (codeCaracter > 64 && codeCaracter < 91) {
        if (element < 64) {
          element += 26;
          resultDescifra += String.fromCharCode(element);
        } else {
          resultDescifra += String.fromCharCode(element);
        }
      } else if (codeCaracter > 96 && codeCaracter < 123) {
        if (element < 96) {
          element+= 26;
          resultDescifra += String.fromCharCode(element);
        } else {
          resultDescifra += String.fromCharCode(element);
        }
      } else {
        resultDescifra += textoIngresado1.charAt(index);
      }
    }
    textoDescifrado.value = resultDescifra;
  } else {
    textoDescifrado.value = "";
  }
}