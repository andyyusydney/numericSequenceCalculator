var assert = require('assert');
var numericSeqCalc = require('../numericSeqCalc.js');
var expect = require('chai').expect;

describe('Numeric Sequence Calculator', function(){
	it('should return all numbers up to and including the number entered', function(){
		expect(numericSeqCalc.seqNums(11)).to.have.members([1,2,3,4,5,6,7,8,9,10,11]);
	});
	
	it('should return all odd numbers up to and including the number entered', function(){
		expect(numericSeqCalc.oddNums(11)).to.have.members([1,3,5,7,9,11]);
	});
	
	it('should return all even numbers up to and including the number entered', function(){
		expect(numericSeqCalc.evenNums(11)).to.have.members([0,2,4,6,8,10]);
	});
	
	it('should return all numbers up to and including the number entered except multiple of 3 or/and 5', function(){
		expect(numericSeqCalc.notMultiOf3and5Nums(11)).to.have.members([1,2,4,7,8,11]);
	});
	
	it('should return all fibonacci numbers up to and including the number entered', function(){
		expect(numericSeqCalc.fibNums(11)).to.have.members([0,1,1,2,3,5,8,13,21,34,55,89]);
	});
	
	it('should return error if not be passed a negative or decimal number', function(){
		expect(numericSeqCalc.fibNums(-1)).have.keys(['error']);
		expect(numericSeqCalc.fibNums(1.1)).have.keys(['error']);
	});
});