import { addProductsToCompareListLocators } from "./addProductsToCompareListLocators.cy";

class AddProductsToCompareListPage {
    selectCellphonesHomepage(){
        return cy.get(addProductsToCompareListLocators.cellphonesOption).click({force: true});
    }

    clickSmartphone(){
        return cy.get(addProductsToCompareListLocators.smartphoneItem).click();
    }

    addItemToCompareProducts(){
        return cy.get(addProductsToCompareListLocators.addToCompareListButton).click();
    }

    verifyCompareProductsPageTitle(){
        return cy.get(addProductsToCompareListLocators.compareProductsPageTitle).contains('Compare products');
    }

    verifySmartphoneCompareProductsList(){
        return cy.get(addProductsToCompareListLocators.smartPhoneCompared).contains('Smartphone');
    }

    clickUsedPhone(){
        return cy.get(addProductsToCompareListLocators.usedPhoneItem).click();
    }

    verifyUsedphoneCompareProductsList(){
        return cy.get(addProductsToCompareListLocators.usedPhoneCompared).contains('Used phone');
    }

    clickFirstRemoveButton(){
        return cy.get(addProductsToCompareListLocators.removeButton).click();
    }
    
    verifyRemovedUsedPhoneCompareProductsList(){
        return cy.get(addProductsToCompareListLocators.usedPhoneCompared).should('not.exist');
    }

    clickRemoveButtonSecond(){
        return cy.get(addProductsToCompareListLocators.removeButtonSecond).click();
    }

    verifyRemovedSmartphoneCompareProductsList(){
        return cy.get(addProductsToCompareListLocators.smartPhoneCompared).should('not.exist');
    }
    
    verifyCompareProductsEmptyMessage(){
        return cy.get(addProductsToCompareListLocators.emptyCompareProductsList).contains('You have no items to compare.');
    }

}

export const addProductsToCompareListPage = new AddProductsToCompareListPage();