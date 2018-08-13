// 嘿嘿嘿，小试牛刀，爬取的某微博下评论图片😋
// 图片地址放在img.txt,拿迅雷批量下载
var request = require('request');
const fs = require('fs');
let id = '4251992165887811';
let mid = '4251992165887811';
let max_id = '';
var targetOptions = {
  method: 'GET',
  timeout: 8000,
  encoding: null,
  // proxy: 'http://127.0.0.1:8087',
  rejectUnauthorized: false
};

setInterval(e => {
  let url = '';
  if (max_id) {
    url = 'https://m.weibo.cn/comments/hotflow?id=' + id + '&mid=' + mid + '&max_id=' + max_id + '&max_id_type=0';
  } else {
    url = 'https://m.weibo.cn/comments/hotflow?id=' + id + '&mid=' + mid + '&max_id_type=0';
  }
  console.log(url);
  targetOptions.url = url;
  request(targetOptions, function(error, response, body) {
    try {
      if (error) throw error;
      body = JSON.parse(body.toString()).data;
      max_id = body.max_id;
      let txt = '';
      body.data.forEach(function(e) {
        if (e.pic) {
          console.log(e.pic.large.url);
          txt = txt + e.pic.large.url + '\n';
        }
      }, this);
      fs.appendFileSync('img.txt', txt);
    } catch (e) {
      console.error(e);
    }
  });
}, 3000);
