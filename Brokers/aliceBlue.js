const { delay, screen, QUANTMAN_URL } = require('./helper');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const doLoginAliceBlue = async (username, password, pin) => {
  var driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();
  console.log('Browser initialized');

  driver.manage().setTimeouts({ implicit: 3000, pageLoad: 300000, script: 30000 })

  await driver.get(`${QUANTMAN_URL}/auth/aliceblue`);
  console.log('Login Page opened');

  await delay(1000);
  (await driver.findElement(By.name('client_id'))).sendKeys(username);
  (await driver.findElement(By.name('password'))).sendKeys(password);
  console.log(`step 1 completed`);

  await delay(500);
  (await driver.findElement(By.xpath("//button[@type = 'submit']"))).click();
  console.log(`step 2 completed`);

  await delay(1000);
  (await driver.findElement(By.name('answer1'))).sendKeys(pin);
  console.log(`step 3 completed `);

  await delay(500);
  (await driver.findElement(By.xpath("//button[@type = 'submit']"))).click();
  console.log(`step 4 completed `);

  await driver.wait(until.titleIs('Quantman'), 3000);
  console.log(`step 5 completed `);

  await driver.quit();
};


const doLogin = async (args) => {
  const { username, password, pin } = args;

  await doLoginAliceBlue(username, password, pin)
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