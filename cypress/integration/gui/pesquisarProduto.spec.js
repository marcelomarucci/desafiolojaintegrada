/// <reference types="Cypress" />

describe('Pesquisar Produto', () => {
    before(() => {
        
        cy.login()
        cy.clearCookies()
    
    })

    it('successfuly', () => {

        cy.pesquisarProduto()
  
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}buscar?q=principal`)

             
    })


})