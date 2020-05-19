const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1,rect2,rect3,rect4,rect5,rect6,rect7;
var triangle1;

var ground;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

   rect1= new Rect(300,345,20,80);
   rect2= new Rect(325,345,20,80);
   rect3= new Rect(275,345,20,80);
   rect4= new Rect(300, 295,80,20);
   rect5= new Rect(287.5,245,20,80);
   rect5= new Rect(287.5,245,20,80); 
   rect6= new Rect(314.5,245,20,80);
   rect7=new Rect(300,195,55,20);
   rect8= new Rect(300,162.5,45,45);
    rect9=new Rect(373,295,65,20);
    rect10=new Rect(385,345,20,80);
    rect11= new Rect(361,345,20,80);
    rect12= new Rect(373,262.5,45,45);
    rect13= new Rect(427,354.5,20,50);
    rect14= new Rect(427,320,50,20);
    ground = new Ground(200,390,900,20);
triangle1= new Triangle(178,2.5,3,30);
triangle2= new Triangle(233,38,3,29);

    
}

function draw(){
    
    background("black");
    text(mouseX + ',' + mouseY, 10, 15);
    Engine.update(engine);

    rect1.display();
    rect2.display();
    rect3.display();
    rect4.display();
    rect5.display();
    rect6.display();
    rect7.display();
    rect8.display();
    rect9.display();
    rect10.display();
    rect11.display();
    rect12.display();
    rect13.display();
    rect14.display();
    triangle1.display();
    triangle2.display();
    ground.display();
}