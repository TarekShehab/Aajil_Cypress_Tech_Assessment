// Web elements selectors
const depCityDropdown = "select[name='fromPort']"
const destCityDropdown = "select[name='toPort']"
const findFlightButton = "input[type='submit']"

class HomePage {
  
  getRandomNumberUpTo(ceiling){
    return Math.floor(Math.random() * ceiling)
  }

  selectDepCity(deptCity){
    if (deptCity === undefined){
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
  }
 
  selectDestCity(desCity){
    if (desCity === undefined){
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
  }

  clickFindFlights(){
    cy.get(findFlightButton).click()
  }

}

export default new HomePage();