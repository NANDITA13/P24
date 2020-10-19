
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b3,b1,b2,g,p

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (650,690,1300,20);

	bin1 = new Box (900,580,10,200);

	bin2 = new Box (1000,675,210,10);

	bin3 = new Box (1110,580,10,200);

	paperBall = new paper (100,350);
	

	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:190,y:-190});
	}
}

function draw() {

  rectMode(CENTER);

  background("black");

  ground.display();

  bin1.display();

  bin2.display();

  bin3.display();

  paperBall.display();

  //drawSprites();
 
}