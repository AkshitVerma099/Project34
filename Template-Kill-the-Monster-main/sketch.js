const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17,box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30, box31, box32, box33, box34, box35
var superhero
var rope
function preload() {
bg = loadImage ("GamingBackground.png")

monsterImg = loadImage ("Monster-01.png")

}

function setup() {
  createCanvas(1520,700); 
  engine = Engine.create();
  world = engine.world;

  

  ground = new Ground(1520/2,650,1520,20);
  box1 = new Box(1000,100,60,60);
  box2 = new Box(1000,100,60,60);
  box3 = new Box(1000,100,60,60);
  box4 = new Box(1000,100,60,60);
  box5 = new Box(1000,100,60,60);
  box6 = new Box(1000,100,60,60);
  box7 = new Box(1000,100,60,60);
  box8 = new Box(1000,100,60,60);
  box9 = new Box(1000,100,60,60);
  box10 = new Box(1080,100,60,60);
  box11 = new Box(1080,100,60,60);
  box12 = new Box(1080,100,60,60);
  box13 = new Box(1080,100,60,60);
  box14 = new Box(1080,100,60,60);
  box15 = new Box(1080,100,60,60);
  box16 = new Box(1080,100,60,60);
  box17 = new Box(1160,100,60,60);
  box18 = new Box(1160,100,60,60);
  box19 = new Box(1160,100,60,60);
  box20 = new Box(1160,100,60,60);
  box21 = new Box(1160,100,60,60);
  box22 = new Box(1160,100,60,60);
  box23 = new Box(1160,100,60,60);
  box24 = new Box(1160,100,60,60);
  box30 = new Box(1160,100,60,60);
  box25 = new Box(1240,100,60,60);
  box26 = new Box(1240,100,60,60);
  box27 = new Box(1240,100,60,60);
  box28 = new Box(1240,100,60,60);
  box29 = new Box(1240,100,60,60);
  box31 = new Box(1360,100,60,60);
  box32 = new Box(1360,100,60,60);
  box33 = new Box(1360,100,60,60);
  box34 = new Box(1360,100,60,60);
  box35 = new Box(1360,100,60,60);
  monster = new Monster(1300,300)

  superhero = new SuperHero(500, 400, 80, 80);
  rope = new Rope(superhero.body, { x: 650, y:200 });
}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  superhero.display();
  rope.display();
  monster.display();
}
function mouseDragged(){
  
      Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
}



  

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(superhero.body);
     
     Matter.Body.setPosition(superhero.body, {x: 500 , y: 40});
  }
}