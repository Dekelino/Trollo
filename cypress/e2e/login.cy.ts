
describe('template spec', () => {
  it('Should login and register user', () => {
    cy.visit('./login')

    cy.get('input[name="username"]')
    .type('TestUseName')
    cy.get('input[name="password"')
    .type('heslojeden23')
    cy.get('button').contains("Login")
    .click({force:true})
    cy.visit('./homePage')
    cy.wait(10000)
    cy.get('button').contains("Logout")
    .should('be.visible')
    .click()

  })
})