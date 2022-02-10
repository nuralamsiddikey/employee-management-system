const express=require('express');
const router=express.Router();
const ObjectId=require('mongodb').ObjectId


const memberModel=require('../models/AddMembers')


router.patch('/updateMembers/:id',(req,res)=>{

const newInformation={
    $set:{
        firstName:req.body.newFirstName,
        lastName:req.body.newLastName,
        position:req.body.newPosition,
        gender:req.body.newGender,
        age:req.body.newAge,
        city:req.body.newCity,
        zilla:req.body.newZilla,
        postCode:req.body.newPostCode,
        phoneNumber:req.body.newPhoneNumber,
        email:req.body.newEmail
    }
}




memberModel.updateOne(
    {_id:ObjectId(req.params.id)},newInformation,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log("update successfull")
        }
    }
   




)



})


module.exports=router