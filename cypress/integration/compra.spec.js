context('Compra', () => {
  it('Efetuar uma compra de produto', () => {
    cy.backgroundLogin()

    cy.visit('/')
    const nomeProduto = 'Faded Short Sleeve T-shirts'

    cy.contains(nomeProduto).trigger('mouseover')

    cy.contains(nomeProduto) // elemento
      .parent() // pai do elemento
      .siblings('div.button-container') // irmão do elemento
      .children('a') // filho do elemento
      .first() // add to cart
      .click() // ação no elemento

    // Validando se o produto foi adicionado ao carrinho com sucesso
    cy.get('.icon-ok')
      .parent() // h2
      .should(
        'contain.text',
        'Product successfully added to your shopping cart',
      )

    cy.get('span#layer_cart_product_title').should('contain.text', nomeProduto)

    // cy.pause() pausa a automação em tempo de execução

    cy.get(".button-container a[href$='controller=order']").click()

    cy.get(".cart_navigation a[href$='order&step=1']").click()

    // cy.get('#email').type('semana-agilizei@mail.com');
    // cy.get('#passwd').type('12345');
    // cy.get('button#SubmitLogin').click();

    cy.get('button[name=processAddress]').click()
    // //Validando se o endereço de entrega é igual ao de cobrança
    // cy.get('[type=checkbox]#addressesAreEquals')
    //     .should('have.attr', 'checked', 'checked') //asserção | atributo | valor

    cy.get('[type=checkbox]#cgv').check()

    cy.get('button[name=processCarrier]').click()

    cy.get('.bankwire').click()

    cy.get('.cart_navigation button[type=submit]')
      .find('span')
      .contains('I confirm my order')
      .click()

    cy.get('.cheque-indent strong').should(
      'contain.text',
      'Your order on My Store is complete.',
    )

    // should
    // expect

    // validando o código do produto
    // [x] capturar o texto do box do
    // [x] filtrar o texto do box para estrair somente o ID do pedido
    // [x] armazenar o ID do pedido
    // [] obter o ID do pedido armazenado

    cy.get('div.box')
      .invoke('text') // chamando a função text
      .then((text) => {
        console.log(text) // exibe o texto do conteúdo filtrado
        console.log(text.match(/[A-Z][A-Z]+/g)[1]) // faz o match do texto com o array do regex procurando pelo id do pedido

        // escrita de um arquivo json com o conteudo do Pedido
        // caminho do arquivo (sempre a partir do root) | conteudo do arquivo
        cy.writeFile('cypress/fixtures/pedido.json', {
          id: `${text.match(/[A-Z][A-Z]+/g)[1]}`,
        })
      })

    cy.get(".cart_navigation a[href$='history']").click()

    // leitura do arquivo
    cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {
      cy.get('tr.first_item .history_link a').should('contain.text', pedido.id)
    })
  })
})
