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

BROKERS[process.env['BROKER']].doLogin(process.env)
