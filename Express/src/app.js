const express=require("express");
const port=process.env.port || 3000
const app=express()
const path=require("path");
const hbs=require("hbs");
const mypublic=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"../partials");
app.use(express.static(mypublic));
app.use(express.urlencoded({extended:false}));
app.set("view engine","hbs");
hbs.registerPartials(mypartials);

// Mongoose Here---
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://monug1513:monu1234@todo0.bymyt3p.mongodb.net/');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const mydaySchema = new mongoose.Schema({
    task: String,
    date:{
    type:Date,
    default:Date.now


    }
  });
  const Myday = mongoose.model('Myday', mydaySchema);

app.get("/",async(req,res)=>{

const data=await Myday.find()
res.render("index",{data})


})


app.get("/myday",async(req,res)=>{
const data=await Myday.find()
res.render("myday",{data})

})
app.post("/myday",async(req,res)=>{
const silence = new Myday
({ 
 
    task:req.body.task
 });
await silence.save()
const data=await Myday.find()
res.render("myday",{data})


})



app.listen(port,(req,res)=>{

console.log("App running on port 3000");


})