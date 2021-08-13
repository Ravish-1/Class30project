const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruit_con;
var bg_img,rabbit_img,melon_img;
var bunny,button;
function preload(){
bg_img=loadImage("background.png")
rabbit_img=loadImage("Rabbit-01.png")
melon_img=loadImage("melon.png")

}








function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  bunny=createSprite(200,620,100,100)
  bunny.addImage(rabbit_img)
  bunny.scale=0.2
  ground = new Ground(200,690,600,20);
  rope= new Rope(8,{x:220,y:30})
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  textSize(50)
 
  button=createImg("cut_btn.png")
  button.position(220,30)
  button.size(50,50)
  button.mouseClicked(drop)
  var fruit_options={
    density:0.001
  }
  fruit=Bodies.circle(300,300,20,fruit_options)
  Matter.Composite.add(rope.body,fruit)

  fruit_con=new Link(rope,fruit);

}

function draw() 
{
  background(51);
  image(bg_img,0,0,displayWidth+80,displayHeight)
  ground.show();
  rope.show();
  image(melon_img,fruit.position.x,fruit.position.y,40,40)
  Engine.update(engine);
  
  imageMode(CENTER);
 
   drawSprites()
}
function drop(){
  rope.break()
  fruit_con.detach()
  fruit_con=null;
}