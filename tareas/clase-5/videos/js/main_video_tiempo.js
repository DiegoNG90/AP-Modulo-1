console.log("Video JS linkeado");
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let nodoSumar = document.getElementById('Sumar-tiempo');
let cantidadSegundos = 0;
let cantidadMinutos = 0;
let cantidadHoras = 0;
nodoSumar.onclick = function(e){
    e.preventDefault()
    let segundos = Number(document.getElementById('segundos').value);
    cantidadSegundos += segundos;
    let minutos = Number(document.getElementById('minutos').value);
    cantidadMinutos += minutos;
    let horas = Number(document.getElementById('horas').value);    
    cantidadHoras += horas;
    alert(`Video cargado. Duracion: ${horas} horas ${minutos}' ${segundos}"`);
}   
function tiempoTotalEnSegundos(segundos, minutos, horas){
    return segundos + minutos*60 + horas*60*60
}
let nodoCalcular = document.getElementById('Calcular');
nodoCalcular.onclick = function(e){
    e.preventDefault();
    const segundosTotales = tiempoTotalEnSegundos(cantidadSegundos,cantidadMinutos,cantidadHoras);
    let horas = Math.floor(segundosTotales / 3600 );
    let minutos = Math.floor((segundosTotales%3600) / 60);
    let segundos = (segundosTotales % 60);
    alert(`${horas} horas, ${minutos} minutos, ${segundos} segundos`);
    document.getElementById('resultado').textContent = (` Duracion total: ${horas} horas, ${minutos} minutos, ${segundos} segundos`);
} 