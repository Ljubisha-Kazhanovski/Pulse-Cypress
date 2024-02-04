import RegisterPage from '../../e2e/Cypress - Automation Testing/pageObject/RegisterPage.cy';

Cypress.Commands.add('createNewCustomer', (name, email, user, pass) => {
    RegisterPage.createNewCustomer(name, email, user, pass);
});
