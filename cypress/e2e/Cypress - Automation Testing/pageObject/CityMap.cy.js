class CityMap {
   static clickOnMenuItem(element) {
     cy.get('nav.main-nav > ul > li').each((mainNav) => {
       const menuText = mainNav.text().trim();
 
       if (menuText === element) {
         cy.wrap(mainNav).click();
       }
     });
   }

   static aboutSection() {
    return cy.get('#about');
  }

  static clickOnMenuItemAndVerifyAboutSection(menuItem, expectedText) {
    this.clickOnMenuItem(menuItem);
    this.aboutSection().should('contain.text', expectedText);
    // cy.url().should('eq', 'https://pulse.eco/#about');
  }
 
   participate() {
     return cy.get('#participate');
   }
 }
 
 export default CityMap;
 