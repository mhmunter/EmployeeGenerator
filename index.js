const inquirer = require('inquirer')
const fs = require('fs')
const generateHtml = require('./src/generateHtml')
//require all of the classes


const employees =[]
inquirer.prompt({
    type: "list",
    name: "choice",
    choices: ['Manager', 'Engineer', 'Intern' ],
    message: "What's your role?"
})
.then(function(value){
    writeHtml()
    console.log(value)
})


//if statments to check what is picked run function to create that type of employee, 
//prompt all the question crete wmployee using class and that to employees
//function ask if that want to add another employee or done? if sone then write html...
//genertaHtml take wmployee array to crete html cards



function writeHtml(){
    fs.writeFile("./dist/team.html", generateHtml(employees), function(err){
        if(err) throw err
        console.log("it worked!")
    })
}