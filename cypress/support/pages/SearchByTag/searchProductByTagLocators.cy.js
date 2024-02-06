class SearchProductByTagLocators {
    awesomeTag = '[class="tags"] [href="/producttag/8/awesome"]';
    verifyAwesomeTagPageTitle = '[class="page-title"]';
    pageNumber3 = '[class="pager"] [href="/producttag/8/awesome?pagenumber=3"]';
    smartphonePageItem = '[class="product-title"] [href="/smartphone"]'
    verifySmartphonePageAwesomeTag = '[class="tag"] [href="/producttag/8/awesome"]';
}

export const searchProductByTagLocators = new SearchProductByTagLocators();