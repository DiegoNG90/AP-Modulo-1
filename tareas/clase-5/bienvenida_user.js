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

$nodoBoton = document.querySelector('#enviar');
$nodoBoton.onclick = function(e){
    e.preventDefault();
    $nodoDatos.value += $nodoNombre.value;
    $nodoDatos.value += $nodoApellido.value;
    $nodoDatos.value += $nodoEdad.value;
    $nodoTitulo.innerText = `Bienvenido, ${$nodoNombre.value}!`
}


