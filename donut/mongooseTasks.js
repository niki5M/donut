const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Donut = mongoose.model('Donut', { name: String });

const doughnut = new Donut({ name: 'СуперПончик' });
doughnut.save().then(() => console.log('вкусно'));