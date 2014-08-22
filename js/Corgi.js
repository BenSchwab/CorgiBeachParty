Corgi.prototype = new Sprite();
Corgi.prototype.constructor = Corgi;

function Corgi(name, x,y, speed, texts){

    this.texts = texts;
    this.name = name || "No name!";
	this.spritesU = [new Image(), new Image(), new Image()];
    this.spritesD = [new Image(), new Image(), new Image()];
    this.spritesL = [new Image(), new Image(), new Image()];
    this.spritesR = [new Image(), new Image(), new Image()];
    this.spriteSet = [this.spritesU, this.spritesD, this.spritesL, this.spritesR];

    this.spritesD[0].src = "res/corgi0.png";
    this.spritesD[1].src = "res/corgi1.png";
    this.spritesD[2].src = "res/corgi2.png";

    this.spritesU[0].src = "res/corgib0.png";
    this.spritesU[1].src = "res/corgib1.png";
    this.spritesU[2].src = "res/corgib2.png";

    this.spritesL[0].src = "res/corgil0.png";
    this.spritesL[1].src = "res/corgil1.png";
    this.spritesL[2].src = "res/corgil2.png";


    this.spritesR[0].src = "res/corgir0.png";
    this.spritesR[1].src = "res/corgir1.png";
    this.spritesR[2].src = "res/corgir2.png";
    this.speed = speed || 3;
    this.danceDig = false;
    this.dangling = false;





    this.x = x;
    this.y = y;
    if(x === undefined){
        this.x = 300;
    }
    if(y === undefined){
        this.y = 600;
    }


    this.index = 1;
    this.direction = 1;

}




Corgi.prototype.getBoundingRect = function(){
    return {top: this.y, left: this.x, width: this.getWidth(),
    height: this.getHeight()}
}



Corgi.prototype.getWidth = function(){
    if(this.direction>=2){
       return 80*this.getScalingFactor();
    }
    return 50*this.getScalingFactor();
};

Corgi.prototype.getHeight = function(){
    if(this.direction>=2){
        return 60*this.getScalingFactor();
    }
    return 70*this.getScalingFactor();
};

Corgi.prototype.draw = function(ctx){
    var sprite = this.spriteSet[this.direction][this.index];
    ctx.drawImage(sprite, this.x - Camera.x, this.y - Camera.y , this.getWidth(),this.getHeight());

Corgi.prototype.yo = function(){
  var aud = document.getElementById("yo");
  aud.play();
}


};
Corgi.prototype.setSpriteIndex = function(index){
    this.index = index;
};
Corgi.prototype.moveDown = function(){
    this.moveCorgiY(this.speed);
    changeSpriteIndex.apply(this);
    this.direction = 1;
};
Corgi.prototype.moveUp = function() {
    this.moveCorgiY(-this.speed);
    changeSpriteIndex.apply(this);
    this.direction = 0;

};

Corgi.prototype.moveRight = function() {
    this.moveCorgiX(this.speed);
    changeSpriteIndex.apply(this);
    this.direction = 3;

}
Corgi.prototype.moveLeft = function() {
    this.moveCorgiX(-this.speed);
    changeSpriteIndex.apply(this);
    this.direction = 2;

};

Corgi.prototype.dig = function(){
   changeSpriteIndex.call(this);
    SpriteManager.addSprite(new DustCloud(this.x, this.y +this.getHeight()/2));
};

function changeSpriteIndex(){
    this.index += 1;
    this.index = this.index % 3;
}

Corgi.prototype.moveCorgiX = function(amt){
   this.x += amt;
   this.x = Math.max(0, Math.min(this.x, canvas.width - this.getWidth()));
    if(this.danceDig){
        this.dig();
    }

};
Corgi.prototype.moveCorgiY = function(amt){
    this.y += amt;
    this.y = Math.max(400, Math.min(this.y, canvas.height -this.getHeight()));
    if(this.danceDig){
        this.dig();
    }
};

Corgi.prototype.getCentroid = function(){
    return {x: this.x + this.getWidth()/2, y: this.y+this.getHeight()/2};
};

Corgi.prototype.getHeadPoint = function(){
    switch (this.direction){
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
    }
};
Corgi.prototype.nearestCorgi = function(corgis){
    var minDist = 1000000;
    var closeCorgi = null;
    for(var i = 0; i<corgis.length; i++){
        var otherCorgi = corgis[i];
        if(this != otherCorgi){
            var myPoint = this.getCentroid();
            var otherPoint = otherCorgi.getCentroid();
            var dist = lineDistance(myPoint, otherPoint);
            if(dist< minDist){
                closeCorgi = otherCorgi;
                minDist = dist;
            }

        }
    }
    return closeCorgi;
};

Corgi.prototype.talk = function(){
    TextManager.setDialog(this.textFunction());
};

Corgi.prototype.musicOn = function(){
    this.speed = 15;
    this.danceDig = true;
};

Corgi.prototype.musicOff = function(){
    this.speed = 3;
    this.danceDig = false;
};

Corgi.prototype.startDangle = function(){
    this.dangling = true;
    this.speed = 0;
};
Corgi.prototype.endDangle = function(){
    this.dangling = false;
    this.speed = 3;
};

function lineDistance( point1, point2 )
{
    var xs = 0;
    var ys = 0;

    xs = point2.x - point1.x;
    xs = xs * xs;

    ys = point2.y - point1.y;
    ys = ys * ys;

    return Math.sqrt( xs + ys );
}
