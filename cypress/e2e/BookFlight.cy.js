
// Import page objects
import Fixtures from '../fixtures/fixtures.json'
import MasterPage from '../support/pages/MasterPage.js'; 

let deptCity;
let desCity;
let flightSeq;

describe('Book a flight', () => {
  
  it('1- Use the following parameters for deptCity, desCity, and flightSeq: Boston, Berlin, 2', () => {
    
    deptCity = "Boston";
    desCity = 2;
    flightSeq = 2;

    cy.visit(Fixtures.SUT_Endpoint);

    //Book a flight
    MasterPage.purchaseEndToEnd(deptCity, desCity, flightSeq);
 
    MasterPage.makeAssertions();

  });
    
});
