const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
require("dotenv").config();
require("./db/conn");



app.use(express.json());
app.use(cors())
app.use(router); 

app.use("/uploads",express.static("./uploads"));


app.listen(process.env.PORT,()=>{
    console.log(`server start at port no ${port}`)
})