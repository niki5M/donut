const express = require('express');
const router = express.Router();
const Donut = require("../models/donut").Donut;

/* GET home page. */
router.get('/', async(req, res, next) => {
  try{
    const menu = await Donut.find({}, { _id: 0, title: 1, nick: 1 });
    res.render('index', { title: 'Donut', menu:menu,counter:req.session.counter });
  }
  catch (err) {next(err);}
});

module.exports = router;