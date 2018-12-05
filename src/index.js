
  let ingresoTexto = document.getElementById("textoCifrar");
  let nroOffsetCifrado = document.getElementById("offsetCifrado");
  let textoCifrado = document.getElementById("textoCifrado");
  let ingresoTexto1 = document.getElementById("textoDescifrar");
  let textoDescifrado = document.getElementById("textoDescifrado");
  let nroOffsetDescifrado = document.getElementById("offsetDescifrado");

  ingresoTexto.addEventListener("onkeyup", nroOffsetCifrado);
    if ((nroOffsetCifrado.value.length > 0 && !isNaN(nroOffsetCifrado.value)) && (ingresoTexto.value.length > 0)) {
      textoCifrado.value = cipher.encode(ingresoTexto.value, nroOffsetCifrado.value);
    } else {
      textoCifrado.value = "";
    }

  ingresoTexto1.addEventListener("onkeyup", nroOffsetDescifrado);
    if ((nroOffsetDescifrado.value.length > 0 && !isNaN(nroOffsetDescifrado.value)) && (ingresoTexto1.value.length > 0)) {
      textoDescifrado.value = cipher.decode(ingresoTexto1.value, nroOffsetDescifrado.value);
    } else {
      textoDescifrado.value = "";
  }
