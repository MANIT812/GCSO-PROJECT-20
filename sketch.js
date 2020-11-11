var car,wall;
var speed,weight,deformation;
function setup() {
  createCanvas(800,400);
  car=createSprite(200,200,50,20);
  wall=createSprite(600,200,20,70);
  speed=random(55,90); 
  weight=random(400,1500);
  deformation=(0.5*speed*speed*weight)/22500;
}

function draw () {
  background(180);   
  car.velocityX=speed;
  if((car.width/2+wall.width/2) < (car.x-wall.x)){
    car.velocityX=0;
    if(deformation>180){
      car.shapeColor="red";
    }
    else if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }
    else if(deformation<100){
      car.shapeColor="green";
    }
  }
  drawSprites();
  text(deformation,100,100);
}