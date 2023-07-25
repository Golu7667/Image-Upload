const mongoose = require("mongoose");


mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("DATABASE connected")).catch((err)=> console.log("error" + err.message))
