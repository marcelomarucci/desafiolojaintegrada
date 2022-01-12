/// <reference types="Cypress" />

describe('Selecionar Forma de Pagamento', () => {

    before(() => {
        cy.login()
        cy.clearCookies()
        cy.pesquisarProduto()
        cy.selecionarProduto()
        cy.adicionarProdutoCarrinho()
        cy.selecionarQuantidade()
        cy.informarCEP()
        cy.selecionarFrete()
        cy.adicionarCupom()
        cy.finalizarCompra1()
        cy.informardadosLogin()
        cy.selecionarEndereco()
    })

    it('successfuly', () => {

        cy.selecionarformadePagamento()
  
        cy.get('.bandeiras-pagamento').should('be.visible')
    })
})