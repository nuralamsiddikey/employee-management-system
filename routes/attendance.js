const express=require('express')
const router=express.Router()
const memberModel=require('../models/AddMembers')



router.get('/employeeAttendance',(req,res)=>{
    res.render('pages/attendance')
})


router.get('/searchEmployeeAttendance/:id',(req,res)=>{

   memberModel.findOne({id:req.params.id},(err,result)=>{
       if(err){
           console.log(err)
       }
       else{
            res.send(result)
       }
   })
})





module.exports=router

