class Rock{
    constructor(x,y,width,height){
        var options = {
            density : 0.5,
            restitution : 3,
            friction : 3.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("rock2.png");
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width+10,this.height+10);
        pop();
    }
    }