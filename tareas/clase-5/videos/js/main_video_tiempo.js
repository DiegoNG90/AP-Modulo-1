console.log("Video JS linkeado");
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let nodoSumar = document.getElementById('sumar-tiempo');
const $form = document.querySelector('#calcular-tiempo');
let cantidadSegundos = 0;
let cantidadMinutos = 0;
let cantidadHoras = 0;
nodoSumar.onclick = function(e){
    e.preventDefault()
    validarFormulario(e);   
}


function tiempoTotalEnSegundos(segundos, minutos, horas){
    return segundos + minutos*60 + horas*60*60
}
let nodoCalcular = document.getElementById('calcular');
nodoCalcular.onclick = function(e){
    e.preventDefault();

    const segundosTotales = tiempoTotalEnSegundos(cantidadSegundos,cantidadMinutos,cantidadHoras);
    let horas = Math.floor(segundosTotales / 3600 );
    let minutos = Math.floor((segundosTotales%3600) / 60);
    let segundos = (segundosTotales % 60);
    alert(`${horas} horas, ${minutos} minutos, ${segundos} segundos`);
    document.getElementById('resultado').textContent = (` Duracion total: ${horas} horas, ${minutos} minutos, ${segundos} segundos`);
} 

let segundos;
let minutos;
let horas;

function validarSegundos (segundos){
    if (segundos < 0){
        return "El valor del campo segundos no puede ser menor a 0";
    }else if (!(/^[0-9]{1,2}$/.test(segundos.toString()))) {
        return "El valor del campo segundos no admite numeros decimales ni numeros superiores a 99"
    }
    else{
        return '';
    }
}
function validarMinutos (minutos){
    if (minutos < 0){
        return "El valor del campo minutos no puede ser menor a 0";
    }else if (!(/^[0-9]{1,2}$/.test(minutos.toString()))) {
        return "El valor del campo minutos no admite numeros decimales ni numeros superiores a 99"
    }
    else{
        return '';
    }
}

function validarHoras (horas){
    if (horas < 0){
        return "El valor del campo horas no puede ser menor a 0";
    }else if (!(/^[0-9]{1,2}$/.test(horas.toString()))) {
        return "El valor del campo horas no admite numeros decimales ni numeros superiores a 99"
    }
    else{
        return '';
    }
}

function validarFormulario(e){
    e.preventDefault()
    const $form = document.querySelector('#calcular-tiempo');
    const horas = Number($form.horas.value);
    const minutos = Number($form.minutos.value);
    const segundos = Number($form.segundos.value);

    const errorSegundos = validarSegundos(segundos);
    const errorMinutos = validarMinutos(minutos);
    const errorHoras = validarHoras(horas);

    const errores = {
        segundos: errorSegundos,
        minutos: errorMinutos,
        horas: errorHoras
    }
    const esExito = manejarErrores(errores) === 0;

    if(esExito){
        let segundos = Number(document.querySelector('#segundos').value);
        let minutos = Number(document.querySelector('#minutos').value);
        let horas = Number(document.querySelector('#horas').value);    
    
        cantidadSegundos += segundos;
        cantidadMinutos += minutos;
        cantidadHoras += horas;
        alert(`Video cargado. Duracion: ${horas} horas ${minutos}' ${segundos}"`);
    }
}

function manejarErrores(errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    cantidadErrores = 0;

    keys.forEach(function(key) {
        const error = errores[key];

        if (error){
            cantidadErrores++;
            $form[key].className = "error"

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        } else{
            $form[key].className  = "";
            $errores.innerHTML = "";
        }  
    });
    return cantidadErrores;
}

// $form.onsubmit = validarFormulario;

// PRUEBAS
// validar("#segundos");
// validar("#minutos");
// validar("#horas");



