import { addProductToWishlistLocators } from "./addProductToWishlistLocators.cy";

class AddProductToWishlistPage {
    clickJewelryHomepage(){
        return cy.get(addProductToWishlistLocators.jewelryMenuHomepage).click();
    }

    verifyJewelryPageTitle(){
        return cy.get(addProductToWishlistLocators.jewelryPageTitle).contains('Jewelry');
    }

    clickBlackAndWhiteDiamondHeartItem(){
        return cy.get(addProductToWishlistLocators.blackAndWhiteDiamondHeartItem).click();
    }

    clickAddToWishlistButton(){
        return cy.get(addProductToWishlistLocators.addToWishlistButton).click();
    }

    clickWishlistHeaderLink(){
        return cy.get(addProductToWishlistLocators.wishlistHeaderLink).click();
    }

    verifyWishlistProductName(){
        return cy.get(addProductToWishlistLocators.wishlistProductName).contains('Black & White Diamond Heart');
    }

    verifyWishlistProductPrice(){
        return cy.get(addProductToWishlistLocators.wishlistProductPrice).contains('130.00');
    }

    verifyWishlistProductQuantity(){
        return cy.get(addProductToWishlistLocators.wishlistProductQuantity).should('have.value','1');
    }

    clickRemoveCheckbox(){
        return cy.get(addProductToWishlistLocators.removeCheckbox).click();
    }

    clickUpdateWishlistButton(){
        return cy.get(addProductToWishlistLocators.updateWishlistButton).click();
    }

    verifyWishlistEmptyText(){
        return cy.get(addProductToWishlistLocators.wishlistEmptyText).contains('The wishlist is empty!');
    }
}

export const addProductToWishlistPage = new AddProductToWishlistPage();