/// <reference types="cypress" />


describe('Acessar página do catálogo online', () => {
    beforeEach(() => {
      cy.visit('https://meucomercio.com.br/lojaqualificacao')
    });
  
    //Verifica se o teste está acessando a página inicial do catálogo online
    it('Verificar o título da página do catálogo online', function() {
        cy.title().should('be.equal','Loja Qualificacao - Curitiba/PR, Bairro Alto') 

    })

    //Concluir o pedido selecionando a opção de entrega
    it('Concluir Pedido selecionando a opção de entrega',  () => {

        cy.adicionarProdutosAoCarrinho() //Função para adicionar produto ao carrinho

        cy.get('.ui.circular.fluid.icon.secondary.right.labeled.button.nex-btn.nex-btn-primary')
          //.should('be.visible') //Verifica se o campo está visível
          .click({force: true})

        //Eu encontrei dificuldades ao tentar encontrar o elemento do botão avançar. Tentei buscar pela classe e às vezes encontrava e outras vezes não.
       // cy.get('.step-content > footer')  
          //.should('be.visible')        
          //.contains('Avançar')
          //.parent()
          //.find('button', 'Avançar')
          //.click({force: true})
          // .click({force: true})

        cy.get('.eight > .icon > input')  
          .should('be.visible')
          .type('88330-666')

        cy.get('.form > :nth-child(2) > p')
          //Na validação abaixo, às vezes o sistema exibe o número e às vezes não
          //.should('contain', 'Avenida Central - Centro, Balneário Camboriú - SC') 
          //.should('contain', 'Avenida Central - até 183/184 - Centro, Balneário Camboriú - SC')

        cy.get('.five > .icon > input')
          .should('be.visible')
          .type('25')
          .should('have.value', '25')
        
        cy.get('.ten > .icon > input')
          .type('Hotel Miramar')
          .should('have.value', 'Hotel Miramar')

        cy.get('.ui.circular.fluid.icon.secondary.right.labeled.button.nex-btn.nex-btn-primary')
          .should('be.visible') //Verifica se o campo está visível
          .trigger("click")
        
        cy.get(':nth-child(1) > .icon > input')
          .type('Maira Rottili')
          .should('have.value', 'Maira Rottili')

        cy.get('.form > :nth-child(2) > .icon > input')
          .type('mairastella.s@gmail.com')
          .should('have.value', 'mairastella.s@gmail.com')

        cy.get('.country-selector > .input > input')
          .type('47996585397')
          .should('have.value', '47996585397')

        cy.get('input[type="checkbox"]')
          .check({force: true})
          .should('be.checked')

        cy.get('.ui.circular.fluid.icon.secondary.right.labeled.button.nex-btn.nex-btn-primary')
          //.should('be.visible') //Verifica se o campo está visível
          .trigger("click")

        cy.get('.order-dispatched__content > .order-dispatched__content-section > .order-dispatched__content__header > .order-dispatched__content__header__status > h2 > span')
          .should('be.visible') //Verifica se o campo está visível

        //Nessa parte do código poderia ter uma validação para download de arquivo

    })


    //Concluir o pedido selecionando a opção de entrega
    it('Concluir Pedido selecionando a opção "Retirada"',  function() {

        cy.adicionarProdutosAoCarrinho() // Função para adicionar produto ao carrinho

        cy.get('.ui.circular.fluid.icon.secondary.right.labeled.button.nex-btn.nex-btn-primary')
          //.should('be.visible') //Verifica se o campo está visível
          .click({force: true})
    
        cy.get('input[type="radio"][value="withdraw"]')
          .check()
          .should('be.checked')

        cy.get('.ui.circular.fluid.icon.secondary.right.labeled.button.nex-btn.nex-btn-primary')
          .should('be.visible') //Verifica se o campo está visível
          .trigger("click")
      
        cy.get(':nth-child(1) > .icon > input')
          .should('be.visible') //Verifica se o campo está visível
          .type('Maira Rottili')
          .should('have.value', 'Maira Rottili')

        cy.get('.form > :nth-child(2) > .icon > input')
          .type('mairastella.s@gmail.com')
          .should('have.value', 'mairastella.s@gmail.com')

        cy.get('.country-selector > .input > input')
          .type('47996585397')
          .should('have.value', '47996585397')

        cy.get('input[type="checkbox"]')
          .check({force: true})
          .should('be.checked')

        cy.get('.ui.circular.fluid.icon.secondary.right.labeled.button.nex-btn.nex-btn-primary')
        //.should('be.visible') //Verifica se o campo está visível
          .trigger("click")

        cy.get('.order-dispatched__content > .order-dispatched__content-section > .order-dispatched__content__header > .order-dispatched__content__header__status > h2 > span')
          .should('be.visible') //Verifica se o campo está visível

      //Nessa parte do código poderia ter uma validação para download de arquivo

    
    
    })


})