/**
 * Created by bschwab on 8/20/14.
 */
Camera ={
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    xLimit: 0,
    yLimit: 0,
    move: function(corgi, canvas, scene){
        Camera.x = Math.max(0,Math.min(corgi.x-100, Camera.xLimit));
        Camera.y = Math.max(0,Math.min(corgi.y-50, Camera.yLimit));
    }

};