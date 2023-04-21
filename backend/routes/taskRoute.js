const express=require("express");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/TaskControl");
//const Task=require("../model/taskModel");
const router=express.Router();

router.post("/api/tasks", createTask );
router.get("/api/tasks", getTasks );
router.get("/api/tasks/:id", getTask );
router.delete("/api/tasks/:id", deleteTask );
router.put("/api/tasks/:id", updateTask );
//Same thing done by patch(Changing one property)
//router.patch("/api/tasks/:id", updateTask );

module.exports=router;