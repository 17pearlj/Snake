<script>
    import Boxmanager from '../objects/boxmanager.svelte'; 
    import {initBoxes} from '../functions/initFunctions'
    import { calculateNextPos, generateMoreFood, getNewDirection} from '../functions/movementFunctions'

    // Page Variables
    let cols = 20;
    let rows = 20;
    let boxes = initBoxes(rows, cols);
    let food = [4, 4]

    // Snake variables
    const snakeSet = new Set() 
    let startSnake = [[12, 10], [13, 10],[14, 10], [15, 10]]
    let snake = []
    snake = snake.concat(startSnake);
    let direction = 1 // 0: up, 1 down, 2 left, 3 right


    function buildSnake(oldSnake = []) {
        // clear page for old snake
        if (oldSnake.length != 0) {
            for (var i = 0; i < oldSnake.length; i++) {
                boxes[oldSnake[i][0]][oldSnake[i][1]].state = 0
            }
        }
        // show page for new snake
        for (var i = 0; i < snake.length; i++) {
            boxes[snake[i][0]][snake[i][1]].state = 2
            snakeSet.add(snake[i].toString())
        }
        boxes[food[0]][food[1]].state = 1
        
    }

    buildSnake();

    let clear;
    $: {
        clearInterval(clear);
        clear = setInterval(moveSnake, 200);
    }

    
    function onKeyUp(e) {
        e.preventDefault()
        direction = getNewDirection(e.code, direction)
    }

    function moveSnake() {    
        let nextPos = calculateNextPos(snake, direction)
        
        snake.push(nextPos)
        let oldSnake = []

        if (snakeSet.has(String(nextPos.toString()))) {
            oldSnake = snake
            snake = []
            direction = 1
            snake = snake.concat(startSnake);
            snakeSet.clear()
            
            
        } else if (nextPos[0] != food[0] || nextPos[1] != food[1]) {            
            oldSnake.push([snake[0][0], snake[0][1]])
            snakeSet.delete(snake[0].toString())
            snake.shift()
  
 
        } else {
            food = generateMoreFood(food, snakeSet)
        }
        buildSnake(oldSnake)
    }


    setInterval(moveSnake, 100)


</script>
<svelte:window on:keydown|preventDefault={onKeyUp} />
{#each boxes as boxesRow}
    {#each boxesRow as box, index (box.id)}
        <Boxmanager desState={box.state}/>
    {/each}
    <br/>
{/each}

