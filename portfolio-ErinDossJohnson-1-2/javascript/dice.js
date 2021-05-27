var  diceList =[];
var dieTotal=0;
function setup(){
	createCanvas(520,520);
	background(0);
	noLoop();
}
function draw(){
	stroke(0);
	//ADD TEXT 
	diceList[0]= new Die(125, 125);
	diceList[1]= new Die(225, 125);
	diceList[2]= new Die(325, 125);
	diceList[3]= new Die(125, 225);
	diceList[4]= new Die(225, 225);
	diceList[5]= new Die(325, 225);
	diceList[6]= new Die(125, 325);
	diceList[7]= new Die(225, 325);
	diceList[8]= new Die(325, 325);
	for(var i=0; i<diceList.length; i++){
		diceList[i].roll();
		diceList[i].show();
	}
	var bottom="Click again to reroll!";
	var top="You rolled a total of " + dieTotal;
	fill(255);
	textSize(24);
	text(top, 135, 80);
	text(bottom, 150, 450);
}
function mousePressed(){
	background(0);
	redraw();
	dieTotal=0;
}
class Die {
	
	constructor(x, y){
		this.xPos=x;
		this.yPos=y;
      this.rollnum=0;
		//variable initializations here
	}
	roll(){
		this.rollNum=(int)(Math.random()*5+1);
		dieTotal+=this.rollNum;
		return this.rollNum;
		//SET ARRAY
		//your code here
	}
	show(){
		stroke(255, 255, 255);
		fill(255);
		rect(this.xPos-15, this.yPos-15, 90, 90);
		stroke(0);
		fill(0);
		if(this.rollNum%2==1){
			ellipse(this.xPos+30, this.yPos+30, 15, 15);
		}
		if (this.rollNum>=2){
			ellipse(this.xPos+5, this.yPos+5, 15, 15);
			ellipse(this.xPos+55, this.yPos+55, 15, 15);
		}
		if(this.rollNum>=4){
			ellipse(this.xPos+55, this.yPos+5, 15, 15);
			ellipse(this.xPos+5, this.yPos+55, 15, 15);
		}
		if(this.rollNum==6){
			ellipse(this.xPos+5, this.yPos+30, 15, 15);
			ellipse(this.xPos+55, this.yPos+30, 15, 15);
		}
		//your code here
	}
}
