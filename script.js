const express = require ("express");

const mongoose = require ("mongoose ")

const bodyParser  = require("body-parser");



const app = express();





mongoose.connect(url)
.then( () => {console.log("Connected")}).
catch( (err) => {console.log("Disconnected",err)})

const PORT = 3000;

app.use(bodyParser.json());

app.get("/home",(req,res) =>{
    res.send("hello world to all !!!")
});

app.listen(PORT, (req,res) => {
    
    console.log(`server is running on http://localhost:${PORT}`);
})

