var world

function initPhysics() {
  world = Physics();

  var renderer = Physics.renderer('canvas', {
    el: 'screen', // id of the canvas element
    width: 1024,
    height: 768
});
world.add( renderer );
};

function addGravity() {
  var gravity = Physics.behavior('constant-acceleration', {
    acc: { x : 0, y: 0.0004 }
  });
  world.add( gravity );
  gravity.setAcceleration({ x: 0, y: -0.0004 });
};

function addBody(corgi) {
  var point = Physics.body('point', {
    x: 500, // x-coordinate
    y: 700, // y-coordinate
    vx: 0.2, // velocity in x-direction
    vy: 0.01, // velocity in y-direction
});
  point.view = new Image("res/corgi1.png");
  world.render();
};

function addTicker() {
  // subscribe to ticker to advance the simulation
Physics.util.ticker.on(function( time, dt ){
    world.step( time );
});

// start the ticker
Physics.util.ticker.start();

world.on('step', function(){
    world.render();
});
}
