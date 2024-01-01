const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/donutBD');
var Donut = require("./models/donut").Donut

var donut = new Donut({
  title: "СуперПончик",
  nick:"SuperDonut"
  })
  console.log(donut)

donut.save().then(function(err, donut, affected){
  console.log(err)
});
