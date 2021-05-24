const config = {
  app: {
    name: process.env.APP_NAME || '',
  },
  rabbitmq: {
    host: process.env.RABBITMQ_HOST || '',
    port: process.env.RABBITMQ_PORT || '',
    user: process.env.RABBITMQ_USER || '',
    password: process.env.RABBITMQ_PASSWORD || '',
  },
};

module.exports = config;
