var database;
var gameState=0,playerCount=0;
var game,player,form;



function setup(){
        createCanvas(500,500);
        database=firebase.database()

    game=new Game()
    game.getstate()
    game.start()
    
   

}

function draw(){
  if(playerCount===4){
      game.update(1)
  }
  if(gameState===1){
      clear()
      game.play()
  }

}

