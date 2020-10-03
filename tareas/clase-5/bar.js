console.log("Bar linkeado");

$nodoNombre = document.querySelector('#nombre-usuario');
$nodoEdad = document.querySelector('#edad-usuario');
$nodoBoton = document.querySelector('#ingresar');
$nodoResultado = document.querySelector('#resultado');

$nodoBoton.onclick = function (e){
    e.preventDefault();
    if (!$nodoNombre.value && !$nodoEdad.value) {
        $nodoResultado.innerText = "Campo nombre y edad incompletos! Por favor, completelos"
        $nodoNombre.className = "error";
        $nodoEdad.className = "error";
    } else if (!$nodoNombre.value) {
        $nodoNombre.className = "error";
        $nodoEdad.className = "";
        $nodoResultado.innerText = "Campo nombre vacio! Por favor, ponga su nombre."
    } else if (!$nodoEdad.value) {
        $nodoEdad.className = "error";
        $nodoNombre.className = "";
        $nodoResultado.innerText = "Campo edad incompleto! Por favor, ingrese su edad."
    } else {
        if ($nodoNombre.value && ($nodoEdad.value > 17)) {
            $nodoNombre.className = "";
            $nodoEdad.className = "";
            $nodoResultado.innerText = `Tienes ${$nodoEdad.value}, eres mayor de edad. Bienvenido/a al bar, ${$nodoNombre.value}!`;
            $nodoResultado.style.color = "green";
            $nodoResultado.style.fontSize = "2rem";
        }else if($nodoNombre && ($nodoEdad.value < 18)){
            $nodoNombre.className = "";
            $nodoEdad.className = "";
            $nodoResultado.innerText = `Tenes ${$nodoEdad.value}, sos menor de edad. No podés entrar.`;
            $nodoResultado.style.color = "red";
            $nodoResultado.style.fontSize = "2rem";
            
        }
    }
}

