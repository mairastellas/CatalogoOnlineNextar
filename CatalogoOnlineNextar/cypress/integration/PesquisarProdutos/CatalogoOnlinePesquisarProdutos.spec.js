/// <reference types="cypress" />


describe('Acessar página do catálogo online', () => {
    beforeEach(() => {
      cy.visit('https://meucomercio.com.br/lojaqualificacao')
    });
  
    //Verificar se o teste está acessando a página inicial do catálogo online
    it('Verificar o título da página do catálogo online', function() {
        cy.title().should('be.equal','Loja Qualificacao - Curitiba/PR, Bairro Alto')    
    })

    //Os primeiros testes serão sobre a navegabilidade da página inicial
    //Pesquisar pelo primeiro produto e após limpar o campo "Search"
    it('Pesquisar pelo primeiro produto', () => {
        
        cy.get('.search-bar__input') //Encontra o campo "Search"
          .should('be.visible')
          .focus()
          .type('BWBYKMBRMZ', {delay: 50}) //Digita o nome de um produto

        cy.get('.list-product__grid-column__title')
          .should('contain', 'BWBYKMBRMZ') //Confirmar se está realmente listando o produto pesquisado

        cy.get('.search-bar__input') //Encontra o campo "Search"
          .clear() //Limpa o campo "Search"
          .should('have.value', '')//Verificar se o campo está realmente vazio

      })

      //Pesquisar pelo segundo produto, acessar a tela de detalhes e retornar para a tela inicial
      //Esse código abaixo poderia ser uma função, já que poderia ser utilizado em outros tstes
      it('Pesquisar pelo segundo produto e acessar a tela de detalhes', () => {
        
        cy.get('.search-bar__input') //Encontrar o campo "Search"
          .should('be.visible')
          .focus()
          .type('ISMHQTQKES{enter}', {delay: 50}) //Digitar o nome de outro produto

        cy.get('.list-product__grid-column__title')
          .should('contain', 'ISMHQTQKES') //Confirmar se está realmente listando o segundo produto pesquisado

        cy.contains('.list-product__grid-column__title', 'ISMHQTQKES') //Identificar o produto pesquisado
          .click() //Clicar no produto pesquisado para exibir a tela de detalhe

        cy.get('.product-detail__content__info__product_name')  
          .should('contain', 'Product ISMHQTQKES') //Confirmar se está na tela de detalhe do segundo produto pesquisado

        cy.get('.product-detail__header__arrow-left > .ui') //Encontar o botão de "Voltar"
          .click() //Clicar no botão "Voltar" para retornar para a tela inicial de listagem de produtos

        cy.get('.list-product__grid-column__title')
          .should('contain', 'ISMHQTQKES') //Confirmar se está realmente listando novamente o segundo produto pesquisado

      })

    //Pesquisar por um nome de produto inexistente e verificar se a mensagem de erro é exibida
    it('Pesquisar pelo nome de um produto inexistente', () => {
        
        cy.get('.search-bar__input') //Encontrar o campo "Search"
          .should('be.visible')
          .focus()
          .type('teste{enter}', {delay: 50}) //Digitar o nome de um produto inexistente

        //Verificar se a mensagem de erro está aparecendo. Tentei usar o código "cy.get('.error').should('be.visible')" mas não funcionou
        cy.contains('.list-product__items__wrapper', 'Não há produtos publicados no Catálogo Online') //Verificar se a mensagem de erro está aparecendo. Tentei usar o código "cy.get('.error').should('be.visible')" mas não funcionou
        
        cy.get('.nex-icon-close') //Encontrar o botão de fechar pesquisa
          .click() //Clicar no botão para excluir a busca
        
          cy.get('.search-bar__input') //Encontrar o campo "Search"
          .should('have.value', '') //Verififar se o valor digitado está realmente vazio

      })

      
})