const Engineer = require("./Employee")

class Engineer extends Employee{
    constructor(name, id, email, ghUserName,){
        super(name, id, email)
        this.ghUserName = ghUserName
       

    }
    getGithub(){
return this.ghUserName
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer