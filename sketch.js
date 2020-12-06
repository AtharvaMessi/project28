
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, tree;
var mango, stone;
function preload() {
boyImg = loadImage("boy.png");
treeImg = loadImage("tree.png");
mangoImg = loadImage("mango.png")
stoneImg = loadImage("stone.png")                         
}
  
	


function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
  
  
	//Create the Bodies Here.
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  
  drawSprites();
 
  
}
function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
launcherObject.attach(stoneObj.body);
}
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  Slingshot.fly();

}
