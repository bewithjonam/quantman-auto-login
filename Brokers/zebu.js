const { customizedSplit, delay, screen, ZEBU_LOGIN_URL, QUANTMAN_SIGN_IN_URL } = require('./helper');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const doLoginZebu = async (username, password, pin) => {
  var driver = new Builder()
    .forBrowser('chrome')
    // .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();
  console.log('Browser initialized');

  driver.manage().setTimeouts({ implicit: 3000, pageLoad: 300000, script: 30000 })

  await driver.get(ZEBU_LOGIN_URL);
  console.log('Login Page opened');

  await delay(1000);
  (await driver.findElement(By.xpath("//input[@formcontrolname = 'userId']"))).sendKeys(username);
  (await driver.findElement(By.xpath("//input[@value = 'Submit']"))).click();
  console.log(`step 1 completed for ${username}`);
  await delay(2000);

  (await driver.findElement(By.xpath("//input[@formcontrolname = 'mpin']"))).sendKeys(pin);
  (await driver.findElement(By.xpath("//input[@value = 'Submit']"))).click();
  console.log(`step 2 completed for ${username}`);


  await delay(2000)

  driver.switchTo().newWindow();
  console.log(`step 3 completed for ${username}`);
  await delay(1000);

  await driver.get(QUANTMAN_SIGN_IN_URL);
  await delay(1000);

  console.log(`step 4 completed for ${username}`);

  (await driver.findElement(By.id('zebull-user-auth'))).click()
  await delay(1000);

  console.log(`step 5 completed for ${username}`);

  (await driver.findElement(By.className('modal-body'))
    .findElement(By.className("form-control"))).sendKeys(username);

  (await driver.findElement(By.id('btn-zebull'))).click();
  console.log(`step 6 completed for ${username}`);


  await driver.wait(until.titleIs('Quantman'), 3000);
  console.log(`step 7 completed for ${username}`);

  await driver.quit();
};


const doLogin = async (args) => {
  const usernames = customizedSplit(args['USERNAMES']);
  const passwords = customizedSplit(args['PASSWORDS']);
  const pins = customizedSplit(args['PINS']);
  let index = 0;

  for (const username of usernames) {
    const password = passwords[index];
    const pin = pins[index];

    await doLoginZebu(username, password, pin)
      .then(() => {
        console.log('successfully completed')
      })
      .catch((e) => {
        console.log('exiting with error ', e);
      });

    index++;
  }
};

module.exports = {
  doLogin
};