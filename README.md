# Svelte snake game project.

It runs just like snake:<br>
If the snake eats its tail, the game is reset. <br>
If the snake eats one unit of food, it grows by one unit and the food is placed elsewhere on the board. <br>
If the user hits an eligible arrowkey (snake will not go in direct opposite), the snake will alter its direction. <br> 

<img width="200" alt="screen" src="https://user-images.githubusercontent.com/18289791/218270400-4b9ac2be-1723-4483-ab06-b11b4929e0e7.png">

## Explanation

Board created and snake variables held in routes/page. <br/>

Movement logic separated.<br/>
Box manager to display correct color of box given board state.<br/>

npm Version 16.14<br/>
To run: npm run dev
