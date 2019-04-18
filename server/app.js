const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const episodeRoutes = require('./api/routes/episodes');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header( 'Access-Control-Allow-Headers', 
                  'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if(req.method === 'OPTIONS'){
    res.header('Acess-Control-Allow-Methos', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/episodes', episodeRoutes);

// Error handling
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