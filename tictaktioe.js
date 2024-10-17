let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winmsg = document.querySelector(".winner");
let newGame = document.querySelector(".newGame");
let turnO = true;

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const  disabledBoxes = () => {
    for(let box of boxes){
         box.disabled = true;

    } 
    
}
const enabledBoxes = () => {
    for(let box of boxes){
         box.disabled = false;
         box.innerHTML = "";
    } 
} 
const resetGame = () => {
    turnO = true;
    winmsg.classList.add("hide");
    enabledBoxes();
}


boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        winnerGame();
    });

    const showWinner = (winner) => {
        winmsg.innerHTML = `${winner} is the winner!`;
        console.log(winner);
        winmsg.classList.remove("hide");
        disabledBoxes();
        
    };

    const winnerGame = () => {
        for (let condition of win) {
            let [position1, position2, position3] = condition;
            if (boxes[position1].innerHTML !== "" &&
                boxes[position1].innerHTML === boxes[position2].innerHTML &&
                boxes[position2].innerHTML === boxes[position3].innerHTML) {
                // Display the winner
                showWinner(boxes[position1].innerHTML);
                return;
            }
        }
    };
});

newGame.addEventListener("click", resetGame );
reset.addEventListener("click", resetGame );