function setup() {
  // put setup code here
  createCanvas(800, 600);
}

function draw() {
  // put drawing code here
  //Canvas Setup
  //Canvas Setup
//House
var houseWidth = 400;
fill(255, 66, 66);
rect(width/2, height/2, houseWidth,houseWidth/2);
rect(houseWidth*1.6, houseWidth, houseWidth/5,houseWidth/6);
rect(houseWidth*1.6, houseWidth/1.2, houseWidth/5,houseWidth/6);
rect(houseWidth*1.8, houseWidth/1.2, houseWidth/5,houseWidth/6);
rect(houseWidth*1.8, houseWidth, houseWidth/5,houseWidth/6);
//door
rect(houseWidth*1.4,houseWidth/0.95,houseWidth/6,houseWidth/5);
//door knob
ellipse(houseWidth*1.53,houseWidth/0.86,houseWidth/15,houseWidth/15);
//Roof
noFill();
fill(54, 43, 9);
triangle(width/2, height/2, houseWidth/2 + width/2,height/2 - houseWidth/2, width/2 + houseWidth, height/2);
//Smaller House
noFill();
var houseWidth = 150;
rect(width/2, height/2, houseWidth,houseWidth/2);
//Smaller Roof
triangle(width/2, height/2, houseWidth/2 + width/2,height/2 - houseWidth/2, width/2 + houseWidth, height/2);
}
