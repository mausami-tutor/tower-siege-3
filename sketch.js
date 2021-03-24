const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, base1, base2, polygon1, slingshot1
var bgcolor
var score =0
function setup() {
  createCanvas(1000,600);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;
 Engine.run(engine)
 ground1= new Ground(width/2, height-10, width, 20)
 base1= new Ground(500, 450, 400, 10)
 base2=new Ground(800, 250, 250, 10)
 
 /*var options={
   density:1.2
 }
 polygon1=Bodies.circle(120,400, 30,options)
 World.add(world, polygon1)*/
 hitter=new Projectile(120,400,40)
  
 slingshot1= new SlingShot(hitter.body, {x:120,y:400})
 
 //level1
 color1=[getr(),getg(),getb()]
 box1= new Box(322,420, 50,50)
 box2= new Box(380,420, 50,50)
 box3= new Box(440,420, 50,50)
 box4= new Box(500,420, 50,50)
 box5= new Box(560,420, 50,50)
 box6= new Box(620,420, 50,50)
 box7= new Box(680,420, 50,50)

 //level2
 color2=[getr(),getg(),getb()]
 box8= new Box(382,370, 50,50)
 box9= new Box(440,370, 50,50)
 box10= new Box(500,370, 50,50)
 box11= new Box(560,370, 50,50)
 box12= new Box(620,370, 50,50)
 

 //level3
 color3=[getr(),getg(),getb()]
 box13= new Box(440,320, 50,50)
 box14= new Box(500,320, 50,50)
 box15= new Box(560,320, 50,50)

 
 //level4
 color4=[getr(), getg(), getb()]
 box16=new Box(500, 270, 50,50)

 //level1
 color5=[getr(), getg(), getb()]
 box17=new Box(700, 220, 50,50)
 box18=new Box(750, 220, 50,50)
 box19=new Box(800, 220, 50,50)
 box20=new Box(850, 220, 50,50)
 box21=new Box(900, 220, 50,50)
 
 //level2
 color6=[getr(), getg(), getb()]
 box22= new Box(750, 170, 50,50)
 box23= new Box(800, 170, 50,50)
 box24= new Box(850, 170, 50,50)

 //level3
 color7= [getr(), getg(), getb()]
 box25=new Box(800, 120, 50,50)

 getbgcolor()
 
}

function draw() {
  if(bgcolor){
    background(bgcolor)
  }
   
  //text(mouseX+','+ mouseY, mouseX, mouseY)
  ground1.display()
  base1.display()
  base2.display()
 
  //level1
  fill(color1[0],color1[1],color1[2])
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  //level2
  fill(color2[0],color2[1],color2[2])
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
   //level3
  fill(color3[0],color3[1],color3[2])
  box13.display()
  box14.display()
  box15.display()
  //level4
  fill(color4[0],color4[1],color4[2])
  box16.display()

  //stand2
  //level1
  fill(color5[0],color5[1],color5[2])
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  //level2
  fill(color6[0],color6[1],color6[2])
  box22.display()
  box23.display()
  box24.display()
  //level 3
  fill(color7[0],color7[1],color7[2])
  box25.display()

  box1.score()
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()
  box10.score()
  box11.score()
  box12.score()
  box13.score()
  box14.score()
  box15.score()
  box16.score()
  box17.score()
  box18.score()
  box19.score()
  box20.score()
  box21.score()
  box22.score()
  box23.score()
  box24.score()
  box25.score()
  
  fill("violet")
  /*imageMode(CENTER)
  image(polygonimage,polygon1.position.x,polygon1.position.y,60,60)*/
 hitter.display()
  slingshot1.display()
  textSize(26)
  text("Score: "+ score, 800, 50)
}
function getr(){
    var x=Math.round(random(0,255))
    return x
}
function getg(){
  var x=Math.round(random(0,255))
  return x
}
function getb(){
  var x=Math.round(random(0,255))
  return x
}
function mouseDragged(){
 Matter.Body.setPosition(hitter.body, {x:mouseX, y:mouseY})

}
function mouseReleased(){
  slingshot1.fly()
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(hitter.body, {x:150, y:400})
    slingshot1.attach(hitter.body)
  }
}

async function getbgcolor(){
  var worldtime=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
  var worldtimejson= await worldtime.json()
  
  var dateTime= worldtimejson.datetime
  
  var hour= dateTime.slice(11,13)

  if(hour>=06 && hour<17 ){
    bgcolor='skyblue'
  }
  else{
    bgcolor='darkblue'
  }
  
}