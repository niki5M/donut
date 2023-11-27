const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

var schema = mongoose.Schema({ name: String })
schema.methods.yummy = function(){
  console.log(this.get("name") + " сказал вкусно")
  }
  
const Donut = mongoose.model('Donut', schema);

const doughnut = new Donut({ name: 'СуперПончик' });
doughnut.save().then(() => doughnut.yummy());