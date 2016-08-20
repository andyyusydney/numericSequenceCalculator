var assert = require('assert');
var numericSeqCalc = require('../numericSeqCalc.js');
var expect = require('chai').expect;

console.log('numericSeqCalc=', numericSeqCalc);

describe('Numeric Sequence Calculator', function(){
	it('should return all numbers up to and including the number entered', function(){
		expect(numericSeqCalc.seqNums(5)).to.have.members([1,2,3,4,5]);
	});
	
	it('should return all odd numbers up to and including the number entered', function(){
		expect(numericSeqCalc.oddNums(5)).to.have.members([1,3,5]);
	});
	
	it('should return all even numbers up to and including the number entered', function(){
		expect(numericSeqCalc.evenNums(5)).to.have.members([0,2,4]);
	});
	
	it('should return all numbers up to and including the number entered except multiple of 3 or/and 5', function(){
		expect(numericSeqCalc.notMultiOf3and5Nums(5)).to.have.members([1,2,4]);
	});
	
	it('should return all fibonacci numbers up to and including the number entered', function(){
		expect(numericSeqCalc.fibNums(5)).to.have.members([0,1,1,2,3,5]);
	});
});