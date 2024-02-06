import { contactUsLocators } from "./contactUsLocators.cy";

class ContactUsPage{
    clickContactUsHomepage(){
        return cy.get(contactUsLocators.contactUsHomepageButton).click();
    }

    insertName(){
        return cy.get(contactUsLocators.yourNameInput).type('Petrut');
    }

    insertEmail(){
        return cy.get(contactUsLocators.yourEmailInput).type('petrut@yahoo.com');
    }

    insertEnquiryText(){
        return cy.get(contactUsLocators.enquiryInput).type('Hello, I am under the water. Please Help');
    }

    clickSubmitButton(){
        return cy.get(contactUsLocators.submitButton).click();
    }

    verifyContactUsConfirmation(){
        return cy.get(contactUsLocators.contactUsConfirmation).contains('Your enquiry has been successfully sent to the store owner.');
    }

    verifyContactUsUrl(){
        return cy.url().should('include', '/contactus');
    }

}

export const contactUsPage = new ContactUsPage();