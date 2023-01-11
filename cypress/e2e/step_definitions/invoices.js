import {
  Given,
  When,
  Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import {invoicesPage} from '../pages/InvoicesPage';

When('click on invoice details link', () => {
  invoicesPage.accessInvoiceDetails();
});

Then('all data of the invoice clicked is shown correctly', () =>{
  invoicesPage.elements.hotelNameLabel().should('be.visible');
  invoicesPage.elements.invoiceDateListLine().should('contain.text', '14/01/2018');
  invoicesPage.elements.invoiceDueDateListLine().should('contain.text', '15/01/2018');
  invoicesPage.elements.invoiceNumberLabel().should('be.visible');
  invoicesPage.elements.customerBookingCodeLabel().should('contain.text','0875');
  invoicesPage.elements.customerDetailsLabel().should('contain.text', 'JOHNY SMITH').should('contain.text', 'R2, AVENUE DU MAROC').should('contain.text', '123456');
  invoicesPage.elements.customerRoomLabel().should('be.visible');
  invoicesPage.elements.customerCheckInLabel().should('be.visible');
  invoicesPage.elements.customerCheckOutLabel().should('be.visible');
  invoicesPage.elements.customerTotalStayCountLabel().should('be.visible');
  invoicesPage.elements.customerTotalStayAmountLabel().should('be.visible');
  invoicesPage.elements.billingDepositNowLabel().should('be.visible');
  invoicesPage.elements.billingTaxAndVATLabel().should('be.visible');
  invoicesPage.elements.billingTotalAmountLabel().should('be.visible');
})