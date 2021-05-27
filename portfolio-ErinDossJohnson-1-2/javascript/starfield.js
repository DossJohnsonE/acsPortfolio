var s = [];
var xPos;
var yPos;
var ang;
var speed;
var col;
//Particle[100] s;
//your code here...follow the steps listed on the repo..be creative! (like you have been)
function setup(){
	//your code here
	createCanvas(500,500);
	//s = new Particle[100];
	for(int i=0; i<101; i++){
		if(i==0){
			s[i]=new OddballParticle();
		}else if(i==1){
			s[i]=new JumboParticle();
		}else{
			s[i]=new NormalParticle();
		}
	}
}
function draw(){
	//your code here
	background(50);
  fill(255, 240, 0);
	for(int i=100; i>=0; i--){
		s[i].show();
		s[i].move();
	}
}
class NormalParticle
{
	//your code here
	NormalParticle(){
		this.xPos=(Math.random()*200)+150;
		this.yPos=(Math.random()*200)+150;
		this.ang=Math.random()*(2*Math.PI);
		this.speed=(Math.random()*5)-2;
	}
	move(){
		if (this.xPos>width-10) {
      this.xPos=width-10;
      this.speed*=-1;
    }
    if (this.xPos<10) {
      this.speed*=-1;
    }
    if (this.yPos>height-10) {
      this.yPos=height-10;
      this.speed*=-1;
    }
    if (this.yPos<10) {
      this.speed*=-1;
    }
		this.xPos+=Math.cos(this.ang)*this.speed;
		this.yPos+=Math.sin(this.ang)*this.speed;
	}
	show(){
		this.col =(int)(Math.random()*3);
		if(this.col==0){
			fill(88, 148, 196);
		}else if(this.col==1){
			fill(89, 130, 196);
		}else if(this.col==2){
			fill(58, 114, 168);
		}
		ellipse(this.xPos, this.yPos, 15, 15);
	}
}
class OddballParticle extends Particle //uses an interface
{
	OddballParticle(){
		this.xPos=0;
		this.yPos=(Math.random()*200)+150;
	}
	move(){
		this.xPos++;
	}
	show(){
		fill(163, 115, 136);
		rect(this.xPos, this.yPos, 20, 20);
	}
}
class JumboParticle extends NormalParticle
{
	JumboParticle(){
		this.xPos=(Math.random()*200)+150;
		this.yPos=(Math.random()*200)+150;
		this.ang=Math.random()*(2*Math.PI);
		this.speed=(Math.random()*5)-2;
	}
	move(){
		if (this.xPos>width-10) {
      this.xPos=width-10;
      this.speed*=-1;
    }
    if (this.xPos<10) {
      this.speed*=-1;
    }
    if (this.yPos>height-10) {
      this.yPos=height-10;
      this.speed*=-1;
    }
    if (this.yPos<10) {
      this.speed*=-1;
    }
		this.xPos+=Math.cos(this.ang)*this.speed;
		this.yPos+=Math.sin(this.ang)*this.speed;
	}
	show(){
		this.col =(int)(Math.random()*3);
		if(this.col==0){
			fill(88, 148, 196);
		}else if(this.col==1){
			fill(89, 130, 196);
		}else if(this.col==2){
			fill(58, 114, 168);
		}
		ellipse(this.xPos, this.yPos, 50, 50);
	}
}