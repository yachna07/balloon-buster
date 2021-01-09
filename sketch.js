

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  

}

function draw() {
  // moving ground
    background.velocityX = -3 

  
  

    if (background.x < 0){
      background.x = background.width/2;
    }function red__balloon(){

  red_balloon = createSprite(300,Math.round(random(40,370)),10,10)
  red_balloon.addImage(red_balloonImage)
  red_balloon.scale = 0.1
      red_balloon.velocityY  = -5
      

} 
  
function green__balloon(){
  
  green_balloon = createSprite(300,Math.round(random(20,370)),10,10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
  green_balloon.velocityY = -5
}

  
function blue__balloon (){ 
  blue_balloon = createSprite(300,Math.round(random(30,380)), 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale=0.1;
 blue_balloon.velocityY = -5
}
  
  function pink__balloon (){
  pink_balloon = createSprite(300,Math.round(random(10,360)),10,10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1.2;
  pink_balloon.velocityY = -5
}
 
 
 
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if (World.frameCount %80==0 ){
    if (select_balloon==1){
      red__balloon();
    } else if (select_balloon==2){
      green__balloon();
    } else if (select_balloon==3) {
      blue__balloon();
    } else {
      pink__balloon();
    }
  }
  
  
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
    
  drawSprites();
  text("Score:"+score,500,50)
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}


