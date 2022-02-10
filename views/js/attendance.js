const currentDate=new Date().getDate()
const currentMonth=new Date().getMonth()
const currentYear=new Date().getFullYear()

const a= new Date(currentDate )


function attendance(){
   const id=document.getElementById("searchId").value
  
   fetch(`/attendance/searchEmployeeAttendance/${id}`)
   .then(res=>res.json())
   .then(data=>{
     const fullName=data.firstName+" "+data.lastName
    




   document.getElementById('employeeName').innerHTML=fullName
 document.getElementById('employeePosition').innerHTML=data.position

   




   })

}


