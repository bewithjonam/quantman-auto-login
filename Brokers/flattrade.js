const { delay, screen, QUANTMAN_SIGN_IN_URL } = require('./helper');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const doLoginFlattrade = async (username, password, pin) => {
  var driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();
  console.log('Browser initialized');

  driver.manage().setTimeouts({ implicit: 3000, pageLoad: 300000, script: 30000 })

  await driver.get(QUANTMAN_SIGN_IN_URL);
  console.log('Login Page opened');
  await delay(500);

  (await driver.findElement(By.id('flattrade-user-auth'))).click()

  await delay(1000);
  (await driver.findElement(By.id('flattrade-client-id'))).sendKeys(username);
  (await driver.findElement(By.id('btn-flattrade'))).click();
  console.log(`step 1 completed `);


  await delay(3000);
  (await driver.findElement(By.id('input-17'))).sendKeys(username);
  (await driver.findElement(By.id('pwd'))).sendKeys(password);
  (await driver.findElement(By.id('pan'))).sendKeys(pin);
  (await driver.findElement(By.id('sbmt'))).click();
  console.log(`step 2 completed `)

  await driver.wait(until.titleIs('Quantman'), 3000);
  console.log(`step 3 completed `);

  await driver.quit();
};


const doLogin = async (args) => {
  const { username, password, pin } = args;

  await doLoginFlattrade(username, password, pin)
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