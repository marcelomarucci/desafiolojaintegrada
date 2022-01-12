/// <reference types="Cypress" />

describe('Selecionar Endereço', () => {

    before(() => {
        cy.login()
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

        cy.selecionarEndereco()
  
        cy.get('.accordion-inner').should('be.visible')
    })
})