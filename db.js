const mongoose=require("mongoose");
//const mongoUrl=process.env.MONGO_LOCAL;
const mongoUrl= process.env.MONGO_DB;
mongoose.connect(mongoUrl
)

const db=mongoose.connection;
db.on('connected',()=>{
    console.log("connected to mongodb server")
});
db.on('disconnected',()=>{
    console.log("disconnected mongodb server")
});
db.on('error',(err)=>{
    console.log("mongodb connection error",err)
});

module.exports=db;
