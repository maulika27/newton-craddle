
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;



function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

  startX = width/2;
  startY = height/2 + 500;
  
bob1 = new Bob(startX-100, 300, 50);
bob2 = new Bob(startX - 50, 300, 50);
bob3 = new Bob(startX, 300, 50);
bob4 = new Bob(startX+50, 300, 50);
bob5 = new Bob(startX +100, 300, 50);

roof = new Roof(190, 80, 300, 30)

rope1= new rope(bob1.body, roof.body, -100, 0);
rope2= new rope(bob2.body, roof.body, -50, 0);
rope3= new rope(bob3.body, roof.body, 0, 0);
rope4= new rope(bob4.body, roof.body ,50,0);
rope5= new rope(bob5.body, roof.body, 100, 0);

Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background("white");

 // Engine.update(engine);
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
  
  
  

 
}


function keyPressed(){


  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-100, y:-90});

  }
}




