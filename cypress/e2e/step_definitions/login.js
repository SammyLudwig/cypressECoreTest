import {
  Given,
  When,
  Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '../pages/LoginPage';
import {invoicesPage} from '../pages/InvoicesPage';

  Given("i access the web page", () => {
    cy.visit("/");
  });

  Given("i enter with my username {string} and password {string}", function (username, password) {
    loginPage.insertCredentials(username,password);
  });

  When("click on login button", () => {
    loginPage.clickOnLoginbutton();
  });

  Then("the invoices main page is shown succefully", () =>{
    invoicesPage.elements.invoiceHeaderLabel().should('be.visible');
    invoicesPage.elements.invoiceHeaderLabel().should('have.text', 'Invoice List');
    invoicesPage.elements.loggedUrlText().should('include', '/account');
  });

  Given("i provide incorrect username as {string} and password as {string}", function (username, password) {
    loginPage.insertCredentials(username,password);
  });

  Then("a message wrong username or password is shown", function () {
    loginPage.elements.failLoginMessage().should('be.visible');
    loginPage.elements.failLoginMessage().should('contain.text', 'Wrong username or password.');
  });