class Paper 
{
    constructor()
    {
        var options= 
        { 
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(100,500, 15, options);
        World.add(world, this.body);
    }

    display()
    {
       ellipse(this.body.position.x,this.body.position.y,30)
    }
}


