//defining the sprites
var path,pathImg,RunnerImg;

function preload(){
  //pre-load image
  pathImage = loadImage("path.png");
  RunnerImg = loadImage("Runner-1.png", "Runner-2.png");



  
  }



 


  


function setup(){
  createCanvas(400,400);

 // create path
  path = createSprite(200,200);
  path.addImage("moving",pathImage );
  path.velocityY = 4;
  path.scale = 1.2;


  //create running boy
  boy = createSprite(200,200);
  boy.addAnimation("running","Runner-1.png" , "Runner-2.png");
  boy.scale = 0.07;
  




  
}

function draw() {
  background(0);


  edges= createEdgeSprites();
  boy.collide(edges);
  


  //move when key is pressed
  if(keyDown("Right")) {
    boy.x = boy.x+5;
  }

if(keyDown("Left")) {
   boy.x = boy.x-5;
}


 

  //code to reset the background
if(path.y > 400){
  path.y = height/2;
}
  

  



  
  drawSprites();

  



  }


