const dotenv = require('dotenv');
const app = require('./app');

// uncaught-exception-error
process.on('uncaughtException', (err) => {
  console.log(`error: ${err.message}`);
  console.log('shutting down server due to uncaught exception err ');
  process.exit(1);
});

// config
dotenv.config({ path: './config/config.env' });

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on https://localhost:: ${process.env.PORT}`);
});

// unhandled promise rejection
process.on('unhandledRejection', (err) => {
  console.log(`err: ${err.message}`);
  console.log('shutting down the server due to unhandled promise rejection');
  server.close(() => {
    process.exit();
  });
});
