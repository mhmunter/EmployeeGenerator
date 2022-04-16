const Engineer = require("../lib/Engineer")

test("Get the GitHub address of Engineer", () => {
    const engineer = new Engineer("mark Munter", "9999", "testtesty@test.com", "github")
    expect(engineer.getGithub()).toBe("github")
})