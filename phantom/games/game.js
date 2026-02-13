let blockSize = 25;
let total_row = 19; //total row number
let total_col = 19; //total column number
let board;
let context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 10;

// Set the total number of rows and columns
let speedX = 0;  //speed of snake in x coordinate.
let speedY = 0;  //speed of snake in Y coordinate.

let snakeBody = [];

let foodImg = new Image();
                foodImg.src = "Food.png";
let foodX;
let foodY;

let Score = 0

let gameOver = false;
let selfDeathImg = new Image()
                selfDeathImg.src = "SelfDeath.png";
let wallDeathImg = new Image()
                wallDeathImg.src = "WallDeath.png";

window.onload = function () {
    // Set board height and width
    board = document.getElementById("board");
    board.height = total_row * blockSize;
    board.width = total_col * blockSize;
    context = board.getContext("2d");

 document.getElementById("Score").innerText = "Score: " + Score;
    
    placeFood();
    document.addEventListener("keyup", changeDirection);  //for movements
    document.addEventListener("keyup", reset);

    // Set snake speed
    setInterval(update, 100);
}

function update() {
    if (gameOver) {
        return;
    }

    // Background of a Game
    context.fillStyle = "#1DA11D";
    context.fillRect(0, 0, board.width, board.height);

    // Set food color and position
    context.drawImage(foodImg, foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        Score += 1 
         document.getElementById("Score").innerText = "Score: " + Score;
        placeFood();
    }

    // body of snake will grow
    for (let i = snakeBody.length - 1; i > 0; i--) {
        // it will store previous part of snake to the current part
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "white";
    snakeX += speedX * blockSize; //updating Snake position in X coordinate.
    snakeY += speedY * blockSize;  //updating Snake position in Y coordinate.
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    if (snakeX < 0 
        || snakeX > total_col * blockSize 
        || snakeY < 0 
        || snakeY > total_row * blockSize) { 
        
        // Out of bound condition
        gameOver = true;
            context.drawImage(wallDeathImg,0,0,board.height,board.width)
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) { 
            
            // Snake eats own body
            gameOver = true;
                context.drawImage(selfDeathImg,0,0,board.height,board.width)
        }
    }
}

// Movement of the Snake - We are using addEventListener
function changeDirection(e) {
    if (e.code == "ArrowUp" && speedY != 1) { 
        // If up arrow key pressed with this condition...
        // snake will not move in the opposite direction
        speedX = 0;
        speedY = -1;
    }
    else if (e.code == "ArrowDown" && speedY != -1) {
        //If down arrow key pressed
        speedX = 0;
        speedY = 1;
    }
    else if (e.code == "ArrowLeft" && speedX != 1) {
        //If left arrow key pressed
        speedX = -1;
        speedY = 0;
    }
    else if (e.code == "ArrowRight" && speedX != -1) { 
        //If Right arrow key pressed
        speedX = 1;
        speedY = 0;
    }
}

// Randomly place food
function placeFood() {

    // in x coordinates.
    foodX = Math.floor(Math.random() * total_col) * blockSize; 
    
    //in y coordinates.
    foodY = Math.floor(Math.random() * total_row) * blockSize; 
}

 function reset(e) {
    if (e.code == "Space" ) {
        snakeX = blockSize * 5
        snakeY = blockSize * 10
        speedX = 0
        speedY = 0
        Score = 0
         document.getElementById("Score").innerText = "Score: " + Score;
        snakeBody = []
        context.fillStyle = "#1DA11D";
        context.fillRect(0, 0, board.width, board.height);
        gameOver = false;
    }
}

  window.addEventListener("keydown", function(e) {
    // Array of key codes or event codes to prevent (arrow keys and spacebar)
    const keysToPrevent = ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    
    if (keysToPrevent.indexOf(e.code) > -1) {
      e.preventDefault(); // Stop the browser's default action (scrolling)
      // You can add your own logic here for what the keys should do instead
    }
  }, false);
