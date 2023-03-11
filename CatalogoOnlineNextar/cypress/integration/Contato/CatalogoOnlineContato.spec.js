/// <reference types="cypress" />


describe('Acessar página do catálogo online', () => {
    beforeEach(() => {
      cy.visit('https://meucomercio.com.br/lojaqualificacao')
    });
  
    //Verifica se o teste está acessando a página inicial do catálogo online
    it('Verificar o título da página do catálogo online',  () =>  {
        cy.title().should('be.equal','Loja Qualificacao - Curitiba/PR, Bairro Alto') 

    })

    //Verifica se o sistema abre corretamente a página de Whatsapp
    it('Verificar a abertura de uma nova janela para o Whatsapp',  () => {
        cy.get(':nth-child(1) > .content > a') //Encontra o link que direciona ao Whatsapp
          .click() //Clica no link
          .should('have.attr', 'target', '_blank')

    })

    //Verifica se o sistema abre corretamente a página do Facebook
    it('Verificar a abertura de uma nova janela para o acesso ao Facebook',  () => {
        cy.get(':nth-child(2) > .content > a') //Encontra o link que direciona ao Facebook
          .click() //Clica no link
          .should('have.attr', 'target', '_blank')

    })

    //Verifica se o sistema abre corretamente a página do Instagram
    it('Verificar a abertura de uma nova janela para o acesso ao Instagram',  () => {
        cy.get(':nth-child(3) > .content > a') //Encontra o link que direciona ao Instagram
          .click() //Clica no link
          .should('have.attr', 'target', '_blank')
    
    })

    //Verifica se o sistema abre corretamente a página para envio de Email
    it('Verificar a abertura de uma nova janela para envio de E-mail',  () => {
        cy.get(':nth-child(4) > .content > a') //Encontra o link que direciona ao Email. 
          .should('have.attr', 'target', '_blank')
        
    })

    //Verifica se o sistema abre corretamente a página de endereço
    it('Verificar a abertura de uma nova janela sobre o endereço da loja',  () => {
        cy.get(':nth-child(5) > .content > a') //Encontra o link que direciona ao endereço
          .click() //Clica no link
          .should('have.attr', 'target', '_blank')
        
    })

    //Verifica se o sistema abre corretamente a página da Nextar
    it('Verificar a abertura de uma nova janela sobre o endereço da loja',  () => {
        cy.get('.footer > a') //Encontra o link que direciona a página da Nextar
          .click() //Clica no link
          .should('have.attr', 'target', 'blank')
        
    })


})
