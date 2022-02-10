
fetch('/cookie')
.then(res=>res.json())
.then(data=>{
   const adminName=document.getElementById('adminName')
  const fullName=data.firstName+" "+data.lastName;
   adminName.innerHTML=`${fullName}`
})