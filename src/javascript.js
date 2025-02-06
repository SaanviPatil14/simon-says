const colors = ['green', 'red', 'yellow', 'blue'];
    let gameSequence = [];
    let playerSequence = [];
    let level = 0;
    let gameStarted = false;

    const result = document.getElementById('status');
    const startBtn = document.getElementById('start-btn');
    const colorButtons = colors.map(color => document.getElementById(color));


    startBtn.addEventListener('click', () => {
      if (!gameStarted) {
          startGame();
      }
  });

  // Start a new game
  function startGame() {
      gameStarted = true;
      level = 0;
      gameSequence = [];
      playerSequence = [];
      result.innerText = `Level ${level}`;
      nextLevel();
  }

  // Generate the next level and add a random color to the sequence
  function nextLevel() {
      level++;
      playerSequence = [];
      result.innerText = `Level ${level}`;
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      gameSequence.push(randomColor);
      showSequence();
  }

  // Show the sequence to the player with a delay
  function showSequence() {
      let index = 0;
      const interval = setInterval(() => {
          const color = gameSequence[index];
          highlightButton(color);
          index++;
          if (index === gameSequence.length) {
              clearInterval(interval);
          }

      }, 600);
  }

  // Highlight the color button
  function highlightButton(color) {
    const button = document.getElementById(color);
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active');
    }, 300);
}

// Check if the player's sequence is correct
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (gameStarted) { 
        highlightButton(button.id);  
        playerSequence.push(button.id); 
        checkPlayerSequence();  
    }
    });
});

// Compare the player's input with the game sequence
function checkPlayerSequence() {
    const currentIndex = playerSequence.length - 1;
    if (playerSequence[currentIndex] !== gameSequence[currentIndex]) {
        result.innerText = 'Game Over! Click Start to play again.';
        gameStarted = false;
        return;
    }

    if (playerSequence.length === gameSequence.length) {
        setTimeout(nextLevel, 1000);
    }
}