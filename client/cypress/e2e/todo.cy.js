/// <reference types="cypress" />

describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('/todos')
  })

  it('It should display modal when add button is clicked', () => {
    cy.contains('button', 'Add').click()
    cy.contains('Add a new Todo').should('be.visible')
  })

  it('should return without adding todo if text not type.', () => {
    cy.contains('button', 'Add').click()
    cy.contains('Save Changes').click()
    cy.contains('Add a new Todo').should('be.visible')
    cy.get('.btn-secondary').click()
    cy.log('Model close without adding new todo')
  })
  it('It have display todo card when new todo is added', () => {
    cy.contains('button', 'Add').click()
    cy.get("input[placeholder='Todo']").type('Make plan for a day')
    cy.contains('Save Changes').click()
    cy.contains('Make plan for a day')
      .should('be.visible')
      .and('have.class', 'TodoCard__todo-container')
  })

  it('it should toggle icon when todo card is clicked', () => {
    cy.contains('button', 'Add').click()
    cy.get("input[placeholder='Todo']").type('Make plan for a day')
    cy.contains('Save Changes').click()
    cy.contains('Make plan for a day').click()
    cy.get("[src='/static/media/check.9e8832df.svg']").should('be.visible')
    cy.contains('Make plan for a day').click()
    cy.get("[src='/static/media/close.fa7e5ead.svg']").should('be.visible')
  })
})
