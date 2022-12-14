const express =require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author")
dotenv.config();
//conect databaese 
mongoose.connect((process.env.MONGODB_URL),()=>{
    console.log('connected to MongoDB ===>');
})
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));



// //routes
app.use("/v1/author",authorRoute)
// app.get("/api",(req,res)=>{
//     res.status(200).json("Hello");
// })
app.listen(8080,()=>{
    console.log("Serve is running .....")

})