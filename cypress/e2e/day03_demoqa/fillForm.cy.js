context("Context: Fill Form From Demoqa web page",()=>
{

  it("TC 03: Open the Demowqa web page and practice form", () =>{
   cy.clearCookies();
   cy.visit("https://demoqa.com/automation-practice-form")
   .get("#firstName").type("Mike")
   .get("#lastName").type("Masters");
   

   const email = `mike${Math.floor(10000+Math.random()*900000)}@tech.com`
   cy.get("#userEmail").clear().type(email);

   //cy.contains("Male").should("be.visible").click;

   cy.get('[class="custom-control custom-radio custom-control-inline"] input')
   .each((item,index,list)=>{
    expect(list).to.have.length(3);
    expect(item).to.have.attr('required');
   });

   cy.get('[class="custom-control custom-radio custom-control-inline"]')
   .then(($button)=>{
      cy.wrap($button).eq(0).wait(500).click();
      cy.wrap($button).eq(1).should('not.be.checked');
      cy.wrap($button).eq(2).should('not.be.checked');

   })
   
   const phoneNUmber = `+49-555-123 ${Math.floor(1000+Math.random()*9000)}`;
   cy.get('#userNumber').type(phoneNUmber);

   cy.get('#dateOfBirthInput').then($input => {
    $input.val("08 Mar 2000").trigger("change");
   })
   cy.get('.subjects-auto-complete__value-container').type("SDET Class Form");

  
   cy.get('#hobbiesWrapper .col-md-9')
   .find('.custom-control-label')
   .then(checkboxes=>{
    cy.wrap(checkboxes).eq(0).click().wait(500).parent().should("contain","Sports");
    cy.wrap(checkboxes).eq(1).click().parent().should("contain","Reading");
    cy.wrap(checkboxes).eq(2).click().parent().should("contain","Music");
   });

   cy.get('#uploadPicture').attachFile('background.jpg')

   cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click(500);
   cy.get('#city > .css-yk16xz-control > .css-1hwfws3 > .css-1uccc91-singleValue').click.wait(500);
   cy.get('#submit').click;

  }
  )

}
)