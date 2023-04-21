const mongoose=require("mongoose");

const taskSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Write a Task Name"]
    },
    completed:{
        type:Boolean,
        required:true,
        default:false
    }
},
{
    timestamps:true
})

const Task=mongoose.model("Task",taskSchema);
module.exports=Task