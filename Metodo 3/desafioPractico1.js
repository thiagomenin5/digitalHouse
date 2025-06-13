//Validador de contraseña: Crea una variable llamada ‘contraseña’ donde guardes un valor específico. Luego, crea una función que reciba por parámetro un dato y utilizando operadores lógicos y condicionales, verifica si dicho parámetro coincide con la variable llamada ‘contraseña’. La función deberá mostrar por consola si la contraseña recibida es válida o no.

let contraseña = "miContraseña";
function validarContraseña(dato){
    if(dato === contraseña){
        console.log("contraseña valida")
    }else{
        console.log("contraseña invalida, intenta de nuevo")
    }
    return dato;
};

//validarContraseña("miContraseña");
//validarContraseña("hola como andas");

let numeros = [1,2,3,4,5];
let total = 0;

for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
    console.log(total)
}

console.log("otro---------")
let count = 0;
while(count < 5){
    console.log(count)
    count++;
}
console.log("otro---------")
console.log(count);

let x = 10;
 while(x>5){
    console.log(x);
    x -= 2;
 }
 