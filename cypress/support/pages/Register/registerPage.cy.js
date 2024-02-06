import { registerLocators } from "./registerLocators.cy";

class RegisterPage {
    clickRegisterHomepage(){
        return cy.get(registerLocators.registerHomepageButton).click();
    }

    selectMaleGender(){
        return cy.get(registerLocators.genderMaleButton).click();
    }

    insertFirstName(){
        return cy.get(registerLocators.firstNameInput).type('Mihaita');
    }

    insertLastName(){
        return cy.get(registerLocators.lastNameInput).type('Boss');
    }

    insertEmail(){
        return cy.get(registerLocators.emailInput).type('mihaitapatronasulu@yahoo.com');
    }


    insertPassword(){
        return cy.get(registerLocators.passwordInput).type('123456789');
    }

    insertConfirmationPassword(){
        return cy.get(registerLocators.confirmPasswordInput).type('123456789');
    }

    clickRegister(){
        return cy.get(registerLocators.registerButton).click();
    }

    verifyRegistrationText(){
        return cy.get(registerLocators.successfullRegistrationText).contains('Your registration completed');
    }

    clickContinue(){
        return cy.get(registerLocators.registerContinueButton).click();
    }

    assertRegisterProcess(){
        cy.url().should('contain','https://demowebshop.tricentis.com/');
        cy.get(registerLocators.registerEmailConfirmation).contains('mihaitapatronasulu@yahoo.com');
        cy.get(registerLocators.registerlogoutHomepageButton).should('exist').and('be.visible').contains('Log out');
        cy.get(registerLocators.loginHomepageButton).should('not.exist');
    }
}

export const registerPage = new RegisterPage();
