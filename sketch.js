const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {

	var canvas = createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(600, 600, 100);
	bob2 = new Bob(600, 600, 100);
	bob3 = new Bob(700, 600, 100);
	bob4 = new Bob(800, 600, 100);
	bob5 = new Bob(900, 600, 100);

	roof = new Roof(700, 100, 520, 30);

	rope1 = new Rope(bob1.body, roof.body, -100*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -50*2, 0);
	rope3 = new Rope(bob3.body, roof.body, 0*2, 0);
	rope4 = new Rope(bob4.body, roof.body, 50*2, 0);
	rope5 = new Rope(bob5.body, roof.body, 100*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(230, 230, 230);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

if(keycode === 24) {
	bob1.velocityX = -5;
	bob5.velocityX = 0;
}

