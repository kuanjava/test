//
// state-machine-test.js
//

var states = [ {
	'name' : 'working',
	'initial' : true,
	'events' : {
		'bored' : 'coffee',
		'call_for_meeting' : 'meeting',
	}
}, {
	'name' : 'coffee',
	'events' : {
		'break_over' : 'working',
		'call_for_meeting' : 'meeting'
	}
}, {
	'name' : 'meeting',
	'events' : {
		'meetings_over' : 'working'
	}
}, ];


function StateMachine(states) {
	
	///console.log(states);
	
	this.states = states;
	this.indexes = {}; // just for convinience
	for ( var i = 0; i < this.states.length; i++) {
		this.indexes[this.states[i].name] = i;
		if (this.states[i].initial) {
			this.currentState = this.states[i];
		}
	}
	this.consumeEvent = function(e) {
		if (this.currentState.events[e]) {
			this.currentState = this.states[this.indexes[this.currentState.events[e]]];
		}
	}
	this.getStatus = function() {
		console.log(this.currentState.name);
		return this.currentState.name;
	}
}

var sm = new StateMachine(states);
sm.getStatus(); // will return 'working'
 
sm.consumeEvent('bored');
sm.getStatus(); // I went for coffee
 
sm.consumeEvent('call_for_meeting');
sm.getStatus(); //will return 'meeting'
 
sm.consumeEvent('bored'); //doesn't matter how boring a meeting can be...
sm.getStatus(); //will still return 'meeting'
 
sm.consumeEvent('meetings_over')
sm.getStatus(); // 'working'


