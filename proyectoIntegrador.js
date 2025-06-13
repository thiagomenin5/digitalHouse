let tareas = [];

function AgregarTarea(nombreRecibido, fechaLimiteRecibida= null){
    let tareaAgregada = tareas.push({nombre : nombreRecibido,
        completada : false,
        fechaLimite: fechaLimiteRecibida
    });
    return tareaAgregada
}
function eliminarTarea(indice){
    if(indice >= 0 && indice < tareas.length){
        tareas.splice(indice,1)
        console.log("tarea eliminada correctamente")
    }else{
        console.log("indice de tarea no existe")
    }
}

function tareaCompletada(indice){
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].completada = true;
        console.log("tarea completada")
    }else{
        console.log("indice de tarea no existe")
    }
}

