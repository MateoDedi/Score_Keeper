const player1Button = document.querySelector('.p1');
        const player2Button = document.querySelector('.p2');
        const resetButton = document.querySelector('.reset');
        const player1Score = document.querySelector('.player1-score');
        const player2Score = document.querySelector('.player2-score');

        let score1 = 0;
        let score2 = 0;
        let totalGames = 0;
        let gameOver = false;

        // Function to update the scores and check for a winner
        function updateScores() {
            player1Score.textContent = score1;
            player2Score.textContent = score2;

            if (score1 >= 5 || score2 >= 5 || totalGames >= 5) {
                gameOver = true;
                player1Button.disabled = true;
                player2Button.disabled = true;

                if (score1 > score2) {
                    player1Score.classList.add('winner');
                    player2Score.classList.add('loser');
                } else {
                    player2Score.classList.add('winner');
                    player1Score.classList.add('loser');
                }
            }
        }

        // Event listener for Player One button
        player1Button.addEventListener('click', function() {
            if (!gameOver) {
                score1++;
                totalGames++;
                updateScores();
            }
        });

        // Event listener for Player Two button
        player2Button.addEventListener('click', function() {
            if (!gameOver) {
                score2++;
                totalGames++;
                updateScores();
            }
        });

        // Event listener for Reset button
        resetButton.addEventListener('click', function() {
            score1 = 0;
            score2 = 0;
            totalGames = 0;
            gameOver = false;
            player1Button.disabled = false;
            player2Button.disabled = false;
            player1Score.classList.remove('winner', 'loser');
            player2Score.classList.remove('winner', 'loser');
            updateScores();
        });