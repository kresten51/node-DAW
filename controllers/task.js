const Task = require ("../models/task");

async function createTask(req,res){
    const task = new Task();
    const params = req.body;
    task.title = params.title;
    task.descripcion = params.description;

    try{
        const taskStore = task.save();

        if(!taskStore){
            res.status(400).send({msg: "No se ha guardado la tarea"});

        } else{
            res.status(200).send({task: taskStore});
        }
    }catch(error){
        res.status(500).send(error);
    }

    //console.log("Creando nuestra primera tarea");
    //console.log(req.body);
}

function getTasks(req,res){
    console.log("Obteniendo las tareas");
}

module.exports = {
    createTask,
    getTasks,

}