import { orderProductFlowLocators } from "./orderProductFlowLocators.cy";

class OrderProductFlowPage {
    clickBlueJeansItem(){
        return cy.get(orderProductFlowLocators.blueJeansItem).click();
    }

    clickAddToCard(){
        return cy.get(orderProductFlowLocators.addToCartButton).click();
    }

    clickShoppingCartQuantity(){
        return cy.get(orderProductFlowLocators.shoppingCartQuantityLink).click();
    }

    selectCountry(){
        return cy.get(orderProductFlowLocators.countryDropdown).select('Romania');
    }

    selectStateProvince(){
        return cy.get(orderProductFlowLocators.stateProvinceDropdown).select('AE (Armed Forces Europe)');
    }

    checkTermsOfService(){
        return cy.get(orderProductFlowLocators.termsOfServiceCheckbox).check();
    }

    clickCheckoutButton(){
        return cy.get(orderProductFlowLocators.checkoutButton).click();
    }

    clickBillingAddressContinueButton(){
        return cy.get(orderProductFlowLocators.billingAddressContinueButton).click();
    }

    clickShippingAddressContinueButton(){
        return cy.get(orderProductFlowLocators.shippingAddressContinueButton).click();
    }

    selectSecondDayAirShipingRadiobutton(){
        return cy.get(orderProductFlowLocators.secondDayAirShipingRadiobutton).click();
    }

    clickShippingMethodContinueButton(){
        return cy.get(orderProductFlowLocators.shippingMethodContinueButton).click();
    }

    clickPaymentMethodContinueButton(){
        return cy.get(orderProductFlowLocators.paymentMethodContinueButton).click();
    }

    verifyPaymentConfirmationInfoText(){
        return cy.get(orderProductFlowLocators.paymentConfirmationInfo).contains('You will pay by COD')
    }

    clickPaymentInformationContinueButton(){
        return cy.get(orderProductFlowLocators.paymentInformationContinueButton).click();
    }

    clickConfirmOrderContinueButton(){
        return cy.get(orderProductFlowLocators.confirmOrderContinueButton).click();
    }

    verifyOrderSuccessPageText(){
        return cy.get(orderProductFlowLocators.orderSuccessPageText).contains('Your order has been successfully processed!')
    }

    verifyOrderNumberText(){
        return cy.get(orderProductFlowLocators.orderNumber).contains('Order number')
    }

    clickOrderSuccessPageContinueButton(){
        return cy.get(orderProductFlowLocators.orderSuccessPageContinueButton).click();
    }

}

export const orderProductFlowPage = new OrderProductFlowPage();