/// <reference types="cypress" />


describe('Acessar página do catálogo online', () => {
    beforeEach(() => {
      cy.visit('https://meucomercio.com.br/lojaqualificacao')
    });
  
    //Verificar se o teste está acessando a página inicial do catálogo online
    it('Verificar o título da página do catálogo online', function() {
        cy.title().should('be.equal','Loja Qualificacao - Curitiba/PR, Bairro Alto')   //Verifica o título da página
    })

      //Acesasar a tela de detalhes de produto e adicionar um produto ao carrinho através do botão adicionar
      it('Acessar tela de detalhe do produto e adicionar produto ao carrinho', () => {
        
        cy.acessarTelaDetalheProduto() //Criei uma função, já que poderia ser utilizada em outras situações

        cy.get('.product-detail__content > .product-detail__content__info > .ui') //Encontra o botão para adicionar 
          .should('be.visible')
          .click({force: true}) //Clica no botão

        cy.get('.product-detail__content__info__counter-wrapper__price_qtd') //Encontra a descrição do botão
          .should('contain', '1 = R$ 19,45 ') //Verifica se o item foi realmente adicionado ao carrinho. Nesse teste o ideal seria comparar o "value" porque o valor pode alterar, mas não encontrei.
    
      })

     //Clicar na imagem do produto para ampliar
      it.only('Acessar tela de detalhe do produto e adicionar produto ao carrinho', () => {
        
        cy.acessarTelaDetalheProduto() //Função para encontrar o produto e acessar a tela de descrição

        cy.get('.product-detail__content__image__img')          
          .click({force: true})

        cy.get('.product-detail__content__modal-web__full-img')
          .should('be.visible')

    
      })

})