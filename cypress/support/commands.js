// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
  // background login
  cy.setCookie(
    'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
    'R6xmma6F4U6edNQuu67M0uiqqjjJHna5QCxjfxBx%2BO1EN8qvyuyk0v%2Bp3xWP%2Bx9sRfe2rtFrb2o8DG4L0qDJTWwOeXbK%2BNa%2BThdhVg5xJulrAyfGJF2bAxYHFGA8JZFRkAu%2BnyzS0caHx0Hwirfg%2Fi%2F29tdxQfZ1xip3xb%2BYfTM5OVWnPKDOreX5qrdIvmECTGXlFRUGTNBGE5yFNQ8PUwthUraqfP4tGAPjKFq%2BoASMMmkBqe45o6w83y286PveYlD7qYuDLHfckjYuXyGzTFfxNLXpC41CKn8kMnK2iywLxi%2BZi%2F%2BgTuWMDvwV6mB7uHmNaSDoKiKQga6QbVbdDrrYytmSBGmDNFZyWAwczQOC5sLSYJLKkbU%2BxlrUBdmMdRjMiXC7hDbrmzrVyshqo0Y1wSLPCgotLHlIpSvsW4E%3D000313',
  )
})
