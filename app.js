'use strict';

var greeting = require('./lib/greet');



var app = function(input) {  
  var myArg = process.argv[2];

	if(myArg === undefined) {
		var string = input;
	}
	else {
		var string = myArg;	
	}

	console.log(greeting(string))
	return greeting(string);
};

app();


module.exports = app;

