/// <reference types="cypress" />
describe("Teting EA APP", () => {
  it("Login application", () => {
      cy.visit("http://eaapp.somee.com/");
      cy.contains("Login").click();
      cy.url().should("include","/Account/Login");
      cy.get('#UserName').type("admin");
      cy.get('#Password').type("password")
      cy.get('.btn').click();
      cy.url().should("include", "somee.com/");
     // cy.get('#logoutForm > .nav > :nth-child(1) > a').should("contains", "Log off");
     cy.get('.navbar-collapse > :nth-child(1) > :nth-child(3) > a').click();
     cy.get(':nth-child(5) > a').click();
     cy.get(':nth-child(1) > :nth-child(2) > a').click();



  })
})