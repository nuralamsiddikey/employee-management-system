
const express=require('express');
const res = require('express/lib/response');
const router=express.Router();

  const objectId=require('mongodb').ObjectId




 const membersModel=require('../models/AddMembers')

router.delete('/deleteMembers/:id',(req,res)=>{
    membersModel.findOneAndRemove({
          _id:objectId(req.params.id)
    },(err,result)=>{
          if(err){
                console.log("couldn't delete")
          }
          else{
                console.log('successfully deleted')
          }
    })
})
module.exports=router;