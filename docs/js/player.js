class Player{
    constructor(gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen
        this.left = left 
        this.top = top
        this.width = width
        this.height = height
        this.directionX = 0
        this.directionY = 0
        this.imgSrc = imgSrc
        this.isMoving=false
        this.ticketCount = 0;
        

        
        
        this.enemy = false
        this.element = document.createElement("img")

        this.element.src = imgSrc
        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.obstacle=document.querySelectorAll(".obstacle")
        
        this.gameScreen.appendChild(this.element);
        
    }

    move(){
        this.left += this.directionX;
        this.top += this.directionY;

        if(this.left + this.width >= this.gameScreen.offsetWidth -120){
            this.left = (this.gameScreen.offsetWidth -120) - this.width
        } else if(this.left<=120){
            this.left=120
        }

        if(this.top + this.height >= this.gameScreen.offsetHeight -70){
            this.top = (this.gameScreen.offsetHeight -70) - this.height
        } else if(this.top<=0){
            this.top=0
        }

        
        this.updatePosition()
    }

    updatePosition(){
        this.element.style.left= `${this.left}px`
        this.element.style.top = `${this.top}px`

    }

    
    didGetTicket(ticket){
        const playerRect = this.element.getBoundingClientRect()
        const ticketRect = ticket.element.getBoundingClientRect()
        this.audioTicket = document.querySelector("#audio-ticket");
        if (
            playerRect.left < ticketRect.right &&
            playerRect.right > ticketRect.left &&
            playerRect.top < ticketRect.bottom &&
            playerRect.bottom > ticketRect.top
          ) {
            this.ticketCount ++;
            console.log(this.ticketCount)
            this.audioTicket.play();
            return true;
          } else {
            return false;
          }
    }

    didCollide(obstacle){
        const playerRect = this.element.getBoundingClientRect()
        const obstacleRect = obstacle.element.getBoundingClientRect()
        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
          ) {
            return true;
          } else {
            return false;
          }
    }
}