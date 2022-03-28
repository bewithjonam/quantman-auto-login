const customizedSplit = (values = []) => values.split(',')

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const screen = { width: 640, height: 480 };

module.exports = {
  customizedSplit,
  delay,
  screen
};

export const QUANTMAN_URL = 'https://www.quantman.in';

export const QUANTMAN_SIGN_IN_URL = 'https://www.quantman-staging.in/users/sign_in';

export const ZEBU_LOGIN_URL = 'https://zebull.in/#/login';