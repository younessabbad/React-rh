"use strict";

var express = require('express');

var router = express.Router();

var Condidat = require('../models/Condidat'); // Defined store route


router.post('/add', function _callee(req, res) {
  var Condidat, savedCondidat;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          Condidat = new Condidat({
            person_name: req.body.person_name,
            role: req.body.role,
            Condidat_number: req.body.Condidat_number
          });
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Condidat.save());

        case 4:
          savedCondidat = _context.sent;
          res.send(savedCondidat);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.status(400).send("unable to save to database");

        case 11:
          ;

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); // Defined get data(index or listing) route

router.get('/', function (req, res) {
  Condidat.find(function (err, Condidats) {
    if (err) {
      console.log(err);
    } else {
      res.json(Condidats);
    }
  });
}); // Defined edit route

router.get('/edit/:id', function (req, res) {
  var id = req.params.id;
  Condidat.findById(id, function (err, Condidat) {
    res.json(Condidat);
  });
}); //  Defined update route

router.post('/update/:id', function (req, res) {
  Condidat.findById(req.params.id, function (err, Condidat) {
    if (!Condidat) res.status(404).send("data is not found");else {
      Condidat.person_name = req.body.person_name;
      Condidat.role = req.body.role;
      Condidat.Condidat_number = req.body.Condidat_number;
      Condidat.save().then(function (Condidat) {
        res.json('Update complete');
      })["catch"](function (err) {
        res.status(400).send("unable to update the database");
      });
    }
  });
}); // Defined delete | remove | destroy route

router.get('/delete/:id', function (req, res) {
  Condidat.findByIdAndRemove({
    _id: req.params.id
  }, function (err, business) {
    if (err) res.json(err);else res.json('Successfully removed');
  });
});
module.exports = router;