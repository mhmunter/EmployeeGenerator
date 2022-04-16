const Manager = require("../lib/Manager")



test("We can get the Role of the manager", () => {
    const manager = new Manager("mark Munter", "9999", "testtesty@test.com", "officenumber")
    expect(manager.getRole()).toBe("Manager")
})