const mongoose=require("mongoose");
//const mongoUrl='mongodb://localhost:27017/';
const mongoUrl='mongodb+srv://hiteshbirla15:HiG0BRxSXDYjHQfL@hotel.hwmw4gw.mongodb.net/'
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
