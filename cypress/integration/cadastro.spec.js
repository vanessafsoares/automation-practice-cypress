const chance = require('chance').Chance()

context('Cadastro', () => {
  const email = chance.email()
  const firstName = chance.first()
  const lastName = chance.last()
  const address = chance.address()
  const city = chance.city()
  const zipcode = chance.zip()
  const mobile = chance.phone()

  it('Efetuar cadastro de usuario', () => {
    cy.visit('index.php?controller=authentication&back=my-account')

    cy.get('input#email_create').type(email)

    cy.get('button#SubmitCreate').click()

    cy.get('input#id_gender2').check()

    cy.get('input#customer_firstname').type(firstName)

    cy.get('input#customer_lastname').type(lastName)

    cy.get('input#passwd').type('TesteQA@123')

    cy.get('select#days').select('15')

    cy.get('select#months').select('November')

    cy.get('select#years').select('1997')

    cy.get('input#optin').check()

    cy.get('input[name="address1"]').type(address)

    cy.get('input[name="address2"]').type('Apartment 21')

    cy.get('input[name="city"]').type(city)

    cy.get('select#id_state').select('Kansas')

    cy.get('input#postcode').type(zipcode)

    cy.get('input#phone_mobile').type(mobile)

    cy.get('button#submitAccount').click()

    cy.url().should('contain', 'my-account')

    cy.get('div.row')
      .parent()
      .children('p')
      .should('contain.text', 'Welcome to your account.')
  })

  it('Efetuar cadastro de email inválido', () => {
    cy.visit('index.php?controller=authentication&back=my-account')

    cy.get('input#email_create').type('asfajjasdgfj')

    cy.get('button#SubmitCreate').click()

    cy.get('div.row .alert')
      .parent()
      .should('contain.text', 'Invalid email address.')
  })
})
