function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
const userEmail=getCookie('email')
const userFullName=getCookie('fullName')

console.log(userEmail)
console.log(userFullName)

  //document.getElementById('adminName').innerHTML=userFullName

fetch("/notice/getNotice")
  .then((res) => res.json())
  .then((data) => {
    const getNotice = document.getElementById("get");

    data.forEach((element) => {
      const div = document.createElement("DIV");

      div.innerHTML = `
      <a href="#" onclick=" loadNotice('${element._id}')"  class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      
      
      <div class="card " style="width: 200px; float:left; margin-left: 20px">
             
      <div class="card-body">
      ${element.noticeTitle}
      </div>
   
   
   
   </div>

      
      </a>
`;

      getNotice.appendChild(div);
    });
  });


  //loadNotice funtion

  function loadNotice(id){
     
    fetch(`/notice/getOneNotice/${id}`)
.then(res=>res.json())
.then(data=>{
  const noticeBody=document.getElementById('noticeBody')
  noticeBody.innerHTML=`${data.noticeBody}
  
  
  ${(userEmail==data.email)? ` <div>  <button style="float:left" id="editButton" type="button" class="btn btn-primary btn-sm   mb-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  <i class="far fa-edit"></i></button>
   <button style="float:left; margin-left:5px" class="btn btn-danger btn-sm  "><i class="far fa-trash-alt"></i></span> </button>`:'' }
  
  
  
  
  `



})
  }