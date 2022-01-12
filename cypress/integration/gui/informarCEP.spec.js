/// <reference types="Cypress" />

describe('Informar CEP', () => {

    before(() => {
        cy.login()
        cy.pesquisarProduto()
        cy.selecionarProduto()
        cy.adicionarProdutoCarrinho()
        cy.selecionarQuantidade()
    })

    it('successfuly', () => {

        cy.informarCEP()
  
        cy.get("#calcularFrete").should('have.value', '09550-000')  
    })
})