function TestCircle(size, x, y) {
	PIXI.Graphics.call(this);
	
	// draw a shape
	this.size = size;

	this.redraw();

	this.x = x;
	this.y = y;
	this.hitArea = new PIXI.Circle(0, 0, size*.5);
}

TestCircle.prototype = Object.create(PIXI.Graphics.prototype);
TestCircle.prototype.constructor = TestCircle;

TestCircle.prototype.redraw = function() {
	this.clear();
		// set a fill and line style
	this.beginFill(0xcccccc, .05);
	this.lineStyle(1, 0xff0000, 1);

	var radius = this.size * .5;
	this.drawCircle(0, 0, radius);
	this.endFill();
	this.moveTo(0, 0);
	this.lineTo(0, -radius);
}

TestCircle.prototype.clone = function() {
	var clone = new this.constructor(this.size, this.x, this.y);
	if(this.parent) this.parent.addChildAt(clone, 0);
	return clone;
}

module.exports = TestCircle;