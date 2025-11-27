
// Web elements selectors
const depCityDropdown = "select[name='fromPort']";
const destCityDropdown = "select[name='toPort']";
const findFlightButton = "input[type='submit']";

class HomePage {
  
  // Helper function that generates an integer number with a specified maximum
  getRandomNumberUpTo(ceiling){

    return Math.floor(Math.random() * ceiling);

  }

  // Select a city from the departure cities dropdown
  selectDeptCity(deptCity){

    // if city is passes as a string
    if (typeof deptCity === 'string') {
      cy.get(depCityDropdown)
      .then(($select) => {

        const optionExists = $select.find(`option[value="${deptCity}"]`).length > 0;
  
        // If the user gave a string that doesn't exist in the dropdown)
        if (!optionExists) {
  
          let depCitiesOptionsCount;
  
          // Get the count of options in departure cities drop down
          cy.get(depCityDropdown).find('option').its('length').then((count) => {
           
            depCitiesOptionsCount = count; 

          }).then(() => {

            cy.get(depCityDropdown).select(this.getRandomNumberUpTo(depCitiesOptionsCount-1));

          });
        }
        else{

          cy.get(depCityDropdown).select(deptCity);

        }
      });
    }
    else {

      let depCitiesOptionsCount;

      // Get the count of options in departure cities drop down
      cy.get(depCityDropdown).find('option').its('length').then((count) => {

        depCitiesOptionsCount = count; 

      }).then(() => {
        
        // If and invalid number is given
        if (deptCity === undefined || deptCity >= depCitiesOptionsCount || deptCity <= 0) {

          cy.get(depCityDropdown).select(this.getRandomNumberUpTo(depCitiesOptionsCount-1));

        }
        else{

          cy.get(depCityDropdown).select(deptCity);

        }

      });

    }

  }
  // Select a city from the destination cities dropdown
  selectDesCity(desCity){

    // if city is passes as a string
    if (typeof desCity === 'string') {
      cy.get(destCityDropdown)
      .then(($select) => {

        const optionExists = $select.find(`option[value="${desCity}"]`).length > 0;
  
        // If the user gave a string that doesn't exist in the dropdown)
        if (!optionExists) {

          let desCitiesOptionsCount;
  
          // Get the count of options in destination cities drop down
          cy.get(destCityDropdown).find('option').its('length').then((count) => {

            desCitiesOptionsCount = count; 

          }).then(() => {

            cy.get(destCityDropdown).select(this.getRandomNumberUpTo(desCitiesOptionsCount-1));

          });

        }
        else{

          cy.get(destCityDropdown).select(desCity);

        }
      });
    }
    else {

      let desCitiesOptionsCount;

      // Get the count of options in destination cities drop down
      cy.get(destCityDropdown).find('option').its('length').then((count) => {

        desCitiesOptionsCount = count; 

      }).then(() => {
        
        // If and invalid number is given
        if (desCity === undefined || desCity >= desCitiesOptionsCount || desCity <= 0) {

          cy.get(destCityDropdown).select(this.getRandomNumberUpTo(desCitiesOptionsCount-1));

        }
        else{

          cy.get(destCityDropdown).select(desCity);

        }

      });

    }

  }

  clickFindFlights(){

    cy.get(findFlightButton).click();
    
  }

}

export default new HomePage();