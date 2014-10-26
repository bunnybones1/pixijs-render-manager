var loadAndRunScripts = require('loadandrunscripts');
loadAndRunScripts([
	'bower_components/pixi.js/bin/pixi.js'
],
function() {
	var View = require('pixijs-managed-view');
	var renderManager = require('./');

	var TestCircle = require('./TestCircle');
	var view = new View();
	console.log(view);
	var circle = new TestCircle(50, 150, 50);
	view.stage.addChild(circle);
	
	renderManager.add(view.renderer, view.stage);
	renderManager.onEnterFrame.add(function() {
		circle.x = Math.random() * window.innerWidth;
		circle.y = Math.random() * window.innerHeight;
	})
	renderManager.start();
})