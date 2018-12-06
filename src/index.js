//cifrado y descifrado
  let ingresoTexto = document.getElementById("textoCifrar");
  let nroOffsetCifrado = document.getElementById("offsetCifrado");
  let textoCifrado = document.getElementById("textoCifrado");
  let ingresoTexto1 = document.getElementById("textoDescifrar");
  let textoDescifrado = document.getElementById("textoDescifrado");
  let nroOffsetDescifrado = document.getElementById("offsetDescifrado");
  let div1 = document.getElementById("boton1");
  let div2 = document.getElementById("boton2")


  let cifraTexto = function () {
      if ((nroOffsetCifrado.value.length > 0 && !isNaN(nroOffsetCifrado.value)) && (ingresoTexto.value.length > 0)) {
        textoCifrado.value = cipher.encode(ingresoTexto.value, nroOffsetCifrado.value);
      } else {
        textoCifrado.value = "";
      }
    }
  let descifraTexto = function () {
    if ((nroOffsetDescifrado.value.length > 0 && !isNaN(nroOffsetDescifrado.value)) && (ingresoTexto1.value.length > 0)) {
      textoDescifrado.value = cipher.decode(ingresoTexto1.value, nroOffsetDescifrado.value);
    } else {
      textoDescifrado.value = "";
    }
  }

  ingresoTexto.addEventListener("keyup", cifraTexto);
  nroOffsetCifrado.addEventListener("keyup", cifraTexto);

  ingresoTexto1.addEventListener("keyup", descifraTexto); 
  nroOffsetDescifrado.addEventListener("keyup", descifraTexto);

//botones
  function cifrar() {
    let divUno = document.getElementById("boton1");
    divUno.style.display = "block";
    let divDos = document.getElementById("boton2");
    divDos.style.display = "none";
  }
  div1.addEventListener("click", cifrar);

   function descifrar() {
     let divUno = document.getElementById("boton1");
     divUno.style.display = "none";
     let divDos = document.getElementById("boton2");
     divDos.style.display = "block";
   }
  div2.addEventListener("click", descifrar);
