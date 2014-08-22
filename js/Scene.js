var Scene = function(){
	this.background = new Image();
    this.canvas = document.getElementById("screen");
	this.context = this.canvas.getContext("2d");
	this.background.src = "res/beachc.png";
    this.waterLevel = 400;
    this.height = this.canvas.height;
    this.width = this.canvas.width;


	this.background.onload = function(){
		//context.drawImage(this, 0, 0, canvas.width, canvas.height);
        Camera.xLimit = this.width - Camera.width;
        Camera.yLimit = this.height - Camera.height;


	};

	this.render = function(camera){
		//console.log(this.background);

        this.context.drawImage(this.background, camera.x, camera.y,
                camera.width+camera.x, camera.height+camera.y,


            0, 0, this.canvas.width, this.canvas.height);

        this.context.strokeRect(0,0, this.canvas.width, this.canvas.height);
	}

};