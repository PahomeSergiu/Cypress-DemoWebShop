class OrderProductFlowLocators {
    blueJeansItem = '[class="product-title"] [href="/blue-jeans"]';
    addToCartButton = '[id="add-to-cart-button-36"]';
    shoppingCartQuantityLink = '[class="cart-qty"]';
    countryDropdown = '[id="CountryId"]';
    stateProvinceDropdown = '[id="StateProvinceId"]';
    termsOfServiceCheckbox = '[id="termsofservice"]';
    checkoutButton = '[id="checkout"]';
    billingAddressContinueButton = '[id="billing-buttons-container"] [title="Continue"]';
    shippingAddressContinueButton = '[id="shipping-buttons-container"] [title="Continue"]';
    secondDayAirShipingRadiobutton = '[id="shippingoption_2"]';
    shippingMethodContinueButton = '[id="shipping-method-buttons-container"] [value="Continue"]';
    paymentMethodContinueButton = '[id="payment-method-buttons-container"] [value="Continue"]';
    paymentConfirmationInfo = '[id="checkout-payment-info-load"]';
    paymentInformationContinueButton = '[id="payment-info-buttons-container"] [value="Continue"]';
    confirmOrderContinueButton = '[id="confirm-order-buttons-container"] [value="Confirm"]';
    orderSuccessPageText = '[class="title"]';
    orderNumber = '[class="details"]';
    orderSuccessPageContinueButton = '[value="Continue"]';
}

export const orderProductFlowLocators = new OrderProductFlowLocators();