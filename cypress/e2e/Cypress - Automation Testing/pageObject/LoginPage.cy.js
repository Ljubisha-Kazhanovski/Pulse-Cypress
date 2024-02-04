class LoginPage {
  static loginUsername() {
    return cy.get('input[name="username"]');
  }

  static loginPassword() {
    return cy.get('input[type="password"]');
  }

  static rememberMeCheckBox() {
    return cy.get('input[name="remember-me"]');
  }

  static logInBtn() {
    return cy.get('.button-iot');
  }

  static loginWithInvalidData(username, password) {
    this.loginUsername().type(username);
    this.loginPassword().type(password);
    this.rememberMeCheckBox().check();
    this.logInBtn().should('be.visible');
  }
}

export default LoginPage;