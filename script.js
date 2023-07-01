let firstCard = Math.floor(Math.random()*(11-2+1)+2)
let secondCard = Math.floor(Math.random()*(11-2+1)+2)
let thirdCard = 0;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("round");
let cardNum = document.getElementById("Cards");
let cardSum = document.getElementById("Sum");
document.getElementById('Start').addEventListener("click", startGame);

function startGame() {
    cardNum.textContent += firstCard + " - " + secondCard;
    cardSum.textContent += sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        messageEl.textContent = message;
        while (document.getElementById("btns").hasChildNodes()) {
            document.getElementById("btns").removeChild(document.getElementById("btns").childNodes[0]);
        }
        let newEL = document.createElement("button");
        newEL.setAttribute("class", "bts");
        newEL.textContent = "DRAW A NEW CARD?";
        document.getElementById("btns").appendChild(newEL);
        newEL.addEventListener("click", newCard)
    }
    else if (sum === 21) {
        message = "You've got BlackJack";
        hasBlackJack = true;
        messageEl.textContent = message;
        while (document.getElementById("btns").hasChildNodes()) {
            document.getElementById("btns").removeChild(document.getElementById("btns").childNodes[0]);
        }
        let el = document.createElement("button");
        el.setAttribute("class", "bts");
        el.textContent = "PLAY AGAIN?";
        document.getElementById("btns").appendChild(el);
        el.addEventListener("click", () => location.reload());
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
        messageEl.textContent = message;
        while (document.getElementById("btns").hasChildNodes()) {
            document.getElementById("btns").removeChild(document.getElementById("btns").childNodes[0]);
        }
        let el = document.createElement("button");
        el.setAttribute("class", "bts");
        el.textContent = "PLAY AGAIN?";
        document.getElementById("btns").appendChild(el);
        el.addEventListener("click", () => location.reload());
    }

}

function newCard() {
    thirdCard = Math.floor(Math.random()*(11-2+1)+2);
    cardNum.textContent += " - " + thirdCard;
    sum += thirdCard;
    cardSum.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        messageEl.textContent = message;
    }
    else if (sum === 21) {
        message = "You've got BlackJack";
        hasBlackJack = true;
        messageEl.textContent = message;
        while (document.getElementById("btns").hasChildNodes()) {
            document.getElementById("btns").removeChild(document.getElementById("btns").childNodes[0]);
        }
        let el = document.createElement("button");
        el.setAttribute("class", "bts");
        el.textContent = "PLAY AGAIN?";
        document.getElementById("btns").appendChild(el);
        el.addEventListener("click", () => location.reload());
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
        messageEl.textContent = message;
        while (document.getElementById("btns").hasChildNodes()) {
            document.getElementById("btns").removeChild(document.getElementById("btns").childNodes[0]);
        }
        let el = document.createElement("button");
        el.setAttribute("class", "bts");
        el.textContent = "PLAY AGAIN?";
        document.getElementById("btns").appendChild(el);
        el.addEventListener("click", () => location.reload());
    }
}