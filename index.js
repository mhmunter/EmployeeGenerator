const inquirer = require('inquirer')
const fs = require('fs')
const generateHtml = require('./src/generateHtml')
//const Employee = require('.lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
 const Intern = require('./lib/Intern')






const employees =[]
function makeTeam(){
    inquirer.prompt({
        type: "list",
        name: "choice",
        choices: ['Manager', 'Engineer', 'Intern', 'Are you done?' ],
        message: "What's your role?"
    })
    .then(function(value){
        //console.log(value.choice)
        switch (value.choice){
           case 'Manager':
                createManager()
                break;
           case 'Engineer':
               createEngineer()
                break;
           case 'Intern': 
                createIntern()
                break;
            case 'Are you done?':
                writeHtml()
                console.log(employees)
                break;

        }
       // createManager()
        //writeHtml()
        
    })

}
makeTeam()




function createManager(){
    inquirer.prompt([
        {
          type: "input",
          name: "Name",
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
            message: "What is your email?",
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
        const newManager = new Manager(answers.Name, answers.id, answers.email, answers.officeNumber);
        employees.push(newManager)  
        //console.log(employees)
makeTeam()
    })
}



function createEngineer(){
    inquirer.prompt([
        {
          type: "input",
          name: "Name",
          message: "what is Engineer's name?",
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
            message: "What is the Engineer's ID?",
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
            message: "What is your Engineer's email?",
            validate: answer => {
                if(answer !== ""){
                    return true;
                }
                return "invald email"
            }

        },
        {
            input: "input",
            name: "ghUserName",
            message: "What is your github name?",
            validate: answer => {
                if(answer !== ""){
                    return true;
                }
                return "invald github name"
            }
        }
    ])
    .then(answers => {
        const newEngineer = new Engineer(answers.Name, answers.id, answers.email, answers.ghUserName);
        employees.push(newEngineer)  
makeTeam()
    })
}



function createIntern(){
    inquirer.prompt([
        {
          type: "input",
          name: "Name",
          message: "what is your Intern's name?",
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
            message: "What is your Intern's ID?",
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
            message: "What is your Intern's email?",
            validate: answer => {
                if(answer !== ""){
                    return true;
                }
                return "invald email"
            }

        },
        {
            input: "input",
            name: "school",
            message: "What is your school?",
            validate: answer => {
                if(answer !== ""){
                    return true;
                }
                return "invald school name"
            }
        }
    ])
    .then(answers => {
        const newIntern = new Intern(answers.Name, answers.id, answers.email, answers.school);
        employees.push(newIntern)  
makeTeam()
    })
}




function writeHtml(){
    fs.writeFile("./dist/team.html", generateHtml(employees), function(err){
        if(err) throw err
        console.log("it worked!")
    })
}