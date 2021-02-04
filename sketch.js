var fixedRect, movingRect;
var car, wall

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(200,100,50,50);
  car.shapeColor="blue"
  car.velocityX= 5;

  wall=createSprite(800,100,50,150);
  wall.shapeColor="white"

}
 

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  /*if(touchcheck(car,wall))
  {
  car.velocityX=0;
  wall.shapeColor="blue"
  }*/
  boff(car,wall);
  drawSprites();
}
