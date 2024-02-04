import LoginPage from '../../e2e/Cypress - Automation Testing/pageObject/LoginPage.cy';

Cypress.Commands.add('loginWithInvalidData', (username, password) => {
  LoginPage.loginWithInvalidData(username, password);
});
