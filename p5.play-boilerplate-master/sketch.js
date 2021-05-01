var balloon;

function setup() {
  createCanvas(900,700);
  balloon = createSprite(10,10,10,10);
  balloon.addImage(balloonImage1);
  
}
function preload() {
 backgroundImage = loadImage("images/backgroundimage.png");
 balloonImage1 = loadImage("images/hotairballoon1.png");
 balloonImage2 = loadImage("images/hotairballoon2.png");
 balloonImage3 = loadImage("images/hotairballoon3.png");
}
function draw() {
  background(backgroundImage);  
  
 
if(keyDown(LEFT_ARROW)){
  balloon.x = balloon.x-10;
  balloon.addImage(balloonImage2);
}
else if (keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x +10;
  balloon.addImage(balloonImage3);
}
else if(keyDown(UP_ARROW)){
  balloon.y = balloon.y -10;
  balloon.addImage(balloonImage1);
}
else if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y +10;
}
  drawSprites();
}