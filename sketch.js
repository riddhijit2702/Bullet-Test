var bullet,thickness;
var speed,weight,damage;




function setup() {
  createCanvas(1500,400);
  speed=Math.round(random(223,321))
  weight=Math.round(random(30,52))
  thickness=Math.round(random(22,83))
 bullet= createSprite(200, 180, 150, 10);
 bullet.velocityX=speed;
 bullet.shapeColor="white"
 wall=createSprite(1200,200,thickness,height/2)
 wall.shapeColor="grey"

 
}

function draw() {
  background("black");
  if(hasCollided(bullet,wall))
  {bullet.setVelocity(0,0)
  damage=0.5*speed*speed*weight/thickness*thickness*thickness
  if(damage>10){
    wall.shapeColor="red"
  }    
  if(damage<10){
    wall.shapeColor="green"
  }    
}    

  drawSprites();
} 
function hasCollided(bullet,wall)                                              
{
 bulletRightEdge=bullet.x+bullet.width
 wallLeftEdge=wall.x;
 if(bulletRightEdge>=wallLeftEdge){
return true;

 }
return false;

}





















/* if(deformation>180){
  car.shapeColor=color(255,0,0)
 }
if(deformation<180 && deformation>100){
 car.shapeColor=color(230,230,0)
 }
if(deformation<100){
 car.shapeColor=color(0,255,0)
}*/