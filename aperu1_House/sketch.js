function setup() {
  // put setup code here
  createCanvas(800, 600);
}

function draw() {
//House
var houseWidth = 400;
background(7, 43, 48);
fill(255, 66, 66);
rect(width/2, height/2, houseWidth,houseWidth/2);

//Windows
rect(houseWidth*1.6, houseWidth, houseWidth/5,houseWidth/6);
rect(houseWidth*1.6, houseWidth/1.2, houseWidth/5,houseWidth/6);
rect(houseWidth*1.8, houseWidth/1.2, houseWidth/5,houseWidth/6);
rect(houseWidth*1.8, houseWidth, houseWidth/5,houseWidth/6);

//door
rect(houseWidth*1.4,houseWidth/0.953,houseWidth/6,houseWidth/5);
//door knob
ellipse(houseWidth*1.53,houseWidth/0.86,houseWidth/15,houseWidth/15);

//Roof
noFill();
fill(54, 43, 9);
triangle(width/2, height/2, houseWidth/2 + width/2,height/2 - houseWidth/2, width/2 + houseWidth, height/2);
  
//Smaller House
noFill();
var smallhouseWidth = 200;
rect(width/2, height/2, smallhouseWidth,smallhouseWidth/2);

//Smaller windows
rect(smallhouseWidth*2.5, smallhouseWidth*1.8, smallhouseWidth/5,smallhouseWidth/6);
rect(smallhouseWidth*2.5, smallhouseWidth*1.631, smallhouseWidth/5,smallhouseWidth/6);
rect(smallhouseWidth*2.7, smallhouseWidth*1.631, smallhouseWidth/5,smallhouseWidth/6);
rect(smallhouseWidth*2.7, smallhouseWidth*1.8, smallhouseWidth/5, smallhouseWidth/6);
  
//smaller door
rect(smallhouseWidth*2.3, smallhouseWidth*1.8, smallhouseWidth/6, smallhouseWidth/5);
//smaller door knob
ellipse(smallhouseWidth*2.43, smallhouseWidth*1.91, smallhouseWidth/15, smallhouseWidth/15);

//Smaller Roof
triangle(width/2, height/2, smallhouseWidth/2 + width/2,height/2 - smallhouseWidth/2, width/2 + smallhouseWidth, height/2);

//moon
fill(76, 87, 86);
ellipse(75,75,150);
ellipse(22,85,20);
ellipse(32,45,20);
ellipse(52,105,20);
ellipse(92,85,20);
ellipse(82,35,20);
ellipse(109,55,20);
ellipse(122,75,20);
ellipse(57,75,20);
ellipse(111,115,20);
}
