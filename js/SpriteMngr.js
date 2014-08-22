var SpriteManager = (function(){

    var sprites = [];

    return {
        addSprite: function(sprite){
            sprites.push(sprite);
        },
        drawSprites: function(ctx){
           sprites.forEach(function(sprite){
               sprite.draw(ctx);
           });
            if(sprites.length >0){
                sprites = sprites.filter(function(sprite){
                    return !sprite.isDirty;
                });
            }


        },
        onClick: function(point){
            sprites.forEach(function(sprite){
                sprite.onClick(point);
            });
        }


    };


})();
