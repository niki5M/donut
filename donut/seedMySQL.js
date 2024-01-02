var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE donuts;'
var seedQuery = 'INSERT INTO donuts (title, nick, avatar, about) VALUES ("Розовый", "pink", "/images/donut1.png", "Пончик с клубничной начинкой"), ("Белый", "white", "/images/donut2.png", "Пончик с молочной начинкой"), ("Коричневый", "brown", "/images/donut3.png", "Пончик с шоколадной начинкой")';
var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'rootroot',
database: 'donutBD'
});
connection.connect()
console.log("Running SQL seed...")
// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})