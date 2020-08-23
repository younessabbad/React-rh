const express = require('express');
const router = express.Router();
let Condidat = require('../models/Condidat');

// Defined store route
router.post('/add',async  (req, res)=> {
  let Condidat = new Condidat({
    person_name: req.body.person_name,
    role: req.body.role,
    Condidat_number: req.body.Condidat_number
  });
  try{
    const savedCondidat = await Condidat.save();
    res.send(savedCondidat)
  }
    catch(err){
      res.status(400).send("unable to save to database");
    };
});

// Defined get data(index or listing) route
router.get('/', (req, res)=> {
    Condidat.find((err, Condidats)=>{
    if(err){
      console.log(err);
    }
    else {
      res.json(Condidats);
    }
  });
});

// Defined edit route
router.get('/edit/:id',(req, res)=> {
  let id = req.params.id;
  Condidat.findById(id, (err, Condidat)=>{
      res.json(Condidat);
  });
});

//  Defined update route
router.post('/update/:id', (req, res)=> {
    Condidat.findById(req.params.id, (err, Condidat)=> {
    if (!Condidat)
      res.status(404).send("data is not found");
    else {
        Condidat.person_name = req.body.person_name;
        Condidat.role = req.body.role;
        Condidat.Condidat_number = req.body.Condidat_number;

        Condidat.save().then(Condidat => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
router.get('/delete/:id', (req, res)=> {
    Condidat.findByIdAndRemove({_id: req.params.id}, (err, business)=>{
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = router;
