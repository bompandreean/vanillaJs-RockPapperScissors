const playObjects = {
    ROCK: document.querySelector(".rock"),
    PAPER: document.querySelector(".paper"),
    SCISSORS: document.querySelector(".scissors")
};

const objectByNumber = (computerObj) => {
    switch (computerObj) {
        case 0:
            return playObjects.ROCK.childNodes.item(1).cloneNode(true);
        case 1:
            return playObjects.PAPER.childNodes.item(1).cloneNode(true);
        case 2:
            return playObjects.SCISSORS.childNodes.item(1).cloneNode(true);
    }
}

const numberByObject = (plObj) => {
    switch (plObj) {
        case playObjects.ROCK:
            return 0;
        case playObjects.PAPER:
            return 1;
        case playObjects.SCISSORS:
            return 2;
    }
}

const makeComputerChoice = function () {
    const randomNo = Math.floor(Math.random() * 3);
    console.log(randomNo);

    return randomNo;
}

const chooseWinner = (userC, computerC) => {
    const winningMessage = "YOU WON";
    const losingMessage = "YOU LOST";
    if (userC === computerC) {
        return "EQUALITY";
    }

    switch (userC) {
        case 0:
            return computerC === 1 ? losingMessage : winningMessage;
        case 1:
            return computerC === 0 ? winningMessage : losingMessage;
        case 2:
            return computerC === 1 ? losingMessage : winningMessage;
    }
}

const objects = document.querySelectorAll(".object");
const showChoices = document.querySelector(".choses");
const showWinner = document.querySelector(".winner");


objects.forEach(obj => obj.addEventListener('click', () => {
    showChoices.innerHTML ='';
    showWinner.innerHTML='';
    
    const userChoice = numberByObject(obj);
    const computerChoice = makeComputerChoice();
    console.log("user: " + userChoice + " computer: " + computerChoice);

    const message = chooseWinner(userChoice, computerChoice);
    console.log(message);

    const messageElement = document.createElement("h2");
    messageElement.innerText = message;
    showWinner.appendChild(messageElement)

    const text = document.createElement('h3');
    text.innerText = "VS";
    showChoices.appendChild(obj.childNodes.item(1).cloneNode(true));
    showChoices.appendChild(text);
    showChoices.appendChild(objectByNumber(computerChoice));

    console.log(obj.childNodes);
}));