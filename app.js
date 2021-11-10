const express = require('express');

const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error');

app.use(
  cors({
    origin: '*',
  }),
);

const rootRoute = require('./routes/rootRoutes');

app.use(express.json());
app.use(express.urlencoded());
// middleware for accessing cookie

app.use(cookieParser());

// route imports
app.use('/', rootRoute);

// middleware for error
app.use(errorMiddleware);

module.exports = app;
