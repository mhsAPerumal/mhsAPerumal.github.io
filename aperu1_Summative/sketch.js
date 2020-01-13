var blockX = 400;
var blockY = 765;

var ballX = 400;
var ballY = 300;
var ballSize = 50;
var xSpeed = 5;
var ySpeed = 5;

var playerHealth = 3;
var enemyHealth = 3;

var playerHit;
var enemyHit;

//
let level = 0;

//Create the x and y variables for our character
let x;
let y;

//a variable that will store the image
let img;

function preload() {
  //Assign the image file to the variable
  img = loadImage('Knuckle_Dragger.png');
}
function setup() {
  createCanvas(800, 800);
  //Assign the initial values for x and y
  x = random(windowWidth);
  y = random(windowHeight);
}

function draw() {
  if (level ===0) {
    //Show the instructions to the user
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('Pong King', width/2, height/2);

    textSize(16);
    text('Use the right and left arrow keys to move accross the ground. The enemy wil throw a ball that you must hit back for it to lose 1 of its health (it will have three). If you miss a ball, you will lose one of your three healths.\nIf you miss the enemy, it will throw another after. WIth each passing level, there will be another enem and another shape the enemy will throw at you if you touch the other shape. (it will either slow you down or freeze you).', width/2, height/2+50);
    text('Press enter to continue', width/2, height/2+100);

    //If they press enter, move to the next level
    if (keyIsDown(ENTER)) {
      level+=1;
    }
  }
  background(220);
  //adds the image
  image(img,x,y);
  //shows player's and enemy's health
  text("PlayerHealth: " + playerHealth, 700, 30);
  text("EnemyHealth: " + enemyHealth, 100, 30);
  //checks if the ball hits the enemy or block and lowers the health is any of these are true.
  if (ballY > 800) {
    playerHealth -= 1;
  }
  if (ballY == y || ballX == x) {
    enemyHealth -= 1;
  }
  if (playerHealth == 0) {
      endScreen();
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
  moveBall();
  bounce();
  drawPlayer();
  hitBlock();
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

  if(ballY>800 || ballY<0){
	ySpeed = -ySpeed;
  }

}
//draw the ball

function drawBall() {
  ellipse(x,y,ballSize);
}
//draw player
function drawPlayer() {
  rect(blockX,blockY,80,30);
}
//detect wheather the ball hit either the block or the enemy
function hitBlock() {
playerHit = collideRectCircle(blockX,blockY,80,30,x,y,ballSize);
if (playerHit==true) {
  xSpeed = -xSpeed;
}
  if (enemyHit==true) {
  enemyHealth-= 1;
}
}
