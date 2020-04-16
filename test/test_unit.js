const unit = require('../unit');
const assert = require('assert');

describe('Arithmetic functions', function(){
	describe('f', function() {
		it('should return sum of two numbers', function() {
			assert(unit.f(2, 3) == 5);			
			assert(unit.f(2, 2) == 4);			
		});

		it('should work correctly on negative numbers', function() {
			assert(unit.f(4, -2) == 2);			
		});

		it('returns zero on zero arguments', function() {
			assert(unit.f(0, 0) == 0);
		});

		it('returns zero on zero arguments', function() {
			assert(unit.f(1) == undefined);		
		});
	})
});

/*
assert(unit.f(2, 3) == 5);
assert(unit.f(0, 3) == 3);
assert(unit.f(0, 0) == 0);
//assert(unit.f(1) == undefined);
//assert(unit.f() == undefined);
//assert(unit.f(2, 3, 5) == undefined);
//assert(unit.f("123", [123]) == undefined);
*/