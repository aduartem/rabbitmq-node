# rabbitmq-node

POC - Gestionar RabbitMQ con Node.js

## Requisitos

- Node.js >= v14.17.0
- RabbitMQ 3.x.x
- Iniciar servidores de RabbitMQ. Crear usuario y contraseña.

## Instalación

Desde la raíz del proyecto ejecutar

```
$ npm install
```

## Scripts App

Ejecutar producer:

```
$ node app.js producer
```

Ejecutar consumer:

```
$ node app.js consumer
```

## Scripts Linter

Linter (eslint):

```
$ npm run lint
```

Auto-fix linter:

```
$ npm run lint:fix
```


## Variables de entorno

```
APP_NAME = rabbitmq-node
RABBITMQ_HOST =
RABBITMQ_PORT =
RABBITMQ_USER =
RABBITMQ_PASSWORD =
```
