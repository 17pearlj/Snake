function calculateNextPos(snake, direction) {
    let nextPos = [snake[snake.length - 1][0], snake[snake.length - 1][1]];
    if (direction == 0) {
        nextPos[0]--;
        if (nextPos[0] == -1) {
            nextPos[0] = 19;
        }
    } else if (direction == 1) {
        nextPos[0]++
        if (nextPos[0] == 20) {
            nextPos[0] = 0;
        }
    } else if (direction == 2) {
        nextPos[1]--;
        if (nextPos[1] == -1) {
            nextPos[1] = 19;
        }
    } else {
        nextPos[1]++;
        if (nextPos[1] == 20) {
            nextPos[1] = 0;
        }
    }
    return nextPos;
}

function generateMoreFood(food, snakeSet){
    do {
        food[0] = Math.floor(Math.random() * 20);
        food[1] = Math.floor(Math.random() * 20);
    } while (snakeSet.has(String(food.toString())))
    return food
    
}

function getNewDirection(code, direction) {
    switch (code) {
        case "ArrowLeft":
            if (direction != 3){
                direction = 2
            }
            break
        case "ArrowRight":
            if (direction != 2){
                direction = 3
            }
            break
        case "ArrowUp":
            if (direction != 1){
                direction = 0
            }
            break
        case "ArrowDown":
            if (direction != 0){
                direction = 1
            }
            break
        default:
            break
    }
    return direction
}
export {generateMoreFood, calculateNextPos, getNewDirection}