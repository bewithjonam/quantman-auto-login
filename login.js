const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const screen = {
  width: 640,
  height: 480
};

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const doLoginFyers = async (username, password, pin) => {
  var driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();
  console.log('Browser initialized');

  driver.manage().setTimeouts({ implicit: 3000, pageLoad: 300000, script: 30000 })
  
  await driver.get('https://www.quantman.in/auth/fyers');
  console.log('Login Page opened');

  await delay(1000);
  (await driver.findElement(By.name('fy_client_id'))).sendKeys(username);
  (await driver.findElement(By.id('clientIdSubmit'))).click();
  console.log('step 1 completed');

  await delay(1000);
  (await driver.findElement(By.name('fy_client_pwd'))).sendKeys(password);
  (await driver.findElement(By.id('loginSubmit'))).click();
  console.log('step 2 completed');

  await delay(1000);
  (await driver.findElement(By.id('verifyPinForm')).findElement(By.id('first'))).sendKeys(pin[0]);
  (await driver.findElement(By.id('verifyPinForm')).findElement(By.id('second'))).sendKeys(pin[1]);
  (await driver.findElement(By.id('verifyPinForm')).findElement(By.id('third'))).sendKeys(pin[2]);
  (await driver.findElement(By.id('verifyPinForm')).findElement(By.id('fourth'))).sendKeys(pin[3]);
  (await driver.findElement(By.id('verifyPinForm')).findElement(By.id('verifyPinSubmit'))).click();
  console.log('step 3 completed');

  await driver.wait(until.titleIs('Quantman'), 3000);
  console.log('step 4 completed');
  await driver.quit();
};

doLoginFyers(process.env['USERNAME'], process.env['PASSWORD'], process.env['PIN'])
  .then(() => console.log('successfully completed'))
  .catch((e) => {
    console.log('exiting with error ', e);
    process.exit(1)
  });