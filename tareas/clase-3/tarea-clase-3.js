// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

// let userNombre = prompt("Decime tu nombre").toLowerCase();
// const miNombre = "diego";
// const nombreAmigo = "emiliano";

// if (userNombre === miNombre){
//     console.log(`Hola, Tocayo! Yo también me llamo ${miNombre}`);
// }else if(userNombre === nombreAmigo){
//     console.log(`Hola ${userNombre}, te llamas igual que mi amigo ${nombreAmigo}`);
// }
// else{
//     console.log(`Hola ${userNombre}`);
// }

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

// let edadUsuario = parseInt(prompt("Ingrese su edad"));
// const miEdad = 30;

// if (edadUsuario === miEdad){
//     console.log("Tenemos la misma edad");
// }else if (edadUsuario > miEdad){
//     console.log("Vos sos mayor que yo");
// }else{
//     console.log("Eres más jóven que yo");
// }

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let dniUsuario = prompt("Tenés DNI?").toLowerCase();
let edadUsuario;
let entrada = true;
while (dniUsuario !== "si" && dniUsuario !== "no") {
  alert("Disculpe, no entendí su respuesta.")
  dniUsuario = prompt("Tenés DNI?").toLowerCase();
}
if (dniUsuario === "si") {
  edadUsuario = Number(prompt("Qué edad tenés?"));
  if (edadUsuario >= 18) {
    alert(`Entrada al bar: ${entrada}; podés entrar al bar, bienvenido`);
  }else {
    alert(`Entrada al bar: ${!entrada}; no podés entrar al bar porque sos menor.`)
  }
}else if (dniUsuario === "no") {
  alert(`Entrada al bar: ${!entrada}: no tenés documento, no podés pasar.`)
}else {
  alert("No te entiendo nada.")
}