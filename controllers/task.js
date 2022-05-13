const Task = require ("../models/task");

function createTask(req,res){
    cons//t task = new Task()
    const params = req.body
    task.title = params.title
    task.descripcion = params.description


    console.log("Creando nuestra primera tarea");
    console.log(req.body);
}

module.exports = {
    createTask,
}