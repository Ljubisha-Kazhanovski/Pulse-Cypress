class HomePage {
   static clickOntheDropDownMenu() {
     return cy.get('.placeholder');
   }
 
   static aboutSection() {
     return cy.get('#about');
   }
 
   static backBtn() {
     return cy.go('back');
   }
 
   static dateFrom() {
     return cy.get('#from');
   }
 
   static dateTo() {
     return cy.get('#to');
   }
 
   static participate() {
     return cy.get('#participate');
   }
 
   static selectCountry() {
     return cy.get('.dropdown-submenu');
   }
 
   static clickOnViewMap() {
     return cy.get('#gotoCityButton');
   }
 
   static currentCity() {
     return cy.get('.navbar-current-city');
   }
 
   static selectCity(countryName, cityName) {
     this.selectCountry().each(($el, index, $list) => {
       if ($el.text().includes(countryName)) {
         this.selectCountry().eq(index).trigger('mouseover');
         cy.get(`[data-name='${cityName}']`).invoke('click');
         this.clickOnViewMap().click();
         this.currentCity().should('contain.text', cityName);
       }
     });
   }

 }
 
 export default HomePage;
 