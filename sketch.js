
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var box1, box2, box3;
var box1Sprite,box2Sprite,box3Sprite;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	box1Sprite=createSprite(400+200, 650, 200,20);
	box2Sprite=createSprite(300+200, 620, 20,100);
	box3Sprite=createSprite(500+200, 620, 20,100);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1  = Bodies.rectangle(400+200, 650, 200,20, {isStatic:true});
	World.add(world, box1);

	box2  = Bodies.rectangle(400+200, 650, 20,100, {isStatic:true});
	World.add(world, box2);

	box3  = Bodies.rectangle(400+200, 650, 20,100, {isStatic:true});
	World.add(world, box3);
	
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	paper = new Paper();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   
	Matter.Body.applyForce(paper.body,paper.body.position,{x:3, y:-4})
 } 
}


