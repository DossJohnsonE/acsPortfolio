var startX=(int)(50+(Math.random()*300));
var startY=0;
var endX=0;
var endY=150;
function setup() {     
	createCanvas(400, 400);
	strokeWeight(4);
	background(0);
}   
function draw() {  
	var r1 =((int)(Math.random()*255));
	var g1 =((int)(Math.random()*255));
	var b1 =((int)(Math.random()*255));
	stroke(r1,g1,b1);
	while(startY<390){
		endX= startX+((int)(-9+(Math.random()*18)));
		endY= startY+((int)(Math.random()*9));
		line(startX,startY,endX,endY);
		startX=endX;
		startY=endY;
	}
}
function mousePressed() {
	startX=(int)(50+(Math.random()*300));
	startY=0;
	endX=0;
	endY=150;
}