function setup() {
  var canvas=createCanvas(480, 480);
	fill(255, 0, 0);
  background(255, 165, 0);
  var increasing=false;
	planSize=10;
	planPos=true;
	var incP=false;
	planX=50;
}

function draw() {
	fill(255, 127, 80);
	rect(0, 0, 500, 200);
	fill(255, 99, 71);
	rect(0, 0, 500, 150);
	fill(230, 37, 60);
	rect(0, 0, 500, 100);
	fill(255, 255, 0);
	ellipse(250,250,200,200);
	fill(0, 0, 139);
	rect(0, 250, 500, 230);
	fill(0, 0, 205);
	rect(0, 290, 500, 190);
	fill(0, 0, 255);
	rect(0, 330, 500, 150);
	fill(30, 144, 255);
	rect(0, 370, 500, 110);
	fill(237, 201, 175);
	rect(0, 410, 500, 70);
}