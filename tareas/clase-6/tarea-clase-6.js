/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.


Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

// const grupoFamiliar = Number(prompt("Indique cuantas personas integran su familia"));
// for (let index = 0; index < grupoFamiliar; index++) {
//     let etiqueta = document.createElement('label');
//     let edadIntegrante = document.createElement('input');
//     edadIntegrante.placeholder = "Ingrese la edad de un integrante de su familia aquí";
//     etiqueta.innerText = `Integrante # ${index+1}  `;
//     document.querySelector('div').appendChild(etiqueta);
//     document.querySelector('div').appendChild(edadIntegrante);   
//     document.querySelector('div').appendChild(document.createElement('br'));
// }
// const $botonCalcular = document.createElement('button');
// const $botonBorrar = document.createElement('button');
// document.querySelector('div').appendChild($botonCalcular);
// document.querySelector('div').appendChild($botonBorrar);
// $botonCalcular.innerText = "Calcular";
// $botonBorrar.innerText = "Borrar";
// const $listaInputs = document.querySelectorAll('input');
// const resultado = document.querySelector('p');
// function conversorNodeListToArray($nodeList){
//     const arrayConvertida = [];
//     for (let i = 0; i < $nodeList.length; i++) {
//         arrayConvertida.push( Number($nodeList.item(i).value));
//     }
//     return arrayConvertida;
// }
// $botonCalcular.onclick = function(e){
//     e.preventDefault()    
//     resultado.innerText = `El mayor de la familia tiene ${calcularMayor(conversorNodeListToArray($listaInputs))}.\n
//     El menor de la familia tiene ${calcularMenor(conversorNodeListToArray($listaInputs))}.\n
//     El promedio de las edad es ${calcularPromedio(conversorNodeListToArray($listaInputs))}`; 
// };
// function calcularMayor(lista){
//     let edadMayor = 0;
//     for (let i = 0; i < lista.length; i++) {
//         if (edadMayor < lista[i] ){
//             edadMayor = Number(lista[i]);
//         }
//     }
//     return edadMayor
// }; 
// function calcularMenor(lista){
//     let edadMenor = lista[0];
//     for (i = 0; i< lista.length; i++){
//         if (edadMenor > lista[i]){
//             edadMenor = Number(lista[i]);
//         }
//     }
//     return edadMenor
// };
// function calcularPromedio(lista){
//     let sumaEdades = 0;
//     for (let i = 0; i < lista.length; i++) {
//         sumaEdades += Number(lista[i]);
//     }
//     return  sumaEdades/(lista.length)
// };
// $botonBorrar.onclick = function(e){
//     e.preventDefault(e)
//     for (let i = 0; i < $listaInputs.length; i++) {
//         $listaInputs.item(i).value = "";     
//     }
// };



/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $nodoEtiqueta = document.createElement('label');
const $nodoIntegrante = document.createElement('input');
const $nodoSiguiente = document.createElement('button');
const $nodoEnter = document.createElement('br');
$nodoSiguiente.innerText = "Siguiente";
$nodoEtiqueta.innerText = "Indique el numero de integrantes que tiene su familia ";
$nodoIntegrante.type = "number";
document.querySelector('form').appendChild($nodoEtiqueta);
document.querySelector('form').appendChild($nodoIntegrante);
document.querySelector('form').appendChild($nodoSiguiente);
document.querySelector('form').appendChild($nodoEnter);
$nodoSiguiente.onclick = function crearMiembrosFamiliares(e){
    e.preventDefault();
    const cantidadMiembros = Number($nodoIntegrante.value);
    for (let i = 0; i < cantidadMiembros; i++) {
        let miembroEtiqueta = document.createElement('label');
        let datoMiembro = document.createElement('input');
        let saltoDeLinea = document.createElement('br');
        miembroEtiqueta.innerText = "Ingrese el salario de uno de los miembros de su familia  ";
        miembroEtiqueta.className = "etiqueta-ingreso"
        datoMiembro.placeholder = "Ingrese el sueldo en valor numérico";
        datoMiembro.type = "number"; 
        datoMiembro.className = "sueldos";
        document.querySelector('form').appendChild(miembroEtiqueta);
        document.querySelector('form').appendChild(datoMiembro);
        document.querySelector('form').appendChild(saltoDeLinea);
    }
};
const $botonCalcular = document.createElement('button');
$botonCalcular.innerText = "Calcular";
document.querySelector('div').appendChild($botonCalcular);
const $botonResetear = document.createElement('button');
$botonResetear.innerText = "Reestablecer";
document.querySelector('div').appendChild($botonResetear);
const $nodoParrafo = document.querySelector('p');
$botonCalcular.onclick = function(e){
    e.preventDefault()
    const $listaSueldos = document.querySelectorAll('.sueldos');        
    $nodoParrafo.innerText = `El mayor sueldo de la familia es: ${calcularMayor(conversorNodeListToArray($listaSueldos))}.\n
    El menor sueldo de la familia es: ${calcularMenor(conversorNodeListToArray($listaSueldos))}.\n
    El promedio de los sueldos es de: ${calcularPromedio(conversorNodeListToArray($listaSueldos))}`; 
};
$botonResetear.onclick = function (e){
    e.preventDefault()
    document.querySelector('form').reset();
    $nodoParrafo.innerText = "";
    const $listaSueldos = document.querySelectorAll('.sueldos');
    for (let i = 0; i < $listaSueldos.length; i++) {
        $listaSueldos.item(i).remove();
        document.querySelector('.etiqueta-ingreso').remove();
    }
};
