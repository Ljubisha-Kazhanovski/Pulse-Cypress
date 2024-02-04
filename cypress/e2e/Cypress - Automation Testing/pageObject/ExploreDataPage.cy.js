class ExploreDate {
   static datePickerFrom() {
     return cy.get('#from');
   }
 
   static datePickerTo() {
     return cy.get('#to');
   }
 
   static getMonth() {
     return cy.get('.ui-datepicker-month');
   }
 
   static nextMonth() {
     return cy.get('.ui-datepicker-next');
   }
 
   static getCalendar() {
     return cy.get('.ui-datepicker-calendar');
   }
 
   static errorDate() {
     return cy.get('#dateFromError');
   }
 
   static handleDatePicker(futureMonth, futureDay) {
     this.getMonth().then(($dateAttribute) => {
       const currentMonth = $dateAttribute.text();
       if (!currentMonth.includes(futureMonth)) {
         this.nextMonth().click();
       }
       this.getCalendar().contains(futureDay).type('{enter}');
     });
   }
 
   static pressEnter(selector) {
     cy.get(selector).type('{enter}');
   }
 
   static verifyDateFromError() {
     this.errorDate().should('contain.text', 'Invalid date selection. Date range is not valid.');
   }
 
   static selectFutureDateRangeAndVerifyError() {
     this.datePickerFrom().should('be.visible');
     this.datePickerTo().should('be.visible');
 
     const date = new Date();
     date.setDate(date.getDate() + 5);
     const futureDay = date.getDate();
     const futureMonth = date.toLocaleString('default', { month: 'short' });
 
     this.datePickerFrom().click();
     this.handleDatePicker(futureMonth, futureDay);
     this.pressEnter('#from');
     this.pressEnter('#from');
 
     this.datePickerTo().click();
     this.handleDatePicker(futureMonth, futureDay);
     this.pressEnter('#to');
 
     this.verifyDateFromError();
   }
 }
 
 export default ExploreDate; 