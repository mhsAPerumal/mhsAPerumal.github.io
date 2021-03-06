//blocks variables
var blockX = 400;
var blockY = 765;
var blockSpeed = 5;

//balls and enemy's movment
var ballX = 400;
var ballY = 300;
var ballSize = 50;
var xSpeed = 5;
var ySpeed = 5;
var enemyXSpeed = 3;
var enemy2XSpeed = 5;
var enemy3XSpeed = 7;

//the health of the characters
var playerHealth = 3;
var enemyHealth = 3;
var enemy2Health = 3;
var enemy3Health = 3;

//stores the collision information
var playerHit;
var enemyHit;
var enemy2Hit;
var enemy3Hit;

//stores the triangles collision information
var triangleHit;
var triangle2Hit;
var triangle3Hit;

//stores the rectangles collision information
var rectHit;
var rect2Hit;
var rect3Hit;
var rect4Hit;

//the levels o the game
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

var circle3X = 800;
var circle3Y = 150;

//variables for the triangle and rectangle that will slow/freeze you
var poly = [];
var poly2 = [];
var poly3 = [];

var tX = 585;
var tX2 = 614;
var tX3 = 643;
var tY = 204;
var tY2 = 268;
var tY3 = 204;

//second triangle variables
var t2X = 288;
var t2X2 = 314;
var t2X3 = 343;
var t2Y = 204;
var t2Y2 = 268;
var t2Y3 = 204;

//third triangle variables
var t3X = 90;
var t3X2 = 115;
var t3X3 = 140;
var t3Y = 204;
var t3Y2 = 268;
var t3Y3 = 204;

var tYChange = 6;

//rectangles that will freeze you
var rX = 100;
var rY = 150;

var r2X = 300;
var r2Y = 150;

var r3X = 500;
var r3Y = 150;

var r4X = 700;
var r4Y = 150;

rYchange = 6;
//the variable to store the time
var s;

//a variable that will store the image
let img;

//create a variable that will store the sound files
var boop;
var whistle;
var winSound;
var music;
function preload() {
  //Assign the image file to the variable
  img = loadImage('Knuckle_Dragger.png');
  //for this to work make sure the sound file is in the same folder as sketch.js
boop = loadSound("bounce.mp3");
whistle = loadSound("whistle.sound.mp3");
winSound = loadSound("Win sound.mp3");
music = loadSound("background music.mp3");

}
function setup() {
  createCanvas(800, 800);
  music.loop();

}

