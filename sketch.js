const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var rope,rope2,rope3,rope4,rope5,rope6,rope7;
var ball,ball2,ball3,ball4,ball5,ball6;
var tramp;
var rock;
var bg;

var gameState = "onSling";

function preload(){
  bg = loadImage("car2.png");


}





function setup() {
  createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Base(600,800,2000,50);
  tramp = new Tramp(600,750,100,50);
  rock = new Rock(600,700,20,20);
  
  ball = new Ball(200,200,75,75);
  ball2 = new Ball(400,400,75,75);
  ball3 = new Ball(600,600,75,75);
  ball4 = new Ball(800,800,75,75);
  ball5 = new Ball(1000,1000,75,75);
  ball6 = new Ball(1200,1200,75,75);
  rope = new Rope(ball.body,{x:500,y:5});
  rope2 = new Rope(ball2.body,{x:300,y:5});
  rope3 = new Rope(ball3.body,{x:100,y:5})
  rope4 = new Rope(ball4.body,{x:700,y:5});
  rope5 = new Rope(ball5.body,{x:900,y:5});
  rope6 = new Rope(ball6.body,{x:1100,y:5});
  rope7 = new Rope2(rock.body,{x:600,y:700});
  
  

  

}

function draw() {
  background(bg);
  Engine.update(engine);
  
ground.display();
tramp.display();
rock.display();


ball.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
ball6.display();
rope.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
rope6.display();
rope7.display();



}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  rope7.fly();
  gameState = "launched";
}




