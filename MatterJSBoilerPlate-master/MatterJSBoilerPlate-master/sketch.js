
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, bin, b2, b3, ground;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 200);
    

	ground = new Ground(400, 380, 800, 10);

	bin = createSprite(600, 380, 100, 10);
	b2 = createSprite(550, 320, 10, 100);
	b3 = createSprite(650, 320, 10, 100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 

  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});

	}
}