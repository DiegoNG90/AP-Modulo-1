console.log("Pruebas linkeadas");

function pruebasBienvenida(){
    console.assert(
        validarNombre("") === "El campo nombre debe contener al menos 1 caracter",
        "validarNombre no está validando los nombres vacios",
    );
    console.assert(
        validarNombre("asjdhkjashdkasjdhakjshdakjshdkjashdkajshdkajshdkashdkjashkd") === "El campo nombre no debe contener más de 50 caracteres",
        "validarNombre no está validando los nombres de más de 50 caracteres",
    );
    console.assert(
        validarNombre("Javer") === '',
        "validarNombre no está un nombre correcto",
    );
    
    console.assert(
        validarApellido("") === "El campo apellido debe contener al menos 1 caracter",
        "validarApellido no está validando los apellidos vacios",
    );
    console.assert(
        validarApellido("asjdhkjashdkasjdhakjshdakjshdkjashdkajshdkajshdkashdkjashkd") === "El campo apellido no debe contener más de 50 caracteres",
        "validarApellido no está validando los apellidos de más de 50 caracteres",
    );
    console.assert(
        validarApellido("Garcia") === '',
        "validarApellido no está un nombre correcto",
    );

    console.assert(
        validarEdad(-50) === "La edad está fuera de rango; edades validables de 1 a 110 años",
        "validarEdad no está validando las edades que están fuera del rango 0 a 110", 
    );
    console.assert(
        validarEdad(60) === '',
        "validarEdad no está validando una edad correcta", 
    );
}