"use strict";
function enviarMision(xmen) {
    console.log("Enviando a mision: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel : " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
