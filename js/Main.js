window.onload =

function(){
    Number.prototype.mod = function(n) {
        return ((this%n)+n)%n;
    };

    var world = Physics();

    var showingDialog = false;

    var corgiSet = [];
    window.canvas = document.getElementById("screen");
    window.canvas = canvas;
    var ctx = canvas.getContext("2d");
    Camera.width = canvas.width;
    Camera.height = canvas.height;
	window.scene = new Scene();
    var controlCorgi = new Corgi("You?",200,600,7, ["I should join Coursera!"]);
    var paulCorgi = new Corgi("Paul",100,700, 5, ["What's all this fuss aboot?", "Eh?"]);
    var corgiTwo = new Corgi("Nelson", 400,500, 5, ["Caches","Protobuffs.", "There is a book named after me. It's called 'Do, Nelson dream of electric sheep?' "]);
    var corgiThree = new Corgi("Yixin", 200,500, 5, ["Cool.  Cool. ", "Yo"]);
    var corgiFour = new Corgi("Parthi", 100,500, 5, ["Do I even work here?"]);
    var corgiFive = new Corgi("Jingyu", 250,540, 5, ["Databases."]);
    var corgiSix = new Corgi("Ben", 50,500, 5, ["Thanks for a great summer!"]);
    var corgiSeven = new Corgi("Mustafa", 100,500, 5, ["What did I get myself into?"]);
    var corgiEight = new Corgi("Helen", 300,600,5, ["Tests! Tests! Tests!", "Chrome cast is broken.",
        "Sig track is broken."]);
    var corgiNine = new Corgi("Kathryn", 600,800,5, ["I make a really tasty Sig Track recipe."]);
    var corgiTen = new Corgi("Sanyam", 400,500,5, ["This sun is giving me lots of Vitamin D.",
        "I break my finger playing basketball more often than I break the build."]);

    corgiSet.push(controlCorgi, paulCorgi, corgiTwo, corgiThree,
        corgiFour, corgiFive, corgiSix, corgiSeven, corgiEight,
    corgiNine, corgiTen);
    var boom = new Image();
    boom.src = "res/boombox.png";
    SpriteManager.addSprite( new Sprite(boom, {x:800, y:550, width:70, height:70}));

    window.corgiOne = paulCorgi;
    Camera.move(paulCorgi, canvas);
    var ai1 = new CorgiAi(corgiTwo);
    var ai2 = new CorgiAi(corgiThree,30);
    var ai3 = new CorgiAi(corgiFour,2);
    var ai4 = new CorgiAi(corgiFive, 10);
    var ai5 = new CorgiAi(corgiSix, 10);
    var ai6 = new CorgiAi(corgiSeven, 10);
    var ai7 = new CorgiAi(corgiEight, 10);
    var ai9 = new CorgiAi(corgiNine, 10);
    var ai10 = new CorgiAi(corgiTen, 10);
    var ai11 = new CorgiAi(paulCorgi, 10);
	var animate = function(){
        update();
        draw();
	};

    var update = function(){

        ai1.live();
        ai2.live();
        ai3.live();
        ai4.live();
        ai5.live();
        ai6.live();
        ai7.live();
        ai9.live();
        ai10.live();
        ai11.live();
    };

    var draw = function(){
        scene.render(Camera);
        SpriteManager.drawSprites(ctx);
        corgiSet.forEach(function(corgi){
            corgi.draw(ctx);
        });
        TextManager.drawText(ctx, corgiSet, transformPoint(lastMouse));


    };

    function onKeyDown(e){
        console.log("on down!");
        if(e.keyCode == 40){
            controlCorgi.moveDown();
            Camera.move(paulCorgi, canvas);
        }
        if(e.keyCode == 38){
            controlCorgi.moveUp();
            Camera.move(paulCorgi, canvas)
        }
        if(e.keyCode == 37){
            controlCorgi.moveLeft();
            Camera.move(paulCorgi, canvas);
        }
        if(e.keyCode == 39){
            controlCorgi.moveRight();
            Camera.move(paulCorgi, canvas);
        }
        if(e.keyCode == 68){
            controlCorgi.dig();
        }
        if(e.keyCode == 89){
          controlCorgi.yo();
        }
        //space
        if(e.keyCode == 32){
           var nearestCorgi = controlCorgi.nearestCorgi(corgiSet);
           textForCorgi(nearestCorgi);

        }
        //enter
        if(e.keyCode == 13){
            GameStager.attemptToProgress()
        }

    }

    function textForCorgi(nearestCorgi){
        var statement = "";
        if(nearestCorgi.texts){
            var index = Math.floor(Math.random() * nearestCorgi.texts.length);
            statement = nearestCorgi.texts[index];
        }

        TextManager.setStoryText(nearestCorgi.name +" says: "+statement);
    }

    function onClick(e){
        var mouse =  transformPoint(e);
        corgiSet.forEach(function(corgi){
            if(corgi.contains(mouse)){
                textForCorgi(corgi);
            }

        });


    }

    function transformPoint(e){
        if(!e){
            return;
        }
        var xMult = canvas.width / window.innerWidth;
        var yMult = canvas.height / window.innerHeight;
        var x = e.x *xMult;
        var y = e.y * yMult;
        return {x:x, y:y};
    }

    var lastMouse;
    function onMouseMove(e){
        lastMouse = e;

    }

	// ctx.rect(20,20,150,100);
	// ctx.fillStyle="red";
	// ctx.fill();
	var loop = new GameLoop(animate);
	loop.start();


    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('click', onClick);
    window.addEventListener('mousemove', onMouseMove);


    Camera.move(paulCorgi, canvas);


    var SanyamText =  function(){
        if(this.injured == 0){
            return ["Tell Sanyam to work harder.", "Tell Sanyam to play basketball."];
        }
        else{
            return ["Give Sanyam ice.", "Take Sanyam's Coursera swag."];
        }
    }




};
