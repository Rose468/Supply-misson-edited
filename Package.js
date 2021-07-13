class Package{
    constructor(x,y,r){
        var options = {
            'restitution': 1
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        
    }

    display(){
      
    }
}
