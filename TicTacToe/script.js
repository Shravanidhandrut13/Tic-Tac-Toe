/*const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');
const pvpMode = document.getElementById('pvpMode');
const aiMode = document.getElementById('aiMode');
const selectX = document.getElementById('selectX');
const selectO = document.getElementById('selectO');
const playerXScore = document.getElementById('playerXScore');
const playerOScore = document.getElementById('playerOScore');
const markerSelection = document.getElementById('markerSelection');
const gameContainer = document.getElementById('gameContainer');

let currentPlayer = 'X';
let playerMarker = 'X';
let aiMarker = 'O';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let aiEnabled = false;
let scores = { X: 0, O: 0 };

const clickSound = document.getElementById('clickSound');
const winSound = document.getElementById('winSound');
const drawSound = document.getElementById('drawSound');

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWin = () => {
    let won = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            won = true;
            break;
        }
    }

    if (won) {
        statusText.textContent = `Player ${currentPlayer} wins!`;
        winSound.play();
        scores[currentPlayer]++;
        updateScoreboard();
        gameActive = false;
        triggerConfetti(); // Trigger confetti on win
        return;
    }

    if (!gameState.includes('')) {
        statusText.textContent = 'Draw!';
        drawSound.play();
        gameActive = false;
    }
};

const handleCellClick = (event) => {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add('marked');
    clickSound.play();

    checkWin();

    if (gameActive && aiEnabled) {
        currentPlayer = aiMarker;
        statusText.textContent = `AI's turn`;
        setTimeout(aiMove, 500); // Delay AI move to make it more natural
    } else if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
};

const restartGame = () => {
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('marked');
    });
    statusText.textContent = `Player X's turn`;
};

const startGame = (mode) => {
    aiEnabled = (mode === 'ai');
    pvpMode.classList.toggle('active-mode', !aiEnabled);
    aiMode.classList.toggle('active-mode', aiEnabled);
    markerSelection.style.display = aiEnabled ? 'block' : 'none';
    restartGame();
};

const selectMarker = (marker) => {
    playerMarker = marker;
    aiMarker = marker === 'X' ? 'O' : 'X';
    currentPlayer = playerMarker;
    statusText.textContent = `Player ${currentPlayer}'s turn`;
    selectX.classList.toggle('active-marker', marker === 'X');
    selectO.classList.toggle('active-marker', marker === 'O');
    restartGame();
};

const aiMove = () => {
    let availableCells = gameState.map((val, idx) => val === '' ? idx : null).filter(val => val !== null);
    let randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    gameState[randomIndex] = aiMarker;

    const cell = document.querySelector(`.cell[data-index="${randomIndex}"]`);
    cell.textContent = aiMarker;
    cell.classList.add('marked');
    clickSound.play();

    checkWin();

    if (gameActive) {
        currentPlayer = playerMarker;
        statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
};

const updateScoreboard = () => {
    playerXScore.textContent = scores.X;
    playerOScore.textContent = scores.O;
};

const triggerConfetti = () => {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        gameContainer.appendChild(confetti);

        // Remove confetti after animation ends
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
};

// Event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);
pvpMode.addEventListener('click', () => startGame('pvp'));
aiMode.addEventListener('click', () => startGame('ai'));
selectX.addEventListener('click', () => selectMarker('X'));
selectO.addEventListener('click', () => selectMarker('O'));
*/

const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');
const pvpMode = document.getElementById('pvpMode');
const aiMode = document.getElementById('aiMode');
const selectX = document.getElementById('selectX');
const selectO = document.getElementById('selectO');
const playerXScore = document.getElementById('playerXScore');
const playerOScore = document.getElementById('playerOScore');
const markerSelection = document.getElementById('markerSelection');
const gameContainer = document.getElementById('gameContainer');

let currentPlayer = 'X';
let playerMarker = 'X';
let aiMarker = 'O';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let aiEnabled = false;
let scores = { X: 0, O: 0 };

const clickSound = document.getElementById('clickSound');
const winSound = document.getElementById('winSound');
const drawSound = document.getElementById('drawSound');

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWin = () => {
    let won = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            won = true;
            break;
        }
    }

    if (won) {
        statusText.textContent = `Player ${currentPlayer} wins!`;
        winSound.play();
        scores[currentPlayer]++;
        updateScoreboard();
        gameActive = false;
        triggerConfetti(); // Trigger confetti on win
        return;
    }

    if (!gameState.includes('')) {
        statusText.textContent = 'Draw!';
        drawSound.play();
        gameActive = false;
    }
};

const handleCellClick = (event) => {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add('marked');
    clickSound.play();

    checkWin();

    if (gameActive && aiEnabled) {
        currentPlayer = aiMarker;
        statusText.textContent = `AI's turn`;
        setTimeout(aiMove, 500); // Delay AI move to make it more natural
    } else if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
};

const restartGame = () => {
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = playerMarker; // Ensure the current player is correctly set at restart
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('marked');
    });
    statusText.textContent = `Player ${currentPlayer}'s turn`;
};

const startGame = (mode) => {
    aiEnabled = (mode === 'ai');
    pvpMode.classList.toggle('active-mode', !aiEnabled);
    aiMode.classList.toggle('active-mode', aiEnabled);
    markerSelection.style.display = aiEnabled ? 'block' : 'none';
    restartGame();
};

const selectMarker = (marker) => {
    playerMarker = marker;
    aiMarker = marker === 'X' ? 'O' : 'X';
    currentPlayer = playerMarker;
    statusText.textContent = `Player ${currentPlayer}'s turn`;
    selectX.classList.toggle('active-marker', marker === 'X');
    selectO.classList.toggle('active-marker', marker === 'O');
    restartGame();
};

const aiMove = () => {
    let availableCells = gameState.map((val, idx) => val === '' ? idx : null).filter(val => val !== null);
    let randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    gameState[randomIndex] = aiMarker;

    const cell = document.querySelector(`.cell[data-index="${randomIndex}"]`);
    cell.textContent = aiMarker;
    cell.classList.add('marked');
    clickSound.play();

    checkWin();

    if (gameActive) {
        currentPlayer = playerMarker;
        statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
};

const updateScoreboard = () => {
    playerXScore.textContent = scores.X;
    playerOScore.textContent = scores.O;
};

const triggerConfetti = () => {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        gameContainer.appendChild(confetti);

        // Remove confetti after animation ends
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
};

// Event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);
pvpMode.addEventListener('click', () => startGame('pvp'));
aiMode.addEventListener('click', () => startGame('ai'));
selectX.addEventListener('click', () => selectMarker('X'));
selectO.addEventListener('click', () => selectMarker('O'));

// Start the game in Player vs Player mode by default
startGame('pvp');

