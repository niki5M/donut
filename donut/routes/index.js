var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pink', function(req, res, next) {
  res.render('donut', {
  title: "Розовый",
  picture: "images/donut1.png",
  desc: "Пончик с клубничной начинкой"
  });
});

router.get('/white', function(req, res, next) {
    res.render('donut', {
    title: "Белый",
    picture: "images/donut2.png",
    desc: "Пончик с молочной начинкой"
  });
});

router.get('/brown', function(req, res, next) {
      res.render('donut', {
      title: "Коричневый",
      picture: "images/donut3.png",
      desc: "Пончик с шоколадной начинкой"
  });
});
      
module.exports = router;
