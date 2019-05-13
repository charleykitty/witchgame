function obst() {
      this.rand = Math.floor(Math.random() * 700);
      this.x = w;
      this.y = h - this.rand;
      this.gravity = 1;
      this.velocity = 0;
    
      
      this.show = function() {
          image(cat, this.x, this.y, 384,352);
      
   }
   this.update = function() {
    this.velocity += this.gravity; //gravity applied when not jumping
    this.x -= this.velocity;
    if(this.x < 0){
      this.rand = Math.floor(Math.random() * 700);
      this.x = w;
      this.y = h - this.rand;
      this.velocity = 0;
      number += 1;
      
    }
    if(hit === true) {
     noLoop();
   }
   }
 }
 //object ends here

function obst1() {
      this.rand = Math.floor(Math.random() * 700);
      this.x = w;
      this.y = h - this.rand;
      this.gravity = 1;
      this.velocity = 0;
    
      
      this.show = function() {
         image(cat, this.x, this.y, 384,352);
      
   }
   this.update = function() {
    this.velocity += this.gravity; //gravity applied when not jumping
    this.x -= this.velocity;
    if(this.x < 0){
      this.rand = Math.floor(Math.random() * 700)
      this.x = w;
      this.y = h - this.rand;
      this.velocity = 0;
      //number += 1;
    }
    if(hit2 === true) {
     noLoop();
   }
   }
 }
 //object ends here
