var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/donutBD");
var User = require("./models/user").User;
var first_user = new User({
username: "Nina",
password: "12345"
});

first_user.save().then((user) => {
    console.log(user);
  }).catch((err) => {
    throw new Error('user not found');
  });