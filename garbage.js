class Garbage{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.8,
            density:0.5
            
        }
        this.body=Bodies.circle(x,y,50,options);
        this.image=loadImage("paper.png");
        this.r=50;
        World.add(world,this.body); 
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        imageMode(RADIUS);
        fill("white");
        rotate(angle);
        image(this.image,pos.x,pos.y,this.r,this.r);
        pop();
            
    }
    
}
