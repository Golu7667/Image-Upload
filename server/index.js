const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
const mongoose=require("mongoose")
require("dotenv").config();
require("./db/conn");



app.use(express.json());
app.use(cors())
app.use(router); 
mongoose.set('strictQuery', false);
app.use("/uploads",express.static("./uploads"));

app.get("/",(req,res)=>{
    res.send("server is running")
})

app.listen(process.env.PORT,()=>{
    console.log(`server start at port no ${process.env.PORT}`)
}) 