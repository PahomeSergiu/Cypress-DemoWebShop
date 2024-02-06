class MyAccountLocators {
    loggedEmailConfirmation = '[class="header-links"] [class="account"]';
    logoutHomepageButton = '[class="header-links"] [class="ico-logout"]';

    onCustomerInfoSection = 'a.active[href="/customer/info"]';
    offCustomerInfoSection = 'a.inactive[href="/customer/info"]';
    maleGenderRadioButton = '[id="gender-male"]';
    firstNameInput = '[id="FirstName"]';
    lastNameInput = '[id="LastName"]';
    emailInput = '[id="Email"]';
    customerInfoSaveButton = '[class="button-1 save-customer-info-button"]'

    addressesInfoSection = 'a.active[href="/customer/addresses"]';
    addressesInfoSection = 'a.inactive[href="/customer/addresses"]';
    addNewAddressButton = '[class="button-1 add-address-button"]';
    addressFirstNameInput = '[id="Address_FirstName"]';
    addressLastNameInput = '[id="Address_LastName"]';
    addressEmailInput = '[id="Address_Email"]';
    addressCountryDropdown = '[id="Address_CountryId"]';
    addressCountryDropdown = '[id="Address_CountryId"] [value="65"]';
    addressCityInput = '[id="Address_City"]';
    addressAddress1Input = '[id="Address_Address1"]';
    addressPostalCodeInput = '[id="Address_ZipPostalCode"]';
    addressPhoneNumberInput = '[id="Address_PhoneNumber"]';
    addressSaveButton = '[class="button-1 save-address-button"]';
    addressEditButton = '[class="button-2 edit-address-button"]';
    adressDeleteButton = '[class="button-2 delete-address-button"]';

    onChangePasswordSection = 'a.active[href="/customer/changepassword"]';
    offChangePasswordSection = 'a.inactive[href="/customer/changepassword"]';
    oldPasswordInput = '[id="OldPassword"]';
    newPasswordInput = '[id="NewPassword"]';
    confirmPasswordInput = '[id="ConfirmNewPassword"]';
    changePasswordButton = '[class="button-1 change-password-button"]';
    passwordChangeConfirmation = '[class="result"]'


}

export const myAccountLocators = new MyAccountLocators();