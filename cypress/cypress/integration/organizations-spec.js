/**
 * Verifies basic operations on organizations.
 */
context('Organizations page', function () {
  it('reaches a 404 when trying to get the orgs list', function() {
    cy.server()
    cy.route({
        url: '**/api/v2/organizations/*',
        status: 404,
        response: {}
      }).as('orgs')
    cy.visit('/#/organizations')
  })
  it('can create an organization', function () {
    cy
      .visit('/#/organizations')
      .get('a[aria-label=Add]').click()
      .get('#org-name').type(`create-org-${this.testID}`)
      .get('#org-description').type(`Creation test for orgs. Test ID: ${this.testID}`)
      .get('button[aria-label=Save]').click()
      .get('dd:nth-of-type(1)').should('have.text', `create-org-${this.testID}`)
  })

  it('can delete an organization', function () {
    // Searchbars aren't implemented yet
    this.skip()
  })

  it('can edit an organization', function () {
    cy.createOrg(`edit-org-${this.testID}`, `Editing test for orgs. Test ID: ${this.testID}`).then((orgID) => {
      cy
        .visit(`/#/organizations/${orgID}`)
        .get('.pf-m-primary:nth-of-type(1)').click()
        .get('#org-name').clear().type(`edited-org-${this.testID}`)
        .get('#org-description').clear().type(`Edited test for orgs. Test ID: ${this.testID}`)
        .get('button[aria-label=Save]').click()
        .get('dd:nth-of-type(1)').should('have.text', `edited-org-${this.testID}`)
    })
  })
})
