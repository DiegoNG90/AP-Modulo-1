/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.


Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const grupoFamiliar = Number(prompt("Indique cuantas personas integran su familia"));
for (let index = 0; index < grupoFamiliar; index++) {
    let etiqueta = document.createElement('label');
    let edadIntegrante = document.createElement('input');
    edadIntegrante.placeholder = "Ingrese la edad de un integrante de su familia aquí";
    etiqueta.innerText = `Integrante # ${index+1}  `;
    document.querySelector('div').appendChild(etiqueta);
    document.querySelector('div').appendChild(edadIntegrante);   
    document.querySelector('div').appendChild(document.createElement('br'));
}
const $botonCalcular = document.createElement('button');
const $botonBorrar = document.createElement('button');
document.querySelector('div').appendChild($botonCalcular);
document.querySelector('div').appendChild($botonBorrar);
$botonCalcular.innerText = "Calcular";
$botonBorrar.innerText = "Borrar";
const $listaInputs = document.querySelectorAll('input');
const resultado = document.querySelector('p');
function conversorNodeListToArray($nodeList){
    const arrayConvertida = [];
    for (let i = 0; i < $nodeList.length; i++) {
        arrayConvertida.push( Number($nodeList.item(i).value));
    }
    return arrayConvertida;
}
$botonCalcular.onclick = function(e){
    e.preventDefault()    
    resultado.innerText = `El mayor de la familia tiene ${calcularMayor(conversorNodeListToArray($listaInputs))}.\n
    El menor de la familia tiene ${calcularMenor(conversorNodeListToArray($listaInputs))}.\n
    El promedio de las edad es ${calcularPromedio(conversorNodeListToArray($listaInputs))}`; 
};
function calcularMayor(lista){
    let edadMayor = 0;
    for (let i = 0; i < lista.length; i++) {
        if (edadMayor < lista[i] ){
            edadMayor = Number(lista[i]);
        }
    }
    return edadMayor
}; 
function calcularMenor(lista){
    let edadMenor = lista[0];
    for (i = 0; i< lista.length; i++){
        if (edadMenor > lista[i]){
            edadMenor = Number(lista[i]);
        }
    }
    return edadMenor
};
function calcularPromedio(lista){
    let sumaEdades = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaEdades += Number(lista[i]);
    }
    return  sumaEdades/(lista.length)
};
$botonBorrar.onclick = function(e){
    e.preventDefault(e)
    for (let i = 0; i < $listaInputs.length; i++) {
        $listaInputs.item(i).value = "";     
    }
};
