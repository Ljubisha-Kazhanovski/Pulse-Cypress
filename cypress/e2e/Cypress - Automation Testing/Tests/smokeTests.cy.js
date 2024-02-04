/// <reference types="Cypress" />
import { wrap } from 'module'
import HomePage from '../pageObject/HomePage.cy.js'
import RegisterPage from '../pageObject/RegisterPage.cy.js'
import LoginPage from '../pageObject/LoginPage.cy.js'
import ExploreDataPage from '../pageObject/ExploreDataPage.cy.js'
import CityMap from '../pageObject/CityMap.cy.js'
import '../../../support/pagaObjectKeywords/login.js'
import '../../../support/pagaObjectKeywords/registerUser.js'
import '../../../support/pagaObjectKeywords/exploreDate.js'
import '../../../support/pagaObjectKeywords/cityMap.js'
import '../../../support/pagaObjectKeywords/homePage.js'



let userData;

describe('Smoke Test Suite', function() 
{
    //const homePage=new HomePage();
    // const registerPage=new RegisterPage();
    // const loginPage=new LoginPage();
    // const exploreData=new ExploreDataPage();
    const cityMap=new CityMap();
    before(function() {
        cy.fixture('testData.json').then(data => {
            userData = data;
        })
    })
    beforeEach(function () {
        cy.visit('/');
    });

it('Verify Navigation to the city map',() =>{
    cy.selectCountryMacedoniaAndIterateCities();
})

it('Validate Navigation bar links working properly', () =>{
    HomePage.clickOntheDropDownMenu().click(); 
    cy.selectCity(userData.country, userData.city);
    CityMap.clickOnMenuItemAndVerifyAboutSection(userData.about, 'About pulse.eco');
    cy.go('back');
    cy.clickOnMenuItem(userData.exploreData)
    ExploreDataPage.datePickerFrom().should('be.visible');
    ExploreDataPage.datePickerTo().should('be.visible');
    cy.go('back');
    cy.clickOnMenuItem(userData.participate)
    cityMap.participate().should('contain.text', userData.participateText);
    cy.clickOnMenuItem(userData.appStore)
     // cy.url().should('include', "pulse-eco");
     cy.visit('https://bitola.pulse.eco/')
    cy.clickOnMenuItem(userData.playStore)
    // cy.url().should('include', "pulse-eco");
    cy.visit('https://bitola.pulse.eco/')
    cy.clickOnMenuItem(userData.register)
    RegisterPage.registerBtn().should('be.visible');
    cy.go('back');
    cy.clickOnMenuItem(userData.navLogIn)
    LoginPage.logInBtn().should('be.visible'); 
})

it('Invalid date range.', () => {
    HomePage.clickOntheDropDownMenu().click();
    cy.selectCity(userData.country, userData.city);
    cy.clickOnMenuItem(userData.exploreData);
    cy.selectFutureDateRangeAndVerifyError();
});

it('Verify the user is able to create new customer', () =>{
    HomePage.clickOntheDropDownMenu().click(); 
    cy.selectCity(userData.country, userData.city);
    cy.clickOnMenuItem(userData.register)
    cy.createNewCustomer(userData.firstName, userData.email, userData.userName, userData.password, userData.password);
})

it('Verify the user should not be able to login with invalid credentials', () =>{
    HomePage.clickOntheDropDownMenu().click(); 
    cy.selectCity(userData.country, userData.city);
    cy.clickOnMenuItem(userData.navLogIn)
    cy.loginWithInvalidData(userData.userName, userData.password);
    //cy.get('bad-credentials-msg').should('contain.text', '${userData.logInError}');
})

it('Validate the side navigation menu', () => {
    HomePage.clickOntheDropDownMenu().click(); 
    cy.selectCity(userData.country, userData.city);
    cy.validateSideNavMenu();
});

});