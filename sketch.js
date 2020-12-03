const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect,rect1,rect2

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	rect=createSprite(400,653,200,10)
	rect.shapeColor="red"
	rect1=createSprite(505,540,10,230)
	rect1.shapeColor="red"
	rect2=createSprite(300,540,10,230)
	rect2.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(600,690,1200,20)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 // ground.display();
  drawSprites();
 
}
