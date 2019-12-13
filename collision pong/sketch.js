//global variables
var ballX = 400;
var ballY = 300;
var ballSize = 50;
var xSpeed = 5;
var ySpeed = 5;


var player1X = 0;
var player1Y = 250;

var player2X = 775;
var player2Y = 200;

var paddleWidth = 25;
var paddleheight = 100;

var player1Hit;
var player2Hit;

//obstical size
var obstical1X = 200
var obstical1Y = 150
var obstical1Size = 1

var obstical2X = 500
var obstical2Y = 150
var obstical2Size = 1

var obstical3X = 200
var obstical3Y = 450
var obstical3Size = 1

var obstical4X = 500
var obstical4Y = 450
var obstical4Size = 1

//obsticals
var obstical1;

var obstical2;

var obstical3;

var obstical4;

//players scores
var player1Score = 0 + 1
var player2Score = 0 + 1


function setup() {
  // put setup code here
  createCanvas(800, 600);


}

function draw() {
  // put drawing code here
  background(131);

  //score increase
  text('player1Score:0' + player2Score, 5, 50);
  if(ballX == 0) {
    ballX = 400;
    player1Score = player1Score + 1;
  }
  text('player2Score:0' + player1Score, 700, 50);
  if(ballX == 800) {
    ballX = 400;
    player2Score = player2Score + 1;
  }

  if (player1Score == 1) {
    text('player1 wins:' 300,400);
    clear();
  }
  if (player2Score == 1) {
    text('player2 wins:' 300,400 );
    clear();
  }

moveBall();
bounce();
drawPlayers();

ellipse(obstical1X,obstical1Y,obstical1Size);
ellipse(obstical2X,obstical2Y,obstical2Size);
ellipse(obstical3X,obstical3Y,obstical3Size);
ellipse(obstical4X,obstical4Y,obstical4Size);

drawBall();
hitPaddle();
hitObsticals();

if (keyIsDown(DOWN_ARROW)) {
  player2Y = player2Y + 5;
}
if (keyIsDown(UP_ARROW)) {
  player2Y = player2Y - 5;
}
if (keyIsDown(83)) {
  player1Y = player1Y + 5;
}
if (keyIsDown(87)) {
  player1Y = player1Y - 5;
}
}


//move the ball

function moveBall() {
ballX = ballX + xSpeed;
ballY = ballY + ySpeed;
}

//see if the ball should bounce
function bounce() {
  if(ballX>800 || ballX<0){
    xSpeed = -xSpeed;
  }

  if(ballY>600 || ballY<0){
    ySpeed = -ySpeed;
  }

}
//draw the ball

function drawBall() {
  ellipse(ballX,ballY,ballSize);
}

//draw player 1
function drawPlayers() {
  rect(player1X,player1Y,paddleWidth,paddleheight);
  rect(player2X,player2Y,paddleWidth,paddleheight);
}

//detect wheather the ball hit either of the paddles
function hitPaddle() {
player1Hit = collideRectCircle(player1X,player1Y,paddleWidth,paddleheight,ballX,ballY,ballSize);
player2Hit = collideRectCircle(player2X,player2Y,paddleWidth,paddleheight,ballX,ballY,ballSize);
if (player1Hit==true || player2Hit==true) {
  xSpeed = -xSpeed;
}
}

function hitObsticals() {
  obstical1 = collideCircleCircle(obstical1X,obstical1Y,obstical1Size,ballX,ballY,ballSize);
  obstical2 = collideCircleCircle(obstical2X,obstical2Y,obstical2Size,ballX,ballY,ballSize);
  obstical3 = collideCircleCircle(obstical3X,obstical3Y,obstical3Size,ballX,ballY,ballSize);
  obstical4 = collideCircleCircle(obstical4X,obstical4Y,obstical4Size,ballX,ballY,ballSize);

  if (obstical1 == true) {
    xSpeed = -xSpeed
  }
  if (obstical2 == true) {
    xSpeed = -xSpeed;
  }
  if (obstical3 == true) {
      xSpeed = -xSpeed;
  }
  if (obstical4 == true) {
      xSpeed = -xSpeed;
  }
}
