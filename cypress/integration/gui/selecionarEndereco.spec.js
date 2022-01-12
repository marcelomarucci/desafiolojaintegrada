/// <reference types="Cypress" />

describe('Selecionar Endereço', () => {

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

    })

    it('successfuly', () => {

        cy.selecionarEndereco()
  
        cy.get('.endereco-principal').should('be.checked').and('have.value', '46162909')
    })
})