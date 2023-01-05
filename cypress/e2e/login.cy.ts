
describe('template spec', () => {
  it('Should login and register user', () => {
    cy.visit('http://localhost:4200/login')

    cy.get('input[name="username"]').type('TestUsername')
    cy.get('input[name="password"').type('heslojeden23')
    cy.get('button').contains("Login").click({force:true})
    cy.wait(2000)
    cy.get('button').contains("Logout").click()



  })
})