
 function CorgiAi(corgi, activity){
     this.moveType = 0;
     this.moves = 0;
     this.corgi = corgi;
     this.frequency = this.activity | 10;
     this.call = 0;

 }
 CorgiAi.prototype.live = function(){
     this.call++;
     if(this.call%this.frequency!==0){
         return;
     }
     if(this.moves < 0){
         this.moves = Math.floor(Math.random()*50 + 10);
         this.moveType = Math.floor(Math.random()*6);
     }
     if(this.moveType === 0){
         this.corgi.moveUp();
     }
     if(this.moveType === 1){
         this.corgi.moveDown();
     }
     if(this.moveType === 2){
         this.corgi.moveLeft();
     }
     if(this.moveType === 3){
         this.corgi.moveRight();
     }
     this.moves --;


 };