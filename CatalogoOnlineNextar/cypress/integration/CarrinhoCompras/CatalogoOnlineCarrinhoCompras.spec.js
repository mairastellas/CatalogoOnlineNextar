/// <reference types="cypress" />


describe('Acessar página do catálogo online', () => {
    beforeEach(() => {
      cy.visit('https://meucomercio.com.br/lojaqualificacao')
    });
  
    //Verifica se o teste está acessando a página inicial do catálogo online
    it('Verificar o título da página do catálogo online',  () =>  {
        cy.title()
          .should('be.equal','Loja Qualificacao - Curitiba/PR, Bairro Alto') //Verifica o título da página

    })

    //Adicionar e remover produtos através da tela inicial, de listagem de produtos
    it('Adicionar e remover produto do carrinho através da tela inicial',  () => {

        cy.get(':nth-child(1) > .list-product__grid-column__info > .list-product__grid-column__div-section > :nth-child(2) > .amount-input > .amount-input__value')  //Encontra o campo que indica a quantidade de produtos adicionados
          .should('be.visible') //Verifica se o campo está visível
          .should('have.value', '0') //Verifica se o campo está com o valor igual a "0"

        cy.get(':nth-child(1) > .list-product__grid-column__info > .list-product__grid-column__div-section > :nth-child(2) > .amount-input > .nex-icon-plus') //Encontra o botão para adicionar itens
          .should('be.visible') //Verifica se o botão está visível
          .click({force: true}) //Clica no botão mesmo se estiver invisível

        cy.get(':nth-child(1) > .list-product__grid-column__info > .list-product__grid-column__div-section > :nth-child(2) > .amount-input > .amount-input__value')  //Encontra o campo que indica a quantidade de produtos adicionados    
          .should('be.visible') //Verifica se o campo está visível
          .should('have.value', '1') //Verifica se o valor do campo está igual a "1"
    
        cy.get(':nth-child(1) > .list-product__grid-column__info > .list-product__grid-column__div-section > :nth-child(2) > .amount-input > .nex-icon-minus') //Encontra o botão para remover itens
          .should('be.visible') //Verifica se o campo está visível
          .click({force: true}) //Clica no botão
    
        cy.get(':nth-child(1) > .list-product__grid-column__info > .list-product__grid-column__div-section > :nth-child(2) > .amount-input > .amount-input__value') //Encontra o campo que indica a quantidade de produtos adicionados    
          .should('have.value', '0') //Verifica se o valor está igual a "0", depois da remoção da quantidade

    })

    //Adicionar o produto ao carrinho e verificar se o valor total alterou e se a quantidade de itens no carrinho também alterou
    it('Adicionar produto ao carrinho através da tela inicial e verificar valor total',  () => {

        cy.get(':nth-child(1) > .list-product__grid-column__info > .list-product__grid-column__div-section > :nth-child(2) > .amount-input > .amount-input__value')   //Encontra o campo que indica a quantidade de produtos adicionados        
          .should('be.visible') // Verifica se o campo está visível
          .should('have.value', '0') //Verifica se o valor está igual a "0"

        cy.get(':nth-child(1) > .list-product__grid-column__info > .list-product__grid-column__div-section > :nth-child(2) > .amount-input > .nex-icon-plus')    //Encontra o botão para adicionar itens     
          .should('be.visible') //Verifica se o botão está visível
          .click({force: true}) //Clica no botão de adicionar

        cy.get(':nth-child(1) > .list-product__grid-column__info > .list-product__grid-column__div-section > :nth-child(2) > .amount-input > .amount-input__value')  //Encontra o campo que indica a quantidade de produtos adicionados    
          .should('be.visible') //Verifica se o campo está visível
          .should('have.value', '1') //Verifica se o valor está igual a "1"

        cy.get('.checkout-button__total-price > span') //Encontra o botão do carrinho que apresenta o valor total dos itens adicionados ao carrinho
          .should('be.visible') //Verifica se o campo está visível
          .should('contain', 'R$ 54,64') //Nessa validação eu gostaria de ter comparado com o valor do produto adicionado, de forme que não ficasse o valor digital, mas como se fosse uma variável ou uma comparação entre os valores

        cy.get('.ui.red.small.floating.label') //Encontra o elemento que indica a quantidade de itens adicionados ao carrinho
          .should('be.visible') //Verifica se está visível
          .should('contain', '1') //Verifica a quantidade de itens adicionados ao carrinho

    })

      //Outros testes que poderiam ser executados
      //it.only('Adicionar produto ao carrinho e clicar em "Limpar Sacola"', () => {})
      //it.only('Acessar a tela da sacola vazia', () => {})
      //it.only('Adicionar uma observação ao pedido', () => {})
      //it.only('Adicionar mais quantidade de produtos na tela da sacola', () => {})
      //it.only('Remover quantidade de produtos na tela da sacola', () => {})
      //it.only('Fechar a sacola', () => {})
      //it.only('Remover todos os produtos na tela da sacola', () => {})
      //it.only('Adicionar mais de 10 produtos e verificar se todos são exibidos na tela da sacola', () => {})

    
})

  
