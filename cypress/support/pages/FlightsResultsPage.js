
// Web elements selectors
const flightsTable = "table.table";
const flightsButtons = "input[type='submit']";
let flightIndex;

class FlightsResultsPage {

  getRandomNumberUpTo(ceiling){
    return Math.floor(Math.random() * ceiling);
  }

  chooseFlight(flightSeq){

    // If the user didn't give an input or gave an invalid input (<=0)
    if (flightSeq === undefined || flightSeq <= 0){
      let flightsAvailableCount;

      // Get the count of options in departure cities drop down
      cy.get(flightsTable).find('tr').its('length').then((count) => {
        // we subtract 1 because first row is just the table's header
        flightsAvailableCount = count-1; 
        cy.log(`Result Flights Count =========================> ${flightsAvailableCount} options.`);    
      }).then(() => {
        flightIndex = this.getRandomNumberUpTo(flightsAvailableCount-1);
        cy.log("choosen index ==========> " + flightIndex);
        cy.wait(2000);

        cy.get(flightsButtons).eq(flightIndex).click();
      });
    }
    else{
      flightIndex = flightSeq-1; //indexing starts from 0
      cy.log("choosen index ==========> " + flightIndex);
      cy.get(flightsButtons).eq(flightIndex).click();
    }
  }
}

export default new FlightsResultsPage();