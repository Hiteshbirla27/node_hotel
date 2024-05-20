const express=require('express');
const router=express.Router();



router.get('/',(req,res)=>{
    const Menudata=menu.find();
    res.status(200).json(Menudata);
    });

router.post('/',(req,res)=>{
    try {
     const menudata=req.body;
     const newMenu=new menu(menudata);
     const respon= newMenu.save();
     console.log("data saved");
     res.status(200).json(respon);
     
    } catch (error) {
     console.log("error accured ",error);
     res.status(500).send("internal server error");
    }{}
 });

 module.exports=router;