var GameLoop = (function(){

	function GameLoop(onAnimate){
        this.playing = true;
		this.start = function(){

			var animator = function(){

				onAnimate();
                if(true){
                    requestAnimationFrame(animator);
                }

			};
			animator();
		};
        this.pause = function(){
            this.playing = false;
        };
        this.play = function(){
            this.playing = true;
        }
	}


	return GameLoop;
})();