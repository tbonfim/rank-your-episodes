const express = require('express');
const app = express();
const morgan = require('morgan');

const episodeRoutes = require('./api/routes/episodes');

app.use(morgan('dev'));

app.use('/episodes', episodeRoutes);


app.use((req, res, next) => {
  const error = new Error('Path not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message || "Undefined Error!"
    }
  });
});


module.exports = app;