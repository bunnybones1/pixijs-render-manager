var signals = require('signals');
var renderers = [];
var skipCounter = 0;
var skipFrames = 0;
var onEnterFrame = new signals.Signal();
function add(renderer, stage) {
	renderers.push({
		renderer:renderer,
		stage: stage
	});
}
function start() {
	function animate() {
		onEnterFrame.dispatch();
		if(skipCounter == 0) {
			for (var i = renderers.length - 1; i >= 0; i--) {
				renderers[i].renderer.render(renderers[i].stage);
			};
			skipCounter = skipFrames;
		} else if (skipFrames > 0 && skipCounter > 0) {
			skipCounter--;
		}
	    requestAnimationFrame(animate);
	}
	requestAnimationFrame(animate);
}

var manager = {
	add: add,
	start: start,
	onEnterFrame: onEnterFrame
}

start();
module.exports = manager;