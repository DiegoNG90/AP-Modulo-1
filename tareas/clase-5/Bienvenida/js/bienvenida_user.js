console.log("Linkeado 100%");
//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

$nodoNombre = document.querySelector('#nombre');
$nodoApellido = document.querySelector('#apellido');
$nodoEdad = document.querySelector('#edad');
$nodoDatos = document.querySelector('#datos');
$nodoTitulo = document.querySelector('h1');

function validarNombre(nombre){
    if (nombre === "") {
        return `El ${nombre} debe contener al menos 1 caracter`;        
    }else if (nombre.length >= 50) {
        return `El ${nombre} no debe contener más de 50 caracteres`;
    }else{
        return ''
    }
}

function validarEdad(edad){
    if (edad > 110 || edad < 0) {
        return "La edad está fuera de rango; edades validables de 1 a 110 años";
    }
    else if (edad<18){
        return "Eres menor de edad, no puedes ingresar al bar";
    }
    return '';
}

$nodoBoton = document.querySelector('#enviar');
$nodoBoton.onclick = function(e){
    e.preventDefault();
    $nodoDatos.value += $nodoNombre.value + "\n";
    $nodoDatos.value += $nodoApellido.value + "\n";
    $nodoDatos.value += $nodoEdad.value + "\n";
    $nodoTitulo.innerText = `Bienvenido, ${$nodoNombre.value}!`
}



