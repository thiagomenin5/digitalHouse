//Generador de Mensajes Personalizados: Crea una función que genere un mensaje personalizado para un usuario según su nombre y el momento del día (solo tendremos en consideración si es de mañana, o es de tarde). Utiliza concatenación e interpolación para construir el mensaje, y condicionales (if ternario) para incluir diferentes saludos.

function generarMensaje(nombre, momentoDelDia) {
  // Usamos ternario para decidir el saludo según la hora del día
  let saludo = (momentoDelDia === "mañana") ? "¡Buen día" : "¡Buenas tardes";

  // Concatenación
  let mensaje1 = saludo + ", " + nombre + "! (usando concatenación)";
  console.log(mensaje1);

  // Interpolación (template string con backticks)
  let mensaje2 = `${saludo}, ${nombre}! (usando interpolación)`;
  console.log(mensaje2);
}

// Ejemplo de uso
generarMensaje("Thiago", "mañana");
generarMensaje("Thiago", "tarde");