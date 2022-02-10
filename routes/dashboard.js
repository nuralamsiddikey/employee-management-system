const express=require('express');
const router=express.Router();


router.get('/dashboard',(req,res)=>{
    if(req.session.user)
    res.render('pages/dashboard')
    else
    res.redirect('/')
})

module.exports=router;