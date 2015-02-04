'use strict';

var greeting = require('./lib/greet');



var app = function(input) {  

  var string = input || process.argv[2];

	console.log(greeting(string));
	return greeting(string);

};

app();

module.exports = app;

