const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var Bbox1,Bbox2,Bbox3,Bbox4,Bbox5
var Pbox1,Pbox2,Pbox3,Pbox4,Pbox5,Pbox6,Pbox7
var Ybox1,Ybox2,Ybox3
var Blbox1,Blbox2
var Gbox1,Gbox2,Gbox3
var Pubox1,Pubox2,Pubox3,Pubox4,Pubox5
var ground1,ground2,ground3;
var slingshot
var trigger

function setup(){
createCanvas(1200,550)
engine=Engine.create()
world = engine.world

ground1 = new Ground(500,500,1200)
ground2 = new Ground(470,400,350)
ground3 = new Ground(810,250,260)

Pbox1 = new PBox(600,380);
Pbox2 = new PBox(410,380);
Pbox3 = new PBox(440,380);
Pbox4 = new PBox(470,380);
Pbox5 = new PBox(500,380);
Pbox6 = new PBox(530,380);
Pbox7 = new PBox(380,380);

Bbox1 = new BBox(440,360);
Bbox2 = new BBox(470,360);
Bbox3 = new BBox(500,360);
Bbox4 = new BBox(530,360);
Bbox5 = new BBox(410,360);

Ybox1 = new YBox(470,340);
Ybox2 = new YBox(500,340);
Ybox3 = new YBox(440,340);

Blbox1 = new BlBox(470,310);

Pubox1 = new PuBox(750,220);
Pubox2 = new PuBox(780,220);
Pubox3 = new PuBox(810,220);
Pubox4 = new PuBox(840,220);
Pubox5 = new PuBox(870,220);

Gbox1 = new GBox(780,200);
Gbox2 = new GBox(810,200);
Gbox3 = new GBox(840,200);

Blbox2 = new BlBox(810,180);

trigger = new Trigger(70,150);
slingshot = new Slingshot(trigger.body,{x:65,y:150})

Engine.run(engine)
}
function draw(){
    Engine.update(engine)
    background("black")
    ground1.display();
    ground2.display();
    ground3.display();

    Pbox1.display();
    Pbox2.display();
    Pbox3.display();
    Pbox4.display();
    Pbox5.display();
    Pbox6.display();
    Pbox7.display();

    Bbox1.display()
    Bbox2.display();
    Bbox3.display()
    Bbox4.display();
    Bbox5.display();

    Ybox1.display()
    Ybox2.display()
    Ybox3.display();

    Blbox1.display();

    Pubox1.display();
    Pubox2.display();
    Pubox3.display();
    Pubox4.display();
    Pubox5.display();

    Gbox1.display();
    Gbox2.display();
    Gbox3.display();

    Blbox2.display();

    trigger.display();
   slingshot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(trigger.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(trigger.body)
    }
}