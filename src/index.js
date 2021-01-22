export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {
        return "결과 값 String";
    };

    const printComputerInputNumbers = function () {
        console.log(computerInputNumbers);
    }
    let computerInputNumbers = generateComputerInputNumbers();
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", printComputerInputNumbers);
}

function getRandomPositiveInt(inclusiveMax) {
    return Math.floor(Math.random() * Math.floor(inclusiveMax)) + 1;
}

const generateComputerInputNumbers = function () {
    const container = new Set();
    const answer = [];
    while ([...container].length < 3) {
        container.add(getRandomPositiveInt(9));
    }
    return Array.from(container);
    // for (let item of container) answer.push(item);
    // return answer;
}

new BaseballGame();