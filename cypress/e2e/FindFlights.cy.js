// Import page objects
import HomePage from '../support/pages/HomePage.js'; 
import FlightsResultsPage from '../support/pages/FlightsResultsPage.js'; 

const SUT_Endpoint = "https://blazedemo.com/"

describe('Find Flights', () => {
  it('should choose departure and destination cities and then click on find flights button', () => {
    
    cy.visit(SUT_Endpoint);

    HomePage.selectDepCity();
    HomePage.selectDestCity();
    HomePage.clickFindFlights();

    FlightsResultsPage.chooseFlight();

  });
});
