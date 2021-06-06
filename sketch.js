
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper,ground2,ground3,ground4;	
var world;


function setup() {
	createCanvas(1520, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,690,width,20);
	ground2 = new ground(800,10,1600,20);
    ground3 = new ground(10,350,20,700);
    ground4 = new ground(1510,350,20,700);
	dustbinObj=new dustbin(1200,670);
	paper = new Paper(700,600,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  ground2.display();
  ground3.display();
  ground4.display();
  dustbinObj.display();
  paper.display();

}
function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper.body, paper.body.position, {x: 20,y: -60})
    }
    if (keyCode === DOWN_ARROW ) {
      Matter.Body.applyForce(paper.body, paper.body.position, {x: 0,y:15})
    }
    if (keyCode === LEFT_ARROW ) {
      Matter.Body.applyForce(paper.body, paper.body.position, {x: -15,y: 0})
    }
    if (keyCode === RIGHT_ARROW ) {
      Matter.Body.applyForce(paper.body, paper.body.position, {x: 15,y: 0})
    }
  }
