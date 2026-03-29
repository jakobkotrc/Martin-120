var noseY = 0;
var noseDirection = 1;

var leftEyeX = 0;
var leftEyeY = 0;
var leftEyeDirectionX = 1;
var leftEyeDirectionY = 1;

var eyeX = 0;
var eyeDirection = 1;

var tsize = 20
var count = 0;
var tsizeDirection = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // HAIR 
  fill(90, 60, 30); // brown
  noStroke();

  //hair
  ellipse(200, 130, 240, 180);
  ellipse(120, 230, 90, 180);
  ellipse(280, 230, 90, 180);


  // head
  fill(255, 220, 180);
  ellipse(200,200,200, 250);
  
  //hair over the forehead
  fill(90,60,30);
  ellipse(155,95, 110,78)
  ellipse(240,95,110,76)  
 
  //left eye
  leftEyeX += leftEyeDirectionX;
leftEyeY += leftEyeDirectionY;

// flip direction if it hits limits
if (leftEyeX > 10 || leftEyeX < -10) {
  leftEyeDirectionX *= -1;
}
if (leftEyeY > 9 || leftEyeY < -9) {
  leftEyeDirectionY *= -1;
}
  
fill(255);
ellipse(160, 180, 40, 25); 

fill(70, 130, 180);
ellipse(160 + leftEyeX, 180 + leftEyeY, 15, 15); 

fill(0);
ellipse(160 + leftEyeX, 180 + leftEyeY, 7, 7); 
  
  //right eye
  eyeX += eyeDirection;

if (eyeX > 20 || eyeX < -20) {
  eyeDirection *= -1;
}
fill(255);
ellipse(240, 180, 40, 25);

fill(70, 130, 180);
ellipse(240 + eyeX, 180, 15, 15);

fill(0);
ellipse(240 + eyeX, 180, 7, 7);

  // nose
  noseY += noseDirection;

if (noseY > 15 || noseY < -15) {
  noseDirection *= -1;
}
  
fill(255, 200, 160);
triangle(
  200, 190 + noseY,
  185, 230 + noseY,
  215, 230 + noseY
);
  // mouth
  stroke(0);
  line(145,275, 255, 275);
  line(145, 268, 145, 282);
  line(185, 280, 215, 280);
  
  //Name
  textSize(tsize);
    tsize+= tsizeDirection;
    count++;
    if(count > 5)
    {
        tsizeDirection *=-1;
        count = 0;
    }
  text("Jakob Kotrc", 130, 375)
  
}