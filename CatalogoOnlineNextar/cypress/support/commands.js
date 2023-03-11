Cypress.Commands.add('adicionarProdutosAoCarrinho', function(){
    
  cy.get(':nth-child(1) > .list-product__grid-column__info > .list-product__grid-column__div-section > :nth-child(2) > .amount-input > .amount-input__value')  //Encontra o campo que indica a quantidade de produtos adicionados
    .should('be.visible') //Verifica se o campo está visível
    .should('have.value', '0') //Verifica se o campo está com o valor igual a "0"

  cy.get(':nth-child(1) > .list-product__grid-column__info > .list-product__grid-column__div-section > :nth-child(2) > .amount-input > .nex-icon-plus') //Encontra o botão para adicionar itens
    .should('be.visible') //Verifica se o botão está visível
    .click({force: true}) //Por alguma razão, acontece uma falha ao tentar clicar no botão para adicionar e não alterar o valor para a próxima validação
    .parent()

  cy.get(':nth-child(1) > .list-product__grid-column__info > .list-product__grid-column__div-section > :nth-child(2) > .amount-input > .amount-input__value')  //Encontra o campo que indica a quantidade de produtos adicionados    
    .should('be.visible') //Verifica se o campo está visível
    .should('have.value', '1') //Verifica se o valor do campo está igual a "1"
  
  cy.get('.checkout-button')
    .should('be.visible') //Verifica se o campo está visível
    .trigger("click")
    .parent()
       

})

Cypress.Commands.add('acessarTelaDetalheProduto', function(){

    cy.get('.search-bar__input') //Encontrar o campo "Search"
      .should('be.visible')
      .focus()
      .type('ISMHQTQKES', {delay: 50}, '{enter}') //Digitar o nome de outro produto

    cy.get('.list-product__grid-column__title')
      .should('contain', 'ISMHQTQKES') //Confirmar se está realmente listando o produto pesquisado

    cy.contains('.list-product__grid-column__title', 'ISMHQTQKES') //Identificar o produto pesquisado
      .click() //Clicar no produto pesquisado para exibir a tela de detalhe

    cy.get('.product-detail__content__info__product_name')  
      .should('contain', 'Product ISMHQTQKES') //Confirmar se está na tela de detalhe do segundo produto pesquisado

})