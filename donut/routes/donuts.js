const express = require('express');
const router = express.Router();
const Donut = require("../models/donut").Donut;
const async = require("async");
var checkAuth = require("./../middleware/checkAuth.js");

router.get('/:nick', checkAuth, async function(req, res, next) {
  try {
    const [donut, donuts] = await Promise.all([Donut.findOne({ nick: req.params.nick })]);
  
    if (!donut) {
      throw new Error("Нет такого");
    }
    
    renderDonut(res, donut.title, donut.avatar, donut.desc, donuts);
  } catch (err) {
    next(err);
  }
});

function renderDonut(res, title, picture, desc, donuts) {
  console.log(donuts);

  res.render('donut', {
    title: title,
    picture: picture,
    desc: desc,
  });
}



module.exports = router;