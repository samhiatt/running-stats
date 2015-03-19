Running Statistics
------------------

Calculate running statistics from a stream of data. Includes directional statistics, for circular values (degrees).

## Usage

```
var running_stats = require('running-stats');

var s = new Stats();
s.push(6);		// push val 6, with implied weight of 1
s.push(3, 2);	// push val 3, with weight of 2

s.mean(); 		// 4
s.max();			// 6
s.min();			// 3
s.stdDev();		// 1.414213562373095
s.variance();	// 2
s.count();		// 3

s.toJSON();		// {"mean":4,"max":6,"min":3,"stdDev":1.414213562373095,"variance":2,"count":3}
```

## Installation

```
$ npm install running_stats
```

