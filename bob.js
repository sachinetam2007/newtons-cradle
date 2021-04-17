class Bob{
  constructor(x,y,r)  {
      var options={
          isStatic:false,
          restitution:1,
          friction:0,
          density:0.5
      }
      this.r=r;
      
      this.body=Bodies.circle(x,y,r/2,options)
      this.radius=70;
    World.add(world,this.body);
  }
  display(){
      
      var pos=this.body.position;
      push ();
      translate(pos.x,pos.y)
      rotate (this.body.angle);
      circle(0,0,this.r/2)
      imageMode (CENTER)
      
      pop ();
  }
}