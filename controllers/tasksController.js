import tasksModel from '../models/tasksModel.js';

export const getTasks = async (req, res) => {
    try{
        const tasks = await tasksModel.find({});
        res.status(200).json(tasks); 

    }catch(error){
        res.status(500).json({message: 'Ha ocurrido un error', error});
    }
}

export const getTaskById = async (req, res) => {
    try{
        const idTask = req.params.id;
        const task = await tasksModel.findById(idTask);
        res.status(200).json(task);

    }catch(error){
        res.status(500).json({message: 'Ha ocurrido un error'});
    }
}

export const createTask = async (req, res) => {
    try{
        const body = req.body;
        const newTask = new tasksModel(body);
        newTask.save();
        res.status(200).json({message: 'Se ha creado una nueva tarea'});

    }catch(error){
        res.status(500).json({message: 'Ha ocurrido un error'});
    }
}

export const updateTask = async (req,res) => {
    try{
        const idTask = req.params.id;
        const body = req.body;
        const updateTask = await tasksModel.findByIdAndUpdate(idTask, body);
        res.status(200).json({message: 'Se ha actualizado la tarea'});
    }catch(error){
        res.status(500).json({message: 'Ha ocurrido un error'});
    }
}

export const deleteTask = async (req, res) => {
    try{
        const idTask = req.params.id;
        const task = await tasksModel.findByIdAndDelete(idTask);
        res.status(200).json({message: 'Se ha eliminado una tarea'}); 

    }catch (error){
        res.status(500).json({message: 'Ha ocurrido un error'});
    }
}