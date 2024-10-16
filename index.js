// Variable declarations
let restart = document.querySelector(".restart");
let blocks = [];
blocks.push(...document.querySelectorAll('.xo-block'));
console.log(blocks);
const player1 = { name: 'Player 1', value: "X" };
const player2 = { name: 'Player 2', value: "O" };
let currentPlayer = document.querySelector(".current-player");
let result = document.querySelector(".result");
let history = ["", "", "", "", "", "", "", "", ""];

// Event listeners for each block
blocks.forEach((block, index) => {
    block.addEventListener('click', () => {
        if(result.innerHTML == `Result: Player X Wins!` || result.innerHTML == `Result: Player O Wins!`){
            return;
        }
        if (block.innerHTML.trim() === "") {
            // Set the block's value based on the current player
            const currentSymbol = currentPlayer.innerHTML.includes(player1.name) ? player1.value : player2.value;
            block.innerHTML = currentSymbol;

            // Update history with the current player's symbol at the current index
            updateHistory(index, currentSymbol);

            // Call play() to update counts and determine the next player
            play();
            win(history);
        }
    });
    
});

restart.addEventListener('click', reset);

// Function for playing the game
function play() {
    // Count Xs and Os after the current move
    let countX = blocks.filter(block => block.innerHTML === 'X').length;
    let countO = blocks.filter(block => block.innerHTML === 'O').length;

    console.log(`Count X: ${countX}, Count O: ${countO}`);

    // Check if the game is over (all blocks filled)
    if (countX + countO === 9) {
        currentPlayer.innerHTML = "Game Over!";
        return; // Stop further actions if game is over
    }

    // Determine the next player based on the counts
    currentPlayer.innerHTML = (countX > countO) ? `Current Player: ${player2.name}` : `Current Player: ${player1.name}`;
}

// Function to reset the game
function reset() {
    blocks.forEach(block => block.innerHTML = "");
    currentPlayer.innerHTML = "Current Player: Player 1";
    history = ["", "", "", "", "", "", "", "", ""]; // Reset history
    result.innerHTML = ""; // Clear result message
    console.log(history); // Log reset history
}

// Function to update history
function updateHistory(index, symbol) {
    if (history[index] === "") {
        // Update the history array with the current player's symbol
        history[index] = symbol;
    }
    console.log(history); // Log the updated history
}

// Function to check win condition
function win(history) {
    // Check all winning combinations using a switch statement
    switch (true) {
        // Check for Player X wins
        case (history[0] === 'X' && history[1] === 'X' && history[2] === 'X'):
        case (history[3] === 'X' && history[4] === 'X' && history[5] === 'X'):
        case (history[6] === 'X' && history[7] === 'X' && history[8] === 'X'):
        case (history[0] === 'X' && history[3] === 'X' && history[6] === 'X'):
        case (history[1] === 'X' && history[4] === 'X' && history[7] === 'X'):
        case (history[2] === 'X' && history[5] === 'X' && history[8] === 'X'):
        case (history[0] === 'X' && history[4] === 'X' && history[8] === 'X'):
        case (history[2] === 'X' && history[4] === 'X' && history[6] === 'X'):
            result.innerHTML = `Result: Player X Wins!`;
            break;

        // Check for Player O wins
        case (history[0] === 'O' && history[1] === 'O' && history[2] === 'O'):
        case (history[3] === 'O' && history[4] === 'O' && history[5] === 'O'):
        case (history[6] === 'O' && history[7] === 'O' && history[8] === 'O'):
        case (history[0] === 'O' && history[3] === 'O' && history[6] === 'O'):
        case (history[1] === 'O' && history[4] === 'O' && history[7] === 'O'):
        case (history[2] === 'O' && history[5] === 'O' && history[8] === 'O'):
        case (history[0] === 'O' && history[4] === 'O' && history[8] === 'O'):
        case (history[2] === 'O' && history[4] === 'O' && history[6] === 'O'):
            result.innerHTML = `Result: Player O Wins!`;
            break;
    }
    if(result.innerHTML == `Result: Player X Wins!` || result.innerHTML == `Result: Player O Wins!`){
        
    }
}