const chalk = require('chalk');
const _ = require('lodash');

const logger = require('./lib/logger.js');


_.each([{ 'a':'Hello World', 'b':'INFO' }, { 'a':'Hello World', 'b':'WARNING' }, { 'a':'Hello World', 'b':'ERROR' }], function (x) {
  logger(x.a, x.b);
})


