var express = require('express');
var router = express.Router();
const schedule = require('node-schedule');
const axios = require('axios')

const url = 'https://chat.googleapis.com/v1/spaces/AAAALKMqWMc/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=xP7MzeyVd1iVooz1T2xiRrM-L2sewkMHwznE8JB2KfY%3D'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(1, 5)];
rule.hour = 11;
rule.minute = 28;

schedule.scheduleJob(rule, function(){
  axios.post(url, {
    "text": "Report đi anh emm ơiii :red-heart: :red-heart: :red-heart:"
  }).then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
      .catch(error => {
        console.error(error)
      })
});

axios.post(url, {
  "text": "Bot Chạy Cơm xin chào!!! Tôi sẽ nhắc nhở bạn hàng ngày report để sếp vui nhé :red-heart:"
}).then(res => {
      console.log(`statusCode: ${res.status}`)
      console.log(res)
    })
    .catch(error => {
      console.error(error)
    })

module.exports = router;
