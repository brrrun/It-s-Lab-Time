class Ticket{
    constructor(gameScreen, top){
        this.gameScreen = gameScreen
        this.left = Math.floor(Math.random()*1250 + 70)
        this.top = top
        this.width = 100
        this.height = 150
        this.element = document.createElement("img")

        this.element.src= "docs/images/ticket.png"
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
    }

    updatePosition() {
        // Update the obstacle's position based on the properties left and top
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    move() {
        // Update the obstacle's position on the screen
        this.updatePosition();
    }

}