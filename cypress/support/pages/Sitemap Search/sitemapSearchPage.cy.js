import { sitemapSearchLocators } from "./sitemapSearchLocators.cy";

class SitemapSearchPage{
    clickSitemap(){
        return cy.get(sitemapSearchLocators.sitemapHomepageLink).click();
    }

    verifySitemapPageTitle(){
        return cy.get(sitemapSearchLocators.verifySitemapPageTitle).contains('Sitemap');
    }

    clickNotebooksLink(){
        return cy.get(sitemapSearchLocators.notebooksCategoryLink).click();
    }

    verifyNotebooksPageTitle(){
        return cy.get(sitemapSearchLocators.verifyNotebooksPageTitle).contains('Notebooks');
    }

    verifyLaptopTitle(){
        return cy.get(sitemapSearchLocators.verifyLaptopItem).contains('14.1-inch Laptop');
    }

}

export const sitemapSearchPage = new SitemapSearchPage();