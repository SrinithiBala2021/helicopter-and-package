class Helicopter{
    constructor(x,y,w,h){
    var options ={
        isStatic : true,
        restitution : 1
       
        
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w
    this.height = h
    this.image = loadImage("helicopter.png")
    
    World.add(world, this.body);
}
display(){
   var pos = this.body.position
   if (keyCode === LEFT_ARROW){
       pos.x = pos.x-10
   }
   if (keyCode === RIGHT_ARROW){
       pos.x = pos.x+10
   }
   
   imageMode(CENTER)
   image(this.image,pos.x,pos.y,this.width,this.height)
  
   
}
}
