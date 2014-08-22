DustCloud.prototype = new Sprite();
DustCloud.constructor = DustCloud;

function DustCloud(x,y){
    this.x = x;
    this.y = y;
    this.drawable = new Image();
    this.drawable.src = "res/dust.png";
    this.duration = 5;
    this.baseWidth = 50;
    this.baseHeight = 50;
}

DustCloud.prototype.draw = function(ctx){
    this.duration --;
    if(this.duration<0){
        this.isDirty = true;
    }
    ctx.drawImage(this.drawable, this.x, this.y, this.getWidth(),this.getHeight());


};

