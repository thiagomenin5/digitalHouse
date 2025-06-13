// Métodos de arrays más comunes - SIN OBJETOS

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'pera'];

// forEach: recorre el array y ejecuta algo por cada elemento
numeros.forEach(function(numero) {
  console.log('forEach:', numero);
});

// map: crea un nuevo array con los valores modificados
const numerosDoble = numeros.map(function(numero) {
  return numero * 2;
});
console.log('map:', numerosDoble);

// filter: filtra los elementos que cumplen una condición
const mayoresQue2 = numeros.filter(function(numero) {
  return numero > 2;
});
console.log('filter:', mayoresQue2);

// find: busca el primer elemento que cumpla una condición
const frutaConB = frutas.find(function(fruta) {
  return fruta.startsWith('b');
});
console.log('find:', frutaConB);

// findIndex: busca el índice del primer elemento que cumpla una condición
const indicePera = frutas.findIndex(function(fruta) {
  return fruta === 'pera';
});
console.log('findIndex:', indicePera);

// some: verifica si al menos uno cumple una condición
const hayPares = numeros.some(function(numero) {
  return numero % 2 === 0;
});
console.log('some:', hayPares);

// every: verifica si todos cumplen una condición
const todosPositivos = numeros.every(function(numero) {
  return numero > 0;
});
console.log('every:', todosPositivos);

// reduce: acumula los valores en uno solo (ej: suma)
const suma = numeros.reduce(function(acumulador, actual) {
  return acumulador + actual;
}, 0);
console.log('reduce (suma):', suma);

// includes: verifica si un elemento está en el array
const tieneBanana = frutas.includes('banana');
console.log('includes:', tieneBanana);

// sort: ordena los elementos (modifica el original)
const numerosOrdenados = [...numeros].sort(function(a, b) {
  return a - b; // orden ascendente
});
console.log('sort:', numerosOrdenados);

// concat: une dos arrays
const masNumeros = numeros.concat([6, 7, 8]);
console.log('concat:', masNumeros);

// slice: saca una parte del array (no lo modifica)
const primerasFrutas = frutas.slice(0, 2);
console.log('slice:', primerasFrutas);

// splice: cambia el array (sí lo modifica)
const copiaFrutas = [...frutas];
copiaFrutas.splice(1, 1, 'kiwi'); // reemplaza 1 elemento desde la posición 1
console.log('splice:', copiaFrutas);

// push: agrega al final
frutas.push('uva');
console.log('push:', frutas);

// pop: saca el último
const ultima = frutas.pop();
console.log('pop:', ultima);

// unshift: agrega al inicio
frutas.unshift('naranja');
console.log('unshift:', frutas);

// shift: saca el primero
const primera = frutas.shift();
console.log('shift:', primera);

// join: convierte el array en string con separador
const frutasString = frutas.join(', ');
console.log('join:', frutasString);