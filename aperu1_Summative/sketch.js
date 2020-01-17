var blockX = 400;
var blockY = 765;

var ballX = 400;
var ballY = 300;
var ballSize = 50;
var xSpeed = 5;
var ySpeed = 5;

var playerHealth = 3;
var enemyHealth = 3;
var enemy2Health = 3;
var enemy3Health = 3;

var playerHit;
var enemyHit;
var enemy2Hit;
var enemy3Hit;
//
let level = 0;

//Create the x and y variables for the enemy's and circles
var x = 300;
var y = 50;

var otherX = 500;
var otherY = 50;

var lastX = 700;
var lastY = 50;

var circleX = 400;
var circleY = 150;

var circle2X = 600;
var circle2Y = 150;

var circle3X = 800
var circle3Y = 150

//a variable that will store the image
let img;

function preload() {
  //Assign the image file to the variable
  img = loadImage('Knuckle_Dragger.png');
}
function setup() {
  createCanvas(800, 800);
}

function draw() {

  if (level ==0) {
    //Show the instructions to the user
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('Pong King', width/2, height/3);

    textSize(16);
    text('Use the right and left arrow keys to move across the ground. \nThe enemy will throw a ball that you must hit back for it to lose 1 of its health \n(it will have three). If you miss a ball, you will lose one of your three health.\nIf you miss the enemy, it will throw another after. WIth each passing level, \nthere will be another enemy and \nanother shape the enemy will throw at you \nif you touch the other shape. (it will either slow you down or freeze you).', width/2, height/2+50);
    text('Press enter to continue', width/2, height/2+200);

    //If they press enter, move to the next level
    if (keyIsDown(ENTER)) {
      level+=1;
    }
  }
  if (level == 1){
//the circles that if hit will lower enemy health
  ellipse(circleX,circleY,175);
  background(220);

  //adds the image
  image(img,x,y);

  //shows player's and enemy's health
  text("PlayerHealth: " + playerHealth, 700, 30);
  text("EnemyHealth: " + enemyHealth, 100, 30);
  //checks if the ball misses the block and lowers the health if it's true.
  if (ballY > 800) {
    playerHealth -= 1;
  }

  if (playerHealth == 0) {
      text('Game Over', width/2, height/2)
      endScreen();
    }
//Checks if the enemy's health is 0 and if it is it moves to the next level
  if (enemyHealth == 0){
    level = 2
  }
}
  //creates another enemy
  if (level == 2) {
    ellipse(circleX,circleY,175);
    ellipse(circle2X,circle2Y,175);
    background(220);
    image(img,x,y);
    image(img,otherX,otherY);
    text("PlayerHealth: " + playerHealth, 700, 30);
    text("EnemyHealth: " + enemyHealth, 100, 30);
    text("Enemy2Health: " + enemy2Health, 300, 30);
    //resets health
    if (ballY > 800) {
      playerHealth -= 1;
    }

    if (playerHealth == 0) {
      text('Game Over', width/2, height/2)
        endScreen();
      }
  if (enemyHealth == 0 && enemy2Health == 0){
    level = 3
  }
}
  if (level == 3) {
      ellipse(circleX,circleY,175);
      ellipse(circle2X,circle2Y,175);
      ellipse(circle3X,circle3Y,175);
    background(220);
    image(img,x,y);
    image(img,otherX,otherY);
    image(img,lastX,lastotherY);
    text("PlayerHealth: " + playerHealth, 700, 30);
    text("EnemyHealth: " + enemyHealth, 100, 30);
    text("Enemy2Health: " + enemy2Health, 300, 30);
    text("Enemy3Health: " + enemy3Health, 300, 30);
    if (ballY > 800) {
      playerHealth -= 1;
    }

    if (playerHealth == 0) {
      text('Game Over', width/2, height/2)
        endScreen();
      }
  if (enemyHealth == 0 && enemy2Health == 0 && enemy2Health == 0){
    level = 4
  }
  if (level = 4){
    text('You win', width/2, height/2)
  }
}
  //The blocks movement and restrictions
  rect(blockX,blockY,80,30);
  if(keyIsDown(LEFT_ARROW)){
	blockX=blockX-5
  }
	if(keyIsDown(RIGHT_ARROW)){
	blockX=blockX+5
  }
   if(blockX==0){
	blockX=5
  }
	if(blockX==725){
	blockX=720
  }
  drawBall();
  moveBallAndEnemy();
  bounce();
  drawPlayer();
  hitBlockAndEnemy();
}

//move the ball and enemy's

function moveBallAndEnemy() {
ballX = ballX + xSpeed;
ballY = ballY + ySpeed;
x = x + xSpeed;
circleX = circleX + xSpeed;
if(x==750){
  circleX = circleX - xSpeed;
  x = x - xSpeed;
}
if(x==50){
  circleX = circleX + xSpeed;
  x = x + xSpeed;
}

otherX = otherX + xSpeed;
circle2X = circle2X + xSpeed;
if(x==750){
  circle2X = circle2X - xSpeed;
  otherX = otherX - xSpeed;
}
if(x==50){
  circle2X = circle2X + xSpeed;
  otherX = otherX + xSpeed;
}
lastX = lastX + xSpeed;
circle3X = circle3X + xSpeed;
if(x==750){
  circle3X = circle3X - xSpeed;
  lastX = lastX - xSpeed;
}
if(x==50){
  circle3X = circle3X + xSpeed;
  lastX = lastX + xSpeed;
}


}

//see if the ball should bounce
function bounce() {
  if(ballX>800 || ballX<0){
	xSpeed = -xSpeed;
  }

  if(ballY>800 || ballY<0){
	ySpeed = -ySpeed;
  }
}
//draw the ball

function drawBall() {
  ellipse(ballX,ballY,ballSize);
}
//draw player
function drawPlayer() {
  rect(blockX,blockY,80,30);
}
//detect whether the ball hit either the block or the enemy's
function hitBlockAndEnemy() {
playerHit = collideRectCircle(blockX,blockY,80,30,ballX,ballY,ballSize);
enemyHit = collideCircleCircle(ballX,ballY,ballSize,circleX,circleY,175);
enemy2Hit = collideCircleCircle(ballX,ballY,ballSize,circle2X,circle2Y,175);
enemy3Hit = collideCircleCircle(ballX,ballY,ballSize,circle3X,circle3Y,175);
if (playerHit==true) {
  xSpeed = -xSpeed;
}
if (enemyHit==true) {
  enemyHealth = enemyHealth - 1;
}
if (enemy2Hit==true) {
  enemy2Health = enemy2Health - 1;
}
if (enemy3Hit==true) {
  enemy3Health = enemy3Health - 1;
}
}
