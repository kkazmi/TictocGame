let boxes = document.querySelectorAll('.box');

let trunO = true;
let resetButton = document.getElementById('reset');
let newGameButton = document.getElementById('newgame');
let message = document.getElementById('message');
let hideDiv = document.querySelector('.hide');
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

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("box");

        if (trunO) {
            box.innerHTML = ("O");
            box.style.color = "red";
            box.style.backgroundColor = "black";
            trunO = false;
        } else {
            box.innerHTML = ("x");
            box.style.color = "white";
            box.style.backgroundColor = "yellow";
            trunO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

resetButton.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
        box.style.backgroundColor = "white";
    });
});

newGameButton.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
        box.style.backgroundColor = "white";
    });
});
const showwinner = (vapos1vall) => {
    message.innerText = "Congratulation!! Winner is : " + vapos1vall;
}
const checkWinner = () => {
    for (let winner of winningConditions) {
        //console.log(winner[0],winner[1],winner[2]);
        console.log(
            boxes[winner[0]].innerText,
            boxes[winner[1]].innerText,
            boxes[winner[2]].innerText
        );
        let pos1val = boxes[winner[0]].innerText;
        let pos2val = boxes[winner[1]].innerText;
        let pos3val = boxes[winner[2]].innerText;
        if (pos1val === pos2val && pos2val === pos3val && pos1val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                boxes[winner[0]].style.backgroundColor = "green";
                boxes[winner[1]].style.backgroundColor = "green";
                boxes[winner[2]].style.backgroundColor = "green";
                console.log("Winner is " + pos1val);
                hideDiv.classList.remove('hide');
                showwinner(pos1val);
                boxes.forEach((box) => {
                    box.disabled = true;
                    box.style.backgroundColor = "blue";
                });
            }
        }
    }
}