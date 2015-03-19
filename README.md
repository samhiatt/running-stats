Running Statistics
------------------

Calculate running statistics from a stream of data. Includes directional statistics, for circular values (degrees).

## Usage

```
var running_stats = require('running-stats');

var s = new running_stats.Stats();
s.push(6);		// push val 6, with implied weight of 1
s.push(3, 2);	// push val 3, with weight of 2

s.mean(); 		// 4
s.max();			// 6
s.min();			// 3
s.stdDev();		// 1.414213562373095
s.variance();	// 2
s.count();		// 3

JSON.stringify(s);		// {"mean":4,"max":6,"min":3,"stdDev":1.414213562373095,"variance":2,"count":3}


// For directional statistics, use running_stats.DirStats
var s = new running_stats.DirStats('degrees');	// 'degrees' or 'radians', default is 'degrees'
s.push(0);
s.push(360);
s.push(90,2);

s.mean();				// 45
s.dispersion();	// {"count":4,"r":2.828427,"rbar":0.7071068,"variance":0.2928932}
s.range();			// 90
s.count();			// 4

JSON.stringify(s);	// {"mean":45,"range":90,"count":4,"dispersion":{"r":2.828427,"rbar":0.7071068,"variance":0.2928932}}
```

## Installation

```
$ npm install running_stats
```

