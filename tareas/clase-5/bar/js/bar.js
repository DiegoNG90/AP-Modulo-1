console.log("Bar linkeado");

$nodoNombre = document.querySelector('#nombre');
$nodoEdad = document.querySelector('#edad');
$nodoBoton = document.querySelector('#ingresar');
$nodoResultado = document.querySelector('#resultado');

function validarNombre(nombre){
    if (nombre === "") {
        return "El nombre debe contener al menos 1 caracter"        
    }else if (nombre.length >= 50) {
        return "El nombre no debe contener más de 50 caracteres"
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

$nodoBoton.onclick = function (e){
    e.preventDefault();
    edad = $nodoEdad.value;
    nombre = $nodoNombre.value;
    validarNombre(nombre);
    validarEdad(edad);
    console.log(validarNombre(nombre));
    console.log(validarEdad(edad));
    if ((validarNombre(nombre) !== '') && (validarEdad(edad) !== '')) {
        $nodoResultado.innerText = validarNombre(nombre) +". "+ validarEdad(edad);
        $nodoNombre.className = "error";
        $nodoEdad.className = "error";
        $nodoResultado.style.color = "red";
        $nodoResultado.style.fontSize = "2rem";
    }else if (validarNombre(nombre) !== '') {
        $nodoNombre.className = "error";
        $nodoEdad.className = "";
        $nodoResultado.innerText = validarNombre(nombre);
        $nodoResultado.style.color = "red";
        $nodoResultado.style.fontSize = "2rem";
    }else if (validarEdad(edad) !== '') {
        $nodoEdad.className = "error";
        $nodoNombre.className = "";
        $nodoResultado.innerText = validarEdad(edad);
        $nodoResultado.style.color = "red";
        $nodoResultado.style.fontSize = "2rem";
    } else {
        if ((validarNombre(nombre) === '') && (validarEdad(edad) === '')) {
            $nodoNombre.className = "";
            $nodoEdad.className = "";
            $nodoResultado.innerText = `Tienes ${edad}, eres mayor de edad. Bienvenido/a al bar, ${nombre}!`;
            $nodoResultado.style.color = "green";
            $nodoResultado.style.fontSize = "2rem";
        }else if((validarNombre(nombre) === '') && (validarEdad(edad) !== '')){
            $nodoNombre.className = "";
            $nodoEdad.className = "";
            $nodoResultado.innerText = `Tenes ${edad}, sos menor de edad. No podés entrar.`;
            $nodoResultado.style.color = "red";
            $nodoResultado.style.fontSize = "2rem"; 
        }
    }
}

