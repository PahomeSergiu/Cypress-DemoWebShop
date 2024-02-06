import { myAccountLocators } from "./myAccountLocators.cy";

class MyAccountPage {
    clickAccountButtonHomepage(){
        return cy.get(myAccountLocators.loggedEmailConfirmation).click();
    }

    clickChangePassword(){
        return cy.get(myAccountLocators.offChangePasswordSection).click();
    }

    insertOldPassword(){
        return cy.get(myAccountLocators.oldPasswordInput).type('1234567890001')
    }

    insertNewPassword(){
        return cy.get(myAccountLocators.newPasswordInput).type('123456789000')
    }

    insertConfirmationPassword(){
        return cy.get(myAccountLocators.confirmPasswordInput).type('123456789000')
    }

    clickChangePasswordButton(){
        return cy.get(myAccountLocators.changePasswordButton).click()
    }

    verifyPasswordChangeConfirmation(){
        return cy.get(myAccountLocators.passwordChangeConfirmation).contains('Password was changed')
    }
}

export const myAccountPage = new MyAccountPage();