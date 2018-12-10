window.cipher = {
  encode: (text, offset) => {
    let resultCifra = "";
    /* Acá va tu código */
    //Recorro la palabra cifrando los caracteres
    for (let index = 0; index < text.length; index++) {
      // Uso variable local para guardar el caracter en decimal
      let decCaracter = text.charCodeAt(index);
      let element = decCaracter + (parseInt(offset) % 26);
      if (decCaracter >= 65 && decCaracter <= 90) {
        if (element > 90) {
          element -= 26;
        }
        resultCifra += String.fromCharCode(element);
      } else if (decCaracter >= 97 && decCaracter <= 122) {
        if (element > 122) {
          element -= 26;
        }
        resultCifra += String.fromCharCode(element);
      } else if (decCaracter >= 32 && decCaracter <= 47){
           if (element > 47) {
             element -= 16;
        }
      } else {
        resultCifra += String.fromCharCode(decCaracter);
      }
    }
    return resultCifra;
  },
  decode: (text, offset) => {
    let resultDescifra = "";
    for (let index = 0; index < text.length; index++) {
      let decodeCaracter = text.charCodeAt(index);
      let element = ((decodeCaracter - 65 - parseInt(offset) % 26) + 65);
      if (decodeCaracter >= 65 && decodeCaracter <= 90) {
        if (element < 65) {
          element += 26;
        }
        resultDescifra += String.fromCharCode(element);
      } else if (decodeCaracter >= 97 && decodeCaracter <= 122) {
        if (element < 97) {
          element += 26;
        }
        resultDescifra += String.fromCharCode(element);
      } else {
        resultDescifra += String.fromCharCode(decodeCaracter);
      }
    }
    return resultDescifra;
  }
}
