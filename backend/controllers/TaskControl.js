const Task=require("../model/taskModel");

//Creating a Task route (Saving Data to DataBase)
const createTask = async (req,res)=>{
    try {
        const task= await Task.create(req.body);
        res.json(task);
    } catch (error) {
        console.log("Error While Saving");
        res.json({msg : error.message});
    }
}

//Reading (GET) the data from DataBase
const getTasks = async (req,res)=>{
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.json({msg:error.message})
    }
}

//Get one Task

const getTask = async (req,res)=>{
    try {
         const {id} = req.params;
         const task = await Task.findById(id);
         if (!task) {
            res.json(`No task with id: ${id}`);
         }
        res.json(task);
    } catch (error) {
        res.json(error.message)
    }
}
//Delete Task
const deleteTask = async (req,res) =>{
    try {
        const {id} = req.params;
         const task = await Task.findById(id).deleteOne();
         if (!task) {
            res.send(`No task with id: ${id}`);
         }
        res.send(`Task deleted!`);
    } catch (error) {
        res.json(error.message);
    }
}
//Update Task
const updateTask = async (req,res)=>{
    try {
        const {id} = req.params;
        const task  = await Task.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})
        if (!task) {
            res.json(`No task found with id: ${id}`);
        }
        res.json(task)
    } catch (error) {
        res.json({msg:error.message});
    }
}
//***************Another Way to PUT******************
// const updateTask = async (req,res)=>{
//     try {
//         const id = req.params;
//         const task  = await Task.updateOne({_id:id},{$set:req.body},{new:true})(For this t work, change "id" to "_id" in taskRoute file)
//         if (!task) {
//             res.json(`No task found with id: ${id}`);
//         }
//         res.json(task)
//     } catch (error) {
//         res.json({msg:error.message});
//     }
// }
module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}