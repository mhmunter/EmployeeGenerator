const Intern = require("./Employee")

class Intern extends Employee{
    constructor(name, id, email, school){
        this.school = school
        super(name, id, email)

    }
    getGithub(){
return this.school
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Intern