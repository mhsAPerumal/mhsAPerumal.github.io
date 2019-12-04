function setup() {
  createCanvas(600, 600)
}

function draw() {
}

function mouseMoved() {
  //This function is called when the mouse is moved
 clear() // stop the object from leaving trails on the canvas
  ellipse(mouseX, mouseY, 20, 20) //draw a circle that moves along the canvas
  line(mouseX, mouseY, 50, 350) /*draw a line from one fixed point to the mouse
                                  (and an ellipse at the end of it) */
}

function mouseClicked() {
  /* This function is called when the mouse is clicked]
      (but the mouse cannot move at the same time)
      and add a rectangle next to the ellipse */
      rect(mouseX, mouseY, 20, 20)
}
