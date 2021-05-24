const dotenv = require('dotenv');

dotenv.config();

const producer = require('./rabbitmq/producer');
const consumer = require('./rabbitmq/consumer');

const myArgs = process.argv.slice(2);

switch (myArgs[0]) {
  case 'producer':
    producer.send();
    break;
  case 'consumer':
    consumer.receive();
    break;
  default:
    producer.send();
}
