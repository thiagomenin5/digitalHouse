const prompt = require("prompt-sync")({ sigint: true });

let tareas = [];

function AgregarTarea(nombreRecibido, fechaLimiteRecibida = null) {
  let tareaAgregada = tareas.push({
    nombre: nombreRecibido,
    completada: false,
    fechaLimite: fechaLimiteRecibida,
  });
  return tareaAgregada;
}
function eliminarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas.splice(indice, 1);
    console.log("tarea eliminada correctamente");
  } else {
    console.log("indice de tarea no existe");
  }
}

function tareaCompletada(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].completada = true;
    console.log("tarea completada");
  } else {
    console.log("indice de tarea no existe");
  }
}

function modificarTarea(indice, nuevoNombre, nuevaFechaLimite) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].nombre = nuevoNombre;
    if (nuevaFechaLimite !== null) {
      tareas[indice].fechaLimite = nuevaFechaLimite;
    }
    console.log("Tarea modificada con exito");
  } else {
    console.log("indice de tarea invalido");
  }
}

function mostrarMenu() {
  console.log("----- Menu ----- ");
  console.log("1. Agregar Tarea ");
  console.log("2. Eliminar tarea");
  console.log("3. Marcar tarea como completada");
  console.log("4. Modificar tarea");
  console.log("5. Mostrar todas las tareas");
  console.log("0. Salir");
}

function interactuarUsuario() {
  let opcion = -1;
  while (opcion != 0) {
    mostrarMenu();
    opcion = parseInt(prompt("Ingrese la opcion seleccionada"));
    switch (opcion) {
      case 1:
        let nombreTareaNueva = prompt(
          "ingrese el nombre de la tarea a cargar: "
        );
        AgregarTarea(nombreTareaNueva);
        break;
      case 2:
        console.log(tareas);
        let eliminarTareaPorUsuario = parseInt(prompt("idique la ubicacion de la tarea a eliminar(iniciando por el 0)"));
        eliminarTarea(eliminarTareaPorUsuario);
        break;
      case 3:
        console.log(tareas);
        let tareaCompletadaUsuario = parseInt(prompt("idique la ubicacion de la tarea a completar? (iniciando por el 0)"));
        tareaCompletada(tareaCompletadaUsuario);
        break;
      case 4:
        console.log(tareas);
        let tareaModificadaUsuario1 = parseInt(prompt("que tarea quiere modicicar? (iniciando por el 0)"));
        let tareaModificadaUsuario2 = prompt("que nombre deseas ponerle? ");
        let tareaModificadaUsuario3 = prompt("que fecha? puedes dejarla como esta");
        modificarTarea(tareaModificadaUsuario1,tareaModificadaUsuario2,tareaModificadaUsuario3);
        break;
      case 5:
        console.log("Estas son todas tu tareas: ");
        for(let i =0; i<tareas.length;i++){
            console.log(tareas[i]);
        }
        break;
        case 0:
            console.log("Gracias")
      default:
        console.log("Numero Invalido, vuelve a intentarlo poniendo algun numero en pantalla");
        break;
    }
  }
}
interactuarUsuario();
