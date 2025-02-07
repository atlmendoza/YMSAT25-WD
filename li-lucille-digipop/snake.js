const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20; // Size of each square
let score = 0;
let snake;
let food;
let direction;
let game;

function startGame() {
    // Initialize game variables
    snake = [{x: 9 * box, y: 10 * box}];
    food = {x: Math.floor(Math.random() * 19 + 1) * box, y: Math.floor(Math.random() * 19 + 1) * box};
    direction = null;
    score = 0;
    document.getElementById("score").textContent = score;

    // Clear canvas and start the game
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game = setInterval(draw, 100); // Refresh game every 100ms
    document.getElementById("try-again-btn").style.display = "none";
    document.getElementById("instructions").style.display = "block";
}

document.addEventListener("keydown", setDirection);

function setDirection(event) {
    if (event.keyCode == 37 && direction != "RIGHT") {
        direction = "LEFT";
    } else if (event.keyCode == 38 && direction != "DOWN") {
        direction = "UP";
    } else if (event.keyCode == 39 && direction != "LEFT") {
        direction = "RIGHT";
    } else if (event.keyCode == 40 && direction != "UP") {
        direction = "DOWN";
    }
}

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "LEFT") snakeX -= box;
    if (direction == "UP") snakeY -= box;
    if (direction == "RIGHT") snakeX += box;
    if (direction == "DOWN") snakeY += box;

    if (snakeX === food.x && snakeY === food.y) {
        score++;
        food = {x: Math.floor(Math.random() * 19 + 1) * box, y: Math.floor(Math.random() * 19 + 1) * box};
        document.getElementById("score").textContent = score;
    } else {
        snake.pop();
    }

    const newHead = {x: snakeX, y: snakeY};

    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
        document.getElementById("try-again-btn").style.display = "block";
        document.getElementById("instructions").style.display = "none";
        alert("Game Over! Your final score is: " + score);
    }

    snake.unshift(newHead);
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}
