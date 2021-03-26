class Tramp{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("tramp.png");
        World.add(world,this.body);

    }
    
    
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width+450,this.height+100);
        pop();
    }

}