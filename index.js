const chalk = require('chalk');
const _ = require('lodash');
const log = console.log;

_.each([chalk.red, chalk.green, chalk.blue], function(x) {
  log(x("Hello World!"));
});
