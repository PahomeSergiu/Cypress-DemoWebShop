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

    generateRandomTitle() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomTitle = '';
        for (let i = 0; i < 10; i++) {
            randomTitle += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomTitle;
    }

    insertReviewTitleRandom() {
        this.randomTitle = this.generateRandomTitle();
        return cy.get(addReviewToProductLocators.addReviewTitle).type(this.randomTitle);
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

    // verifySubmittedReviewTitle(){
    //     return cy.get(addReviewToProductLocators.submittedReviewTitle).contains('Prea jmekera cartea smr frate');
    // }

    verifySubmittedReviewTitle() {
        return cy.get(addReviewToProductLocators.submittedReviewTitle).contains(this.randomTitle)
    }
}

export const addReviewToProductPage = new AddReviewToProductPage();