var autobahn = require('autobahn');

var connection = new autobahn.Connection({
  url: 'ws://127.0.0.1:9000/', //连接的ip地址：端口号
  realm: 'realm1' //一个范围标识
});

connection.onopen = function(session) {
  // SUBSCRIBE to a topic and receive events
  //
  function onhello(args) {
    //var msg = args[0];
    var msg = args;
    console.log(' received: ' + msg);
  }
  session.subscribe('topic', onhello).then(
    function(sub) {
      console.log("subscribed to topic 'web'");
    },
    function(err) {
      console.log('failed to subscribed: ' + err);
    }
  );
};

connection.open();
