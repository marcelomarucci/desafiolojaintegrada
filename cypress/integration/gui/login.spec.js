/// <reference types="Cypress" />

describe('Login', () => {
    it('successfully', () => {
        cy.login()

        cy.get('.nome-usuario').should('exist')
    })

})
