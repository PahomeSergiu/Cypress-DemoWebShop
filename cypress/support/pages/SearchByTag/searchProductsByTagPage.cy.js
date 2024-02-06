import { searchProductByTagLocators } from "./searchProductByTagLocators.cy";

class SearchProductByTagPage {
    clickAwesomeTagHomepage(){
        return cy.get(searchProductByTagLocators.awesomeTag).click();
    }

    verifyAwesomeTagPageTitle(){
        return cy.get(searchProductByTagLocators.verifyAwesomeTagPageTitle).contains("Products tagged with 'awesome'");
    }

    clickpageNumber3(){
        return cy.get(searchProductByTagLocators.pageNumber3).click();
    }

    clickSmartphoneItem(){
        return cy.get(searchProductByTagLocators.smartphonePageItem).click();
    }

    verifySmartphonePageAwesomeTag(){
        return cy.get(searchProductByTagLocators.verifySmartphonePageAwesomeTag).should('exist');
    }

}

export const searchProductByTagPage = new SearchProductByTagPage();