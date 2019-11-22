var x, y;
var score = 0;
var miss = 0;
var radius = 100;
var r, g, b;

function setup() {
  //The window will be the canvas
  createCanvas(windowWidth, windowHeight);
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(220);
  // Draw a circle
  noStroke();
  fill(r, g, b);
  ellipse(x, y, radius*2, radius*2);
  /* The player's score will be at the
    top left of the screen*/
  textSize(24);
  fill(0, 0, 255)
  text("Click the circle (Try getting to 200 points!) Score: " + score, 10, 30);
  /* Number of misses will be
    on the top right of the screen*/
  text("(20 miss and you lose!) Miss: " + miss, 800, 30);
  // End game when the player wins or loses
if (score == 200 || miss == 20) {
    endScreen();
  }
}

// When the player clicks the mouse
function mouseClicked() {
  /*To make sure the mouse is inside the circle
    when clicked; the circle will move elsewhere
    on the screen*/
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    newCircle();
    score++; //add a point when the circle is clicked
  }
  
  //add to the "miss" count when the player clicks outside the circle
  if (d > radius) {
    miss += 1;
  }
  //Shrink the circle slightly after every point
  if (score <= 65) {
    radius -= 1;
  }

  //Shrink the circle with every miss
  if (d > radius) {
    radius -= 1;
  }
}

/* When the circle is clicked, a new one
  will appear on the screen*/
function newCircle() {
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

setInterval(newCircle, 1000);

function endScreen() {
  //Player wins at 200 points
  if(score == 200) {
    clear();
    background(220);
    textSize(32);
    fill(r, g, b);
    text('You Win! c:', windowWidth/2, windowHeight/2);
  }
  
  //Player loses if they miss the circle 20 times
  if (miss == 20) {
    clear();
    background(220);
    textSize(32);
    fill(255, 0, 0);
    text('Better luck next time! :c', windowWidth/2, windowHeight/2);
    text('(refresh to play again)', windowWidth/2, 500);
  }

  if (MouseIsPressed && (score == 200 || miss == 20)) {
    score = 0;
    miss = 0;
  }
}
