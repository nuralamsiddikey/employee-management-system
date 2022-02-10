const express = require('express');
const app= express()
const res = require('express/lib/response');
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
var session = require('express-session')
const cookies=require('cookie-parser')
app.use(cookies())

const port=3000;
app.use(express.static('views'))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set('view engine','ejs')




app.use(session({
    secret:"my secret key",
    resave:true,
    saveUninitialized:true
}))

// importing routes
const homeRouter=require('./routes/home')
const addMembersRouter=require('./routes/addMembers')
const deleteMembersRouter=require('./routes/deleteMembers')
const dashboardRouter=require('./routes/dashboard')
const allEmployeeRouter=require('./routes/allMembers')
const loginRouter=require('./routes/login')
const logoutRouter=require('./routes/logout')
const noticeRouter=require('./routes/createNotice')
const updateRouter=require('./routes/updateMember')
const attendanceRouter=require('./routes/attendance')

app.use('/userHome',homeRouter);
app.use('/add',addMembersRouter)
app.use('/delete',deleteMembersRouter)
app.use('/userDashboard',dashboardRouter)
app.use('/member',allEmployeeRouter)
app.use('/user',loginRouter)
app.use('/userLogout',logoutRouter)
app.use('/notice',noticeRouter)
app.use('/update',updateRouter)
app.use('/attendance',attendanceRouter)





app.get('/',(req,res)=>{
   res.render('pages/login')
})


// database connection
mongoose.connect('mongodb+srv://nur:99088@cluster0.jzt6s.mongodb.net/CMS?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true },(err,result)=>{
    if(err){
        console.log('connection hoi nai vai')
    }
    else{
        console.log('connection hoise aibar apnar kaj koren vai')
    }
})



// listening server

app.listen(port,()=>{
    console.log(`Your server is running at port ${port}`)
})
