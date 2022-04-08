const Engineer = require("./Employee")

class Engineer extends Employee{
    constructor(name, id, email, ghUserName,){
        this.ghUserName = ghUserName
        super(name, id, email)

    }
    getGithub(){
return this.ghUserName
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer