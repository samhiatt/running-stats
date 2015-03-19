Running Statistics
------------------

Calculate running statistics from a stream of data. Includes directional statistics, for circular values (degrees).

## Usage

```
var running_stats = require('running-stats');

var s = new running_stats.Stats();
s.push(6);		// push val 6, with implied weight of 1
s.push(3, 2);	// push val 3, with weight of 2

s.mean; 		// 4
s.max;			// 6
s.min;			// 3
s.stdDev;		// 1.414213562373095
s.variance;	// 2
s.count;		// 3

JSON.stringify(s);
// {"mean":4,"max":6,"min":3,"stdDev":1.414213562373095,"variance":2,"count":3}


// For directional statistics, use running_stats.CircStats
// Initialize CircStats with 'degrees' or 'radians', default is 'degrees'.

var s = new running_stats.CircStats('degrees');
s.push(0);
s.push(360);
s.push(90,2);

s.mean;				// 45
s.variance;		// 0.2928932
s.range;			// 90
s.count;			// 4

JSON.stringify(s);	// {"mean":45,"range":90,"count":4,"variance":0.2928932}
```

### Initialize with initial values/statistics

The following all have equivalent results:

```
var s = new running_stats.Stats();
s.push(3,2);
s.push(6);
console.log(JSON.stringify(s));
// > {"min":3,"max":6,"mean":4,"variance":2,"stdDev":1.4142135623730951,"count":3}
```

```
var s = new running_stats.Stats(3,2);
s.push(6);
console.log(JSON.stringify(s));
// > {"min":3,"max":6,"mean":4,"variance":2,"stdDev":1.4142135623730951,"count":3}
```

```
var s = new running_stats.Stats(3,2);
s.push(new running_stats.Stats(6));
console.log(JSON.stringify(s));
// > {"min":3,"max":6,"mean":4,"variance":2,"stdDev":1.4142135623730951,"count":3}
```

```
var s = new running_stats.Stats({mean:3,count:2,min:3,max:3,variance:0});
s.push(new running_stats.Stats(6));
console.log(JSON.stringify(s));
// > {"min":3,"max":6,"mean":4,"variance":2,"stdDev":1.4142135623730951,"count":3}
```

```
var s = new running_stats.Stats([3,3,6]);
console.log(JSON.stringify(s));
// > {"min":3,"max":6,"mean":4,"variance":2,"stdDev":1.4142135623730951,"count":3}
```

## Installation

```
$ npm install running_stats
```

