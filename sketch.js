
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var score
var survivalTime

function preload(){
  
  backImage=loadImage("jungle.jpg");
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
 
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
 
}



function setup() {
   createCanvas(600, 200);
  
  backGround = createSprite(0,0,600,600);
  backGround.addImage(backImage);
  backGround.scale=9;
  backGround.scale = 0.99
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.099;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
  ground = createSprite(0,200,2000,30)
  ground.x = ground.width /2;
  ground.velocityX= -4;
  
  invisibleGround = createSprite(0,201,2000,30);
  invisibleGround.visible= false;
}
    score = 0;

function draw() {
  background("white");
  backGround.velocityX= -3;
  if (backGround.x < 0){
      backGround.x = backGround.width/2;
    }
  monkey.collide(invisibleGround);
  
  if(ground.x < 600){
    ground.x= invisibleGround.x
  }
  obstacles();
  food();
  
  if(bananaGroup.isTouching(monkey))
{
  score= score+2;
  bananaGroup.destroyEach();
}
    if(keyDown("space")&& monkey.y >= 100) {
       monkey.velocityY = -12;}
   monkey.velocityY = monkey.velocityY + 0.8
  
  switch(score){
    case 10:monkey.scale=0.12
           break;
    case 20:monkey.scale=0.14
           break;
    case 30:monkey.scale=0.16
           break;
    case 40:monkey.scale=0.18
           break;
    default :break;
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.099;
  }
drawSprites();
  
 stroke("black");
  textSize(15);
  fill("white");
  text("score:"+ score,500,50)

  
}
function food() {
  if (frameCount % 80 === 0){
    var banana = createSprite(600,120,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(30,120));
    banana.scale=0.1
    banana.velocityX = -3;
    banana.lifetime = 200;
    bananaGroup.add(banana);
}}

function obstacles(){
  if(frameCount % 300 === 0){
    var rock= createSprite(600,168,10,40);
    rock.addImage(obstacleImage);
    rock.scale=0.1;
    rock.velocityX= -2
    obstacleGroup.add(rock);
  }}
  



