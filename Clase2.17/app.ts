let avenger = {

  nombre: "Steve",
  clave: "Capitan America",
  poder: "Droga"
}

let {clave, nombre, poder} = avenger;

/*let nombre = avenger.nombre;
let clave = avenger.clave;
let poder = avenger.poder;*/

console.log(nombre, clave, poder)

let avengers:string[] = ["Thor", "Steve", "Tony"];

let [, capi, ironman] = avengers;

console.log( capi, ironman);
