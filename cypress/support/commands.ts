/// <reference types="cypress" />
import 'cypress-xpath';
import LoginPage from '../e2e/Cypress - Automation Testing/pageObject/LoginPage.cy';


// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

// Cypress.Commands.add('selectCountryMacedonia', () => {
//     // Click on the placeholder (replace with your actual selector)
//     cy.get('.placeholder').click();
//     // Trigger mouseover for cities in Macedonia
//     cy.get('.dropdown-submenu').each(($el, index) => {
//       if ($el.text().includes("Macedonia")) {
//         cy.get('.dropdown-submenu').eq(index).trigger('mouseover');
//       }
//     });
//   });

// Cypress.Commands.add('getRandomCity', () => {
//     // Define an array to store city names
//     const cities = [];
//     // Use XPath to retrieve city elements
//     cy.xpath('//*[@class="dropdown-submenu"]/p[@class="country active"]/following-sibling::ul/p').each(($cityElement) => {
//       const cityName = $cityElement.text().trim();
//       // Push the city name into the array
//       cities.push(cityName);
//     }).then(() => {
//       // Log the array of city names
//       cy.log('List of Cities:', cities);
//       // Randomly choose a city from the array
//       const randomIndex = Math.floor(Math.random() * cities.length);
//       const randomCity = cities[randomIndex];
//       // Log the randomly chosen city
//       cy.log('Randomly Chosen City:', randomCity);
//       // Perform the click action on the randomly chosen city
//       cy.xpath(`//*[@class="dropdown-submenu"]/p[@class="country active"]/following-sibling::ul/p[text()='${randomCity}']`).invoke('click');
//       return cy.wrap(randomCity);
//     });
//   })

// Cypress.Commands.add('selectCountryMacedoniaAndIterateCities', () => {
//     // Click on the Drop Down Menu
//     cy.get('.placeholder').click(); 
//     // Trigger mouseover for cities in Macedonia
//     cy.get('.dropdown-submenu').each(el => {
//       if (el.text().includes("Macedonia")) {
//         cy.get(el).trigger('mouseover');
//       }
//     });
//     // Define an array to store city names
//     const cities = [];
//     // Retrieve city elements
//     cy.xpath('//*[@class="dropdown-submenu"]/p[@class="country active"]/following-sibling::ul/p').each(($cityElement) => {
//       const cityName = $cityElement.text().trim();
//       // Push the city name into the array
//       cities.push(cityName);
//     }).then(() => {
//       // Log the array of city names
//       cy.log('List of Cities:', cities);
//       // Iterate through each city
//       cy.wrap(cities).each((cityName) => {
//         // Click on the specific city based on its text
//         cy.xpath(`//*[@class="dropdown-submenu"]/p[@class="country active"]/following-sibling::ul/p[text()='${cityName}']`).invoke('click');
//         // Click on #gotoCityButton
//         cy.get('#gotoCityButton').click();
//         //assertions
//         cy.get('.navbar-current-city').should('contain.text', cityName);
//         cy.url().should('satisfy', (url) => {
//             // Transform cityName and URL to lowercase and remove spaces
//             const cityNameNormalized = cityName.toLowerCase().replace(/\s/g, '');
//             const urlNormalized = url.toLowerCase().replace(/\s/g, '');
          
//             // Check if the URL includes the normalized cityName
//             return urlNormalized.includes(cityNameNormalized);
//           });
          
        
//         // Go back to the previous page
//         cy.go('back');
//        // Click on the Drop Down Menu again to reset the search
//         cy.get('.placeholder').click();
//         // Trigger mouseover for cities in Macedonia
//         cy.get('.dropdown-submenu').each(el => {
//           if (el.text().includes("Macedonia")) {
//             cy.get(el).trigger('mouseover');
//           }
//         });
//         // Click on the specific city
//         cy.xpath(`//*[@class="dropdown-submenu"]/p[@class="country active"]/following-sibling::ul/p[text()='${cityName}']`).invoke('click');
//       });
//     });
//   });
  


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }