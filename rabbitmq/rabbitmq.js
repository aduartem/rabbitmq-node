const amqp = require('amqplib/callback_api');

const configRabbitMQ = require('../config/configApp').rabbitmq;

const {
  host, port, user, password,
} = configRabbitMQ;

exports.connect = () => new Promise((resolve, reject) => {
  const uri = `amqp://${user}:${password}@${host}:${port}/`;
  amqp.connect(uri, (err, connection) => {
    if (err) {
      return reject(err);
    }
    return resolve(connection);
  });
});

exports.disconnect = (connection) => {
  setTimeout(() => {
    connection.close();
  }, 500);
};
