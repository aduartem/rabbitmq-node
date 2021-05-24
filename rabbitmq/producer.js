const rabbitmq = require('./rabbitmq');
const logger = require('../config/winston');

exports.send = async () => {
  logger.info('[producer] send...');
  try {
    const connection = await rabbitmq.connect();
    connection.createChannel((error, channel) => {
      if (error) {
        throw error;
      }
      const queue = 'hello';
      const msg = 'Hello world';
      channel.assertQueue(queue, { durable: false });
      channel.sendToQueue(queue, Buffer.from(msg));
      logger.info('[producer] Sent: %s', msg);
      rabbitmq.disconnect(connection);
    });
  } catch (e) {
    logger.error(e);
  }
};
