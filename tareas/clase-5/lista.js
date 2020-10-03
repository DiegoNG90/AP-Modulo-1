console.log("Lista linkeado");
/*//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..." */
$nodoLista = document.querySelectorAll('li');       
const lista = [];
let suma = 0;

for (let i = 0; i < $nodoLista.length; i++) {
    lista.push(Number($nodoLista.item(i).innerText));
    suma += (Number($nodoLista.item(i).innerText));

}
let promedio = (suma/($nodoLista.length));
//Usando FOR EACH, pero mejor aprovechar la 1era iteracion
// let sum = 0;
// lista.forEach(function(item){
//     sum += item;
// })


console.log("Promedio " + promedio.toFixed(2));
document.querySelector('#promedio').innerText = `El promedio es ${promedio.toFixed(2)}`
console.log("Numero mas grande " + Math.max(...lista));
document.querySelector('#grande').innerText = `El numero más grande es ${Math.max(...lista)}`
console.log("Numero mas pequeño " +Math.min(...lista));
document.querySelector('#pequeño').innerText = `El numero más pequeño es ${Math.min(...lista)}`
document.querySelector('#repetido').innerText = `El numero más veces repetido es: no sé calcular ésto todavía`

