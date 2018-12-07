//cifrado y descifrado
  let ingresoTexto = document.getElementById("textoCifrar");
  let nroOffsetCifrado = document.getElementById("offsetCifrado");
  let textoCifrado = document.getElementById("textoCifrado");
  let ingresoTexto1 = document.getElementById("textoDescifrar");
  let textoDescifrado = document.getElementById("textoDescifrado");
  let nroOffsetDescifrado = document.getElementById("offsetDescifrado");
  let botonCif = document.getElementById("btnCif");
  let botonDescif = document.getElementById("btnDescif");
  let areaCif = document.getElementById("seccionCif");
  let areaDescif = document.getElementById("seccionDescif");


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


let cifrar = function () {
    areaCif.style.display = "block";
    areaDescif.style.display = "none";
  }
botonCif.addEventListener("click", cifrar);

  let descifrar = function () {
     areaCif.style.display = "none";
     areaDescif.style.display = "block";
   }
botonDescif.addEventListener("click", descifrar);


document.getElementById("btnVolver").addEventListener("click", function (){
    location.reload()
});