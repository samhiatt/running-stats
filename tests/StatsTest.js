var running_stats = require('./../lib/index');

var checkResult = function(test,res){
	test.equals(res.mean,4,"Mean = 4");
	test.equals(res.max,6,"Max = 6");
	test.equals(res.min,3,"Min = 3");
	test.equals(res.variance,2,"Variance = 2");
	test.equals(res.stdDev,1.4142135623730951,"StdDev = 1.4142135623730951");
	test.equals(res.count,3,"Count = 3");
	test.done();
};

exports.testStats = function(test){

	var s = new running_stats.Stats();
	s.push(6);
	s.push(3);
	s.push(3);
	checkResult(test, s);

};

exports.testStatsInitWithList = function(test){

	var s = new running_stats.Stats([6,3,3]);
	checkResult(test, s);

};

exports.testInitializationWithStats = function(test) {
	var s = new running_stats.Stats();
	s.push(6);		// push val 6, with implied weight of 1
	s.push(3, 2);	// push val 3, with weight of 2
	var s2 = new running_stats.Stats(s);
	checkResult(test, s2);
};

exports.testStatsInitializationWithInitValues = function(test) {
	var s = new running_stats.Stats(3,2);
	s.push(6);
	var s2 = new running_stats.Stats(s);
	checkResult(test, s2);
};
