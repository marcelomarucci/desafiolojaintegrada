/// <reference types="Cypress" />

describe('Incluir Pedido', () => {

    before(() => {
        cy.login()
        cy.pesquisarProduto()
        cy.selecionarProduto()
    })

    it('successfuly', () => {

        cy.adicionarProdutoCarrinho()
  
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}carrinho/index`)           
    })
})