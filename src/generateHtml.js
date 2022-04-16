const Engineer = require("../lib/Engineer")

function generateHtml(employees){
  const newArry = []
  for(i=0; i < employees.length; i++){
    if(employees[i].getRole() === "Manager"){
      let str = `
      <div class="card" style="width: 18rem;">
      <div class="card-body flex-row text-center justify-space-around align-center">
        <h5 class="card-title p-3 mb-2 bg-primary text-white">${employees[i].getName()}<br>${employees[i].getRole()}</h5>
        <p class="card-text">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">id: ${employees[i].getId()}</li>
        <li class="list-group-item">email:${employees[i].getEmail()}</li>
        <li class="list-group-item">office number:${employees[i].getOfficeNumber()}</li>
      </ul>
        </p>
        
      </div>
      </div>`
      newArry.push(str)

    }else if(employees[i].getRole() === "Engineer"){
      let str = `
      <div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title p-3 mb-2 bg-primary text-white">${employees[i].getName()}<br>${employees[i].getRole()}</h5>
  <p class="card-text flex-row text-center justify-space-around align-center">
  <ul class="list-group list-group-flush">
  <li class="list-group-item"> id:${employees[i].getId()}</li>
  <li class="list-group-item">email:${employees[i].getEmail()}</li>
  <li class="list-group-item"> github:${employees[i].getGithub()}</li>
</ul>

  </p>
  
</div>
</div>
`
newArry.push(str)

    }else if(employees[i].getRole() === "Intern"){
      let str = `
      <div class="card" style="width: 18rem;">
<div class="card-body flex-row text-center justify-space-around align-center">
  <h5 class="card-title p-3 mb-2 bg-primary text-white">${employees[i].getName()}<br>${employees[i].getRole()}</h5>
  <p class="card-text">
  <ul class="list-group list-group-flush">
  <li class="list-group-item"> id:${employees[i].getId()}</li>
  <li class="list-group-item">email:${employees[i].getEmail()}</li>
  <li class="list-group-item"> school:${employees[i].getSchool()}</li>
</ul>

  </p>
  
</div>
</div>
`
newArry.push(str)
    }
  }

return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EmployeeGenerater</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>
<body>

<nav class="$caret-width solid">
<div class="container-fluid p-3 mb-2 bg-primary text-white">
    <p class="n text-center fs-1" >My Team</p>
</nav>

${newArry.join('')}














  
</body>
</html>

`

}
module.exports = generateHtml