
// Web elements selectors
const nameInput = "#inputName";
const addressInput = "#address";
const cityInput = "#city";
const stateInput = "#state";
const zipInput = "#zipCode";
const cardTypeDropdownInput = "#cardType";
const creditCardNoInput = "#creditCardNumber";
const creditcardMonthInput = "#creditCardMonth";
const creditCardYearInput = "#creditCardYear";
const nameOnCardInput = "#nameOnCard";
const rememberMeCheckBox = "#rememberMe";
const purchaseButton = "input.btn-primary";


class FlightPurchasePage {
  
  // Generate a random string
  generateRandomString(length = 10) {

    // Define the set of characters allowed in the random string
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    
    // Loop 'length' number of times
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    
    cy.log("Random string ===============>" + result);
    return result;

  }

  //Populate all input fields in the page with random strings
  populateAndPurchase() {
    cy.get(nameInput).type(this.generateRandomString());
    cy.get(addressInput).type(this.generateRandomString());
    cy.get(cityInput).type(this.generateRandomString());
    cy.get(stateInput).type(this.generateRandomString());
    cy.get(zipInput).type(this.generateRandomString());
    cy.get(cardTypeDropdownInput).select(Math.floor(Math.random() * 2));
    cy.get(creditCardNoInput).type(this.generateRandomString());
    cy.get(creditcardMonthInput).type(this.generateRandomString());
    cy.get(creditCardYearInput).type(this.generateRandomString());
    cy.get(nameOnCardInput).type(this.generateRandomString());
    cy.get(rememberMeCheckBox).check();

    cy.get(purchaseButton).click();
  }



  
  








}

// Export an instance of the class
export default new FlightPurchasePage();