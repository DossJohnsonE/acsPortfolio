function setup() {
  //size(600, 500);
    var canvas=createCanvas(600, 500);
	//PFont f = createFont("Georgia");
     textSize(43);
  textFont('Georgia');
	background(255, 255, 200);
}

function draw() {
	fill(155, 206, 225);
	var t = "Beaches Haiku";
	var l1 = "Sound scatters the beach";
	var l2 = "Waves crash on the sandy shore";
	var l3 = "Blue water shimmers";
	textSize(48);
	text(t, 100, 100);
	textSize(30);
	text(l1, 100, 200);
	text(l2, 100, 250);
	text(l3, 100, 300);
	fill(108, 140, 161);
	var wave = "〰";
	text(wave, mouseX, mouseY);
	fill(255, 255, 255);
	text(wave, mouseY, mouseX);
}