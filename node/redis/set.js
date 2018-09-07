const Redis = require('ioredis');
const redisConfig = {
  port: 6379,
  host: '127.0.0.1',
  family: 4,
  password: '',
  db: 0
};
var redis = new Redis(redisConfig);
redis.set('mode-fd9a529c-ee3e-43b7-90d4-c1c6b8afe7a5', '--', 'EX', 10);
