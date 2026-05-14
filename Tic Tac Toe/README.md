# Tic Tac Toe

This is an interactive classic Tic Tac Toe game built for the web.

_A quick personal note: The underlying code might not be the cleanest or most optimized right now, but I feel incredibly proud and good after successfully building and completing this project from scratch!_

## What It Does

- **Play the Game**: Click on any of the 9 boxes in the grid to take turns placing your ✖️ or ⭕.
- **Score Tracking**: Keeps a running tally of how many times ✖️ and ⭕ have won during your session.
- **Game Over Screen**: Automatically detects a win or a draw and displays a result overlay with a "Play Again" button.
- **Restart Options**: You can completely restart the game (and reset scores) or just play another round.

## Tools Used

- HTML, CSS, and JavaScript

## How to Use It

1. Open the `index.html` file in your web browser.
2. Player 1 starts. Click on any empty box in the grid to make a move.
3. Take turns until someone gets 3 in a row or the board is full.
4. Click "Play Again" on the popup to keep playing, or "Restart" to completely reset everything.

## Code Example (For Quick Review)

If you want a quick refresher on how the grid handles clicks, each box is linked to a JavaScript function that passes its specific grid position (from 0 to 8):

```html
<!-- The grid is made up of individual boxes -->
<div class="matrix">
  <div class="box" onclick="move(0)"></div>
  <div class="box" onclick="move(1)"></div>
  <div class="box" onclick="move(2)"></div>
  <!-- ... and so on up to move(8) -->
</div>
```

## How to Practice

If you want to practice writing this code yourself:

1. Clone or download this local repository to your computer.
2. Run the code right after cloning by opening `index.html` in your web browser.
3. See the web page design and understand how it is working.
4. Create your own practice files (like `practice.js` or `practice.html`) in the project folder.
5. Create your own code from scratch without looking at the main code!
