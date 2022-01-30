class Elastic {
constructor(bodyA,bodyB){

var options = {
    
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.8,
    length:10
}
    this.test = Constraint.create(options)
    World.add(world,this.test)
}

display(){
line(this.test.bodyA.position.x,this.test.bodyA.position.y,this.test.bodyB.position.x,this.test.bodyB.position.y)
}
}