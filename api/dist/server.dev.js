"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var PORT = 4000;

var cors = require('cors');

var mongoose = require('mongoose');

var morgan = require('morgan');

var config = require('./DB.js');

var CondidatsRoute = require('./routes/Condidats');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('Database is connected');
}, function (err) {
  console.log('Can not connect to the database' + err);
});
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/Condidat', CondidatsRoute);
app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT);
});