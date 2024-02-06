import { recentlyViewedProductsLocators } from "./recentlyViewedProductsLocators.cy";

class RecentlyViewedProductsPage {
    clickBooksHomepage(){
        return cy.get(recentlyViewedProductsLocators.booksMenuHomepage).click();
    }

    verifyBooksPageTitle(){
        return cy.get(recentlyViewedProductsLocators.verifyBooksPageTitle).contains('Books');
    }

    clickHealthBookItem(){
        return cy.get(recentlyViewedProductsLocators.healthBook).click();
    }

    verifyHealthBookPageTitle(){
        return cy.get(recentlyViewedProductsLocators.verifyHealthBookPageTitle).contains('Health Book');
    }

    clickRecentlyViewedProductsLink(){
        return cy.get(recentlyViewedProductsLocators.recentlyViewedProductsFooterLink).click();
    }

    verifyrecentlyViewedProductsPageTitle(){
        return cy.get(recentlyViewedProductsLocators.verifyrecentlyViewedProductsPageTitle).contains('Recently viewed products');
    }

    verifyHealthBookItem(){
        return cy.get(recentlyViewedProductsLocators.healthBook).contains('Health Book');
    }
}

export const recentlyViewedProductsPage = new RecentlyViewedProductsPage();