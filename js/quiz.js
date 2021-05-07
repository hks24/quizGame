class Quiz{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                contestent = new Contestent();
                var contestentCountRef = await database.ref('contestentCount').once("value");
                if (contestentCountRef.exists()) {
                    contestentCount = contestentCountRef.val();
                    contestent.getCount();
                }
              question = new Question();
                question.display();
            }
   

        }
    
    play(){
        
                question.hide();

                  background("yellow");
                  textSize(30);
                  text("result of the quiz",340,50);

                Contestent.getContestentInfo();
            
                if(allContestent !== undefined){
                    var displayAnswer = 230;
                    fill("blue");
                    textSize(20);
                    text("contestent who answered corerct are highlighted in green",130,230);

                 for(var plr in allContestent){

                    var correctAnswer = "2";

                    if(correctAnswer === allContestent[plr].answer){
                        fill("green");
                    }
                    else{
                        fill("red")
                    }
                    
                    
                     displayAnswer = displayAnswer+30;
                     textSize(20);
                     text(allContestent[plr].name+": "+ allContestent[plr].answer,250,displayAnswer);
                    
                 
                 }
                  }


    }

    end(){
       console.log("Game Ended");
    }
}

    
