/**
 * Importar las librerias
 */

//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
//console.log(argv);

switch (comando) {
    case 'crear':
        console.log('Crear por haer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        //console.log('Mostrar todas las tareas por hacer');
        let listado = porHacer.getListado(argv.completado);
        //console.log(listado);
        for (let tarea of listado) {
            console.log('===========Por Hacer============='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', colors.red(tarea.completado));
            console.log('================================='.green);
        }
        break;

    case 'actualizar':
        //console.log('Actualizar una tarea por hacer');
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);

        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no valido');
}