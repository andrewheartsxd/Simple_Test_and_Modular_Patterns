'use strict';

var expect = require('chai').expect;

// var greeting = require('../lib/greet');
var greetingAgain = require('../app');

describe('greet() when given a string', function () {
	
  it('should return "hello dog"', function () {
		var something = "dog"
    var result = greetingAgain(something);
		expect(result).equal('hello dog');
	});


	it('should return "hello cat" with command line argument', function () {
		process.argv[2] = 'cat';
    var result = greetingAgain();
    expect(result).equal('hello ' + process.argv[2]);
	});

});