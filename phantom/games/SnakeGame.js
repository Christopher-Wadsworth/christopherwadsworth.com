let blockSize = 25;
let total_row = 19; 
let total_col = 19; 
let board;
let context;

let snakeX = blockSize * 9;
let snakeY = blockSize * 9;


let speedX = 0;  
let speedY = 0;  

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

let boardImg = new Image()
                boardImg.src = "SnakeBackgroundGrass.png";

let controlsImg = new Image()
                  controlsImg.src = "KeyCommands.png";

let directionChanged = false

let gameGoing = false

window.onload = function () {
    board = document.getElementById("board");
    board.height = total_row * blockSize;
    board.width = total_col * blockSize;
    context = board.getContext("2d");

 document.getElementById("Score").innerText = "Score: " + Score;
    
    placeFood();
    document.addEventListener("keyup", changeDirection);  
    document.addEventListener("keyup", reset);


    setInterval(update, 100);


}



function update() {
    if (gameOver) {
        return;
    }
  directionChanged = false
    context.drawImage(boardImg, 0, 0, board.height, board.width)
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
        || snakeX >= total_col * blockSize 
        || snakeY < 0 
        || snakeY >= total_row * blockSize) { 
        
  
        gameOver = true;
            context.drawImage(wallDeathImg, 0, 0, board.height, board.width)
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) { 
            
            // Snake eats own body
            gameOver = true;
                context.drawImage(selfDeathImg,0,0,board.height,board.width)
        }
    }
  function update() {
    if (gameGoing) {
      return;
    }
  //Controls
    context.drawImage(controlsImg, 0, 0, board.width, board.height)
}
}

// Movement of the Snake - We are using addEventListener
function changeDirection(e) {
    if ((e.key == "w" || e.code == "ArrowUp") && speedY != 1 && directionChanged == false) { 
        speedX = 0;
        speedY = -1;
      directionChanged = true;
      gameGoing = true;
    }
    else if ((e.key == "s" || e.code == "ArrowDown") && speedY != -1 && directionChanged == false) {
        //If down arrow key pressed
        speedX = 0;
        speedY = 1;
      directionChanged = true;
      gameGoing = true;
    }
    else if ((e.key == "a" || e.code == "ArrowLeft") && speedX != 1 && directionChanged == false) {
        //If left arrow key pressed
        speedX = -1;
        speedY = 0;
      directionChanged = true;
      gameGoing = true;
    }
}

function placeFood() {
    let validPosition = false;

    while (!validPosition) {
        foodX = Math.floor(Math.random() * total_col) * blockSize;
        foodY = Math.floor(Math.random() * total_row) * blockSize;

        validPosition = true;

        // check against snake head
        if (foodX === snakeX && foodY === snakeY) {
            validPosition = false;
        }

        // check against snake body
        for (let i = 0; i < snakeBody.length; i++) {
            if (foodX === snakeBody[i][0] && foodY === snakeBody[i][1]) {
                validPosition = false;
            }
        }
    }
}



 function reset(e) {
    if (e.code == "Space" ) {
        snakeX = blockSize * 9
        snakeY = blockSize * 9
        speedX = 0
        speedY = 0
        Score = 0
            document.getElementById("Score").innerText = "Score: " + Score;
        snakeBody = []
        context.drawImage(boardImg,0,0,board.height,board.width)
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
