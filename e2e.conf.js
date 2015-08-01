exports.config = {
  directConnect: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  framework: 'jasmine2',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    shardTestFiles: true,
    maxInstances: 5 // please don't bump this beyond 5 in a commit, as it becomes unstable
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/**/*_e2e.js']
};


