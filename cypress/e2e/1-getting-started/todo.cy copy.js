/// <reference types="cypress" />
describe("Teting EA APP", () => {
  it("Login application", () => {
      cy.visit("http://eaapp.somee.com/");
      cy.contains("Login").click();
  })
})