var cells = [];
function setup() {
	createCanvas(480, 480);
}
function draw() {
	background(119,136,153);
	for(var i = 0; i<16; i++){
		cells[i]=new Cell();
	}
	for(var j = 0; j<16; j++){
		cells[j].pickColor();
		cells[j].move();
	}
}
class Cell 
{
	constructor(){
	    this.xPos = 0;
		this.yPos = 0;
		this.col = 0;
	}
	pickColor(){
		this.col = (int)(Math.random()*6);
		if(this.col==0){
			fill(211,211,211);
		}else if(this.col==1){
			fill(192,192,192);
		}else if(this.col==2){
			fill(169,169,169);
		}else if(this.col==3){
			fill(128,128,128);
		}else if(this.col==4){
			fill(105,105,105);
		}else if(this.col==5){
			fill(0,0,0);
		}
		stroke(0);
	}
	move(){
		this.xPos=mouseX+(int)(Math.random()*40);
		this.yPos=mouseY+(int)(Math.random()*40);
		ellipse(this.xPos, this.yPos, 10, 10);
	}
}