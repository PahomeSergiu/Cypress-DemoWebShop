import { addReviewToProductLocators } from "./addReviewToProductLocators.cy";

class AddReviewToProductPage {
    clickFictionExBook(){
        return cy.get(addReviewToProductLocators.fictionExBook).click();
    }

    verifyFictionExBookProductTitle(){
        return cy.get(addReviewToProductLocators.fictionExBookProductTitle).contains('Fiction EX');
    }

    clickAddYourReviewLink(){
        return cy.get(addReviewToProductLocators.addYourReviewLink).contains('Add your review').click();
    }

    verifyReviewPageTitle(){
        return cy.get(addReviewToProductLocators.submitReviewPageTitle).contains('Write your own review');
    }

    insertReviewTitle(){
        return cy.get(addReviewToProductLocators.addReviewTitle).type('Prea jmekera cartea smr frate');
    }

    insertReviewText(){
        return cy.get(addReviewToProductLocators.addReviewText).type('am citit din ea la greu');
    }

    selectRatingFourRadioButton(){
        return cy.get(addReviewToProductLocators.selectRatingFour).click();
    }

    clickSubmitReviewButton(){
        return cy.get(addReviewToProductLocators.submitReviewButton).click();
    }

    verifySubmittedReviewConfirmationMessage(){
        return cy.get(addReviewToProductLocators.submittedReviewConfirmationMessage).contains('Product review is successfully added.');
    }

    verifySubmittedReviewTitle(){
        return cy.get(addReviewToProductLocators.submittedReviewTitle).contains('Prea jmekera cartea smr frate');
    }
}

export const addReviewToProductPage = new AddReviewToProductPage();