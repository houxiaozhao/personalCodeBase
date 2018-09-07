const Redis = require('ioredis');
const redisConfig = {
  port: 6379,
  host: '127.0.0.1',
  family: 4,
  password: '',
  db: 0
};
var redis = new Redis(redisConfig);

// 订阅
redis
  .psubscribe('__keyevent@0__:expired')
  .then(count => {
    console.log('redis订阅成功count:', count);
  })
  .catch(err => {
    console.log('redis订阅失败', err);
  });
redis.on('pmessage', function(pattern, channel, message) {
  console.log('收到消息', message);
});
