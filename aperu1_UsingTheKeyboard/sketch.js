var headX = 100;
var headY = 100;
var bodyX = 74
var bodyY = 117
var rightlegX = 80
var rightlegY = 167
var leftlegX = 105
var leftlegY = 167

function setup() {
  createCanvas(600, 600);
}

function draw() {

  if (keyIsDown(LEFT_ARROW)) {
    headX -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    headX += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    headY -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    headY += 5;
  }



  if (keyIsDown(LEFT_ARROW)) {
    bodyX -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    bodyX += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    bodyY -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    bodyY += 5;
  }



  if (keyIsDown(LEFT_ARROW)) {
    rightlegX -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    rightlegX += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    rightlegY -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    rightlegY += 5;
  }



  if (keyIsDown(LEFT_ARROW)) {
    leftlegX -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    leftlegX += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    leftlegY -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    leftlegY += 5;
  }
  clear();
  fill(255, 0, 0);
  ellipse(headX, headY, 40, 40);
  rect(bodyX, bodyY, 50, 50);
  rect(rightlegX, rightlegY, 13, 35);
  rect(leftlegX, leftlegY, 13, 35);
}
