const express=require("express");
const app=express();
const db=require("./db");
const person=require('./model/person');
const menu=require('./model/menu');
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');
const bodyparser=require("body-parser");
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send("hello user")
});


 app.use('/menu',menuRoutes);
 
 app.use('/person',personRoutes);
const port=3000;
app.listen(port,()=>{console.log('server is conected')});