class HealthcarePage {
  elements = {
    healthcareLink: () => cy.get("#\\35 wp08ChD52I7CbMlfpviD5 > div > p"),
    scheduleDemoBtn: () => cy.get("#\\32 mYJfNMlCMvH1oi1d4zFlM"),
    signUpBtn: () => cy.get("#\\33 S21xJuTUKZBZ02zAOxESV"),
    contactSalesBtn: () => cy.get("#\\37 KkVU0UFawnbNlDaaE7JIG")
  };

  clickHealthcareLink() {
    this.elements.healthcareLink().click();
  }
}

export default new HealthcarePage();
