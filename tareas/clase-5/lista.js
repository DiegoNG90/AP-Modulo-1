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

function nodeToArray(nodeList){
    const newArray = [];
    nodeList.forEach(element => {
        newArray.push(Number(element.innerText));
    });
    return newArray;
}
const edadesArr = nodeToArray($nodoLista);

//4

function numerosRepetidosEnArray(array){
    let numerosrepetidos = [];
    for(let i=0; i < array.length;i++){
        for(let j=0; j < array.length;j++){
            if (j!==i && array[i]==array[j]){
                numerosrepetidos.push(array[i])
            }
        }
    }return numerosrepetidos
}

let edadRepetida = numerosRepetidosEnArray(edadesArr)[0];

function cantidadDeRepeticionesEnUnaArrayPorElemento (array){
    let objetoNum = {};
    let contador = 1;
    for (let i = 0; i < array.length; i++) {
        if (objetoNum[i] === undefined) {
            if (!(array[i] in objetoNum)) {
                contador = 1;
                objetoNum[array[i]] = contador;            
            }else{
                contador = objetoNum[array[i]] + 1;
                objetoNum[array[i]] = contador; 
            }
        }else{
            contador = objetoNum[array[i]] + 1;
            objetoNum[array[i]] = contador;   
        }
    }return objetoNum;
}

const objetoEdadesArr = cantidadDeRepeticionesEnUnaArrayPorElemento(edadesArr);

function valorMasGrandeDeLasPropiedadesDeUnObjetoConNumeros (objeto){
    let valorMasGrande = Math.max(...Object.values(objeto));
    const objetoConElValorMasGrande = {};
    for (const key in objeto) {
        if (objeto[key] === valorMasGrande) {
            objetoConElValorMasGrande[key] = valorMasGrande;
        }
    } return objetoConElValorMasGrande; 
}
const objetoConLaEdadMasGrande = valorMasGrandeDeLasPropiedadesDeUnObjetoConNumeros(objetoEdadesArr);

console.log("Promedio " + promedio.toFixed(2));
document.querySelector('#promedio').innerText = `El promedio es ${promedio.toFixed(2)}`
console.log("Numero mas grande " + Math.max(...lista));
document.querySelector('#grande').innerText = `El numero más grande es ${Math.max(...lista)}`
console.log("Numero mas pequeño " +Math.min(...lista));
document.querySelector('#pequeño').innerText = `El numero más pequeño es ${Math.min(...lista)}`
document.querySelector('#repetido').innerText = `El numero más veces repetido es: ${Object.keys(objetoConLaEdadMasGrande)}`
console.log(`Numero repetido: ${Object.keys(objetoConLaEdadMasGrande)}`);





