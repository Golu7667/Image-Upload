const mongoose = require("mongoose");

const DB = process.env.DATA_BASE_URL;

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("DATABASE connected")).catch((err)=> console.log("error" + err.message))
