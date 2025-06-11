const prompt = require("prompt-sync")({ sigint: true });
//ej 1(6): Unir dos arrays: Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo. La función debe devolver el nuevo array.Para esto, averiguar qué hace el método .concat()

const unirArrays = (array1 = [], array2 = []) => {
  const parametrosUnidos = array1.concat(array2);
  return parametrosUnidos;
};

console.log(
  unirArrays(
    ["hola como andas", "soy puto"],
    ["gato de mierda", "sos una farsa"]
  )
);

//ej 2(7): Eliminar primer elemento: Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro y elimine el primer elemento. La función debe devolver el elemento eliminado.

const eliminarPrimerElemento = (array = []) => {
  const primeroElimninado = array.shift();
  return primeroElimninado;
};

console.log(
  eliminarPrimerElemento(["hola como andas", "soy puto", "dale wachoooooo"])
);

//ej 3(8):Convertir texto: Crea una función que reciba un string por parámetro y lo convierta a mayúsculas y minúsculas respectivamente. La función deberá mostrar los resultados por consola. Para esto, averiguar qué hacen los métodos de Strings: toUpperCase() y toLowerCase()

const minimayuscula = (param) => {
  if (typeof param !== "string") {
    throw new Error("debe ser un string");
  }
  const mayusculas = param.toUpperCase();
  const minusculas = param.toLowerCase();

  console.log("Texto en mayúsculas:", mayusculas);
  console.log("Texto en minúsculas:", minusculas);
};

minimayuscula("soy raul");

//ej 4(9): Manipulación de objetos: Crea un objeto llamado ‘persona’ que contenga como propiedades: nombre, edad y ocupación. Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para ver sus valores. Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’. Llama nuevamente a la función creada para visualizar el cambio efectuado.

const persona = {
    nombre: "thiago",
    edad: 23,
    ocupacion: "emprendedor"
}

const propiedades = ()=>{
    const mostrarPropiedades= Object.entries(persona);
    return mostrarPropiedades;
}

console.log(propiedades());

persona.ocupacion = "programador";
persona.habilidad = "juegador de futbol"

console.log(propiedades());

//ej 5(10): Objetos anidados: Agrega una nueva propiedad al objeto creado en el ejercicio anterior llamada ‘ubicacion’, donde deberás guardar un objeto interno con las propiedades: codigoPostal, ciudad, calle y número. Luego, crea una función que reciba dicho objeto por parámetro y le permita al usuario eliminar solo una de las propiedades del objeto.

persona.ubicacion = {
    codigoPostal: 1642,
    ciudad:"San Isidro",
    calle: "Av. Centenario",
    numero: 1642
}
const objUbicacion = (persona,propiedadAEliminar)=>{
    if (persona.ubicacion.hasOwnProperty(propiedadAEliminar)) {
    delete persona.ubicacion[propiedadAEliminar];
    console.log(`Propiedad '${propiedadAEliminar}' eliminada.`);
  } else {
    console.log(`La propiedad '${propiedadAEliminar}' no existe.`);
  }
}
// Mostrar ubicación original
console.log('Ubicación antes de eliminar:');
console.log(persona.ubicacion);

// Llamada a la función (ejemplo: eliminar "codigoPostal")
objUbicacion(persona, "codigoPostal");

// Mostrar ubicación actualizada
console.log('Ubicación después de eliminar:');
console.log(persona.ubicacion);