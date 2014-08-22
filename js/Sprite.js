function Sprite(image, x, y, width, height, onClick){
    this.isDirty = false;
    this.image = image;
    this.x = x;
    this.y = y;
    this.baseWidth = width;
    this.baseHeight = height;
    this.onClickFunc = onClick;
}

Sprite.prototype.draw = function(ctx){
    ctx.drawImage(this.image, this.x, this.y, this.getWidth(), this.getHeight());
};

Sprite.prototype.getWidth = function(){
    return this.baseWidth * this.getScalingFactor();
};
Sprite.prototype.getHeight = function(){
    return this.baseHeight * this.getScalingFactor();
};
Sprite.prototype.getScalingFactor = function(){
    return (scene.height + this.y-400)/scene.height;
};

Sprite.prototype.onClick = function(point){
    if(this.onClickFunc){
        this.onClickFunc.call(this, point);
    }

};
Sprite.prototype.contains = function(point){
    return this.x<=point.x && this.x+this.getWidth()>=point.x &&
        this.y<=point.y && this.y+this.getHeight()>=point.y ;
};


