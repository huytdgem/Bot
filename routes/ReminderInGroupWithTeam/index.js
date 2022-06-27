var express = require('express');
var router = express.Router();
const schedule = require('node-schedule');
const axios = require('axios')
const {ALL_USER} = require("../../const");

const url = 'https://chat.googleapis.com/v1/spaces/AAAAYjXH928/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=gLz6UTxHLrqdWLqbhaXizpWlj67uxtc3G3UvvEOqNwA%3D'
const message = `${ALL_USER} Chuẩn bị họp Daily!! \n
Họp không quá 15p. Và không thảo luận quá sâu để giải quyết vấn đề.\n Mọi người có thể họp riêng với nhau sau daily meeting. \n
Lưu ý theo format: \n 
1. Đã làm những gì ngày hôm trước? \n 
2. Sẽ làm những gì ngày hôm nay? \n 
3. Có vấn đề gì ảnh hưởng đến tiến độ. \n
Link meet: https://meet.google.com/wje-cngw-yhb
`

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 8;
rule.minute = 50;

schedule.scheduleJob(rule, function(){

  axios.post(url, {
      "text": message
  }).catch(error => {
        console.error(error)
      })
});

axios.post(url, {
    "text": `Bot reminder nhắc nhở daily được khởi chạy.`
}).catch(error => {
    console.error(error)
})

module.exports = router;
