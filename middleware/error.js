const ErrorHandler = require('../utils/errorhandler');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  //  mongoose id error
  if (err.name === 'CastError') {
    const message = `resource not found . Invalid : ${err.path}`;
    err = new ErrorHandler(message, 400);
  }
  // mongoose duplicate key error 11000
  if (err.code === 11000) {
    const message = `duplicate key error ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }
  // wrong json-web-token-error
  if (err.name === 'JsonWebTokenError') {
    const message = `json web token is invalid, try again`;
    err = new ErrorHandler(message, 400);
  }
  // token-expired-Error
  if ((err.name = 'TokenExpiredError')) {
    const message = 'json web token is expired , try again later';
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
