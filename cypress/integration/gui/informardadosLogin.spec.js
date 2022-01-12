/// <reference types="Cypress" />

describe('Informar Login', () => {

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
        cy.finalizarCompra1()
    })

    it('successfuly', () => {

        cy.informardadosLogin()
  
        cy.get("#formasPagamento").should('exist')
    })
})