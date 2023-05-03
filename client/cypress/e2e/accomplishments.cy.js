/// <reference types="cypress" />

describe('Accomplishment dashboard', () => {
  beforeEach(() => {
    cy.visit('/accomplishments')
  })

  it('should display error if info is missing', () => {
    cy.get("[placeholder='Title']").type('This is my accomplishment')
    cy.get("[placeholder='My accomplishment...']").type('I use Vim! 💪')
    cy.get('button').click()
    cy.contains('Complete the items above to continue').should('be.visible')
  })

  it('should display sucess component if all info is correct', () => {
    cy.get("[placeholder='Title']").type('This is my accomplishment')
    cy.get("[placeholder='My accomplishment...']").type('I use Vim! 💪')
    cy.get("[type='checkbox']").click()
    cy.get('button').click()
    cy.contains('This Accomplisment was Successfully Submitted').should(
      'be.visible'
    )
  })

  it('After submission should go back to Accomplishment page ', () => {
    cy.get("[placeholder='Title']").type('This is my accomplishment')
    cy.get("[placeholder='My accomplishment...']").type('I use Vim! 💪')
    cy.get("[type='checkbox']").click()
    cy.get('button').click()
    cy.contains('This Accomplisment was Successfully Submitted').should(
      'be.visible'
    )
    cy.contains('Back').click()
    cy.get("[placeholder='Title']").should('be.visible')
  })
})
