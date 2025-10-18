class StoragePage {
  elements = {
    storageLink: () => cy.get("#\\34 nV0B2GDlfwnfAwjQ3DuI8 > div > p"),
    exploreDocsBtn: () => cy.get("#\\36 p8uoPiY57YzhdkeoPL2h5"),
    watchVideoBtn: () => cy.get("#\\37 oTbMCtFkmWGFKc0XtnY0H"),
    readArticleBtn: () => cy.get("#\\35 s1HDjwJtOo4TfdKNB9xRJ"),
  };

  clickStorageLink() {
    this.elements.storageLink().click();
  }
}

export default new StoragePage();
