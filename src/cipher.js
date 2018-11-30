window.cipher = {
  encode: (text,offset) => {
    let resultCifra="";
    /* Acá va tu código */
    //Recorro la palabra cifrando los caracteres
    for (let index = 0; index < text.length; index++) {
      // Uso variable local para guardar el caracter en decimal
      let decCaracter = text.charCodeAt(index);
      // Uso otra variable local para guardar el nuevo número decimal
      // Al decimal original le sumo el offset definido por el usuario
      // Utilizo parseInt para convertir el valor tipo string a numero entero 
      let element = decCaracter + parseInt(offset);
      if (decCaracter > 64 && decCaracter < 91) {
        // función para letras mayúsculas, debe estar entre 65 y 90
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
        // función para letras minúsculas, debe estar entre 97 y 122
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
        resultCifra += text.charAt(index);
      }
    }
    return resultCifra;
  },
  decode: (text,offset) => {
    /* Acá va tu código */
    for (let index = 0; index < text.length; index++) {
      let decodeCaracter = text.charCodeAt(index);
      let element = decodeCaracter - parseInt(offset);
      if (index === 0) {
        resultDescifra = "";
      }
      if (decodeCaracter > 64 && decodeCaracter < 91) {
        if (element < 64) {
          element += 26;
          resultDescifra += String.fromCharCode(element);
        } else {
          resultDescifra += String.fromCharCode(element);
        }
      } else if (decodeCaracter > 96 && decodeCaracter < 123) {
        if (element < 96) {
          element += 26;
          resultDescifra += String.fromCharCode(element);
        } else {
          resultDescifra += String.fromCharCode(element);
        }
      } else {
        resultDescifra += text.charAt(index);
      }
    }
  return resultDescifra;
  }
};

