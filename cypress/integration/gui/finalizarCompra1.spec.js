/// <reference types="Cypress" />

describe('Finalizar Compra 1', () => {

    before(() => {
        cy.login()
        cy.pesquisarProduto()
        cy.selecionarProduto()
        cy.adicionarProdutoCarrinho()
        cy.selecionarQuantidade()
        cy.informarCEP()
        cy.selecionarFrete()
        cy.adicionarCupom()
    })

    it('successfuly', () => {

        cy.finalizarCompra1()
  
        cy.get("#formasPagamento").should('exist')
    })
})