class SlingShot {
    constructor(bodyA,pointB){
        var options= {
            bodyA:bodyA,
            pointB:pointB,
            length:105,
            stiffness:.54
        }
        this.Sling= Matter.Constraint.create (options)
        World.add(world,this.Sling)
    }
    display (){
        if (this.Sling.bodyA) {
         line (this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,this.Sling.pointB.x,this.Sling.pointB.y)
        }
        
    }
    fly () {
        this.Sling.bodyA=null
    }
  };