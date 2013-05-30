
var util = require('util');
var events = require('events');

var MyClass = function() {
};

util.inherits(MyClass, events.EventEmitter);

MyClass.prototype.ping = function() {
    this.emit('response', 'pong');
};

////

var myClass = new MyClass();

myClass.on('response', function(msg) {
    console.log(msg);
});

myClass.ping();

