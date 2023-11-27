const express = require('express');
const router = express.Router();
const Donut = require("../models/donut").Donut;

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с donuts');
});

router.get("/:nick", async (req, res, next) => {
  try {
    const donut = await Donut.findOne({ nick: req.params.nick });
    console.log(donut);
    if (!donut) {
      throw new Error("Нет такого пончика!!");
    }
    res.render('donut', {
      title: donut.title,
      picture: donut.avatar,
      desc: donut.desc
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;