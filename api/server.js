const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan')
const config = require('./DB.js');
const CondidatsRoute = require('./routes/Condidats');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/Condidat', CondidatsRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});