//Evaluador de Rango de Edad: Escribe una función que determine en qué categoría de edad se encuentra una persona. Utiliza las estructuras que consideres necesarias para clasificar a las personas en rangos como niño, adolescente, adulto joven, adulto, etc., según su edad.

function rangoEdad(edad){
    if(edad >= 0 && edad<=2){
        console.log(`tenes: ${edad} años, se considera bebe`);
    }else if(edad > 2 && edad<=11){
        console.log(`tenes: ${edad} años, se considera niño`);
    }else if(edad > 11 && edad<=17){
        console.log(`tenes: ${edad} años, se considera adolescente`);
    }else if(edad > 17 && edad<=25){
        console.log(`tenes: ${edad} años, se considera adulto Joven`);
    }else if(edad > 25 && edad<=60){
        console.log(`tenes: ${edad} años, se considera adulto`);
    }else{
        console.log(`tenes: ${edad} años, se considera jubilado`);
    }
}
rangoEdad(90)