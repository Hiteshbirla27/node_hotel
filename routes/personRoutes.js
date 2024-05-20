const express=require("express");
const router=express.Router();
const person=require('./../model/person');


router.post('/',(req,res)=>{
    try {
     const data=req.body;
     const newPerson=new person(data);
     const response= newPerson.save();
     console.log("data saved");
     res.status(200).json(response);
     
    } catch (error) {
     console.log("error accured ",error);
     res.status(500).send("internal server error");
    }{}
 });

 router.get('/',(req,res)=>{
    const data=person.find();
    res.status(200).json(data);
    });

 router.get('/:workType',(req,res)=>{
        const workType=req.params.workType;
        if(workType=='chef'||workType=='manager'||workType=='waiter'){
        const response= person.find({work:"workType"});
        console.log('response fetched');
        res.status(200).json(response);
        }else{
       res.status(404).json({error:'invalid work type'});
        }
    });
    router.put('/:id',async(req,res)=>{
        const personId=req.params.id;
        const updatedPersonData=req.body;
        const updatedPerson= await person.findByIdAndUpdate(personId,updatedPersonData,{new:true,runValidators:true});
      if(!updatedPerson){
        res.status(404).json({error:'person not found'});
      }
        res.status(200).json(updatedPerson);
    });
module.exports=router;