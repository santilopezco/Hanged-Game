"use strict";
/* Declaración de variables a utilizar */
let mostrarVidas = document.getElementById("vidas");
let vidas = 6;
let palabras = [
  "ELEFANTE",
  "PANTERA",
  "CARDIOLOGO",
  "PROGRAMACION",
  "ASESINO",
  "CONDOR",
  "INSTRUMENTO",
  "PANTALLA",
  "TECLADO",
  "JAGUAR",
  "PAPAGAYO",
  "RINOCERONTE",
  "MONOLITO",
  "ANEMONA",
  "PELICULA",
  "MAPACHE",
  "HIPOPOTAMO",
  "VACACIONES",
  "INDIGNACION",
  "MOSTACHO",
  "APREHENDER",
];
let palabra;
let lineas = document.getElementsByClassName("word")[0];
let contador = 0;
let bandera = false;
let palabraG = document.getElementById("palabraGanada");

generarPalabra();
/* Función que genera una palabra aleatoria de el array de palabras,
crea los elementos p para vacíos y luego los añade al div  */
function generarPalabra() {
  palabra = palabras[Math.floor(Math.random() * palabras.length)];
  for (let i = 0; i < palabra.length; i++) {
    let parrafo = document.createElement("p");
    parrafo.setAttribute("id", "p" + i);
    lineas.appendChild(parrafo);
  }
}
/* Proceso de verificación de la letra digitada respecto a la palabra,
se llama en el botón verificar por medio del evento onclick */
function comprobarLetra() {
  bandera = false;
  if (vidas > 0) {
    let letra = document.getElementById("input__text").value.toUpperCase();
    if (letra == "") {
      palabraG.innerHTML = "Debes digitar una letra";
    } else {
      if (letra.length > 1) {
        palabraG.innerHTML = "Solo puedes digitar una letra";
      } else {
        document.getElementById("input__text").value = "";

        for (let i = 0; i < palabra.length; i++) {
          if (letra == palabra[i]) {
            bandera = true;
            if (letra == document.getElementById("p" + i).innerHTML) {
              palabraG.innerHTML = "La letra que introdujiste ya está";
            } else {
              palabraG.innerHTML = "MUY BIEN, continúa jugando";

              document.getElementById("p" + i).innerHTML = letra;
              contador++;
            }

            if (contador == palabra.length) {
              palabraG.innerHTML = "GANASTE, la palabra es " + palabra;
              contador = 0;
              input__text.setAttribute("maxlength",0);
              document.getElementById("img7").style.display = "flex";
              document.getElementById("img" + (vidas)).style.display = "none";
            }
          }
        }

        if (!bandera) {
          palabraG.innerHTML = "CUIDADO, la letra es incorrecta";
          vidas--;

          document.getElementById("img" + vidas).style.display = "flex";
          document.getElementById("img" + (vidas + 1)).style.display = "none";
          mostrarVidas.innerHTML = "Vidas restantes: " + vidas;
        }
      }
    }
  }
  if (vidas == 0) {
    palabraG.innerHTML = "PERDISTE, la palabra correcta es " + palabra;
    input__text.setAttribute("maxlength",0);
  }
}
/* Función para reiniciar todos los valores y que se pueda jugar de nuevo,
se llama en el botón resetear por medio del evento onclick */
function resetear() {
  document.getElementById("img7").style.display = "none";
  document.getElementById("img6").style.display = "flex";
  document.getElementById("img5").style.display = "none";
  document.getElementById("img4").style.display = "none";
  document.getElementById("img3").style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img0").style.display = "none";
  vidas = 6;
  palabraG.innerHTML ="";
  mostrarVidas.innerHTML ="";
  input__text.setAttribute("maxlength",1)


  for (let i = 0; i < palabra.length; i++) {
    let parrafo = document.getElementById("p" + i);
    lineas.removeChild(parrafo);
  }
  generarPalabra();
}