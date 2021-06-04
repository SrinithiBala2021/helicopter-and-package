var helicopterIMG, helicopter1;
var box,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world,engine;
var bottomBox


function preload(){
packageIMG = loadImage("package.png")

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create()
	world = engine.world;
	
   
   helicopter1 = new Helicopter(380,150,250,100)
   box = new Package(helicopter1.body.position.x,160,40,40)
   box1 = createSprite(400,600,200,20)
   box1.shapeColor = "red"
   box2 = createSprite(500,560,20,100)
   box2.shapeColor = "red"
   box3 = createSprite(300,560,20,100)
   box3.shapeColor = "red"
   var options = {
     isStatic :true
   }
   bottomBox = Bodies.rectangle(400,600,200,20,options)
   World.add(world,bottomBox)

	
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine)
  box1.x = bottomBox.position.x
  box1.y = bottomBox.position.y

  if (keyCode === DOWN_ARROW){
    Matter.Body.setStatic(box.body,false)
  }
  
  box.display()
  helicopter1.display()
  drawSprites();
  
  
 
}
