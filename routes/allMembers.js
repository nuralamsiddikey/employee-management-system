const express=require('express');
const router=express.Router();
 
const mongodb=require('mongodb')
const ObjectId=mongodb.ObjectId

const membersModel=require('../models/AddMembers')

router.get('/allMembers',(req,res)=>{
  
    if(req.session.user)
    res.render('pages/allMembers')
  else
   res.redirect('/')
})

router.get('/getAllMembers',(req,res)=>{
       if(req.session.user){
        membersModel.find({},(err,result)=>{
            if(err){
                console("khuje pai nai vai")
            }else{
                res.send(result)
               
            }
        })
       }else{
           res.redirect('/')
       }
})


router.get('/getOneMembers/:id',(req,res)=>{
     console.log(req.params.id)
    membersModel.findOne({_id:ObjectId(req.params.id)},(err,result)=>{
        if(err){
            console.log("pai naai")
        }else{
          res.send(result)
        }
    })
})


module.exports=router;