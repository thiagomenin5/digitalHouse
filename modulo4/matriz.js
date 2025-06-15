// Crear matriz
let matriz = [[1,2,3], [4,5,6], [7,8,9]];

//visualizar una matriz
console.table(matriz);

// Opcion 2
let arrayMatriz = [];

let fila1 = ["x0","x1", "x2"];
let fila2 = ["y0", "y1", "y2"];

arrayMatriz[0] = fila1;
arrayMatriz[1]= fila2;
console.table(arrayMatriz);

//acceder a un elemento especifico de una matriz
console.log(matriz[1][1]) //deberia salir 5