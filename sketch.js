var bg, bgIMG;
var player, player_Running;
var border;

function preload(){

  bgIMG = loadImage("STADIUM.jpg");
  player_Running = loadAnimation("1.jpg","3.jpg","5.jpg","6.jpg","7.jpg","8.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);

  bg = createSprite(600,200);
  bg.addImage("STADIUM",bgIMG)
  bg.scale = 3;



  player = createSprite(100,380,20,10);
  player.addAnimation("running", player_Running);
  player.velocityX = 3.5;
  
  player.frameDelay = 20;
  

  border = createSprite(500,510,10,150);
}

function draw() {
  background(0);  

  
  drawSprites();
}