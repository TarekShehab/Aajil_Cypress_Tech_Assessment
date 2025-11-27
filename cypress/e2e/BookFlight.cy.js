
// Import page objects
import Fixtures from '../fixtures/fixtures.json'
import MasterPage from '../support/pages/MasterPage.js'; 

let deptCity;
let desCity;
let flightSeq;

describe('Book a flight', () => {
  
  it('1- Use the following parameters for deptCity, desCity, and flightSeq: Boston, Berlin, 2', () => {
    
    deptCity = "Boston";
    desCity = "Berlin";
    flightSeq = 2;

    cy.visit(Fixtures.SUT_Endpoint);

    //Book a flight
    MasterPage.purchaseEndToEnd(deptCity, desCity, flightSeq);
 
    MasterPage.makeAssertions();

  });
  
  it('2- Use the following parameters for deptCity, desCity, and flightSeq: No inputs (all parameters random)', () => {
    
    cy.visit(Fixtures.SUT_Endpoint);

    //Book a flight
    MasterPage.purchaseEndToEnd();

    MasterPage.makeAssertions();

  });
  
  it('3- Use the following parameters for deptCity, desCity, and flightSeq: Boston, Boston, 1', () => {
    
    deptCity = "Boston";
    desCity = "Boston";
    flightSeq = 1;

    cy.visit(Fixtures.SUT_Endpoint);

    //Book a flight
    MasterPage.purchaseEndToEnd(deptCity, desCity, flightSeq);
 
    MasterPage.makeAssertions();

  });
  
  it('4- Use the following parameters for deptCity, desCity, and flightSeq: Paris, Berlin, 0', () => {
    
    deptCity = "Paris";
    desCity = "Berlin";
    flightSeq = 0;

    cy.visit(Fixtures.SUT_Endpoint);

    //Book a flight
    MasterPage.purchaseEndToEnd(deptCity, desCity, flightSeq);
 
    MasterPage.makeAssertions();

  });
  
  it('5- Use the following parameters for deptCity, desCity, and flightSeq: Choose any inputs of your choice', () => {
    
    deptCity = "Random";
    desCity = "New York";
    flightSeq = 3;

    cy.visit(Fixtures.SUT_Endpoint);

    //Book a flight
    MasterPage.purchaseEndToEnd(deptCity, desCity, flightSeq);
 
    MasterPage.makeAssertions();

  });
  
});
