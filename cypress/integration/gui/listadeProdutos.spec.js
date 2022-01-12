/// <reference types="Cypress" />

describe('Lista de Produtos', () => {
    before(() => cy.login())

    it('successfuly', () => {

        cy.listadeProdutos()
  
        cy.url().should('be.equal', Cypress.config('baseUrl'))
        
    })


})