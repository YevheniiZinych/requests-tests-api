const HttpError = require("../helpers/HttpError");

let requestCount = 0;
const LIMITS_OF_REQUEST = 50;

setInterval(() => {
  requestCount = 0;
}, 1000);

const countRequest = (req, res, next) => {
  requestCount++;

  if (requestCount >= LIMITS_OF_REQUEST) {
    next(HttpError(429, "Too many requests"));
  } else {
    next();
  }
};

module.exports = countRequest;
