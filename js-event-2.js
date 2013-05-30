

var util = require('util');
var events = require('events');


var MyClass = function() {
};

util.inherits(MyClass, events.EventEmitter);

MyClass.prototype.do_a = function() {
	console.log('呼叫 do_a');
    this.emit('do_a', 'emit do_a event 加入需要做的 After Call Work 到 .on() 裡面');
};

MyClass.prototype.do_b = function() {
	console.log('呼叫 do_b');
    this.emit('do_b', 'emit do_b event 加入需要做的 After Call Work 到 .on() 裡面');
};

MyClass.prototype.do_c = function() {
	console.log('呼叫 do_c');
    this.emit('do_c', 'emit do_c event 加入需要做的 After Call Work 到 .on() 裡面');
};

MyClass.prototype.do_d = function() {
	console.log('呼叫 do_d');
    this.emit('do_d', 'emit do_d event 加入需要做的 After Call Work 到 .on() 裡面');
};

//////
var myClass = new MyClass();

myClass.on('do_a', function(msg) {
    console.log(msg);
});

myClass.on('do_b', function(msg) {
    console.log(msg);
});

myClass.on('do_c', function(msg) {
    console.log(msg);
});

myClass.on('do_d', function(msg) {
    console.log(msg);
});

myClass.do_a();
myClass.do_b();
myClass.do_c();
myClass.do_d();

