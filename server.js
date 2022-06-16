const express=require("express")
const app=express()
const path=require("path")
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"/build")));
app.use(express.static(path.join(__dirname,"/build/static")));
app.get("*",async (req,res)=>{
try{
    console.log(path.join(__dirname,"./build"))
    // res.send("hello")
    // console.log(path.join(__dirname,"/build/static/index.html"))
res.sendFile(path.join(__dirname,"/build/index.html"))
}
catch(e){
res.status(400).send(e)
}
})
app.listen(process.env.PORT || 3000,()=>{
    console.log(process.env.PORT || 3000);
})