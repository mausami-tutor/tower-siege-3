class Projectile{
    constructor(x,y, radius){
        var options={
            density: 1.0,
            restitution: 0.04,
            friction: 0.03
        }
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world, this.body)
        this.image=loadImage("poly1.png")
        this.radius=radius
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0,0,this.radius*2, this.radius*2)
        pop()
    }
}