
import HomePage from '../pages/HomePage.js'; 

// Web elements selectors
const flightsTable = "table.table";
const flightsButtons = "input[type='submit']";
let flightIndex;

class FlightsResultsPage {

  chooseFlight(flightSeq){

    let flightsAvailableCount;

    // Get the count of the flight results
    cy.get(flightsTable).find('tr').its('length').then((count) => {

      // we subtract 1 because first row is just the table's header
      flightsAvailableCount = count-1; 
      
    }).then(() => {
      
      // If the user didn't give an input or gave an invalid input (<=0 or > results count)
      if (flightSeq === undefined || flightSeq <= 0 || flightSeq > flightsAvailableCount){

        flightIndex = HomePage.getRandomNumberUpTo(flightsAvailableCount-1);
        cy.get(flightsButtons).eq(flightIndex).click();

      }
      else{

        flightIndex = flightSeq-1; //indexing starts from 0
        cy.get(flightsButtons).eq(flightIndex).click();

      }
      
    });
    
  }
  
}

export default new FlightsResultsPage();