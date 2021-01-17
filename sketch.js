
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, dustbinImg, paperObject,paperImg, groundObject;
var world;
var edge1,edge2,edge3;
var paperAct, dustbinAct;

function preload() {
	dustbinImg = loadImage("dustbingreen.png");
	paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	edge1=createSprite(1100,590, 20, 150);
	edge1.shapeColor=color("red");
	edge3=createSprite(1300,590, 20, 150);
	edge3.shapeColor=color("red");
	edge2=createSprite(1200,500, 200, 20);
	edge2.addImage(dustbinImg);



	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
 drawSprites(); 
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





