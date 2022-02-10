
const express=require('express');
const router=express.Router();
const bcrypt = require('bcrypt');
const adminModel=require('../models/admin');
//const { resetWatchers } = require('nodemon/lib/monitor/watch');

 
router.post('/login',(req,res)=>{
  const {email,password}=req.body
 
  adminModel.findOne({email:email},(err,result)=>{
    if(err){
      console.log(err)
    }
    else{
     const fullName= result.firstName+" "+result.lastName
     const userName=result.userName
       const Demail=result.email
       const Dpassword=result.password




req.session.user=fullName
res.cookie('fullName',fullName)
res.cookie('email',Demail)
res.redirect('/userHome/home')
      
    }
  })
 
  
  })

module.exports=router