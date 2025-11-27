
// Web elements selectors
const statusCell = ".table tr:nth-child(2) td:nth-child(2)";
const amountCell = ".table tr:nth-child(3) td:nth-child(2)";

class PurchaseConfirmationPage {
  
  getStatusCell() {
   
    const status = cy.get(statusCell);
    return status;
  
  }
  
  getAmountCell() {
    
    const status = cy.get(amountCell);
    return status;
  
  }
  
  ValidateAmountgreaterThan(minAmount) {
  
    cy.get(amountCell)
    .invoke('text')
    .then(text => {
      const trimmedAmountText = text.trim();
      const amountNumber = this.extractAmountNumber(trimmedAmountText);
      expect(amountNumber).to.be.greaterThan(minAmount);
    })
  
  }
  
  // Helper function that converts the amount from a string with the currency to a number that we can compare to other numbers
  extractAmountNumber(amountString) {

    const parts = amountString.split(' ');
    const numericString = parts[0];    
    const result = parseInt(numericString);

    return result;

  }

}

export default new PurchaseConfirmationPage();