TextManager = (function() {
    var textView = document.getElementById("textbox");
    var alpha = 0;
    var shouldDrawTitle = true;
    var titleText = "Welcome to the Corgi Beach Party!!!!!";
    var flashText = "";
    var storyText = "";
    var hoverText = "";

    function displayText(text) {
        textView.value= text;
    }
    function drawTitleText(ctx, text){

        ctx.font = "45pt gameFont";
        ctx.fillStyle = "rgba(0,0,0, 1)";
        ctx.fillText(titleText, 130, 100);
    }
    function showFlashingText(ctx){
        alpha+=3;
        alpha = alpha % 255;
        ctx.font = "32pt gameFont";
        ctx.fillStyle = "rgba(0,0,0,"+alpha/256+")";
        ctx.fillText(flashText, 300, 300);
    }
    function drawHoverText(ctx, point){
        ctx.font = "28pt gameFont";
        ctx.fillStyle = "rgba(0,0,0, 1)";
        ctx.fillText(hoverText, point.x, point.y);
    }
    function writeStoryText(ctx){
        ctx.font = "16pt gameFont";
        ctx.fillStyle = "rgba(0,0,0);"
        ctx.fillText(storyText, 100, 200);
    }
    function drawTitle(shouldDraw){
        shouldDrawTitle = shouldDraw;
    }

    var TextManager = {
        drawText: function(ctx, corgiSet, mouse){
            if(shouldDrawTitle){
                drawTitleText(ctx);
                showFlashingText(ctx, "Push enter to start.");
            }
            if(mouse){
                hoverText = '';
                corgiSet.forEach(function(corgi){
                    if(corgi.contains(mouse)){
                        hoverText = corgi.name;
                    }

                });
                drawHoverText(ctx, mouse);
                writeStoryText(ctx);
            }


        },
        setTitleText: function(text){
            titleText = text;
        },
        setStoryText: function(text){
            storyText = text;
        },
        setFlashText: function(text){
            flashText = text;
        },
        setDialog: function(text){

        }




    };
    console.log("created text manager");

    return TextManager;

})();

