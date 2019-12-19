/*
We will initially set the level variable to 0
Level 0 --> Instructions
Level 1 --> Game
Level 2 --> Win Screen
*/
let level = 0;

//Create the x and y variables for our character
let x;
let y;

//Create a variable that will store our image
let img;

var ballX = 400;
var ballY = 50;
var ballSize = 50;
var xSpeed = 5;
var ySpeed = 5;

var alienHeadX = 432
var alienHeadY = 342

var circleHit;
function preload() {
  //Assign the image file to the variable
  img = loadImage('alien.png');
}


function setup() {
  // put setup code here
  //Create the canvas
  createCanvas(800,600);

  //Assign the initial values for x and y
  x = width/2;
  y = height/2;
}

function draw() {
  // put drawing code here


/*--------------------INSTRUCTIONS--------------------*/
  if (level ===0) {
    //Show the instructions to the user
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('ALIEN DOMINATION', width/2, height/2);

    textSize(16);
    text('The Glorg alien race, is a species determined to take over the earth. \nUse your arrow keys to use your ball to touch the alien to stop it from getting to earth.', width/2, height/2+50);
    text('Press enter to start level one (with each passing level, you get slower and the alien gets faster)', width/2, height/2+100);

    //If they press enter, move to the next level (game)

    if (keyIsDown(ENTER)) {
      level+=1;
    }
  }
  /*--------------------END INSTRUCTIONS--------------------*/


  /*--------------------GAME--------------------*/
  else if (level ===1) {

    //Change the background and add the character

    background(255);
    ellipse(alienHeadX,alienHeadY,42)
    image(img,x,y);
    //Move the character based on input from the user (arrow keys)
    if (keyIsDown(RIGHT_ARROW)) {
    ballX = ballX + xSpeed
    }

    if (keyIsDown(LEFT_ARROW)) {
      ballX = ballX + -xSpeed
    }

    if (keyIsDown(UP_ARROW)) {
      ballY = ballY + -ySpeed;
    }

    if (keyIsDown(DOWN_ARROW)) {
      ballY = ballY + ySpeed;
    }

    //If the user leaves the screen, they win so move on to the next level (win)
    if (x>width || x<0 || y>height || y<0) {
      level+=1
    }
  }
  /*--------------------END GAME--------------------*/

  /*--------------------WIN SCREEN--------------------*/
  else if (level===2) {
    //Change the backround and inform the user that they won
    background(0,255,0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('YOU WIN!', width/2, height/2);
    textSize(16);
    text('Press enter to play again', width/2, height/2+50);

    //If the user presses enter, reset the x and y value and reset the level to level 1 (game)
    if (keyIsDown(ENTER)) {
      x=width/2;
      y=height/2;
      level=1;
    }

  /*--------------------END WIN SCREEN--------------------*/
}
//When the level starts, this draw a ball
  if (level == 1) {
  fill(255,0,0);
  ellipse(ballX,ballY,ballSize);


}
//This stops the ball from going off the screen
if (ballX>775) {
  ballX = 775;
}
if (ballX<25) {
  ballX = 25;
}
if (ballY>575) {
  ballY = 575;
}
if (ballY<25) {
  ballY = 25;
}
//shows the win screen if the fifth level has been won
if (level == 3)
//Shows the lose screen if the alien touches the edge
if (alienHeadX>750 || alienHeadX<0) {
  background(200,0,0);
  text ('The Glorg alien race have taken over', width/2, height/2);
}
if (alienHeadY>550 || alienHeadY<0) {
  background(200,0,0);
  text ('The Glorg alien race have taken over', width/2, height/2);
}
}
