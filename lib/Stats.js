module.exports = function(val, weight) {
	this.count=0;
	this.mean=null;
	this.min=null;
	this.max=null;
	this.variance=0;
	this.stdDev=0;
	this._v=0;
	this.push = function (val,weight) {
		if (val==null) return;
		weight = (weight!=null)? weight : 1;
		if (val instanceof Array){
			val.forEach(function(v){
				this.push(v,weight);
			}.bind(this));
			return this;
		} else if (typeof val.mean != 'undefined') {
			weight = val.count;
			if (this.max==null || val.max>this.max) this.max = val.max;
			if (this.min==null || val.min<this.min) this.min = val.min;
			this.variance = val.variance;
			this._v = val._v;
			val = val.mean;
		}
		var oldMean = this.mean || 0;
		this.count += weight;
		if (this.max==null || val>this.max) this.max = val;
		if (this.min==null || val<this.min) this.min = val;
		this.mean = (this.count>0)?  oldMean + (val-oldMean)*weight/this.count : val;
		this._v = this._v + weight*(val-oldMean)*(val-this.mean);
		this.variance = this._v/this.count;
		this.stdDev = Math.sqrt(this.variance);
		return this;
	};
	this.toJSON = function(){
		return {
			min: this.min,
			max: this.max,
			mean: this.mean,
			variance: this.variance,
			stdDev: this.stdDev,
			count: this.count
		};
	};
	if (typeof val != 'undefined') this.push(val, weight);
};