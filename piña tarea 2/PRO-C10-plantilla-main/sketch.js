const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;
var background;
var rayaroja,rayaroja2;

let engine;
let world;

function preload(){

}


function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  var plane_options={
    isStatic: true
  }
  rayaroja = Bodies.rectangle(700,204,1200,400,plane_options);
  World.add(world,rayaroja);
  rayaroja2 = Bodies.rectangle(1000,204,1200,400,plane_options);
  World.add(world,rayaroja2);



  fill("darkred") 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw(){
  background("black");
  Engine.update(engine);
  


rect(rayaroja.position.x,rayaroja.position.y,1200,8);
rect(rayaroja2.position.x,rayaroja2.position.y,1200,8.5);



  drawSprites()
}