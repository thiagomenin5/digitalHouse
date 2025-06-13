const prompt = require("prompt-sync")({ sigint: true });


function sumar(num1,num2){
    return num1 + num2;
}
function restar(num1,num2){
    return num1 + num2;
}
function multiplicar(num1,num2){
    return num1 * num2;
}
function dividir(num1,num2){
    if(num2 == 0){
        console.log(`no se puede dividir por 0`)
    }else{
        return num1 / num2;
    }
}

console.log("Bienvenido a su calculadora digital")
console.log("1. Suma")
console.log("2. Resta")
console.log("3. Multiplicacion")
console.log("4. Division")
let opcion = parseInt(prompt("indique la operacion a realizar: "));
if(opcion == 1){
    let numero1 = parseInt(prompt("Elije un numero: "));
    let numero2 = parseInt(prompt("Elije otro numero: "));
    console.log("resultado: " + sumar(numero1,numero2))
}else if(opcion == 2){
    let numero1 = parseInt(prompt("Elije un numero: "));
    let numero2 = parseInt(prompt("Elije otro numero: "));
    console.log("resultado: " + restar(numero1,numero2))
}else if(opcion == 3){
    let numero1 = parseInt(prompt("Elije un numero: "));
    let numero2 = parseInt(prompt("Elije otro numero: "));
    console.log("resultado: " + multiplicar(numero1,numero2))
}else if(opcion == 4){
    let numero1 = parseInt(prompt("Elije un numero: "));
    let numero2 = parseInt(prompt("Elije otro numero: "));
    console.log("resultado: " + dividir(numero1,numero2))
}else{
    console.log("su numero no esta dentro de las opciones");
}

//Holasergio123   2001