function draw() {
	var s = second();

  if (level ==0) {
	//Show the instructions to the user
	background(0);
	fill(255);
	textAlign(CENTER, CENTER);
	textSize(32);
	text('Pong King', width/2, height/3);

	textSize(16);
	text('Use the right and left arrow keys to move across the ground. \nThe enemy will throw a ball that you must hit back for it to lose 1 of its health \n(it will have three). If you miss a ball, you will lose one of your three health.\nIf you miss the enemy, it will throw another after. WIth each passing level, \nthere will be another enemy and \nanother shape the enemy will throw at you \nif you touch the other shape. (it will either slow you down or freeze you).', width/2, height/2+50);
	text('Press shift to continue and enter to restart whenever', width/2, height/2+200);

	//If they press enter, move to the next level
	if (keyIsDown(16)) {
  	level+=1;
  	whistle.play();
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
    enemyHealth = 3;
    enemy2Health = 3;
    playerHealth = 3;

  }
}
  //creates another enemy
  if (level == 2) {

	ellipse(circleX,circleY,175);
	ellipse(circle2X,circle2Y,175);
	background(220);

      poly[0] = createVector(tX,tY);
      poly[1] = createVector(tX2,tY2);
      poly[2] = createVector(tX3,tY3);

    	poly2[0] = createVector(t2X,t2Y);
    	poly2[1] = createVector(t2X2,t2Y2);
    	poly2[2] = createVector(t2X3,t2Y3);

    	poly3[0] = createVector(t3X,t3Y);
    	poly3[1] = createVector(t3X2,t3Y2);
    	poly3[2] = createVector(t3X3,t3Y3);

    	triangle(tX,tY,tX2,tY2,tX3,tY3);
    	triangle(t2X,t2Y,t2X2,t2Y2,t2X3,t2Y3);
    	triangle(t3X,t3Y,t3X2,t3Y2,t3X3,t3Y3);

	image(img,x,y);
	image(img,otherX,otherY);

  text('Current second: \n' + s, 100, 70);
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

if(enemyHealth == 0){
  x = 1000
  circleX == 1000
}
if(enemy2Health == 0){
  otherX = 1000
  circle2X == 1000
}

if (enemyHealth <= 0 && enemy2Health <= 0){
  level = 3
  enemyHealth = 3;
  enemy2Health = 3;
  enemy3Health = 3;
  playerHealth = 3;
  x = 300;
  circleX = 400;
  otherX = 500;
  circle2X = 600;
}

if (s==15 || s==23|| s==33|| s==43 || s== 52){
  tY = tY + tYChange;
  tY2 = tY2 + tYChange;
  tY3 = tY3 +  tYChange;

  t2Y = t2Y + tYChange;
  t2Y2 = t2Y2 + tYChange;
  t2Y3 = t2Y3 +  tYChange;

  t3Y = t3Y + tYChange;
  t3Y2 = t3Y2 + tYChange;
  t3Y3 = t3Y3 +  tYChange;
}

if(tY>800){
  tX = 585;
  tX2 = 614;
  tX3 = 643;
  tY = 204;
  tY2 = 268;
  tY3 = 204;
  t2X = 288;
  t2X2 = 314;
  t2X3 = 343;
  t2Y = 204;
  t2Y2 = 268;
  t2Y3 = 204;
  t3X = 90;
  t3X2 = 115;
  t3X3 = 140;
  t3Y = 204;
  t3Y2 = 268;
  t3Y3 = 204;
}
}
  if (level == 3) {

if(x == 300)
    x = x + enemyXSpeed;
    circleX = circleX + enemyXSpeed;

    otherX = otherX + enemy2XSpeed;
    circle2X = circle2X + enemy2XSpeed;

  	ellipse(circleX,circleY,175);
  	ellipse(circle2X,circle2Y,175);
  	ellipse(circle3X,circle3Y,175);
	background(220);

//triangles
    poly[0] = createVector(tX,tY);
    poly[1] = createVector(tX2,tY2);
    poly[2] = createVector(tX3,tY3);

    poly2[0] = createVector(t2X,t2Y);
    poly2[1] = createVector(t2X2,t2Y2);
    poly2[2] = createVector(t2X3,t2Y3);

    poly3[0] = createVector(t3X,t3Y);
    poly3[1] = createVector(t3X2,t3Y2);
    poly3[2] = createVector(t3X3,t3Y3);

    triangle(tX,tY,tX2,tY2,tX3,tY3);
    triangle(t2X,t2Y,t2X2,t2Y2,t2X3,t2Y3);
    triangle(t3X,t3Y,t3X2,t3Y2,t3X3,t3Y3);

    if (s==1 ||s==15 || s==25|| s==35 || s==45|| s==55){
      tY = tY + tYChange;
      tY2 = tY2 + tYChange;
      tY3 = tY3 +  tYChange;

      t2Y = t2Y + tYChange;
      t2Y2 = t2Y2 + tYChange;
      t2Y3 = t2Y3 +  tYChange;

      t3Y = t3Y + tYChange;
      t3Y2 = t3Y2 + tYChange;
      t3Y3 = t3Y3 +  tYChange;
    }

    if(rY>800){
      tX = 585;
      tX2 = 614;
      tX3 = 643;
      tY = 204;
      tY2 = 268;
      tY3 = 204;
      t2X = 288;
      t2X2 = 314;
      t2X3 = 343;
      t2Y = 204;
      t2Y2 = 268;
      t2Y3 = 204;
      t3X = 90;
      t3X2 = 115;
      t3X3 = 140;
      t3Y = 204;
      t3Y2 = 268;
      t3Y3 = 204;
    }

//rectangles
rect(rX,rY,30,80);
rect(r2X,r2Y,30,80);
rect(r3X,r3Y,30,80);
rect(r4X,r4Y,30,80);

if(rY>800){
  rY = 150;
  r2Y = 150;
  r3Y = 150;
  r4Y = 150;
}

if (s==5 || s==20|| s==30|| s==40|| s==50){
  rY = rY + rYchange;

  r2Y = r2Y + rYchange;

  r3Y = r3Y + rYchange;

  r4Y = r4Y + rYchange;

  tY = tY + tYChange

  t2Y = t2Y + tYChange

  t3Y = t3Y + tYChange
}

	image(img,x,y);
	image(img,otherX,otherY);
	image(img,lastX,lastY);

  text('Current second: \n' + s, 100, 70);
	text("PlayerHealth: " + playerHealth, 700, 30);
	text("EnemyHealth: " + enemyHealth, 100, 30);
	text("Enemy2Health: " + enemy2Health, 300, 30);
	text("Enemy3Health: " + enemy3Health, 500, 30);

	if (ballY > 800) {
  	playerHealth -= 1;
	}

	if (playerHealth == 0) {
  	text('Game Over', width/2, height/2)
    	endScreen();
  	}

    if(enemyHealth == 0){
      x = 1000
      circleX == 1000
    }

    if(enemy2Health == 0){
      otherX = 1000
      circle2X == 1000
    }

    if(enemy3Health == 0){
      lastX = 1000
      circle3X == 1000
    }

  	if (enemyHealth <= 0 && enemy2Health <= 0 && enemy3Health <= 0){
    	level = 4
  	}
}

if (level == 4){
  background(220);
  text('You win', width/2, height/2)
  winSound.play();
    level = 5;
}

if(level == 5){
  background(220);
  text('You win', width/2, height/2)
}
if(keyIsDown(ENTER)){
  level = 0
}
  //The blocks movement and restrictions
  rect(blockX,blockY,80,30);
  if(keyIsDown(LEFT_ARROW)){
    blockX=blockX-blockSpeed
  }
    if(keyIsDown(RIGHT_ARROW)){
    blockX=blockX+blockSpeed
  }
   if(blockX==0){
    blockX=5
  }
    if(blockX==725){
    blockX=720
  }

  drawBall();
  moveBall();
  bounce();
  drawPlayer();
  hitBlockAndEnemy();
  moveEnemy();
  bounceEnemy();

}

