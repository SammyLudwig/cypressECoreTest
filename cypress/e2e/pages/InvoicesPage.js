class InvoicesPage {
  elements = {
    invoiceHeaderLabel: () => cy.get('h2').contains('Invoice List'),
    invoiceDetailsLink: () => cy.get('a[href="/invoice/0"]'),
    hotelNameLabel: () => cy.get('h4').contains('Rendezvous Hotel'),
    invoiceDateListLine: () => cy.get('div[class="container"] ul li'),
    invoiceDueDateListLine: () => cy.get('div[class="container"] ul li').eq(1),
    invoiceNumberLabel: () => cy.get('h6').contains('Invoice #110 details'),
    customerBookingCodeLabel: () => cy.get('td').contains('0875'),
    customerDetailsLabel: () => cy.get('div').contains('JOHNY SMITH'),
    customerRoomLabel: () => cy.get('td').contains('Superior Double'),
    customerCheckInLabel: () => cy.get('td').contains('14/01/2018'),
    customerCheckOutLabel: () => cy.get('td').contains('15/01/2018'),
    customerTotalStayCountLabel: () => cy.get('td').contains('1'),
    customerTotalStayAmountLabel: () => cy.get('td').contains('$150'),
    billingDepositNowLabel: () => cy.get('td').contains('USD $20.90'),
    billingTaxAndVATLabel: () => cy.get('td').contains('USD $19'),
    billingTotalAmountLabel: () => cy.get('td').contains('USD $209'),
  };
     
  accessInvoiceDetails(){
    this.elements.invoiceDetailsLink().invoke('removeAttr', 'target').click();
  };
  
}
  
export const invoicesPage = new InvoicesPage();