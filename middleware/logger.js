// middleware/logger.js
// Custom logger middleware — logs Method, URL, and Time for every request
// that hits the server. This is registered globally in app.js with app.use().

function logger(req, res, next) {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next(); // don't forget this — without it the request just hangs forever
}

module.exports = logger;
