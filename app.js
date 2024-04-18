const express = require('express');

const app = express();
const weatherRoutes = require('./routes/weather.routes');
const errorHandler = require('./libs/errorHandler');
const error404 = require('./libs/error404');

app.use('/api', weatherRoutes);
app.use('*', error404);
app.use(errorHandler);

module.exports = app;
