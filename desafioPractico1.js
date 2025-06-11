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

validarContraseña("miContraseña");
validarContraseña("hola como andas");