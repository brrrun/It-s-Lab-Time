class Jasmine{
    constructor(gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.height = height
        this.imgSrc = imgSrc
        this.element = document.createElement("img")
        this.state=false
        this.loop= true
        this.startedInterval=false
        this.gameEndScreen = document.querySelector("#game-end");

        this.timesCount = 0;

        this.element.src = imgSrc
        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        
        
        
        this.gameScreen.appendChild(this.element);
    }

    updateState(){
        let counterLoop = 0;
        let times = 0
        let visualCounter = document.getElementById("counter");
        let statsContainer = document.getElementById("stats");
        

        if(!this.startedInterval){
        this.startedInterval = true;
        let myCounterLoop = setInterval(() => {
        counterLoop ++;
        visualCounter.innerHTML = "0";
        
        if (counterLoop > 0 && counterLoop <= 3){
            visualCounter.innerHTML = counterLoop;
            this.state= false
        } else if (counterLoop >= 4 && counterLoop <= 5){
            this.state = true;   
            this.timesCount += 1;                           ////////////////////////7
            
        } else if (counterLoop >= 5){
            
            counterLoop = 0;
            times++
            this.state=false
        } 

      if(times===5 || this.loop === false){
        this.loop = false;
        console.log(`this is the loop state ${this.loop}`)
        clearInterval(myCounterLoop);
        statsContainer.style.display="none"
      }
    }, 1000)
}
    }

    
}