/**
 *  Archivo de configuracion de el api de yargs
 * para realizar el codigo mas amigable y sostenible.
 */

const descripcion = {
    demand: true,
    alias: 'b',
    desc: 'Descripcion de una tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('listar', 'Listar las tareas pendientes', { completado })
    .command('crear', 'Crear una tarea por hacer', { descripcion })
    .command('actualizar', 'Atualiza el estado de la tarea', { descripcion, completado })
    .command('borrar', 'Borrar una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}