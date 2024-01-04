var db = require('../mySQLConnect.js');


module.exports = function(req,res,next) {
res.locals.user = null
console.log('Проверяем сессию')
console.log(req.session.user)
db.query(`SELECT * FROM user WHERE user.id = '${req.session.user}'`, (err, users) => {
if(err)
return next(err)
if(users.length > 0) {
res.locals.user = users[0];
}
next()
})

// User.findById(req.session.user, function (err, user) { // if (err)
// return next(err)
// res.locals.user = user;
// next();
// })
// next();
}