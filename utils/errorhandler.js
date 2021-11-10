// for making error templates  to send

//* used directly by controllers and error.js file (error.js contains mongodb-id=err,jwt-error,jwt-expire-error)
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = ErrorHandler;
