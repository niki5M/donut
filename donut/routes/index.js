var express = require('express');
var router = express.Router();
const Donut = require("../models/donut").Donut;
const User = require("./../models/user").User;

router.get('/', async (req, res, next) => {
  try {
    res.render('index', { title:'Express', counter:req.session.counter});
  } catch (err) {
    next(err);
  }
});

/* GET login/registration page. */
router.get('/logreg', async function(req, res, next) {
  res.render('logreg', { title: 'Вход',error:null}); 
});

/* POST login/registration page. */
router.post('/logreg', async function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  try {
      const user = await User.findOne({ username });

      if (user) {
          if (user.checkPassword(password)) {
              req.session.user = user._id;
              res.redirect('/');
          } else {
              res.render('logreg', { title: 'Вход', error: 'Неверный пароль' });
          }
      } else {
          const newUser = new User({ username, password });
          await newUser.save();
          req.session.user = newUser._id;
          res.redirect('/');
      }
  } catch (err) {
      next(err);
  }

});


router.get('/logreg', function(req, res, next) {
  res.render('logreg',{error:null});

  });

router.post('/logout', function(req, res, next) {
    req.session.destroy()
    res.locals.user = null
    res.redirect('/')
});




module.exports = router;