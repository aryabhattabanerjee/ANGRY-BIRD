class Rope{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            length:10
        }
            this.Rope=Constraint.create(options)
            World.add(world,this.Rope)

        
    }
    display(){
        var posA=this.Rope.bodyA.position
        var posB=this.Rope.bodyB.position
        
        line(posA.x,posA.y,posB.x,posB.y)
        

    }
}