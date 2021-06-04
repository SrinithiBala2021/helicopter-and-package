class Package{
 constructor(x,y,w,h){
     var options = {
         isStatic :true,
         restitution : 1
     }
     this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w
    this.height = h
    this.image = loadImage("package.png")
    
    World.add(world, this.body);
 }
display(){

    var pos = this.body.position
    if (keyCode === LEFT_ARROW){
        pos.x = helicopter1.body.position.x
    }
    if (keyCode === RIGHT_ARROW){
        pos.x = helicopter1.body.position.x
    }
   imageMode(CENTER)
   image(this.image,pos.x,pos.y,this.width,this.height)
}


}