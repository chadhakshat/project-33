class Snow{
    constructor( x,y ){
        var options={
            restitution:0.1,
            friction:0.003
        }
        this.snow=Bodies.circle(x,y,5,options)
        World.add(world,this.snow)
        this.image=loadImage("snow4.webp")
    }
    updateY(){
        if(this.snow.position.y>height){
            Matter.Body.setPosition(this.snow,{x:random(0,700),y:random(0,300)})
        }
    }
    display(){
        var pos = this.snow.position
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 5, 20, 20)
    }
}