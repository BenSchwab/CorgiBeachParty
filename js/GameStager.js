/**
 * Created by bschwab on 8/21/14.
 */
GameStage = function(stageStart, stageEnd){
    this.onStageStart = stageStart;
    this.stageEnd = stageEnd;

};

GameStage.prototype.attemptToProgress = function(){

};


var stageOne = new GameStage(function(){
    TextManager.setTitleText("Press space to to talk the Corgi team!");


    },
    function(){

});

var stageTwo = new GameStage(function(){
        TextManager.setTitleText("Use the arrow keys to walk around.");
        TextManager.setFlashText("");

    },
    function(){

    });
var stageThree = new GameStage(function(){

        TextManager.setStoryText("Interact with the environment by pressing enter.");

    },
    function(){

    });
var stageFive = new GameStage(function(){
        TextManager.setStoryText("Also, Corgis are good at digging. Press [d] to dig." +
            " I wonder where a good place to dig would be?");
        TextManager.setFlashText("(Press enter to begin.)");

    },
    function(){

});
var stageFour = new GameStage(function(){
        TextManager.setStoryText("Press [Space] to talk to your team. " +
            "Can you control this rambunctious group of Corgis?");


    },
    function(){

    });

var stageSix = new GameStage(function(){
        TextManager.setStoryText("");
        TextManager.setFlashText("");

    },
    function(){

    });


GameStager = (function(){
    var stages = [new GameStage(), stageOne, stageTwo, stageFour, stageFive, stageSix];
    var currentStage = 0;
    var dayOfWeek = 0;

    return{
        attemptToProgress: function(){
            return;
            switch(currentStage) {
                case 0:
                case 1:

                    currentStage ++ ;
                    stages[currentStage].onStageStart();
                    break;
                default :

            }

        },
        advanceDayOfWeek: function(){
            dayOfWeek++;
        }
    };
})();