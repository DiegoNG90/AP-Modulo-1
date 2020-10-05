console.log("Pruebas link");
function probarValidarNombre(){
    console.assert(
        validarNombre('') === "El nombre debe contener al menos 1 caracter",
        'validarNombre() no validó que el nombre estuviera vacío',
    );
    console.assert(
        validarNombre('holaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholahola') === "El nombre no debe contener más de 50 caracteres", 
        'validarNombre() no validó que el nombre fuera menor a 50 caracteres',
    );
}

function probarValidarEdad(){
    console.assert(
        validarEdad("111") === "La edad está fuera de rango; edades validables de 1 a 110 años",
        'validarEdad() no validó que la persona tuviera más de 110 años'
    );
    console.assert(
        validarEdad("16") === "Eres menor de edad, no puedes ingresar al bar",
        'validarEdad() no validó que la persona sea menor de edad'
    )
}

probarValidarNombre();
probarValidarEdad();
