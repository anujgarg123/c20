var movingobj,fixedobj

function setup() {
  createCanvas(800,400);
  movingobj = createSprite(200,200,100,50);
  movingobj.shapeColor = color(0,255,0)
  movingobj.debug = true;

  fixedobj = createSprite(600,200,50,50);
  fixedobj.shapeColor = color(0,255,0)
  fixedobj.debug = true;
}

function draw() {
  background(0); 
  
  movingobj.x = mouseX
  movingobj.y = mouseY

  if(movingobj.x - fixedobj.x < movingobj.width/2 + fixedobj.width/2
    && fixedobj.x - movingobj.x < fixedobj.width/2 + movingobj.width/2
    && movingobj.y - fixedobj.y < movingobj.height/2 + fixedobj.height/2
    && fixedobj.y - movingobj.y < fixedobj.height/2 + movingobj.height/2){
  
      movingobj.shapeColor = color(255,0,0)
      fixedobj.shapeColor = color(255,0,0)  

  }

  else {

    movingobj.shapeColor = color(0,255,0)
    fixedobj.shapeColor = color(0,255,0)  

  }


  drawSprites();
}