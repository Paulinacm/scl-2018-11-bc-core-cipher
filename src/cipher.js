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
      let element = (decCaracter + parseInt(offset)) % 26;
      if (decCaracter >= 65 && decCaracter <= 90){
        resultCifra += String.fromCharCode(element);
      }
      if (decCaracter >= 97 && decCaracter <= 122) {
        resultCifra += String.fromCharCode(element);
      }
    }
  }
      return resultCifra;

 
          // Convierto el decimal resultante en caracter y lo agrego a variable que guarda texto cifrado
        
      /*let element1 = (decCaracter - 97 + parseInt(offset)) % 26 + 97;
         // función para letras minúsculas, debe estar entre 97 y 122
          // Convierto el decimal resultante en caracter y lo agrego a variable que guarda texto cifrado
          resultCifra += String.fromCharCode(element1);*/

          

  //decode: (text,offset) => {
    /* Acá va tu código 
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
*/