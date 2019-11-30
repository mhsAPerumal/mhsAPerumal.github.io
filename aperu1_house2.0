function setup() {
  // put setup code here
  createCanvas(800, 600);

}

function draw() {
  // put drawing code here

drawNeighborhood( 200, 100, 50, 50, "red");
}

function drawHouse(i, j, k, l, colour) {
rect(i, j, k, l);
  triangle(i, j, (i+(i+l))/2, j-50,i+50 ,j );
  rect(i+15,j+27,23,23);
  ellipse(i+30, j+40, 10);
  rect(i+15, j+15, 10, 10);
  rect(i+25, j+15, 10, 10);
  rect(i+25, j+5, 10, 10);
  rect(i+15, j+5, 10, 10);

fill(colour);

}


function drawBlock(x,y,w,z, colour) {

drawHouse(x, y, w, z, colour);
drawHouse(x+60, y, w, z, colour);
drawHouse(x+120, y, w, z, colour);
drawHouse(x+180, y, w, z, colour);
  


}


function drawNeighborhood(x, y, a, b, colour) {

  drawBlock(x, y, a, b, "purple");
  drawBlock(x, y+75, a, b, colour);
  drawBlock(x, y+150, a, b, "blue");
  drawBlock(x, y+250, a, b, "pink");
  drawBlock(x, y+350, a, b, colour);
  drawBlock(x, y+450, a, b, colour);

}
