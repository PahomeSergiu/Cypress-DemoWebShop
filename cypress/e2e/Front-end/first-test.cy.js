const { loginPage } = require("../../support/pages/Login/loginPage.cy");

describe('Account login', () => {
    beforeEach(() =>{
        cy.visit('/');
    })
    it('Positive case for login', () => {
        loginPage.clickLoginHomepage();
        loginPage.insertEmail();
        loginPage.insertPassword();
        loginPage.checkRememberMeBox();
        loginPage.clickLoginButton();
        loginPage.assertLoginProcess();
    })
})