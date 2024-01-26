import { loginLocators } from "./loginLocators.cy";

class LoginPage {
    clickLoginHomepage(){
        return cy.get(loginLocators.loginHomepageButton).click();
    }

    insertEmail(){
        return cy.get(loginLocators.emailField).should('exist').type('petrut@yahoo.com',{log:false});
    }

    insertPassword(){
        return cy.get(loginLocators.passwordField).should('exist').type('1234567890',{log:false});
    }

    checkRememberMeBox(){
        return cy.get(loginLocators.rememberMeBox).should('be.visible').click();
    }

    clickLoginButton(){
        return cy.get(loginLocators.loginButton).should('be.visible').click();
    }

    assertLoginProcess(){
        cy.url().should('contain','https://demowebshop.tricentis.com/');
        cy.get(loginLocators.loginEmailConfirmation).contains('petrut@yahoo.com');
        cy.get(loginLocators.logoutHomepageButton).should('exist').and('be.visible').contains('Log out');
        cy.get(loginLocators.loginHomepageButton).should('not.exist');
    }
}

export const loginPage = new LoginPage();