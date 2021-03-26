class Ball{
    constructor(x,y,radius){
        var options = {
            'density': 2,
            'friction': 1.0,
            'stiffness': 5.0

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("blue ball.png");
        this.Visibility = 255;
        World.add(world,this.body);

    }
    
    display(){
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
        
        
    }
}