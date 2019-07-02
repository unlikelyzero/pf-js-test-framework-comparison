module.exports = {
  beforeEach(browser, done) {
    browser.resizeWindow(1024, 768, done);
  },

  // Application specific globals
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'password',
  ADMIN_USERNAME: process.env.ADMIN_USERNAME || 'username',
  BASE_URL: process.env.BASE_URL || 'https://localhost:3001',
};
