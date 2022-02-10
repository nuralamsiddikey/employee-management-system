const express=require('express');
const res = require('express/lib/response');
const router=express.Router();

const addMemberModel=require('../models/AddMembers')

router.get('/addMembers',(req,res)=>{
   if(req.session.user){
    res.render('pages/addMembers')
   }
   else{
       res.redirect('/')
   }
})

let id=1
router.post('/addMembers',(req,res)=>{
  const {firstName,lastName,position,gender,age,dob,department,joiningDate,city,zilla,nid,postCode,phoneNumber,email}=req.body
   
  const member=new addMemberModel({
      id,
      firstName,
      lastName,
      position,
      gender,
      age,
      dob,
      department,
      joiningDate,
      city,
      zilla,
      nid,
      postCode,
      phoneNumber,
      email


  })
 member.save((err,result)=>{
     if(err){
         console.log(err)
     }
     else{
         console.log("1 member inserted successfully")
         id=id+1
     }
 })





   
})




module.exports=router;