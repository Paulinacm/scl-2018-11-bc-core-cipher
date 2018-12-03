window.cipher = {
  encode: (text, offset) => {
    let resultCifra = "";
    /* Acá va tu código */
    //Recorro la palabra cifrando los caracteres
    for (let index = 0; index < text.length; index++) {
      // Uso variable local para guardar el caracter en decimal
      let decCaracter = text.charCodeAt(index);
      let element = (decCaracter - 65 + (parseInt(offset) % 26) + 65);
      if (decCaracter >= 65 && decCaracter <= 90) {
        resultCifra += String.fromCharCode(element);
      }
      if (decCaracter >= 97 && decCaracter <= 122) {
        resultCifra += String.fromCharCode(element);
      }
    }
    return resultCifra;
  },
  decode: (text, offset) => {
    let resultDescifra = "";
    for (let index = 0; index < text.length; index++) {
      let decodeCaracter = text.charCodeAt(index);
      let element = (decodeCaracter -65 - (parseInt(offset) % 26) + 65);
      if (decodeCaracter >= 65 && decodeCaracter <= 90) {
          resultDescifra += String.fromCharCode(element);
        } 
        if (decodeCaracter >= 96 && decodeCaracter <= 123) {
          resultDescifra += String.fromCharCode(element);
      }
        } 
        return resultDescifra;
      }
}