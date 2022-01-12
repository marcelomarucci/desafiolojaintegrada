/// <reference types="Cypress" />

describe('Selecionar Produto', () => {

    before(() => {
        cy.login()
        cy.pesquisarProduto()
    })

    it('successfuly', () => {

        cy.selecionarProduto()
  
        cy.contains('Comprar').should('exist')             
    })
})