const Intern = require("../lib/Intern")


test("Can set school name", () => {
    const intern = new Intern("mark Munter", "9999", "testtesty@test.com", "school")
    expect(intern.school).toBe("school")
})


