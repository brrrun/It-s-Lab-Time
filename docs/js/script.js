window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const restartButton2 = document.getElementById("restart-button2");
  let statsContainer = document.getElementById("stats");

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game = new Game()
    game.start()
    statsContainer.style.display="block"
  }


  // function that handles keys events
  function handleKeyDown(event){
    const key = event.key 

    const possibleKeys=[
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown"
    ]

    if(possibleKeys.includes(key)){
      event.preventDefault();

      if(game){
        switch(key){
          case "ArrowLeft":
            if(game.ticketCounter() === 0){
              game.player.directionX = -0.7;
            }
            else {
              game.player.directionX = (game.ticketCounter() * -2)/3;
            }
            game.player.isMoving= true
            break;

          case "ArrowUp":
            if(game.ticketCounter() === 0){
              game.player.directionY = -0.7;
            }
            else {
              game.player.directionY = (game.ticketCounter() * -2)/3;
            }
            game.player.isMoving= true
            break; 

          case "ArrowRight":
            if(game.ticketCounter() === 0){
              game.player.directionX = 0.7;
            }
            else {
              game.player.directionX = (game.ticketCounter() * 2)/3;
            }
            game.player.isMoving= true
            break; 
          
          case "ArrowDown":
            if(game.ticketCounter() === 0){
              game.player.directionY = 0.7;
            }
            else {
              game.player.directionY = (game.ticketCounter() * 2)/3;
            }
            game.player.isMoving= true
            break
        }
        
      }
      
    }

    
  }

   // function that handles keys events
   function handleKeyUp(event){
    const key = event.key

    const possibleKeys=[
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown"
    ]

    if(possibleKeys.includes(key)){
      event.preventDefault();

      if(game){
        switch(key){
          case "ArrowLeft":
            game.player.directionX = 0;
            game.player.isMoving= false
            console.log("its moving")
            console.log(game.player.isMoving)
            break;

          case "ArrowUp":
            game.player.directionY = 0
            game.player.isMoving= false
            break;

          case "ArrowRight":
            game.player.directionX = 0
            game.player.isMoving= false
            break;
          
          case "ArrowDown":
            game.player.directionY = 0
            game.player.isMoving= false
            break
        }
        
      }
    }
  }

  


  window.addEventListener("keydown", handleKeyDown)
  window.addEventListener("keyup", handleKeyUp)

  restartButton.addEventListener("click", ()=>{
    location.reload()
  })

  restartButton2.addEventListener("click", ()=>{
    location.reload()
  })
};