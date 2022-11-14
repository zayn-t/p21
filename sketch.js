
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var radius = 40

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground (width/2, 670, width, 20)

	leftWall = new Ground(1100, 600, 20, 120)

	rightWall = new Ground(1350, 600, 20, 120)

	Engine.run(engine);

	var ball_options = {
		restitution:0.3, 
		isStatic:false,
		friction:0, 
		density:1.2
	}

	ball = Bodies.circle(260, 100, radius/2, ball_options)

	World.add(world,ball)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.show()
	leftWall.show()
	rightWall.show() 

	fill ("white")

	ellipse(ball.position.x, ball.position.y, radius, radius)

  drawSprites();
 
}

function keyPressed() {
	if(keyCode==RIGHT_ARROW) {
		Matter.Body.applyForce(ball,ball.position, {x:85, y:-85})
	}
}


