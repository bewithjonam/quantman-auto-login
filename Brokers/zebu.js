const { delay, screen, ZEBU_LOGIN_URL, QUANTMAN_SIGN_IN_URL } = require('./helper');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const doLoginZebu = async (username, password, pin, securityQuestion1, securityQuestion2) => {
  const quantmanLoginFlow = async () => {
    await delay(2000)

    driver.switchTo().newWindow();
    console.log(`step 3 completed `);
    await delay(1000);

    await driver.get(QUANTMAN_SIGN_IN_URL);
    await delay(1000);

    console.log(`step 4 completed `);

    (await driver.findElement(By.id('zebull-user-auth'))).click()
    await delay(1000);

    console.log(`step 5 completed `);

    (await driver.findElement(By.className('modal-body'))
      .findElement(By.className("form-control"))).sendKeys(username);

    (await driver.findElement(By.id('btn-zebull'))).click();
    console.log(`step 6 completed `);

    await driver.wait(until.titleIs('Quantman'), 3000);
    console.log(`step 7 completed `);
    await delay(3000);

    await driver.quit();
  };

  var driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();
  console.log('Browser initialized');

  driver.manage().setTimeouts({ implicit: 3000, pageLoad: 300000, script: 30000 })

  await driver.get(ZEBU_LOGIN_URL);
  console.log('Login Page opened');

  await delay(1000);
  (await driver.findElement(By.xpath("//input[@placeholder='Enter your User ID']"))).sendKeys(username);
  (await driver.findElement(By.xpath("//button[@type = 'button']"))).click();
  console.log(`step 1 completed `);
  await delay(2000);
  try {
    (await driver.findElement(By.xpath("//input[@placeholder = 'Enter your M-Pin']"))).sendKeys(pin);
    (await driver.findElement(By.xpath("//button[@type = 'button']"))).click();
    console.log(`step 2 completed `);
    quantmanLoginFlow();
  }
  catch (err) {
    (await driver.findElement(By.xpath("//input[@formcontrolname = 'password']"))).sendKeys(password);
    (await driver.findElement(By.xpath("//input[@value = 'Submit']"))).click();
    await delay(1000);

    (await driver.findElement(By.xpath("//input[@formcontrolname = 'answer1']"))).sendKeys(securityQuestion1);
    (await driver.findElement(By.xpath("//input[@formcontrolname = 'answer2']"))).sendKeys(securityQuestion2);
    (await driver.findElement(By.xpath("//input[@value = 'Submit']"))).click();
    quantmanLoginFlow();
  }
};


const doLogin = async (args) => {
  const { username, password, pin, securityQuestion1, securityQuestion2 } = args;

  await doLoginZebu(username, password, pin, securityQuestion1, securityQuestion2)
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