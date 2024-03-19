const board = document.getElementById('game-board');


// game variables

const gridSize = 20;
let snake = [{ x: 10 , y: 10 }];
// snake position is 10 from x axis and y axis

let food = generateFood();
let direction = "RIGHT" ;



// draw snake and snake food

function draw(){
    board.innerHTML = '';
    // empty the innerhtml of the board

    drawSnake();
    drawFood();

}

// create snake in this function

const drawSnake = ()=>{
    snake.forEach((segment) => {
        // segment is definying the position of snake
        const snakeElement = createGameElement('div', 'snake');
        setPosition(snakeElement , segment);
        board.appendChild(snakeElement);

    });
}

// createGameElement function

const createGameElement = (tag,className)=>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// create setPosition

function setPosition(element,position){
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}



const drawFood = () => {
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement , food);
    board.appendChild(foodElement);
}


// generateFood will set a random position in the board

function generateFood() {
    // match.random is used for generate a random number between 0 and 1 , grid_size is 20 so multiplied by 20, in case it resullt 0 then add 1 to prevent 0, match.floor will give a floor value to prevent the point value
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x , y };
}

function move() {
    const head = { ...snake[0] };
    switch(direction){
        case "UP":
            head.y--;
            break;
        case "DOWN":
            head.y++;
            break;
        case "LEFT":
            head.x--;
            break;
        case "RIGHT":
            head.x++;
            break;
    }
    snake.unshift(head);
    snake.pop();
}

setInterval(() => {
    move();
    draw();
}, 300);