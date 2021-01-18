class Slingshot{

    constructor(bodyA,pointB){
        var options = {
         bodyA:bodyA,
         pointB:pointB,
         length:10,
         stiffness:1
        }
        this.chain=Constraint.create(options)  
        this.pointB=pointB
        World.add(world,this.chain)
    }
    display(){

        push();
        
        
        var pointA = this.chain.bodyA.position
        var pointB = this.pointB

        strokeWeight(3);

        line(pointA.x,pointA.y,pointB.x,pointB.y)
   
        pop();


    }
    fly(){
        this.chain.bodyA=null;
    }
    attach(){
        this.chain.bodyA = body;
    }
}
