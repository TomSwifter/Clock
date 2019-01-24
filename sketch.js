// Adapted from https://readyletsgo.github.io/

var xPos = 20; // starting x position to draw
var yPos = 20;  // starting y position to draw
var barHeight = 180; // height of each bar
var barMargin = 0; // space between each bar
var barMax = 760; // maximum width of each bar <-- this changes over time

//this gets called only once in the very beginning
function setup() {
	createCanvas(800, 600);
}

//this gets called every frame (about 60 frames per second)
function draw() {
	background(255);
	// fill(0, 255, 0);

	var h = map(hour(), 0, 24, 0, barMax); // Map the function hour() to values from 0 - barMax
	var m = map(minute(), 0, 60, 0, barMax);
	var s = map(second(), 0, 60, 0, barMax);

	//draw 3 background bars to indicate the max width
	fill(153, 204, 255);
	rect(xPos, yPos, barMax, barHeight);
	rect(xPos, yPos + barHeight + barMargin, barMax, barHeight);
	rect(xPos, yPos + barHeight * 2 + barMargin * 2, barMax, barHeight);

	fill(0, 102, 255);
	rect(xPos, yPos, h, barHeight);   // Bar for hours
	fill(51, 153, 255);
	rect(xPos, yPos + barHeight + barMargin, m, barHeight);   // Bar for minute
	fill(102, 204, 255);
	rect(xPos, yPos + barHeight * 2 + barMargin * 2, s, barHeight);   // Bar for second
}	

background(225);
textSize(32);
fill(180);
text(hour(), 10, 30);
fill(100);
text(minute(), 10, 60);
fill(0);
text(second(), 10, 90);
