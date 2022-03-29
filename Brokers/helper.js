const customizedSplit = (values = []) => values.split(',').map(value => value.trim())

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const screen = { width: 640, height: 480 };

const QUANTMAN_URL = 'https://www.quantman.in';

const QUANTMAN_SIGN_IN_URL = 'https://www.quantman.in/users/sign_in';

const ZEBU_LOGIN_URL = 'https://zebull.in/#/login';

module.exports = {
  customizedSplit,
  delay,
  screen,
  QUANTMAN_URL,
  QUANTMAN_SIGN_IN_URL,
  ZEBU_LOGIN_URL
};