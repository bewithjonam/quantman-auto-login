const FYERS = require('./Brokers/fyers');
const ANGLE_BROKING = require('./Brokers/angleBroking');
const ICICI =  require('./Brokers/icici');
const ZERODHA = require('./Brokers/zerodha');
const ALICE_BLUE = require('./Brokers/aliceBlue');
const ZEBU = require('./Brokers/zebu')

const BROKERS = {
  FYERS,
  ANGLE_BROKING,
  ICICI,
  ZERODHA, // T-otp (so stopped)
  ALICE_BLUE,
  ZEBU
}

// FYERS
// const userDetails = {
//   USERNAMES: 'XR09644, DP00897',
//   PASSWORDS: 'ABCdef!!!345, Sairam90!',
//   PINS: '1988, 1987',
//   BROKER: 'FYERS'
// }

// ANGLE_BROKING
// const userDetails = {
//   USERNAMES: 'M615665',
//   PASSWORDS: 'ABCdef!!!123',
//   BROKER: 'ANGLE_BROKING'
// }

// ICICI
// const userDetails = {
//   USERNAMES: '9597232959',
//   PASSWORDS: 'ABCdef!!!123',
//   PINS: '11061988',
//   BROKER: 'ICICI'
// }

// ZERODHA
// const userDetails = {
//   USERNAMES: 'DP1637',
//   PASSWORDS: 'shirdisai5000c',
//   PINS: '411218',
//   BROKER: 'ZERODHA'
// }

// AliceBlue
// const userDetails = {
//   USERNAMES: '524419',
//   PASSWORDS: 'ABCdef!!!123',
//   PINS: '1988',
//   BROKER: 'ALICE_BLUE'
// }

// ZEBU
const userDetails = {
  USERNAMES: 'cz397',
  PASSWORDS: 'saisai90!!!',
  PINS: '909090',
  BROKER: 'ZEBU'
}

BROKERS[userDetails.BROKER].doLogin(userDetails)

// process.env['USERNAME'], process.env['PASSWORD'], process.env['PIN']