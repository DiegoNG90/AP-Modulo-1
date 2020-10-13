console.log("Pruebas linkeado");

function probarValidarTiempo(){
    console.assert(
        validarSegundos(-1) === "El valor del campo segundos no puede ser menor a 0",
        "Validar segundos no validó que el valor del input sea negativo"
    );
    console.assert(
        validarMinutos(-5) === "El valor del campo minutos no puede ser menor a 0",
        "Validar minutos no validó que el valor del input sea negativo"
    );
    console.assert(
        validarHoras(-5) === "El valor del campo horas no puede ser menor a 0",
        "Validar horas no validó que el valor del input sea negativo"
    );
}

// probarValidarTiempo();
