/// <reference types="Cypress" />

describe('Incluir Pedido com Desconto', () => {

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
        cy.selecionarEndereco()
        cy.selecionarformadePagamento()
    })

    it('successfuly', () => {

        cy.IncluirPedidocomCupom()
  
        cy.get('.caixa-info').should('be.visible').wait(300)
        cy.get('.group-media-object').should('be.visible')
    })
})