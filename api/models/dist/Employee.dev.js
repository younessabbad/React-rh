"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema; // Define collection and schema for Condidat

var Condidat = new Schema({
  person_name: {
    type: String
  },
  role: {
    type: String
  },
  Condidat_number: {
    type: Number
  }
}, {
  collection: 'Condidats'
});
module.exports = mongoose.model('Condidats', Condidat);