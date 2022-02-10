 const express=require('express');
 const router=express.Router();
 router.get('/logout',(req,res)=>{
     res.clearCookie('userInfo')
     req.session.destroy((err)=>{
         if(err){

         }
         else{
             res.redirect('/')
         }
     })
 })

 module.exports=router