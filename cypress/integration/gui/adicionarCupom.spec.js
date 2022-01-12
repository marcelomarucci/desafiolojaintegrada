/// <reference types="Cypress" />

describe('Adicionar Cupom', () => {

    before(() => {
        cy.login()
        cy.clearCookies(500)
        cy.pesquisarProduto()
        cy.selecionarProduto()
        cy.adicionarProdutoCarrinho()
        cy.selecionarQuantidade()
        cy.informarCEP()
        cy.selecionarFrete()
    })

    it('successfuly', () => {
                
        cy.adicionarCupom()
  
        cy.get('.cupom-valor').should('exist')
    })
})