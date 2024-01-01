const express = require('express');
const router = express.Router();
const Donut = require("../models/donut").Donut;

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
  });

/* GET home page. */
router.get('/', async(req, res, next) => {
  try{
    res.render('index', { title: 'Donut', counter:req.session.counter });
  }
  catch (err) {next(err);}
});

router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
});

module.exports = router;