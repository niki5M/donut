var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pink', function(req, res, next) {
  res.send("<h1>Розовый</h1>")
  });
  
router.get('/white', function(req, res, next) {
  res.send("<h1>Белый</h1>")
});

router.get('/brown', function(req, res, next) {
  res.send("<h1>Коричневый</h1>")
});
      
module.exports = router;
