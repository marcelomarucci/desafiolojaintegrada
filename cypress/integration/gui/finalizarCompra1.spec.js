/// <reference types="Cypress" />

describe('Finalizar Compra 1', () => {

    before(() => {
        cy.login()
        cy.clearCookies(500)
        cy.pesquisarProduto()
        cy.selecionarProduto()
        cy.adicionarProdutoCarrinho()
        cy.selecionarQuantidade()
        cy.informarCEP()
        cy.selecionarFrete()
        cy.adicionarCupom()
    })

    after(() => {

        cy.informardadosLogin()
        cy.get("#formasPagamento").should('exist')

    })

    it('successfuly', () => {

        cy.finalizarCompra1()
  
        cy.get("#formasPagamento").should('exist')
    })
})