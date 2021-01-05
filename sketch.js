const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var Ball;
var dustbin1,dustbin2,dustbin3;
var bin;

function preload()
{
	bin=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600,700 );
      rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	ground= new Ground(800,670,1600,20);

	Ball= new Garbage(150,400);

	dustbin1= new Dustbin(1200,660,200,18);
	dustbin2= new Dustbin(1100,602,18,100);
  dustbin3= new Dustbin(1300,602,18,100);
  
 
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);


  if(keyDown("up")){
    Matter.Body.applyForce(Ball.body,Ball.body.position,{x:10,y:-40})
  }

  background("white");
  ground.display();

  Ball.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  image(bin,1050,370,300,300);

  //drawSprites();

}

  

