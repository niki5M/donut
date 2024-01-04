const express = require('express');
const router = express.Router();
// const Donut = require("../models/donut").Donut;
var db = require('../mySQLConnect.js');
const async = require("async");
var checkAuth = require("./../middleware/checkAuth.js");

// router.get('/:nick', checkAuth, async function(req, res, next) {
//   try {
//     const [donut, donuts] = await Promise.all([Donut.findOne({ nick: req.params.nick })]);
  
//     if (!donut) {
//       throw new Error("Нет такого");
//     }
    
//     renderDonut(res, donut.title, donut.avatar, donut.desc, donuts);
//   } catch (err) {
//     next(err);
//   }
// });

// function renderDonut(res, title, picture, desc, donuts) {
//   console.log(donuts);

//   res.render('donut', {
//     title: title,
//     picture: picture,
//     desc: desc,
//   });
// }
router.get("/:nick",checkAuth, function(req, res, next) {
  db.query(`SELECT * FROM donuts WHERE donuts.nick = '${req.params.nick}'`, (err,donuts) => {
  if(err) {
    console.log(err);
    if(err) return next(err)
    } else {
      if(donuts.length == 0) return next(new Error("Такого нет"))
        var donut = donuts[0];
        res.render('donut', {
          title: donut.title,
          picture: donut.avatar,
          desc: donut.about
  })
}
})
});


module.exports = router;