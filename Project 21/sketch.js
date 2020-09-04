var bullet;
var wall, thickness;
var speed, weight;

function setup() {

  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(400,1500);
  thickness=random(30,52);

  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.shapeColor=color(0,0,0);

  car.velocityX=speed;

}

function draw() {
  
  background(255,255,255);  

  if (hasCollided(ball,wall)
  {
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if (damage>10) {
      bullet.shapColor=color(255,0,0);
    } 
    if (damage<10) {
      bullet.shapColor=color(0,255,0);
    } 
  }

  drawSprites();

}

function hasCollided(ball,wall) {
  bulletRightEdge = 1bullet.x + 1bullet.width;
  wallLeftEdge = 1wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}