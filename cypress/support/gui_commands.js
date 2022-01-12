/// <reference types="Cypress" />

Cypress.Commands.add('login', () => {
    cy.visit('conta/login')
  
    cy.get("#id_email").type(Cypress.env('user_name'))
    cy.get("#id_senha").type(Cypress.env('user_password'))
    cy.contains('Prosseguir').click()
    })

Cypress.Commands.add('logout', () => {
    cy.contains('Olá').click()
    cy.contains('Sair').click()
    })

Cypress.Commands.add('listadeProdutos', () => {
    cy.contains('QA Store Desafio').click()
    })
     
Cypress.Commands.add('pesquisarProduto', () => {
    cy.get("#auto-complete").type('principal{enter}')
    })

Cypress.Commands.add('selecionarProduto', () => {
    cy.contains('[CATEGORIA] Produto com categoria principal - 3 Nível').click({force: true})
    })

Cypress.Commands.add('adicionarProdutoCarrinho', () => {
    cy.contains('Comprar').click()
    })

Cypress.Commands.add('selecionarQuantidade', () => {
            cy.get('.input-mini')
            .clear()
            .type('10{enter}')
    })

Cypress.Commands.add('informarCEP', () => {
    cy.get("#calcularFrete")
    .clear()
    .type('09550000{enter}')
    })
                    
Cypress.Commands.add('selecionarFrete', () => {

    cy.get('[type="radio"]').check('2',{force: true})
    })

Cypress.Commands.add('adicionarCupom', () => {

       
    cy.get("#usarCupom").type('30REAIS')
    cy.contains("Usar cupom").click()
    })

Cypress.Commands.add('finalizarCompra1', () => {
    cy.get('.icon-ok').click()
    })

Cypress.Commands.add('selecionarEndereco', () => {
    cy.contains("Santa Paula ").click()
    })

Cypress.Commands.add('selecionarformadePagamento', () => {
    cy.get("#radio-mercadopagov1-18").check()
    })

Cypress.Commands.add('IncluirPedidocomCupom', () => {
    cy.get("#finalizarCompra").click().wait(100)
    })

Cypress.Commands.add('informardadosLogin', () => {
    cy.get("#id_email_login").type(Cypress.env('user_name'))
    cy.get('.submit-email').click().wait(200)
    cy.get("#id_senha_login").type(Cypress.env('user_password'))
    cy.get("#id_botao_login").click()
})