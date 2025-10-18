class SignUpPage {
  elements = {
    signUpBtn: () => cy.get('span[data-content="Sign up"]'),
    createTelnyxAccForm: () =>
      cy.get(
        "#layout > main > section > div.c-cUhiIV.c-cFpcyF > div > div > div"
      ),
    createAccFormTitle: () =>
      cy.get(
        "#layout > main > section > div.c-cUhiIV.c-cFpcyF > div > div > div > h1"
      ),
  };

  clickOnSignUpBtn() {
    this.elements.signUpBtn().click();
  }
}

export default new SignUpPage();
