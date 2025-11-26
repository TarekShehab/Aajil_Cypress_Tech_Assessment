

const flightsTable = "table.table"

let flightIndex
const flightsButtons = "input[type='submit']"
let choosenflightButton


class FlightsResultsPage {

  getRandomNumberUpTo(ceiling){
    return Math.floor(Math.random() * ceiling)
  }

  chooseFlight(flightSeq){
    if (flightSeq === undefined){
      let flightsAvailableCount;

      // Get the count of options in departure cities drop down
      cy.get(flightsTable).find('tr').its('length').then((count) => {
        // we subtract 1 because first row is just the table's header
        flightsAvailableCount = count-1; 
        cy.log(`Result Flights Count =========================> ${flightsAvailableCount} options.`);    
      }).then(() => {
        flightIndex = this.getRandomNumberUpTo(flightsAvailableCount-1);
        cy.log("choosen index ==========> " + flightIndex);
        cy.get(flightsButtons).eq(flightIndex).click();
        //click Choose Flight 
      });
    }
    else{
      flightIndex = flightSeq;
      cy.log("choosen index ==========> " + flightIndex);
      cy.get(flightsButtons).eq(flightIndex).click();
      //click Choose Flight
    }
  }
}

// Export an instance of the class
export default new FlightsResultsPage();