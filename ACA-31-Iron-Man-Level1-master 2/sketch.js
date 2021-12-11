
var bg, backgroundImg, ironMan, ironManImage;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
ironManImage = loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  ironMan = createSprite(100, 300, 20, 50);
  ironMan.addImage(ironManImage);
  ironMan.scale = 0.25;
  ground = createSprite(200, 580, 1200, 10);
  ground.visible = false;
}

function draw() {
if(keyDown("up"))
{
  ironMan.velocityY += -4;
}
if(keyDown("left"))
{
  ironMan.velocityX = -5;
}
if(keyDown("right"))
{
  ironMan.velocityX += 5;
}
ironMan.velocityY += 1;
ironMan.collide(ground);  
drawSprites(); 
}

