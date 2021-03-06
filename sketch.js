var rect,rect2,rect3
function setup() {
  createCanvas(800,400);
  
  rect = createSprite(300,200,100,50);
  rect2 = createSprite(200,300,140,70);
  rect3 = createSprite(300,100,160,80);
}

function draw() {
  background("cyan"); 
  rect.x=mouseX
  rect.y=mouseY 
  text(rect.x-rect2.x,100,100)
  text(rect.width/2+rect2.width/2,100,200)
  if(rect.x-rect3.x<rect.width/2+rect3.width/2 && rect3.x-rect.x<rect.width/2+rect3.width/2 && rect3.y-rect.y<rect.height/2+rect3.height/2 && rect.y-rect3.y<rect3.height/2+rect.height/2){

rect.shapeColor="yellow"
rect3.shapeColor="blue"




  }
  else{

    rect.shapeColor="orange"
    rect3.shapeColor="Golden"
  }
  
  drawSprites();
}













