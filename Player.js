class Player{
    constructor(){
      this.name=null
      }
 getcount() {
      var playerCountRef=database.ref('playerCount')
      playerCountRef.on("value",function (data) {
        playerCount=data.val();      
     })     
  }
  updateCount(count){
      database.ref('/').update({
        playerCount:count  
      })

  }
  update(){
   var playerIndex='player'+ playerCount
   database.ref(playerIndex).set({
       name:this.name
   })
  }


}