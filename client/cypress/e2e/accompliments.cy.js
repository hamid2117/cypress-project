/// <reference types="cypress" />

describe('Accomplishment dashboard', () => {
  beforeEach(() => {
    cy.visit('/accomplishments')
  })

  it('should display error if info is missing', () => {
    cy.get("[placeholder='Title']").type('This is my accomplishment')
    cy.get("[placeholder='My accomplishment...']").type('I use Vim! 💪')
    //cy.get("[type='checkbox']").click()
    cy.get('button').click()
    cy.contains('Complete the items above to continue').should('be.visible')
  })

  it('should display sucess component if all info is correct', () => {
    cy.get("[placeholder='Title']").type('This is my accomplishment')
    cy.get("[placeholder='My accomplishment...']").type('I use Vim! 💪')
    cy.get("[type='checkbox']").click()
    cy.get('button').click()
    cy.contains('This Accomplishment was Sucessfully Submitted').should(
      'be.visible'
    )
  })

  //  it('should display inappropriate content error when text that includes giraffe is submitted (with mock)', () => {
  //    cy.intercept('POST', 'http://localhost:4000', (req) => {
  //      req.reply((res) => {
  //        res.send({
  //          msg: 'Your content is not appropriate',
  //        })
  //      })
  //    })

  //    cy.get("[placeholder='Title']").type('This is my accomplishment')
  //    cy.get("[placeholder='My accomplishment...']").type('I use Vim! 💪')
  //    cy.get("[type='checkbox']").click()
  //    cy.get('button').click()
  //    cy.contains('Your content is not appropriate').should('be.visible')
  //  })
})
