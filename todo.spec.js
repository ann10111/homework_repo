/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=px8k7i')
  })

  it('Sign in', () => {
    cy.get(':nth-child(1) > .form-control').type('hhlle@bigmir.net');
    cy.get(':nth-child(2) > .form-control').type('qwertyqwerty');
    cy.get('.btn').click();

    cy.get('.navbar').contains('hollllyyy').should('exist');
     })
})
