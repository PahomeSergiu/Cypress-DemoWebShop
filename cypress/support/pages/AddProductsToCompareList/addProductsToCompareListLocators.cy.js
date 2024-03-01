class AddProductsToCompareListLocators {
    cellphonesOption = '[class="top-menu"] [href="/cell-phones"]';
    smartphoneItem = '[class="product-title"] [href="/smartphone"]';
    usedPhoneItem = '[class="product-title"] [href="/used-phone"]';
    addToCompareListButton = '[class="button-2 add-to-compare-list-button"]';
    compareProductsPageTitle = '[class="page-title"]';
    smartPhoneCompared = '[class="product-name"] [href="/smartphone"]';
    usedPhoneCompared = '[class="product-name"] [href="/used-phone"]';
    removeButton = '[class="a-center"] [onclick="setLocation(\'/compareproducts/remove/15\')"]';
    removeButtonSecond = '[class="a-center"] [onclick="setLocation(\'/compareproducts/remove/43\')"]';
    emptyCompareProductsList = '[class="page-body"]';
}

export const addProductsToCompareListLocators = new AddProductsToCompareListLocators();