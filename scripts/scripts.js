var checker = 0;
var rows = ["", "", "", "", "", "", "", "", ""];
function insertSymbol(button) {
    var value;
    if (checker % 2 == 0) {
        button.setAttribute('style', 'color: white;');
        value = "X";
    }
    else {
        button.setAttribute('style', 'color: black;');
        value = "O";
    }
    button.innerText = value;
    checker++;
}
function addToRow(button) {
    rows[Number(button.id)] = button.innerText;
}
function winner() {
    switch (true) {
        case rows[0] == rows[1] && rows[1] == rows[2] && rows[0] != "":
            return rows[0];
        case rows[3] == rows[4] && rows[4] == rows[5] && rows[3] != "":
            return rows[3];
        case rows[6] == rows[7] && rows[7] == rows[8] && rows[6] != "":
            return rows[6];
        case rows[0] == rows[3] && rows[3] == rows[6] && rows[0] != "":
            return rows[0];
        case rows[1] == rows[4] && rows[4] == rows[7] && rows[1] != "":
            return rows[1];
        case rows[2] == rows[5] && rows[5] == rows[8] && rows[2] != "":
            return rows[2];
        case rows[0] == rows[4] && rows[4] == rows[8] && rows[0] != "":
            return rows[0];
        case rows[2] == rows[4] && rows[4] == rows[6] && rows[2] != "":
            return rows[2];
        default:
            return -1;
    }
}
function contains(array) {
    var check = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "") {
            check = true;
        }
    }
    return check;
}
var results = document.querySelector('.results');
function displayWinner() {
    if (winner() == "X") {
        disableAll();
        results.innerText = "X won!";
    }
    else if (winner() == "O") {
        disableAll();
        results.innerText = "O won!";
    }
    else if (!contains(rows) && winner() == -1) {
        disableAll();
        results.innerText = "It's a draw";
    }
}
function resetBox() {
    columns.forEach(function (button) {
        button.innerText = "";
        button.disabled = false;
    });
    rows = ["", "", "", "", "", "", "", "", ""];
}
function disableAll() {
    columns.forEach(function (button) {
        button.disabled = true;
    });
}
var resetButton = document.querySelector('.playAgain');
resetButton.addEventListener('click', function () {
    resetBox();
    results.innerText = "";
});
var columns = document.querySelectorAll('button');
columns.forEach(function (button) {
    button.addEventListener('click', function () {
        button.disabled = true; //disables button
        insertSymbol(button); //inserts X or O
        addToRow(button); //repalces empty string with X or O
        displayWinner();
        console.log(rows);
    });
});
var startContainer = document.getElementById('welcome');
var startText = document.querySelector('.startText');
var startScreen = document.querySelector('.startScreen');
var playScreen = document.getElementById('playScreen');
startText.addEventListener('click', function () {
    startText.setAttribute('style', 'visibility: hidden;');
    startScreen.setAttribute('style', 'visibility: hidden;');
    startContainer.setAttribute('style', 'background-color: gray;');
    playScreen.setAttribute('style', 'visibility: visible;');
});
