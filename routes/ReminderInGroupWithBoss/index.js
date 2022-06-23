var express = require('express');
var router = express.Router();
const schedule = require('node-schedule');
const axios = require('axios')
const {ALL_USER} = require("../../const");

const url = 'https://chat.googleapis.com/v1/spaces/AAAALKMqWMc/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=xP7MzeyVd1iVooz1T2xiRrM-L2sewkMHwznE8JB2KfY%3D'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 17;
rule.minute = 30;

schedule.scheduleJob(rule, function(){
  axios.post(url, {
      "text": `${ALL_USER} Report đi anh emm ơiii!!`
  }).catch(error => {
        console.error(error)
      })
})
axios.post(url, {
    "text": `Bot nhắc nhở báo cáo được khởi chạy.`
}).catch(error => {
        console.error(error)
    })

module.exports = router;
