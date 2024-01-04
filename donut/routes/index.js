var express = require('express');
var router = express.Router();
//const Donut = require("../models/donut").Donut;
//const User = require("./../models/user").User;
var db = require('../mySQLConnect.js');

router.get('/', async (req, res, next) => {
  try {
    res.render('index', { title: 'Express', counter:req.session.counter });
  } catch (err) {
    next(err);
  }
});

/* GET login/registration page. */
router.get('/logreg', async function(req, res, next) {
  res.render('logreg', { title: 'Вход',error:null}); 
});

/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  db.query(`SELECT * FROM user WHERE user.username = '${req.body.username}'`, function(err, users) {
    if (err) return next(err);

    if (users.length > 0) {
      var user = users[0];

      if (password == user.password) {
        req.session.user = user.id;
        res.redirect('/');
      } else {
        // Неправильный пароль
        res.render('logreg', { title: 'Вход', error: 'Неправильный пароль' });
      }
    } else {
      db.query(`INSERT INTO user (username, password) VALUES ('${username}', '${password}')`, function(err, user) {
        if (err) return next(err);

        req.session.user = user.id;
        res.redirect('/');
      });
    }
  });
});


router.post('/logout', function(req, res, next) {
    req.session.destroy()
    res.locals.user = null
    res.redirect('/')
});




module.exports = router;