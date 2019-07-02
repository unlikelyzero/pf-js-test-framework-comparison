import {
  ADMIN_PASSWORD,
  ADMIN_USERNAME,
  BASE_URL,
} from '../globals';

module.exports = {
  url: `${BASE_URL}/#/login`,
  elements: {
    logo: 'img.pf-c-brand',
    usernameInput: '#pf-login-username-id',
    passwordInput: '#pf-login-password-id',
    submitButton: 'button[type="submit"]',
  },
  commands: [{
    login(username = ADMIN_USERNAME, password = ADMIN_PASSWORD) {
      this.navigate();
      this.waitForElementVisible('@submitButton');
      this
        .setValue('@usernameInput', username)
        .setValue('@passwordInput', password)
        .click('@submitButton')
        .waitForElementVisible('#nav-toggle');
      return this;
    },
  }],
};
