const FYERS = require('./Brokers/fyers');
const ANGLE_BROKING = require('./Brokers/angleBroking');
const ICICI = require('./Brokers/icici');
const ZERODHA = require('./Brokers/zerodha');
const ALICE_BLUE = require('./Brokers/aliceBlue');
const ZEBU = require('./Brokers/zebu');
const { customizedSplit } = require('./Brokers/helper');

const AVAILABLE_BROKERS = {
  FYERS,
  ANGLE_BROKING,
  ICICI,
  ZERODHA, // T-otp (so stopped)
  ALICE_BLUE,
  ZEBU
}

const brokers = customizedSplit(process.env['BROKERS']);
const usernames = customizedSplit(process.env['USERNAMES']);
const passwords = customizedSplit(process.env['PASSWORDS']);
const pins = customizedSplit(process.env['PINS']);
const securityQuestions1 = customizedSplit(process.env['SECURITY_QUESTIONS1']);
const securityQuestions2 = customizedSplit(process.env['SECURITY_QUESTIONS2']);


const loginFunc = async () => {
  let index = 0;
  for (const broker of brokers) {

    const args = {
      username: usernames[index] || '',
      password: passwords[index] || '',
      pin: pins[index] || '',
      securityQuestion1: securityQuestions1[index] || '',
      securityQuestion2: securityQuestions2[index] || '',
    };

    console.log('BROKER ----->', broker);
    await AVAILABLE_BROKERS[broker].doLogin(args)

    index++;
  };
}

loginFunc();
