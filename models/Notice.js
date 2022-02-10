const mongoose=require('mongoose');
const Schema=mongoose.Schema
const noticeSchema=new Schema({
   
  

    noticeTitle:{
        type:String,
        required:true
    },
    noticeBody:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    expiredDate:{
        type:Date,
        required:true
      },
      publishDate:{
        type:Date,
        required:true
      }
    
})

module.exports=mongoose.model('Notice',noticeSchema)