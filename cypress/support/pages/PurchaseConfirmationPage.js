
// Web elements selectors
const statusCell = ".table tr:nth-child(2) td:nth-child(2)";
const amountCell = ".table tr:nth-child(3) td:nth-child(2)";

class PurchaseConfirmationPage {
  
  getStatusCell() {
   
    const status = cy.get(statusCell)
    return status
  
  }
  
  getAmountCell() {
    
    const status = cy.get(amountCell)
    return status
  
  }
  
  ValidateAmountgreaterThan(minAmount) {
  
    cy.get(amountCell)
    .invoke('text')
    .then(text => {
      const trimmedAmountText = text.trim();
      cy.log(`Trimmed amount text value ================> ${trimmedAmountText}`);
      const amountNumber = this.extractAmountNumber(trimmedAmountText);
      cy.log(`Extracted Amount text value ================> ${amountNumber}`);
      expect(amountNumber).to.be.greaterThan(minAmount)
    })
  
  }
  
  extractAmountNumber(amountString) {

    const parts = amountString.split(' ');
    cy.log("Parts ===========> " + parts);
  
    const numericString = parts[0];
    cy.log("Numeric String ===========> " + numericString);
  
    const result = parseInt(numericString);
    cy.log( "Extract Number ===========> " + result);

    return result;

  }

}

export default new PurchaseConfirmationPage();