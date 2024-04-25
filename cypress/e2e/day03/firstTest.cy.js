context('Second Test Suit', () => {
  before(() => {
      console.log('before method- first test case');
  })
  after(() => {
      console.log('after method- first test case');
  })
  beforeEach(() => {
      console.log('beforeEach method- first test case');
     cy.clearCookies();
     
  })
  afterEach(() => {
      console.log('afterEach method- first test case');
  })


  it.only('TC 01 Google search', () => {
      cy.visit('https://www.google.com/')
      //cy.viewport(1080,800)
      cy.viewport('macbook-16')
      cy.get('#APjFqb').should('be.visible').type("cypress{enter}");
      cy.url().should("include","cypress");
      cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb')
      .click();

  })
  it('TC 02 Wikipedia search',()=>{
      cy.visit('https://www.wikipedia.org/');
      cy.title().wait(500).should('eq','Wikipedia');
      cy.get('#searchInput').clear().type('cypress{enter}');
      cy.url().should('include','/wiki/Cypress');
      cy.get('.mw-page-title-main').should('have.text','Cypress')
  })
 

})