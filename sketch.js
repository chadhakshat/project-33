const Engine= Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;


var snow1Image, bg;
var engine,world;
var snows=[], maxsnows=100;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create()
  world=engine.world
  if(frameCount%100 === 0){
    for(var i=0; i<maxsnows;i++){
      snows.push(new Snow(random(0,700),random(0,300)))
      console.log("HI")
    }
  }
}
function preload(){
  bg=loadImage("snow1.jpg");
}

function draw() {
  Engine.update(engine);
  background(bg); 
  
    for(var i=0; i<maxsnows;i++){
      snows[i].display();
     snows[i].updateY();
     } 
  
  drawSprites();
}