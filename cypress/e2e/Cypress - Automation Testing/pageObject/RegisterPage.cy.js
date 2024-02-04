class RegisterPage {
   static registerBtn() {
     return cy.get('.button-iot');
   }
 
   static inputName() {
     return cy.get('input[name="name"]');
   }
 
   static inputEmail() {
     return cy.get('input[name="email"]');
   }
 
   static inputUsername() {
     return cy.get('input[name="username"]');
   }
 
   static inputPassowrd() {
     return cy.get('#password');
   }
 
   static inputRePassowrd() {
     return cy.get('input[name="reEnteredPassword"]');
   }
 
   static policyCheckBox() {
     return cy.get('input[type="checkbox"]');
   }
 
   static summitBtn() {
     return cy.get('button[type="submit"]');
   }
 
   static createNewCustomer(name, email, user, pass) {
     this.inputName().type(name);
     this.inputEmail().type(email);
     this.inputUsername().type(user);
     this.inputPassowrd().type(pass);
     this.inputRePassowrd().type(pass);
     this.policyCheckBox().check();
     this.summitBtn().should('be.visible');
   }
 }
 
 export default RegisterPage;
 