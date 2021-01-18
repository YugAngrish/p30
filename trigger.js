class Trigger{

    constructor(x,y){
        var options = {
            isStatic:true,
        // restitution:0.1,
         density:1,
         friction:1
        }
        this.object = Bodies.rectangle(x,y,50,50,options)
        this.width = 50
        this.height = 50
        this.image = loadImage("polygon.png");
        World.add(world,this.object)
    }
    display(){
        var posX = this.object.position.x
        var posY = this.object.position.y
        var angle = this.object.angle

        
        push();
     translate(posX,posY)
     rotate(angle)
     fill("yellow")

     imageMode(CENTER)
     image(this.image,this.object.position.x,this.object.position.y,this.width,this.height)
     pop();


    }
}