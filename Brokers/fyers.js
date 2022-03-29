const { customizedSplit, delay, screen, QUANTMAN_URL } = require('./helper');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const doLoginFyers = async (username, password, pin) => {
  var driver = new Builder()
    .forBrowser('chrome')
    // .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();
  console.log('Browser initialized');

  driver.manage().setTimeouts({ implicit: 3000, pageLoad: 300000, script: 30000 })

  await driver.get(`${QUANTMAN_URL}/auth/fyers`);
  console.log('Login Page opened');

  await delay(1000);
  (await driver.findElement(By.name('fy_client_id'))).sendKeys(username);
  (await driver.findElement(By.id('clientIdSubmit'))).click();
  console.log(`step 1 completed for ${username}`);

  await delay(1000);
  (await driver.findElement(By.name('fy_client_pwd'))).sendKeys(password);
  (await driver.findElement(By.id('loginSubmit'))).click();
  console.log(`step 2 completed for ${username}`);

  await delay(1000);

  (await driver.findElement(By.id('verifyPinForm')).findElement(By.id('first'))).sendKeys(pin[0]);
  (await driver.findElement(By.id('verifyPinForm')).findElement(By.id('second'))).sendKeys(pin[1]);
  (await driver.findElement(By.id('verifyPinForm')).findElement(By.id('third'))).sendKeys(pin[2]);
  (await driver.findElement(By.id('verifyPinForm')).findElement(By.id('fourth'))).sendKeys(pin[3]);
  (await driver.findElement(By.id('verifyPinForm')).findElement(By.id('verifyPinSubmit'))).click();
  console.log(`step 3 completed for ${username}`);

  await driver.wait(until.titleIs('Quantman'), 3000);
  console.log(`step 4 completed for ${username}`);

  await driver.quit();
};


const doLogin = async (args) => {
  const { username, password, pin } = args;

  await doLoginFyers(username, password, pin)
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