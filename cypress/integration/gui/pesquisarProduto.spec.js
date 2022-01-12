/// <reference types="Cypress" />

describe('Pesquisar Produto', () => {
    before(() => cy.login())

    it('successfuly', () => {

        cy.pesquisarProduto()
  
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}buscar?q=principal`)

             
    })


})