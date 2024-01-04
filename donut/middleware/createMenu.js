const db = require('./../mySQLConnect'); // assuming MySQL database connection

module.exports = function(req, res, next) {
    res.locals.nav = [];
    db.query('SELECT title, nick FROM donuts', function(err, result) {
        if (err) throw err;
        res.locals.nav = result;
        next();
    });
};