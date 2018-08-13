var mqtt = require('mqtt');
// 创建连接
var client = mqtt.connect('mqtt://test.mosquitto.org');
// var client = mqtt.connect({
//     clientId: uuid,
//     username: 'admin',
//     password: 'admin',
//     port: 1883,
//     host: '127.0.0.1'
//   });
// 连接成功
client.on('connect', function() {
  // 订阅消息
  client.subscribe('presence');
  // 发布消息buffer
  client.publish('fudaoban/shuaka/888', Buffer.from('dddddddd102626205701D780124a6f7063664c307131784b69647331315f464a41735f413339484a705920c3bbd3d0bfbcc7da', 'hex'));
  // 发布消息string
  client.publish('presence', 'Hello mqtt');
});
// 监听到消息
client.on('message', function(topic, message) {
  // message is Buffer
  console.log(message.toString());
  console.log(message.toString('hex'));
  // 断开连接
  client.end();
});
