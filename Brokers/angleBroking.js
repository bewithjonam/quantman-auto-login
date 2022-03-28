const { customizedSplit, delay, screen } = require('./helper');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const doLoginAngleBroking = async (username, password) => {
  var driver = new Builder()
    .forBrowser('chrome')
    // .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();
  console.log('Browser initialized');

  driver.manage().setTimeouts({ implicit: 3000, pageLoad: 300000, script: 30000 })

  await driver.get('https://www.quantman.in/auth/angel_broking');
  console.log('Login Page opened');

  await delay(1000);
  (await driver.findElement(By.id('client-code'))).sendKeys(username);
  (await driver.findElement(By.name('password'))).sendKeys(password);
  console.log(`step 1 completed for ${username}`);

  await delay(1000);
  (await driver.findElement(By.id('sign-in'))).click();
  console.log(`step 2 completed for ${username}`);

  await driver.wait(until.titleIs('Quantman'), 5000);
  console.log(`step 3 completed for ${username}`);

  await driver.quit();
};


const doLogin = async (args) => {
  const usernames = customizedSplit(args['USERNAMES']);
  const passwords = customizedSplit(args['PASSWORDS']);
  let index = 0;

  for (const username of usernames) {
    const password = passwords[index];

    await doLoginAngleBroking(username, password)
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