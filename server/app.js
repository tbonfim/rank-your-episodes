const express = require('express');
const app = express();

const episodeRoutes = require('./api/routes/episodes');

app.use('/episodes', episodeRoutes);

module.exports = app;