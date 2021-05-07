var canvas;
var gameState = 0;
var contestentCount, database,quiz,question,contestent,allContestent;

function setup(){
  canvas = createCanvas(800,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("pink");
  if(contestentCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  
}
