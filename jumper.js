function jumper() {
      this.x = 50;
      this.y = 0;
      this.gravity = 0.5; //the force of gravity
      this.lift = -10; //the opposing force of gravity
      this.velocity = 0;//velocity of player
                
      this.show = function() {
        image(witch, this.x, this.y, 298,212);
      }
      this.up = function() {
        this.velocity += this.lift; //jumping function
      }
      
      this.update = function() {
        this.velocity += this.gravity; //gravity applied when not jumping
        this.y += this.velocity;
        this.velocity *=0.8; //air resistance
        if(this.y > h) { //jumper hits floor
        this.y = h;
        this.velocity = 0;
      }
      if(this.y < 0) { //jumper hit the ceiling
      this.y = 0;
      this.velocity = 0;
     }
   }
 } //object ends here
  function keyPressed() {
  if(keyCode === 32) {
  jumper.up();
  }
}