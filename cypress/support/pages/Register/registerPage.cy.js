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

    // Metoda pentru a genera o adresă de email aleatorie
    generateRandomEmail() {
        const emailPrefix = Math.random().toString(36).substring(2, 10);
        return `${emailPrefix}@example.com`;
    }

    // Metoda pentru a insera o adresă de email aleatorie și a o stoca în this.randomEmail
    insertEmailRandom() {
        this.randomEmail = this.generateRandomEmail(); // Salvează adresa de email generată în this.randomEmail
        return cy.get(registerLocators.emailInput).type(this.randomEmail);
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
        cy.get(registerLocators.registerEmailConfirmation).contains(this.randomEmail); // Folosește this.randomEmail în contains()
        cy.get(registerLocators.registerlogoutHomepageButton).should('exist').and('be.visible').contains('Log out');
        cy.get(registerLocators.loginHomepageButton).should('not.exist');
    }
}

export const registerPage = new RegisterPage();
