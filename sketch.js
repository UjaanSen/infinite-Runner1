var playerImage, coinImage, GameOverImage,  obstacle1Image, obstacle2Image, restartImage, backgroundImage, ground, player1, player1Image
var player, coin, gameover, obstacle1, obstacle2, bg, restart, coinG, obstacleG
var PLAY = 1
var END = 0
var gameState = PLAY

function preload(){
  playerImage = loadAnimation("image2.png", "image3.png", "image4.png", "image5.png", "image6.png", "image7.png")
  coinImage = loadAnimation("Coin1.png", "Coin2.png", "Coin3.png", "Coin4.png", "Coin5.png", "coin6.png")
  GameOverImage = loadImage("GameOver.png")
  obstacle1Image = loadImage("obstacle1.png")
  obstacle2Image = loadImage("obstacle2.png")
  backgroundImage = loadImage("background.jpg")
  player1Image = loadAnimation("image6.png")
}
function setup(){
  createCanvas(600, 510)
  bg = createSprite(10, 60, 200, 200)
  bg.addImage(backgroundImage)
  bg.velocityX = -5
  bg.scale = 4.6
  player.addAnimation("running", playerImage)
  player.scale = .8
  coinG = new Group()
  obstacleG = new Group()
}
  function draw(){
  background("red")
  if (gameState===PLAY){
    ground = createSprite(0, 400, 500, 20)
    ground.visible = false
    player = createSprite (40, 290, 20, 20)
    if (bg.x<0){
      bg.x = bg.width/2
    }
    if(keyDown("space")&& player.y >= 100) {
      player.velocityY = -12; }
      player.velocityY = player.velocityY + 0.8
  obstacle()
  spawnCoins()
  }
  if (gameState===END){
    player.changeAnimation("collided", player1Image)
  }
  player.collide(ground)
  drawSprites()
  }
  function spawnCoins(){
    if(frameCount%50===0){
      coin = createSprite (200, 30, 10, 10)
      coin.addAnimation("running", coinImage)
      //coin.velocityX = 10
      coin.scale = 0.6
      coin.y=Math.round(random(60, 270))
      coin.lifetime = 60
      coinG.add(coin)
    }
  }
   function obstacle(){
     if(frameCount%50===0){
       obstacle1 = createSprite(50, 310, 20, 20)
       obstacle1.scale = .8
       r=Math.round(random(1, 2))
       if(r==1){
         obstacle1.addImage(obstacle1Image)
       }
       if(r===2){
         obstacle1.addImage(obstacle2Image)
       }
       obstacle1.x=Math.round(random(110, 500))
       obstacle1.lifetime = 50
       obstacleG.add(obstacle1)
     }

   }