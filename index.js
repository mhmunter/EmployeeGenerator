const inquirer = require('inquirer')
const fs = require('fs')
const generateHtml = require('./src/generateHtml')
const Manager = require('./lib/Manager')


const employees =[]
//function makeTeam(){
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



function createManager(){
    inquirer.prompt([
        {
          type: "input",
          name: "managerName",
          message: "what is Manager's name?",
          validate: answer => {
              if(answer !== ""){
                  return true;
              }
              return "invald name"
          }

        },
        {
            type: "input",
            name: "id",
            message: "What is your ID?",
            validate: answer => {
                if(answer !== ""){
                    return true;
                }
                return "invald id"
            }


        },
        {
            input: "input",
            name: "email",
            message: "What is your emai?",
            validate: answer => {
                if(answer !== ""){
                    return true;
                }
                return "invald email"
            }

        },
        {
            input: "input",
            name: "officeNumber",
            message: "What is your office number?",
            validate: answer => {
                if(answer !== ""){
                    return true;
                }
                return "invald iffice number"
            }
        }
    ])
    .then(answers => {
        const newManager = new Manager(answers.managerName, answers.id, answers.email, answers.officeNumber);
        employees.push(newManager)  
makeTeam
    })
}





function writeHtml(){
    fs.writeFile("./dist/team.html", generateHtml(employees), function(err){
        if(err) throw err
        console.log("it worked!")
    })
}