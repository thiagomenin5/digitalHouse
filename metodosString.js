
// Métodos de strings más comunes

const texto = "Hola mundo";
const arrayTexto = ["numero0", "numero1", "numero3"];

// length: devuelve la cantidad de caracteres
console.log('length:', texto.length);
console.log('length en array:', arrayTexto[0].length); // entra a la posicion indicada del array y cuenta los caracteres de ella

// toUpperCase: convierte a mayúsculas
console.log('toUpperCase:', texto.toUpperCase());

// toLowerCase: convierte a minúsculas
console.log('toLowerCase:', texto.toLowerCase());

// indexOf: devuelve la posición de la primera aparición
console.log('indexOf("mundo"):', texto.indexOf("mundo"));

// lastIndexOf: posición de la última aparición
const texto2 = "hola mundo mundo";
console.log('lastIndexOf("mundo"):', texto2.lastIndexOf("mundo"));

// includes: verifica si contiene un texto
console.log('includes("Hola"):', texto.includes("Hola"));

// startsWith: verifica si empieza con cierto texto
console.log('startsWith("Hola"):', texto.startsWith("Hola"));

// endsWith: verifica si termina con cierto texto
console.log('endsWith("mundo"):', texto.endsWith("mundo"));

// slice: extrae una parte del string
console.log('slice(0, 4):', texto.slice(0, 4)); // "Hola"

// substring: similar a slice (sin aceptar negativos)
console.log('substring(5, 10):', texto.substring(5, 10)); // "mundo"

// substr: (obsoleto, pero aún funciona) extrae desde una posición, cierta cantidad
console.log('substr(5, 5):', texto.substr(5, 5)); // "mundo"

// replace: reemplaza una parte del string
console.log('replace("mundo", "JavaScript"):', texto.replace("mundo", "JavaScript"));

// repeat: repite el string la cantidad de veces indicada
console.log('repeat(3):', texto.repeat(3));

// trim: elimina espacios al inicio y final
const conEspacios = "   hola   ";
console.log('trim():', conEspacios.trim());

// trimStart / trimEnd: eliminan espacios al inicio o final
console.log('trimStart():', conEspacios.trimStart());
console.log('trimEnd():', conEspacios.trimEnd());

// split: convierte un string en array usando un separador
const palabras = texto.split(" ");
console.log('split(" "):', palabras);

// charAt: devuelve el carácter en una posición
console.log('charAt(1):', texto.charAt(1)); // "o"

// at: igual que charAt pero acepta negativos
console.log('at(-1):', texto.at(-1)); // último caracter

// concat: une strings
console.log('concat:', "Hola".concat(" ", "Thiago"));
