var wall ,thickness;
var bullet , speed , whight ;


function setup() {
  createCanvas(1600,400);

  speed=random(2,5)
  whight=random(30,52)
  thickeness=random(22,03)
    



  
    bullet=createSprite(50,200,50,5);
    bullet.velocity = speed;
    bullet.shapcolor=color(255);




    wall=createSprite(800,200,thickness,Hight/2);

    wall.shapecolor=color(230,230,230);
    // wall.shapecolor=color(80,80,60)

}
  
  function draw() {
    background(0);  
    // bullet.sprite.collied(wall.sprite,calculateDeformation)
    if(hasCollided(bullet,wall))   
    {

  bullet.velocityX=0;
  var damage=0.5 * whight * speed/(thickness * thicklness * thickness);

if (damage>10)
  {
      wall.shape.color="red"
  }
  
  
  
  
  if (damage<10)
  {
      wall.shape.color="green"
  }
  
}
  
  
  drawSprites();

}



function hasCollided(lbullet , lwall) 
{
bulletRightEdge=lbullet.X +lbullet.widht;
wallLeftEdge=lbullet
if (bulletRightEdge>=wallLeftEdge)
{
    return true
}
return false;

}
