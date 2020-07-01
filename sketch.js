const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bullet,plant,zombie;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
   background(0);
    Engine.update(engine);

    if( frameCount %100 ===0 ){
      plant=new Plants(200,200,20,20);
    
    }
  
// Spawn1();
 Spawn2();
 Bullet1();
 //Touch1();

  
 //plant.display();
 plant.display();
 console.log(plant);
 
  
}


  

 // keyIsDown(UP_ARROW)&&

function Spawn2(){
    if(keyIsDown("a")&& frameCount %250 ===0 ){
      zombie=new Zombies(mouseX,mouseY,20,20);
      zombie.display();
    }
 
}

function Bullet1(){
    if(keyIsDown(RIGHT_ARROW) && mouseX===plant.x){
         bullet=new Bullet(mouseX,mouseY,10);
         bullet.velocityX=3;
         bullet.display();
    }
   
}

/*function Touch1(){
   if(bullet.x - zombie.x === zombie.width/2 + bullet.width/2){
       bullet.destroy();
       zombie.destroy();
   }
}*/
