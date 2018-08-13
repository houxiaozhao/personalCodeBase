var autobahn = require('autobahn');

var connection = new autobahn.Connection({
  url: 'ws://127.0.0.1:9000/',
  realm: 'realm1'
});

connection.onopen = function(session) {
  console.log('打开wamp成功');
};

connection.open();

var counter = 0;
setInterval(function() {
  // PUBLISH an event
  connection.session.publish('topic', [counter]);
  console.log("published to 'receive' :" + counter);
  counter += 1;
}, 1000);
