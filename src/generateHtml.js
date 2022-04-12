function generateHtml(employees){
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

<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title p-3 mb-2 bg-primary text-white">manager</h5>
  <h6 class="card-subtitle mb-2 text-muted">name</h6>
  <p class="card-text">
    id:
    email:
    office number:

  </p>
  
</div>
</div>


<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title p-3 mb-2 bg-primary text-white">engineer</h5>
  <h6 class="card-subtitle mb-2 text-muted">name</h6>
  <p class="card-text">
    id:
    email:
    github:

  </p>
  
</div>
</div>


<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title p-3 mb-2 bg-primary text-white">intern</h5>
  <h6 class="card-subtitle mb-2 text-muted">name</h6>
  <p class="card-text">
    id:
    email:
    school:

  </p>
  
</div>
</div>




  
</body>
</html>

`

}
module.exports = generateHtml