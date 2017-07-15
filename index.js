const chalk = require('chalk');
const _ = require('lodash');
const logs = require('./data/logs.json');
const logger = require('./lib/logger.js');


_.each(logs, function (x) {
  logger(x.level, x.message);
})


