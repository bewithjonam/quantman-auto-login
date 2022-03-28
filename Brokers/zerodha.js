const { customizedSplit, delay, screen } = require('./helper');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const doLoginZerodha = async (username, password, pin) => {
  var driver = new Builder()
    .forBrowser('chrome')
    // .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();
  console.log('Browser initialized');

  driver.manage().setTimeouts({ implicit: 3000, pageLoad: 300000, script: 30000 })

  await driver.get('https://www.quantman-staging.in/users/sign_in');
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
  const usernames = customizedSplit(args['USERNAMES']);
  const passwords = customizedSplit(args['PASSWORDS']);
  const pins = customizedSplit(args['PINS']);
  let index = 0;

  for (const username of usernames) {
    const password = passwords[index];
    const pin = pins[index];

    await doLoginZerodha(username, password, pin)
      .then(() => {
        console.log('successfully completed')
      })
      .catch((e) => {
        console.log('exiting with error ', e);
      });

    // await delay(10000)

    index++;
  }
};

module.exports = {
  doLogin
};