import HomePage from '../../e2e/Cypress - Automation Testing/pageObject/HomePage.cy';

Cypress.Commands.add('selectCity', (countryName, cityName) => {
    HomePage.selectCity(countryName, cityName);
  });

  Cypress.Commands.add('selectCountryMacedoniaAndIterateCities', () => {
    // Click on the Drop Down Menu
    cy.get('.placeholder').click(); 
    // Trigger mouseover for cities in Macedonia
    cy.get('.dropdown-submenu').each(el => {
      if (el.text().includes("Macedonia")) {
        cy.get(el).trigger('mouseover');
      }
    });
    // Define an array to store city names
    const cities = [];
    // Retrieve city elements
    cy.xpath('//*[@class="dropdown-submenu"]/p[@class="country active"]/following-sibling::ul/p').each(($cityElement) => {
      const cityName = $cityElement.text().trim();
      // Push the city name into the array
      cities.push(cityName);
    }).then(() => {
      // Log the array of city names
      cy.log('List of Cities:', cities);
      // Iterate through each city
      cy.wrap(cities).each((cityName) => {
        // Click on the specific city based on its text
        cy.xpath(`//*[@class="dropdown-submenu"]/p[@class="country active"]/following-sibling::ul/p[text()='${cityName}']`).invoke('click');
        // Click on #gotoCityButton
        cy.get('#gotoCityButton').click();
        //assertions
        cy.get('.navbar-current-city').should('contain.text', cityName);
        cy.url().should('satisfy', (url) => {
            // Transform cityName and URL to lowercase and remove spaces
            const cityNameNormalized = cityName.toLowerCase().replace(/\s/g, '');
            const urlNormalized = url.toLowerCase().replace(/\s/g, '');
            // Check if the URL includes city name
            return urlNormalized.includes(cityNameNormalized);
          });
        // Go back to the previous page
        cy.go('back');
       // Click on the Drop Down Menu again to reset the search
        cy.get('.placeholder').click();
        // Trigger mouseover for cities in Macedonia
        cy.get('.dropdown-submenu').each(el => {
          if (el.text().includes("Macedonia")) {
            cy.get(el).trigger('mouseover');
          }
        });
        // Click on the specific city
        cy.xpath(`//p[@data-name='${cityName}']`).invoke('click');
      });
    });
  });