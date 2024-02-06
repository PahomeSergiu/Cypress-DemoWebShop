const { apparelAndShoesPage } = require("../../support/pages/Apparel&Shoes/apparel&shoesPage.cy");
const { contactUsPage } = require("../../support/pages/ContactUsPage/contactUsPage.cy");
const { loginPage } = require("../../support/pages/Login/loginPage.cy");
const { orderProductFlowPage } = require("../../support/pages/OrderProductFlow/orderProductFlowPage.cy");
const { recentlyViewedProductsPage } = require("../../support/pages/Recently Viewed Products/recentlyViewedProductsPage.cy");
const { registerPage } = require("../../support/pages/Register/registerPage.cy");
const { searchProductByTagPage } = require("../../support/pages/SearchByTag/searchProductsByTagPage.cy");
const { sitemapSearchPage } = require("../../support/pages/Sitemap Search/sitemapSearchPage.cy");
const { myAccountPage } = require("../../support/pages/myAccount/myAccountPage.cy");

describe('Account login', () => {
    beforeEach(() =>{
        cy.visit('/');
    })
    it('Positive case for login', () => {
        loginPage.clickLoginHomepage();
        loginPage.insertEmail();
        loginPage.insertPassword();
        loginPage.checkRememberMeBox();
        loginPage.clickLoginButton();
        loginPage.assertLoginProcess();
    })

    it('Positive case for register', () => {
        registerPage.clickRegisterHomepage();
        registerPage.selectMaleGender();
        registerPage.insertFirstName();
        registerPage.insertLastName();
        registerPage.insertEmail();
        registerPage.insertPassword();
        registerPage.insertConfirmationPassword();
        registerPage.clickRegister();
        registerPage.verifyRegistrationText();
        registerPage.clickContinue();
        registerPage.assertRegisterProcess();
    })

    it('Positive case for changing password', () => {
        loginPage.clickLoginHomepage();
        loginPage.insertEmail();
        loginPage.insertPassword();
        loginPage.checkRememberMeBox();
        loginPage.clickLoginButton();
        loginPage.assertLoginProcess();
        myAccountPage.clickAccountButtonHomepage();
        myAccountPage.clickChangePassword();
        myAccountPage.insertOldPassword();
        myAccountPage.insertNewPassword();
        myAccountPage.insertConfirmationPassword();
        myAccountPage.clickChangePasswordButton();
        myAccountPage.verifyPasswordChangeConfirmation();
    })

    it('Submit Contact Us form', () => {
        contactUsPage.clickContactUsHomepage();
        contactUsPage.insertName();
        contactUsPage.insertEmail();
        contactUsPage.insertEnquiryText();
        contactUsPage.clickSubmitButton();
        contactUsPage.verifyContactUsConfirmation();
        contactUsPage.verifyContactUsUrl();
    })

    it('Sort by Low to High price filter', () => {
        apparelAndShoesPage.clickApparelAndShoes();
        apparelAndShoesPage.verifyApparelAndShoesPageTitle();
        apparelAndShoesPage.selectSortByAscendentPrice();
        apparelAndShoesPage.verifySortByAscendentPrice();
    })

    it('Display four products per page filter', () => {
        apparelAndShoesPage.clickApparelAndShoes();
        apparelAndShoesPage.verifyApparelAndShoesPageTitle();
        apparelAndShoesPage.selectDisplayFourProductsPerPage();
        apparelAndShoesPage.verifyDisplayFourProductsPerPage();
    })

    it('View as list filter', () => {
        apparelAndShoesPage.clickApparelAndShoes();
        apparelAndShoesPage.verifyApparelAndShoesPageTitle();
        apparelAndShoesPage.selectViewAsList();
        apparelAndShoesPage.verifyViewAsList();
    })

    it('Sitemap search', () => {
        sitemapSearchPage.clickSitemap();
        sitemapSearchPage.verifySitemapPageTitle();
        sitemapSearchPage.clickNotebooksLink();
        sitemapSearchPage.verifyNotebooksPageTitle();
        sitemapSearchPage.verifyLaptopTitle();
    })

    it('View an item in recently viewed products page', () => {
        recentlyViewedProductsPage.clickBooksHomepage();
        recentlyViewedProductsPage.verifyBooksPageTitle();
        recentlyViewedProductsPage.clickHealthBookItem();
        recentlyViewedProductsPage.verifyHealthBookPageTitle();
        recentlyViewedProductsPage.clickRecentlyViewedProductsLink();
        recentlyViewedProductsPage.verifyrecentlyViewedProductsPageTitle();
        recentlyViewedProductsPage.verifyHealthBookItem();
    })

    it('Search a product by a tag', () => {
        searchProductByTagPage.clickAwesomeTagHomepage(); 
        searchProductByTagPage.verifyAwesomeTagPageTitle();   
        searchProductByTagPage.clickpageNumber3(); 
        searchProductByTagPage.clickSmartphoneItem();   
        searchProductByTagPage.verifySmartphonePageAwesomeTag();   
    })

    it.only('Positive case for ordering a product', () => {
        loginPage.clickLoginHomepage();
        loginPage.insertEmail();
        loginPage.insertPassword();
        loginPage.checkRememberMeBox();
        loginPage.clickLoginButton();
        loginPage.assertLoginProcess();
        apparelAndShoesPage.clickApparelAndShoes();
        apparelAndShoesPage.verifyApparelAndShoesPageTitle();
        orderProductFlowPage.clickBlueJeansItem();
        orderProductFlowPage.clickAddToCard();
        orderProductFlowPage.clickShoppingCartQuantity();
        orderProductFlowPage.selectCountry();
        orderProductFlowPage.selectStateProvince();
        orderProductFlowPage.checkTermsOfService();
        orderProductFlowPage.clickCheckoutButton();
        orderProductFlowPage.clickBillingAddressContinueButton();
        orderProductFlowPage.clickShippingAddressContinueButton();
        orderProductFlowPage.selectSecondDayAirShipingRadiobutton();
        orderProductFlowPage.clickShippingMethodContinueButton();
        orderProductFlowPage.clickPaymentMethodContinueButton();
        orderProductFlowPage.verifyPaymentConfirmationInfoText();
        orderProductFlowPage.clickPaymentInformationContinueButton();
        orderProductFlowPage.clickConfirmOrderContinueButton();
        orderProductFlowPage.verifyOrderSuccessPageText();
        orderProductFlowPage.verifyOrderNumberText();
        orderProductFlowPage.clickOrderSuccessPageContinueButton()
        loginPage.assertLoginProcess();
    })

})