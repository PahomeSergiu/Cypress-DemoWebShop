import { orderCheapCustomPCLocators } from "./orderCheapCustomPCLocators.cy";

class OrderCheapCustomPCPage{
    clickComputers(){
        return cy.get(orderCheapCustomPCLocators.computersHomepage).click();
    }

    verifyComputersPageTitle(){
        return cy.get(orderCheapCustomPCLocators.computersHomepage).click();
    }

    selectDesktops(){
        return cy.get(orderCheapCustomPCLocators.desktopsCategory).click();
    }

    selectCheapComputer(){
        return cy.get(orderCheapCustomPCLocators.cheapComputer).click();
    }

    verifyCheapComputersPageTitle(){
        return cy.get(orderCheapCustomPCLocators.cheapComputerPageTitle).contains('Build your own cheap computer');
    }

    checkCheapComputerInitialPrice(){
        return cy.get(orderCheapCustomPCLocators.initialPrice).contains('800.00');
    }

    selectFastProcessor(){
        return cy.get(orderCheapCustomPCLocators.fastProcessorRadioButton).click();
    }

    selectMaxRam(){
        return cy.get(orderCheapCustomPCLocators.eightGbRamRadioButton).click();
    }

    selectMaxHdd(){
        return cy.get(orderCheapCustomPCLocators.fourHundredGbHddRadioButton).click();
    }

    selectImageViewer(){
        return cy.get(orderCheapCustomPCLocators.imageViewerCheckbox).check();
    }

    selectOtherOfficeSuite(){
        return cy.get(orderCheapCustomPCLocators.otherOfficeSuiteCheckbox).check();
    }

    checkCheapComputerInitialQuantity(){
        return cy.get(orderCheapCustomPCLocators.quantityField).should('have.value','1');
    }

    clickAddToCart(){
        return cy.get(orderCheapCustomPCLocators.addToCartButton).click();
    }

    verifyItemAddedSuccessMessage(){
        return cy.get(orderCheapCustomPCLocators.itemAddedSuccessMessage).contains('The product has been added to your ');
    }

    clickShoppingCart(){
        return cy.get(orderCheapCustomPCLocators.shoppingCart).click();
    }

    verifyShoppingCartItemName(){
        return cy.get(orderCheapCustomPCLocators.shoppingCartItemName).contains('Build your own cheap computer');
    }

    verifyItemCustomizedAttributeProcessor(){
        return cy.get(orderCheapCustomPCLocators.customizedAttributes).contains(' Processor: Fast [+100.00]');
    }

    verifyItemCustomizedAttributeRam(){
        return cy.get(orderCheapCustomPCLocators.customizedAttributes).contains('RAM: 8 GB [+60.00]');
    }

    verifyItemCustomizedAttributeHdd(){
        return cy.get(orderCheapCustomPCLocators.customizedAttributes).contains('HDD: 400 GB [+100.00]');
    }

    verifyItemCustomizedAttributeImage(){
        return cy.get(orderCheapCustomPCLocators.customizedAttributes).contains('Software: Image Viever [+5.00]');
    }

    verifyItemCustomizedAttributeSuite(){
        return cy.get(orderCheapCustomPCLocators.customizedAttributes).contains('Software: Other Office Suite [+40.00]');
    }

    checkShoppingCartQuantity(){
        return cy.get(orderCheapCustomPCLocators.quantityShoppingCart).should('have.value','1');
    }

    verifyShoppingCartInitialSubtotal(){
        return cy.get(orderCheapCustomPCLocators.shoppingCartSubtotal).contains('1105.00');
    }

    changeShoppingCartQuantity(){
        return cy.get(orderCheapCustomPCLocators.quantityShoppingCart).clear().type('2');
    }

    clickUpdateShoppingCartQuantity(){
        return cy.get(orderCheapCustomPCLocators.updateShoppingCartButton).click();
    }

    verifyShoppingCartSubtotalAfterUpdate(){
        return cy.get(orderCheapCustomPCLocators.shoppingCartSubtotal).contains('2210.00');
    }

    clickRemoveItem(){
        return cy.get(orderCheapCustomPCLocators.removeItemCheckbox).click();
    }

    verifyEmptyShoppingCartAfterUpdate(){
        return cy.get(orderCheapCustomPCLocators.emptyShoppingCartMessage).should('contain','Your Shopping Cart is empty!');
    }
}

export const orderCheapCustomPCPage = new OrderCheapCustomPCPage();