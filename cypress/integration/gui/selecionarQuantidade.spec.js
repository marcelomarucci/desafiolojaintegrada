/// <reference types="Cypress" />

describe('Selecionar Quantidade', () => {

    before(() => {
        cy.login()
        cy.clearCookies()
        cy.pesquisarProduto()
        cy.selecionarProduto()
        cy.adicionarProdutoCarrinho()
    })

    it('successfuly', () => {

        cy.selecionarQuantidade()
  
        cy.get('.input-mini').should('have.value', '10')  
    })
})