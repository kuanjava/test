// basic imports
var events = require('events');

// for us to do a require later
//module.exports = Dummy;

function Dummy() {
    events.EventEmitter.call(this);
}

// inherit events.EventEmitter
Dummy.super_ = events.EventEmitter;

Dummy.prototype = Object.create(events.EventEmitter.prototype, {
    constructor: {
        value: Dummy,
        enumerable: false
    }
});



Dummy.prototype.cooking = function(chicken) {
	
	console.log('cooking....');
	
    var self = this;
    self.chicken = chicken;
    //self.cook = cook(); // assume dummy function that'll do the cooking
    //self.cook(chicken, function(cooked_chicken) {
    //    self.chicken = cooked_chicken;
    //    self.emit('cooked', self.chicken);
    //});
    self.emit('cooked', self.chicken);

    return self;
}

//A nonsensical node.js program

//var Dummy = require('./dummy');

var kenny = new Dummy();

var fried_chix = 'fired chicken....';



kenny.on('cooked', function(chicken) {
    // eat up!
	console.log('cooked....'+chicken);
});

kenny.cooking(fried_chix);

