const dotenv = require("dotenv").config();
const express = require("express");
const app=express();
const mongoose=require("mongoose"); // For second Method
const Task = require("./model/taskModel");
const cors = require('cors')
const taskRouters=require("./routes/taskRoute");
//const connectDB=require("./config/connectDB");    (For first method)
//-----------First Method To Connect To MongoDB-----------------
// startServer = async ()=>{
//     try {
//         await connectDB();
//         const  PORT=process.env.PORT || 3000;
//         app.listen(PORT,()=>{
//         console.log(`Server running on port ${PORT} `);
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// Route
//startServer();

//---------------Second Method to connect--------------
const  PORT=process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI).
then(app.listen(PORT,()=>{
        console.log("Connected to MongoDB!");
        console.log(`Server running on port ${PORT} `);
    })
)
// Middleware functions
app.use(cors({
    origin :["http://localhost:3000/"]
}))
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(taskRouters);


