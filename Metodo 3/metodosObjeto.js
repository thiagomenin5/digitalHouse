
// Métodos y operaciones comunes con objetos en JavaScript

const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Buenos Aires'
};

// Acceder a propiedades
console.log('nombre:', persona.nombre);
console.log('edad:', persona['edad']);

// Modificar propiedades
persona.edad = 31;
console.log('edad modificada:', persona.edad);

// Agregar propiedades nuevas
persona.profesion = 'Desarrollador';
console.log('profesion agregada:', persona.profesion);

// Eliminar propiedades
delete persona.ciudad;
console.log('ciudad eliminada:', persona.ciudad); // undefined

// Ver todas las claves
console.log('Object.keys:', Object.keys(persona));

// Ver todos los valores
console.log('Object.values:', Object.values(persona));

// Ver todas las entradas (clave-valor)
console.log('Object.entries:', Object.entries(persona));

// Saber si tiene una propiedad
console.log('hasOwnProperty("edad"):', persona.hasOwnProperty('edad'));
console.log('hasOwnProperty("ciudad"):', persona.hasOwnProperty('ciudad'));

// Recorrer un objeto con for...in
for (let clave in persona) {
  console.log(clave + ':', persona[clave]);
}

// Clonar un objeto (forma simple)
const copia = { ...persona };
console.log('Copia del objeto:', copia);

// Asignar propiedades de un objeto a otro (también clona)
const otraCopia = Object.assign({}, persona);
console.log('Otra copia:', otraCopia);

// Comparar objetos (referencia, no contenido)
const persona2 = persona;
console.log('persona === persona2:', persona === persona2); // true (misma referencia)

const persona3 = { nombre: 'Juan', edad: 31, profesion: 'Desarrollador' };
console.log('persona === persona3:', persona === persona3); // false (diferente referencia)
