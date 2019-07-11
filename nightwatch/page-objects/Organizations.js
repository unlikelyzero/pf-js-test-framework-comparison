import {
  BASE_URL,
} from '../globals';

module.exports = {
  url: `${BASE_URL}/#/organizations`,
  elements: {
    searchDropdown: '.searchKeyDropdown',
    searchInput: 'input[type="search"]',
    searchButton: 'button.pf-m-tertiary',
    sortDropdown: 'div.sortDropdownGroup .pf-c-dropdown',
    sortOrder: 'div.sortDropdownGroup:last-child',
    addButton: 'a[href$="organizations/add"]',
    deleteButton: 'button[aria-label="Delete"]',
    selectAll: 'input[aria-label="Select all"]',
    list: 'ul[aria-label="Organizations List"]',
  },
  commands: [
    {
      create(organization) {
        this
          .navigate()
          .waitForElementVisible('@addButton')
          .click('@addButton');
        const createForm = this.section.createOrganization;
        createForm.setValue('@nameInput', organization.name);
        if (organization.description) {
          createForm.setValue('@descriptionInput', organization.description);
        }
        createForm
          .click('@saveButton')
          .waitForElementVisible('article.awx-c-card')
          .expect.element('.pf-c-card__body').text.to.contain(`${organization.name}`);

        return this;
      },
    },
  ],
  sections: {
    createOrganization: {
      selector: 'article.pf-c-card',
      elements: {
        nameInput: '#org-name',
        descriptionInput: '#org-description',
        saveButton: 'button[aria-label="Save"]',
      },
    },
  },
};
