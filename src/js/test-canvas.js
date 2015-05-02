jQuery(document).ready(function($) {
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
function drawExample() {
	var canvas = $('#constellation').get(0);
	
	// first test if canvas is supported
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		// create a star and constellation constructor 
		// star {size(10,6,4,coordinates}
		// constellation{star(s)}
		
	} else {
		// if canvas is not supported, do stuff here
		alert('Canvas is not supported');
	}
} // END drawExample()

// notes:
// to center an el use canvas width/height / 2

// initiate the canvas
var canvas = oCanvas.create({
	canvas: "#constellation"
	// background: "#323f48"
});

for (var i = 0, radius = canvas.width / 2; i < 5; i++) {
	createRing(radius);
	radius = radius - (canvas.width / 10);
};

function createRing(radius) {
	// create rings, from edge spaced 80px
	var ring = canvas.display.ellipse({
		x: canvas.width / 2, // centers
		y: canvas.height / 2, // centers
		radius: radius,
		stroke: "1px #d2c6b0",
		fill: "#323f48"
	}).add();
	var centerRing = ring.clone({
		x: canvas.width / 2, // centers
		y: canvas.height / 2, // centers
		stroke: "0.5px #d2c6b0",
		radius: 20,
	}).add();
};

// this draws the vertical, angle, horizontal grid lines
function calculateLines() {
	 
	var angle, endX, endY, startX, startY;
	var centerX = canvas.width / 2,
	    centerY = canvas.height / 2,
	    radius = 20,
	    width = 370,
	    strokes = 7.5;
	for (var i = 0; i < 2; i++) {
		if (i > 0) {
			radius  = 390;
			width   = 10;
			strokes = 0.9375;
		} 
	    for (var j = 0; j < 180; j+=strokes ) {
	    	// http://output.jsbin.com/usomi4/23/edit?html,js,output (this is amazing)
	    	angle = 2.1 + (j * Math.PI / 90);
	        startX = centerX + Math.sin( angle ) * radius;
	        startY = centerY + Math.cos( angle ) * radius;
	        endX = centerX + Math.sin( angle ) * (radius + width);
	        endY = centerY + Math.cos( angle ) * (radius + width);
	        createLines(startX, startY,endX,endY,"1px #d2c6b0");
	    } 
	}	
		 
	// this (and above) can be cleaned up into one function
}
// this draws lines between diff points
function createLines(startX, startY,endX,endY,style) {	
	var line = canvas.display.line({
		start: {
			x: startX,
			y: startY
		},
		end: {
			x: endX,
			y: endY
		},
		stroke: style
	}).add();
}
calculateLines()


var smallStar = 3,
	mediumStar = 4,
	largeStar = 6;

var createStar = canvas.display.ellipse({
	fill: "#d2c6b0",
}).add();

var createDottedLines = function(constellation) {

}

function createConstellations() {
// create an array of constellations
// make another loop, loop through constellations array
// then use existing loop for each constellation
	var conInst; // constellation instance
	for (var j = 0; j < constellations.length; j++) {
		conInst = constellations[j]; // gets constellation object		
		for (var i = 0; i < conInst.constellation.length; i++) {
			createStar.clone({
				x: conInst.constellation[i].x,
				y: conInst.constellation[i].y,
				radius: conInst.constellation[i].size
			}).bind('mouseenter', function(event) {		
				this.radius = this.radius * 2;
				this.redraw();
			}).bind('mouseleave',function() {
				this.radius = this.radius / 2;
				this.redraw();
			}).add();
			if (i < conInst.constellation.length - 1) {
				createLines(conInst.constellation[i].x, conInst.constellation[i].y,conInst.constellation[i+1].x, conInst.constellation[i+1].y,"1px #d2c6b0");
			}		
		}
	}	
}
createConstellations()



// circumference = 2 * Pi * radius (half diameter) or = PI * diameter
// var circumference = 2 * Math.PI * 400;
// var diameter = Math.PI * 800;
// answer = 2513.2741228718346

// find out how to add a circle (star) to the canvas

// find out how to group the stars into constellations

});