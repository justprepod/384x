let unit = {};

unit.f = function(a, b) {
	if (arguments.length != 2)
		return undefined;
	return a + b;
};

module.exports = unit;