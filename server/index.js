const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");





const multer = require("multer");


// storage config
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}.${file.originalname}`
        callback(null,filename)
    }
});

// filter 
const filefilter = (req,file,callback)=>{
    if(file.mimetype === "image/png" ||file.mimetype === "image/jpg" ||file.mimetype === "image/jpeg"  ){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error("Only .png .jpg & .jpeg formatted Allowed"))
    }
}

const upload = multer({
    storage:storage,
    fileFilter:filefilter
});

















require("dotenv").config();
require("./db/conn");
const port = 8000;


app.use(express.json());
app.use(cors())
app.use(router); 

app.use("/uploads",express.static("./uploads"));


app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})