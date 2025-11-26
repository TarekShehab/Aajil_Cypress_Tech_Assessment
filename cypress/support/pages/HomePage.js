
// Web elements selectors
const depCityDropdown = "select[name='fromPort']"
const destCityDropdown = "select[name='toPort']"
const findFlightButton = "input[type='submit']"

class HomePage {
  
  // Helper function that generates an integer number with a specified maximum
  getRandomNumberUpTo(ceiling){

    return Math.floor(Math.random() * ceiling)

  }

  // Select a city from the departure cities dropdown
  selectDeptCity(deptCity){
    
    cy.get(depCityDropdown)
    .then(($select) => {
      const optionExists = $select.find(`option[value="${deptCity}"]`).length > 0;

      // If the user didn't give an input or gave an invalid input (doesn't exist in the dropdown)
      if (!optionExists || deptCity === undefined) {
        cy.log(` =========================> No/Invalid Departure City Selection`);    

        let depCitiesOptionsCount;

        // Get the count of options in departure cities drop down
        cy.get(depCityDropdown).find('option').its('length').then((count) => {
          depCitiesOptionsCount = count; 
          cy.log(`Departure cities Count =========================> ${depCitiesOptionsCount} options.`);    
        }).then(() => {
          cy.get(depCityDropdown).select(this.getRandomNumberUpTo(depCitiesOptionsCount)) 
        });
      }
      else{
        cy.get(depCityDropdown).select(deptCity)
      }
    });

  }
 
  // Select a city from the destination cities dropdown
  selectDesCity(desCity){

    cy.get(destCityDropdown)
    .then(($select) => {

      const optionExists = $select.find(`option[value="${desCity}"]`).length > 0;

      // If the user didn't give an input or gave an invalid input (doesn't exist in the dropdown)
      if (!optionExists || desCity === undefined) {
        cy.log(` =========================> No/Invalid Destination City Selection`);    

        let destCitiesOptionsCount;

        // Get the count of options in destination cities drop down
        cy.get(destCityDropdown).find('option').its('length').then((count) => {
          destCitiesOptionsCount = count; 
          cy.log(`Destination cities Count =========================> ${destCitiesOptionsCount} options.`);    
        }).then(() => {
          cy.get(destCityDropdown).select(this.getRandomNumberUpTo(destCitiesOptionsCount)) 
        });
      }
      else{
        cy.get(destCityDropdown).select(desCity)
      }

    });

  }

  clickFindFlights(){

    cy.get(findFlightButton).click()
    
  }

}

export default new HomePage();