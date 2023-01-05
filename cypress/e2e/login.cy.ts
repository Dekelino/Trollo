import { Input } from "@angular/core"

describe('template spec', () => {
  it('Should login and register user', () => {
    cy.visit('http://localhost:4200/login')

    cy.get('input[name="username"]').type('TestUser')
    cy.get('input[name="password"').type('heslojeden23')
    cy.get('button').contains("Login").click()
    cy.get('button').contains("Logout").click()



  })
})