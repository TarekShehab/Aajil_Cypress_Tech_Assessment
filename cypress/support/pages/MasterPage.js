
import HomePage from '../pages/HomePage.js'; 
import FlightsResultsPage from '../pages/FlightsResultsPage.js'; 
import FlightPurchasePage from '../pages/FlightPurchasePage.js'; 
import PurchaseConfirmationPage from '../pages/PurchaseConfirmationPage.js'; 

class MasterPage {
  
  // Make the whole purchace process end-to-end
  purchaseEndToEnd(deptCity, desCity, flightSeq) {

    // Select the departure and destination cities and click "Find Flights"
    HomePage.selectDeptCity(deptCity);
    HomePage.selectDesCity(desCity);
    HomePage.clickFindFlights();

    // Choose a flight from the results
    FlightsResultsPage.chooseFlight(flightSeq);
    
    // Enter dummy data inputs and purchase the flight ticket
    FlightPurchasePage.populateAndPurchase();
    
  }

  // Make all the assertions needed
  makeAssertions() {

    // Confirm the status to be "PendingCapture"
    PurchaseConfirmationPage.getStatusCell().should('have.text', "PendingCapture");

    // Confirm the ticket amount is higher that 100$
    PurchaseConfirmationPage.ValidateAmountgreaterThan(100);

  }

}

export default new MasterPage();