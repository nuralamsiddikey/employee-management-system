const express=require('express');
const router=express.Router();
const noticeModel=require('../models/Notice')
const ObjectId=require('mongodb').ObjectId


router.get('/createNotice',(req,res)=>{
    res.render('pages/createNotice')
})

// getOne notice
router.get('/getOneNotice/:id',(req,res)=>{
    noticeModel.findOne({_id:ObjectId(req.params.id)},(err,result)=>{




        if(err){
            console.log("notice khuje pai nai")
        }else{
           res.send(result)
        }
    })
})


router.get('/getNotice',(req,res)=>{
 
    noticeModel.find({},(err,result)=>{




        if(err){
            console.log("notice khuje pai nai")
        }else{
           res.send(result)
        }
    })
})






router.post('/postNotice',(req,res)=>{
    const{expiredDate,noticeTitle,noticeBody}=req.body
    const email=req.cookies.email
    var  publishDate = new Date().toLocaleDateString()
   // var publishDate = today.getFullYear()+'-'+today.getMonth()+1+'-'+today.getDate();
    
    console.log(email)
    

   const notice=new noticeModel({
       noticeTitle,
       noticeBody,
       email,
       publishDate,
       expiredDate

          
       
   })

 notice.save((err,result)=>{
     if(err){
         console.log(err)
     }
     else{
       res.render('pages/notify')
     }
 })


})








module.exports=router;