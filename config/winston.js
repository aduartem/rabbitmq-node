const winston = require('winston');
const { name } = require('./configApp').app;

const {
  splat,
  combine,
  timestamp,
  label,
  printf,
} = winston.format;

// eslint-disable-next-line
const myFormat = printf(({ timestamp, level, label, message }) => {
  const text = `${timestamp} [${label}] ${level}: ${message}`;
  return text;
});

const logger = winston.createLogger({
  format: combine(
    label({ label: name }),
    timestamp(),
    splat(),
    myFormat,
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

module.exports = logger;
