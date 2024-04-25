const { beforeEach, afterEach, it } = require("node:test")

describe("First Test Suit", function(){

  before(function(){
  })

  after(function(){
  })

  beforeEach(function(){
  })

  afterEach(function(){
  })

  it.skip("TC 01 Google search", function () {
    cy.visit("https://www.chaijs.com/");

    cy.get("http://www.eurotech.study/");   
})

xit("TC 01 Google search", function () {
  cy.visit("https://www.chaijs.com/");

  cy.get("http://www.eurotech.study/");   
})

it("TC 02 Wikipedia search",()=>{

  cy.visit("https://www.wikipedia.org/");
 cy.title().wait(500).should("eq","Wikipedia");

})



})