class Ground{

    constructor(x,y,width){
        var options = {
         isStatic : true
        }
        this.object = Bodies.rectangle(x,y,width,15,options)
        this.width = width
        World.add(world,this.object)
    }
    display(){
        var posX = this.object.position.x
        var posY = this.object.position.y
        var angle = this.object.angle

        
        push();
     translate(posX,posY)
     rotate(angle)
     fill("brown")

     rectMode(CENTER)
     rect(0,0,this.width,15)
     pop();


    }
}