//move the ball and enemy's

function moveBall() {
ballX = ballX + xSpeed;
ballY = ballY + ySpeed;
}

function moveEnemy(){
  x = x + enemyXSpeed;
  circleX = circleX + enemyXSpeed;

  otherX = otherX + enemy2XSpeed;
  circle2X = circle2X + enemy2XSpeed;

  lastX = lastX + enemy3XSpeed;
  circle3X = circle3X + enemy3XSpeed;


}
function bounceEnemy(){
  if(x>800 || x<0){
  enemyXSpeed = -enemyXSpeed;
  }
  if(circleX > 800 || circleX < 0){
  enemyXSpeed = -enemyXSpeed;
  }

  if(otherX>800 || otherX<0){
  enemy2XSpeed = -enemy2XSpeed;
  }
  if(circle2X>800 || circle2X<0){
  enemy2XSpeed = -enemy2XSpeed;
  }

  if(lastX>800 || lastX<0){
  enemy3XSpeed = -enemy3XSpeed;
  }
  if(circle3X>800 || circle3X<0){
  enemy3XSpeed = -enemy3XSpeed;
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
  var s = second();
playerHit = collideRectCircle(blockX,blockY,80,30,ballX,ballY,ballSize);
enemyHit = collideCircleCircle(ballX,ballY,ballSize,circleX,circleY,175);
enemy2Hit = collideCircleCircle(ballX,ballY,ballSize,circle2X,circle2Y,175);
enemy3Hit = collideCircleCircle(ballX,ballY,ballSize,circle3X,circle3Y,175);

triangleHit = collideRectPoly(blockX,blockY,80,30,poly);
triangle2Hit = collideRectPoly(blockX,blockY,80,30,poly2);
triangle3Hit = collideRectPoly(blockX,blockY,80,30,poly3);

rectHit = collideRectRect(blockX,blockY,80,30,rX,rY,30,80);
rect2Hit = collideRectRect(blockX,blockY,80,30,r2X,r2Y,30,80);
rect3Hit  = collideRectRect(blockX,blockY,80,30,r3X,r3Y,30,80);
rect4Hit = collideRectRect(blockX,blockY,80,30,r4X,r4Y,30,80);

if (playerHit==true) {
  if ((ballX+(ballSize/2)) == (blockX+40) || (ballX+(ballSize/2)) == (blockX-40)) {
   	 ballY = blockY - 30;
    }
	ySpeed = -ySpeed;
	boop.play();
}

if(ballY>160){
  circleX = x + 100;
  circle2X = otherX + 100;
  circle3X = lastX + 100;
}

if (enemyHit==true && ballY<160) {
  enemyHealth = enemyHealth - 1;
  circleX = 900;
}

if (enemy2Hit==true && ballY<160 && enemy2Health >= 0) {
  enemy2Health = enemy2Health - 1;
  circle2X = 900;
}
if (enemy3Hit==true && ballY<160 && enemy3Health >= 0) {
  enemy3Health = enemy3Health - 1;
  circle3X = 900;
}

if(triangleHit==true){
  blockSpeed = 2
}

if(triangle2Hit==true){
  blockSpeed = 2
}

if(triangle3Hit==true){
  blockSpeed = 2
}

if (s == 10 || s == 20 || s == 30 || s== 40 || s == 50 || s == 1) {
  blockSpeed = 5
}

if(rectHit == true){
  blockSpeed = 0
}
if(rect2Hit == true){
  blockSpeed = 0
}
if(rect3Hit == true){
  blockSpeed = 0
}
if(rect4Hit == true){
  blockSpeed = 0
}

if(s == 10 || s == 20 || s == 30 || s== 40 || s == 50 || s == 1)
  blockSpeed = 5
}
