import { apparelAndShoesLocators } from "./apparel&shoesLocators.cy";

class ApparelAndShoesPage{
    clickApparelAndShoes(){
        return cy.get(apparelAndShoesLocators.apparelAndShoesHomepage).click();
    }

    verifyApparelAndShoesPageTitle(){
        return cy.get(apparelAndShoesLocators.apparelAndShoesPageTitle).contains('Apparel & Shoes');
    }


    selectSortByAscendentPrice(){
        return cy.get(apparelAndShoesLocators.sortByDropdown).select('Price: Low to High');
    }
    verifySortByAscendentPrice(){
        return cy.get(apparelAndShoesLocators.sortByDropdown).contains('Price: Low to High')
    }



    selectDisplayFourProductsPerPage(){
        return cy.get(apparelAndShoesLocators.selectDisplayProductsNumberDropdown).select('4');
    }
    verifyDisplayFourProductsPerPage(){
        return cy.get(apparelAndShoesLocators.selectDisplayProductsNumberDropdown).contains('4');
    }


    selectViewAsList(){
        return cy.get(apparelAndShoesLocators.viewAsDropdown).select('List');
    }
    verifyViewAsList(){
        return cy.get(apparelAndShoesLocators.viewAsDropdown).contains('List');
    }

}

export const apparelAndShoesPage = new ApparelAndShoesPage();