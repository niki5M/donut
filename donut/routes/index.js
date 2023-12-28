const express = require('express');
const router = express.Router();
const Donut = require("../models/donut").Donut;

/* GET home page. */
router.get('/', async(req, res, next) => {
  try{
    res.render('index', { title: 'Donut', counter:req.session.counter });
  }
  catch (err) {next(err);}
});

module.exports = router;