var running_stats = require('.');

exports.testStats = function(test){

	var s = new running_stats.Stats();
	s.push(6);		// push val 6, with implied weight of 1
	s.push(3, 2);	// push val 3, with weight of 2

	test.equals(s.mean,4,"Mean = 4");
	test.equals(s.max,6,"Max = 6");
	test.equals(s.min,3,"Min = 3");
	test.equals(s.variance,2,"Variance = 2");
	test.equals(s.stdDev,1.4142135623730951,"StdDev = 1.4142135623730951");
	test.equals(s.count,3,"Count = 3");

	test.done();

};

exports.testInitializationWithStats = function(test) {
	var s = new running_stats.Stats();
	s.push(6);		// push val 6, with implied weight of 1
	s.push(3, 2);	// push val 3, with weight of 2

	var s2 = new running_stats.Stats(s);
	test.equals(s2.mean,4,"Mean = 4");
	test.equals(s2.max,6,"Max = 6");
	test.equals(s2.min,3,"Min = 3");
	test.equals(s2.variance,2,"Variance = 2");
	test.equals(s2.stdDev,1.4142135623730951,"StdDev = 1.4142135623730951");
	test.equals(s2.count,3,"Count = 3");

	test.done();
};