function Sprite(image, location){
    this.isDirty = false;
    this.image = image;
    this.location = location;
}

Sprite.prototype.draw = function(ctx){
    ctx.drawImage(this.image, this.location.x, this.location.y, this.location.width, this.location.height);
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


