import uuid from 'uuid';

const testID = uuid().substr(0, 8);

module.exports = {
  before: (browser) => {
    const loginPage = browser.page.Login();
    loginPage.login();
  },

  'Create an organization': (browser) => {
    const organizationsPage = browser.page.Organizations();
    organizationsPage.create({ name: `Test ${testID}` });
  },

  'Create a duplicated organization': (browser) => {
    const organizationsPage = browser.page.Organizations();
    organizationsPage.create({ name: `Test ${testID}` });
  },

  'Edit an organization': () => {
    // Test stub
  },

  'Delete an organization': () => {
    // Test stub
  },

  after: (browser) => {
    browser.end();
  },
};
