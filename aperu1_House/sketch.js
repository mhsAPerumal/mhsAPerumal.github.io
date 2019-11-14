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
//star
line(149, 80, 181, 84);
line(151, 79, 168, 111);
line(168, 113, 167, 77);
line(168, 73, 150, 109);
line(151, 109, 181, 83);

line(169+20, 100+20, 201+20, 104+20);
line(171+20, 99+20, 188+20, 131+20);
line(188+20, 133+20, 187+20, 97+20);
line(188+20, 93+20, 170+20, 129+20);
line(171+20, 129+20, 201+20, 103+20);

line(149+40, 80-40, 181+40, 84-40);
line(151+40, 79-40, 168+40, 111-40);
line(168+40, 113-40, 167+40, 77-40);
line(168+40, 73-40, 150+40, 109-40);
line(151+40, 109-40, 181+40, 83-40);

line(149, 80, 181, 84);
line(151, 79, 168, 111);
line(168, 113, 167, 77);
line(168, 73, 150, 109);
line(151, 109, 181, 83);

line(149, 80, 181, 84);
line(151, 79, 168, 111);
line(168, 113, 167, 77);
line(168, 73, 150, 109);
line(151, 109, 181, 83);

line(149, 80, 181, 84);
line(151, 79, 168, 111);
line(168, 113, 167, 77);
line(168, 73, 150, 109);
line(151, 109, 181, 83);

line(149, 80, 181, 84);
line(151, 79, 168, 111);
line(168, 113, 167, 77);
line(168, 73, 150, 109);
line(151, 109, 181, 83);

line(149, 80, 181, 84);
line(151, 79, 168, 111);
line(168, 113, 167, 77);
line(168, 73, 150, 109);
line(151, 109, 181, 83);

line(149, 80, 181, 84);
line(151, 79, 168, 111);
line(168, 113, 167, 77);
line(168, 73, 150, 109);
line(151, 109, 181, 83);
}
