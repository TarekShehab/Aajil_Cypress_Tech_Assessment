// Import page objects
import Fixtures from '../fixtures/fixtures.json'
import HomePage from '../support/pages/HomePage.js'; 
import FlightsResultsPage from '../support/pages/FlightsResultsPage.js'; 
import FlightPurchasePage from '../support/pages/FlightPurchasePage.js'; 
import PurchaseConfirmationPage from '../support/pages/PurchaseConfirmationPage.js'; 

describe('Find Flights', () => {
  it('should choose departure and destination cities and then click on find flights button', () => {
    
    cy.visit(Fixtures.SUT_Endpoint);

    HomePage.selectDeptCity("koko");
    HomePage.selectDesCity("Berlin");
    HomePage.clickFindFlights();

    FlightsResultsPage.chooseFlight(1);
    
    FlightPurchasePage.populateAndPurchase();
 
    PurchaseConfirmationPage.getStatusCell().should('have.text', "PendingCapture");
    PurchaseConfirmationPage.ValidateAmountgreaterThan(100);




  });
});
