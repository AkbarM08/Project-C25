const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, leftdustbin, rightdustbin, lowerdustbin, paperBody, once, dustbinImage, dustbin, paperImage, paper;

function preload()
{
	dustbinImage = loadImage("dustbinImage.png");
	paperImage = loadImage("paperImage.png");
}

function setup() {

	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,690,800,20)

	leftdustbin = new Dustbin(530, 600, 20, 170);
	rightdustbin = new Dustbin(670, 600, 20, 170);
	lowerdustbin = new Dustbin(600, 690, 160, 20);
	paperBody = new Paper(100, 580);

	paper = createSprite(100, 100, 10, 10);
	paper.addImage(paperImage);
	paper.scale = 0.4;

	dustbin = createSprite(600, 600, 10, 10);
	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.5;

	Engine.run(engine);
  
	once = 0;
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);
  paper.x = paperBody.body.position.x;
  paper.y = paperBody.body.position.y;

	drawSprites();
	ground.display();

//	leftdustbin.display();
//	rightdustbin.display();
//	lowerdustbin.display();
//	paperBody.display();

	if (keyDown(UP_ARROW) && once === 0) {
		Matter.Body.applyForce(paperBody.body, paperBody.body.position,{x:14,y:-16})
		once=1;
	  }
 
}



