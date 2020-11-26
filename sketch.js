var r2
var r1


function setup() {
  createCanvas(800,400);
 r2= createSprite(400, 200, 50, 50);
 r1= createSprite(300,100,20,30);

 r1.shapeColor="green"
 r2.shapeColor="green"
 
}

function draw() {
  background(255,255,255); 
  
  r1.y=World.mouseY;
  r1.x=World.mouseX;

  if(r1.x-r2.x<r1.width/2+r2.width/2&&r2.x-r1.x<r1.width/2+r2.width/2&&r1.y-r2.y<r1.height/2+r2.height/2&&r2.y-r1.y<r1.height/2+r2.height/2){
    r1.shapeColor="red"
    r2.shapeColor="blue"
  
  }
else{r1.shapeColor="green"
r2.shapeColor="green"}
  drawSprites();


}




