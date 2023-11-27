const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test1');
var Donut = require("./models/donut").Donut

var donut = new Donut({
  title: "СуперПончик",
  nick:"SuperDonut"
  })
  console.log(donut)

donut.save().then(function(err, donut, affected){
  console.log(donut.title)
});