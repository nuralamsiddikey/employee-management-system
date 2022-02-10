const express=require('express');
const res = require('express/lib/response');
const router=express.Router();

router.get('/home',(req,res)=>{
    if(req.session.user){
       
        res.render('pages/home')
    }
   
    else 
    res.redirect('/')
})


module.exports=router;