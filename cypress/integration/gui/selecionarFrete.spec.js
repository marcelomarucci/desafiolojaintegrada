/// <reference types="Cypress" />

describe('Selecionar Frete', () => {

    before(() => {
        cy.login()
        cy.pesquisarProduto()
        cy.selecionarProduto()
        cy.adicionarProdutoCarrinho()
        cy.selecionarQuantidade()
        cy.informarCEP()
    })

    it('successfuly', () => {

        cy.selecionarFrete()
  
        cy.get('[type="radio"]').should('be.checked')
    })
})