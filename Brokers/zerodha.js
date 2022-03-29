const { delay, screen, QUANTMAN_SIGN_IN_URL } = require('./helper');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const doLoginZerodha = async (username, password, pin) => {
  var driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();
  console.log('Browser initialized');

  driver.manage().setTimeouts({ implicit: 3000, pageLoad: 300000, script: 30000 })

  await driver.get(QUANTMAN_SIGN_IN_URL);
  console.log('Login Page opened');

  (await driver.findElement(By.id('zerodha-user-auth'))).click()

  await delay(1000);
  (await driver.findElement(By.id('zerodha-client-id'))).sendKeys(username);
  (await driver.findElement(By.id('zerodha-login'))).click();
  console.log(`step 1 completed for ${username}`);

  // stopped because of T-otp...

  // await driver.wait(until.titleIs('Quantman'), 3000);
  // console.log(`step 3 completed for ${username}`);

  // await driver.quit();
};


const doLogin = async (args) => {
  const { username, password, pin } = args;

  await doLoginZerodha(username, password, pin)
    .then(() => {
      console.log('successfully completed')
    })
    .catch((e) => {
      console.log('exiting with error ', e);
    });
};

module.exports = {
  doLogin
};