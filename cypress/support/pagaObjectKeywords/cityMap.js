import CityMap from '../../e2e/Cypress - Automation Testing/pageObject/CityMap.cy';

Cypress.Commands.add("validateSideNavMenu", () => {
    cy.get('nav[class="side-navigation"] ul li').each((mainNav) => {
        const menuText = mainNav.text().trim();
        cy.wrap(mainNav).click();
        if (menuText === 'PM10') {
            cy.get('#measureTitle').should('contain.text', 'Квалитет на воздухот (PM10)');
        } else if (menuText === 'PM25') {
            cy.get('#measureTitle').should('contain.text', 'Квалитет на воздухот (PM2.5)');
        } else if (menuText === 'Бучава') {
            cy.get('#measureTitle').should('contain.text', 'Бучава (проценета)');
        } else if (menuText === 'Температура') {
            cy.get('#measureTitle').should('contain.text', 'Температура (С)');
        } else if (menuText === 'Влажност') {
            cy.get('#measureTitle').should('contain.text', 'Влажност на воздухот');
        } else if (menuText === 'Притисок') {
            cy.get('#measureTitle').should('contain.text', 'Воздушен притисок (hPa)');
        } else if (menuText === 'NO2') {
            cy.get('#measureTitle').should('contain.text', 'Квалитет на воздухот (NO2)');
        } else if (menuText === 'O3') {
            cy.get('#measureTitle').should('contain.text', 'Квалитет на воздухот (O3)');
        } else if (menuText === 'CO') {
            cy.get('#measureTitle').should('contain.text', 'Квалитет на воздухот (CO)');
        } else if (menuText === 'PM1') {
            cy.get('a[data="pm1"]').should('be.visible');
        } else if (menuText === 'NH3') {
            cy.get('a[data="nh3_ppm"]').should('be.visible');
        }
    });
  });


  Cypress.Commands.add('clickOnMenuItem', (element) => {
    CityMap.clickOnMenuItem(element);
  });