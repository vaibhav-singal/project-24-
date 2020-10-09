var ground , paper;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(600,600,1200,20);
  paper = new Paper(100,590,10);
  
  box1 = new Boz(450,575,20,100);
	box2 = new Boz(650,575,20,100);
	box3 = new Boz(550, 575,200,20);
	
 
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:0.1,y: -1.5});
  }
}



