function setup() {
  // put setup code here
  createCanvas(800, 600);
}

function draw() {
  // put drawing code here
  background(0, 217, 255);
  // The ground
  fill(21, 255, 0);
  rect(0, 300, 400, 100);

  // The sun
  fill(255, 255, 0);
  ellipse(80, 64, 100, 100);

  // The snowman
  fill(255, 255, 255);
  ellipse(200, 300, 150, 150);
  ellipse(200, 200, 100, 100);
  ellipse(200, 120, 75, 75);
}
