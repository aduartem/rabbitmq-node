const rabbitmq = require('./rabbitmq');
const logger = require('../config/winston');

exports.receive = async () => {
  logger.info('[producer] send...');
  try {
    const connection = await rabbitmq.connect();
    connection.createChannel((error, channel) => {
      if (error) {
        throw error;
      }
      const queue = 'hello';
      channel.assertQueue(queue, { durable: false });

      console.log(
        ' [*] Waiting for messages in %s. To exit press CTRL+C',
        queue,
      );
      channel.consume(
        queue,
        (msg) => { logger.info('[consumer] receive: %s', msg.content.toString()); },
        { noAck: true },
      );
    });
  } catch (e) {
    logger.error(e);
  }
};
