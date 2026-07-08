const boxes = document.querySelectorAll(".box");
const resetbutton = document.querySelector(".reset");

const player1 = document.querySelector(".player1 p");
const player2 = document.querySelector(".player2 p");

let player1Score = 0;
let player2Score = 0;

let currentPlayer = "1";
let gameOver = false;

let board = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box, index) => {

    box.addEventListener("click", () => {

        if (board[index] !== "" || gameOver) return;

        const img = box.querySelector(".mark");

        if (currentPlayer === "1") {
            img.src = "images/cross.webp";
            board[index] = "1";
            currentPlayer = "2";
        } else {
            img.src = "images/circle.png";
            board[index] = "2";
            currentPlayer = "1";
        }

        checkWinner();

    });

});

function checkWinner() {

    for (let pattern of winPatterns) {

        let a = board[pattern[0]];
        let b = board[pattern[1]];
        let c = board[pattern[2]];

        if (a !== "" && a === b && b === c) {

            gameOver = true;

            if (a === "1") {
                player1Score++;
                player1.textContent = "Player 1: " + player1Score;
            } else {
                player2Score++;
                player2.textContent = "Player 2: " + player2Score;
            }

            alert("Player " + a + " Wins!");

            // First to 5 wins
            if (player1Score === 5 || player2Score === 5) {

                alert("Tournament Finished!");

                resetAll();

            } else {

                resetBoard();

            }

            return;
        }
    }

    if (!board.includes("")) {

        gameOver = true;

        alert("Match Draw!");

        resetBoard();

    }

}

function resetBoard() {

    boxes.forEach((box, index) => {
    console.log(index, box);

    const img = box.querySelector(".mark");
    console.log(".mark");

    img.removeAttribute("src");
});

}

function resetAll() {

    player1Score = 0;
    player2Score = 0;

    player1.textContent = "Player 1: 0";
    player2.textContent = "Player 2: 0";

    resetBoard();

}

resetbutton.addEventListener("click", resetAll);