import { loginLocators } from "../Login/loginLocators.cy";
import { myAccountLocators } from "./myAccountLocators.cy";

class MyAccountPage {
    clickLoginHomepage(){
        return cy.get(loginLocators.loginHomepageButton).click();
    }

    insertEmail(){
        return cy.get(loginLocators.emailField).should('exist').type('alfonso@yahoo.com',{log:false});
    }

    insertPassword(){
        return cy.get(loginLocators.passwordField).should('exist').type('987654321',{log:false});
    }

    checkRememberMeBox(){
        return cy.get(loginLocators.rememberMeBox).should('be.visible').click();
    }

    clickLoginButton(){
        return cy.get(loginLocators.loginButton).should('be.visible').click();
    }

    assertLoginProcess(){
        cy.url().should('contain','https://demowebshop.tricentis.com/');
        cy.get(loginLocators.loginEmailConfirmation).contains('alfonso@yahoo.com');
        cy.get(loginLocators.logoutHomepageButton).should('exist').and('be.visible').contains('Log out');
        cy.get(loginLocators.loginHomepageButton).should('not.exist');
    }
    
    clickAccountButtonHomepage(){
        return cy.get(myAccountLocators.loggedEmailConfirmation).click();
    }

    clickChangePassword(){
        return cy.get(myAccountLocators.offChangePasswordSection).click();
    }

    insertOldPassword(){
        return cy.get(myAccountLocators.oldPasswordInput).type('987654321')
    }

    insertNewPassword(){
        return cy.get(myAccountLocators.newPasswordInput).type('0987654321')
    }

    insertConfirmationPassword(){
        return cy.get(myAccountLocators.confirmPasswordInput).type('0987654321')
    }

    clickChangePasswordButton(){
        return cy.get(myAccountLocators.changePasswordButton).click()
    }

    verifyPasswordChangeConfirmation(){
        return cy.get(myAccountLocators.passwordChangeConfirmation).contains('Password was changed')
    }
}

export const myAccountPage = new MyAccountPage();