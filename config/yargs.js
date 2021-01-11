const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Completado o pendiente la tarea'
};





const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualizar un elemento por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina un elemento por hacer', {
        descripcion
    })

.help()
    .argv;
module.exports = {
    argv
}