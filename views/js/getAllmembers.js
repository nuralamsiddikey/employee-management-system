

function deleteMember(id) {
  console.log(id);
  fetch(`/delete/deleteMembers/${id}`, {
    method: "DELETE",
  });
  window.location = "http://localhost:3000/member/allMembers";
}

function updateOne(id){
 
 const newFirstName=document.getElementById('firstName').value;
 const newLastName=document.getElementById('lastName').value;
 const newPosition=document.getElementById('position').value;
 const newGender=document.getElementById('gender').value;
 const newAge=document.getElementById('age').value;
 const newCity=document.getElementById('city').value;
 const newZilla=document.getElementById('zilla').value;
 const newPostCode=document.getElementById('postCode').value;
 const newPhoneNumber=document.getElementById('phoneNumber').value;
 const newEmail=document.getElementById('email').value;

 const newInfo={newFirstName,newLastName,newPosition,newGender,newAge,newCity,newZilla,newPostCode,newPhoneNumber,newEmail}

  fetch(`/update/updateMembers/${id}`,{
    method:"PATCH",
    headers:{'content-type':'application/json'},
    body:JSON.stringify(newInfo)

  })

  window.location="http://localhost:3000/member/allMembers"
  alert("successfully updated")



}






function updateMember(id) {
  const update = document.getElementById("updateMembers");
  fetch(`/member/getOneMembers/${id}`)
    .then((res) => res.json())
    .then((data) => {
      update.innerHTML = `
         
         
         <div class="row">
                <div class="col-3">
                <label for="firstName">First Name</labe>
                <input id="firstName" class="form-control" value="${data.firstName}"></input></div>

                <div class="col-3" >
                <label for="lastName">Last Name</labe>
                <input id="lastName" class="form-control" value="${data.lastName}"></input></div>

                <div class="col-3"  >
                <label for="position">Position</labe>
                <select id="position" name="position" class="form-control " style="width:200px">
                <option value="${data.position}">${data.position}</option>
                <option value="director">Director</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
                <option value="other">Other</option>

                </select></div>

                <div class="col-3"  >
                <label for="gender">Gender</labe>
                <select id="gender" name="gender" class="form-control" style="width:200px">
                <option value="${data.gender}">${data.gender}</option>
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                           <option value="others">Others</option>
                </select></div>
         
         </div>
         
          <div class="row">
          <div class="col-3">
          <label for="age">Age</labe>
          <input id="age" class="form-control" type="number" value="${data.age}"></input></div>
          <div class="col-3">
          <label for="city">City</labe>
          <select id="city" name="city" class="form-control" style="width:200px">
          <option value="${data.city}">${data.city}</option>
                     <option value="dhaka">Dhaka</option>
                     <option value="sylhet">Sylhet</option>
                     <option value="khulna">Khulna</option>
                     <option value="rajshahi">Rajshahi</option>
                     <option value="chittagong">Chittagong</option>
          </select></div>

          <div class="col-3">
          <label for="zilla">Zilla</labe>
          <select id="zilla" name="zilla" class="form-control" style="width:200px">
          <option value="${data.zilla}">${data.zilla}</option>
                     <option value="dhaka">Dhaka</option>
                     <option value="sylhet">Sylhet</option>
                     <option value="bogra">Bogra</option>
                     <option value="rajshahi">Rajshahi</option>
                     <option value="chittagong">Chittagong</option>
          </select></div>
          <div class="col-3">
          <label for="postCode">Post Code</labe>
          <input id="postCode" class="form-control" type="number" value="${data.postCode}"></input></div>

          </div>

  <div class="row">
  <div class="col-3">
  <label for="phoneNumber">Phone Number</labe>
  <input id="phoneNumber" class="form-control" type="number" value="${data.phoneNumber}"></input></div>
  <div class="col-3">
  <label for="email">Email</labe>
  <input id="email" class="form-control" type="email" value="${data.email}"></input></div>

  </div>



<div class="row">
   <div class="col-md-12">
   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  onclick="updateOne('${data._id}')">Update</button>
   
   </div>
</div>



         
         
         `;
    });
}

fetch("/member/getAllMembers")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("showAllMembers");

    data.forEach((element) => {
      const t = document.createElement("TR");
      t.innerHTML = ` <tr>
       
                    <td>${element.firstName}</td>
                    <td>${element.lastName}</td>
                    <td>${element.position}</td>
                    <td>${element.gender}</td>
                    <td>${element.age}</td>
                
              
                  
                    <td>${element.city}</td>
                    <td>${element.zilla}</td>
                    <td>${element.nid}</td>
                    <td>${element.postCode}</td>
                    <td>${element.phoneNumber}</td>
                    <td>${element.email}</td>
                  
                    <td><a href="#"class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop " onclick="updateMember('${element._id}')"><i class="far fa-edit"></i></a></td>
                    <td ><a href="#" class="btn btn-danger btn-sm" onclick="deleteMember('${element._id}')"><i class="far fa-trash-alt"></i></a></td>
       </tr>
     
      
       `;
      container.appendChild(t);
    });
  });

fetch("/member/getAllMembers")
  .then((res) => res.json())
  .then((data) => {
    let len = data.length;
    const a = document.getElementById("allMemberNumber");
    a.innerHTML = `<span>${len}</span>`;
  });

fetch("/member/getAllMembers")
  .then((res) => res.json())
  .then((data) => {
    let manager = 0;
    let director = 0;
    let employee = 0;
    let other = 0;
    data.forEach((element) => {
      if (element.position == "manager") manager++;
      else if (element.position == "director") director++;
      else if (element.position == "employee") employee++;
      else if (element.position == "other") other++;
    });

    const a = document.getElementById("allManagerNumber");
    const b = document.getElementById("allDirectorNumber");
    const e = document.getElementById("allEmployeeNumber");
    const o = document.getElementById("allOtherNumber");

    a.innerHTML = `<span>${manager}</span>`;
    b.innerHTML = `<span>${director}</span>`;
    e.innerHTML = `<span>${employee}</span>`;
    o.innerHTML = `<span>${other}</span>`;
  });
