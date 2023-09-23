class Start {
    constructor() {
        let v1=document.getElementById('value1').value
        this.playerName = v1
        this.botName = "Alif"
        this.playerOption;
        this.botOption;
        this.winner = ""
    }

    get getBotOption() {
        return this.botOption;
    }

    set setBotOption(option) {
        this.botOption = option;
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    botBrain() {
        const option = ["🖐", "✌", "✊"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winCalculation() {
        if (this.botOption == "🖐" && this.playerOption == "✌") {
            return this.winner = this.playerName
        } else if (this.botOption == "🖐" && this.playerOption == "✊") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌" && this.playerOption == "🖐") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌" && this.playerOption == "✊") {
            return this.winner = this.playerName
        } else if (this.botOption == "✊" && this.playerOption == "🖐") {
            return this.winner = this.playerName
        } else if (this.botOption == "✊" && this.playerOption == "✌") {
            return this.winner = this.botName;
        } else {
            return this.winner = "Tie"
        }
    }

    matchResult() {
        if (this.winner != "Tie") {
            return `${this.winner} WIN!`;
        } else {
            return `WAAA ${this.winner}, No one win 🤪`;
        }
    }
}

function pickOption(params) {
    const start = new Start();
    start.setPlayerOption = params;
    start.setBotOption = start.botBrain();
    start.winCalculation();

    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");

    inGame.textContent = "..."
    result.textContent = "..."

    setTimeout(() => {
        inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`
        result.textContent = start.matchResult();
    }, 1000);

}
