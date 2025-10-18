class MissionControlPage {
  elements = {
    missionControlLink: () =>
      cy.get(
        "#\\33 u3V9iDZe4YnATPxbW6dFd > div.flex.items-center.gap-xs.flex-grow > p"
      ),
    fourBtnsClass: () => cy.get("span.c-lLVGP"),
  };

  clickMissionControlLink() {
    this.elements.missionControlLink().click();
  }
}

export default new MissionControlPage();
