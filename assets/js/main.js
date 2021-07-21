const radioBtn = document.getElementById('radio-btn')
const roundsCounter = document.getElementById('rounds-counter')
const currentRound = document.getElementById('current-round')
const totalRound = document.getElementById('total-round')
const pointsBox = document.getElementById('points-box')
const userPoints = document.getElementById('user-points')
const compPoints = document.getElementById('comp-points')
const selectText = document.getElementById('select-text')
const selectItem = document.getElementById('select-item');
const moveText = document.getElementById('move-text');
const rock = document.getElementById('select-rock')
const paper = document.getElementById('select-paper')
const scissor = document.getElementById('select-scissor')

let round = 0
let maxRound
let user = 0
let comp = 0


// 1. enter player name 

const playerName = prompt("Enter your player name");
alert("Hi " + playerName + ". Are you ready to win?");


// 2. select rounds to play 

function roundSelect() {
    currentRound.innerHTML = round
    if (round5.checked) {
        maxRound = 5
        radioBtn.style.display = "none"
        roundsCounter.style.display = "block"
        totalRound.innerHTML = maxRound
    } else if (round10.checked) {
        maxRound = 10
        radioBtn.style.display = "none"
        roundsCounter.style.display = "block"
        totalRound.innerHTML = maxRound
    } else if (round15.checked) {
        maxRound = 15
        radioBtn.style.display = "none"
        roundsCounter.style.display = "block"
        totalRound.innerHTML = maxRound
    } else {
        maxRound = 20
        radioBtn.style.display = "none"
        roundsCounter.style.display = "block"
        totalRound.innerHTML = maxRound
    }
}


// 3. select image (click functions)
// 3a) user select

rock.addEventListener('click', function () {
    playGame("Rock");
})
paper.addEventListener('click', function () {
    playGame("Paper")
})
scissor.addEventListener('click', function () {
    playGame("Scissor")
})


// 3b) computer random select

function compRandom() {
    let selection = ["Rock", "Paper", "Scissor"]
    let random = Math.floor(Math.random() * 3)
    return selection[random]
}

// 4. game cases: win/ lose / draw

function playGame(userSelect) {
    const compSelect = compRandom()
    switch (userSelect + compSelect) {
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            win(userSelect, compSelect)
            break
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
            lose(userSelect, compSelect)
            break
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            draw(userSelect, compSelect)
            break
    }
    if (round === maxRound) {
        gameEnd()
    }
    round++
    currentRound.innerHTML = round
}

// 4a) user win situation 

function win(userSelect, compSelect) {
    user++;
    userPoints.innerHTML = user
    compPoints.innerHTML = comp
    selectText.innerHTML = `${userSelect}(${playerName}) beats ${compSelect}(comp). You win!`
    if (userSelect === "Rock") {
        rock.classList.add('win-color')
        setTimeout(function () { rock.classList.remove('win-color') }, 700);
    } else if (userSelect === "Paper") {
        paper.classList.add('win-color')
        setTimeout(function () { paper.classList.remove('win-color') }, 700);
    } else {
        scissor.classList.add('win-color')
        setTimeout(function () { scissor.classList.remove('win-color') }, 700);
    }
}

// 4b) user lose situation

function lose(userSelect, compSelect) {
    comp++;
    userPoints.innerHTML = user
    compPoints.innerHTML = comp
    selectText.innerHTML = `${compSelect}(comp) beats ${userSelect}(${playerName}). You lose!`
    if (userSelect === "Rock") {
        rock.classList.add('lose-color')
        setTimeout(function () { rock.classList.remove('lose-color') }, 700);
    } else if (userSelect === "Paper") {
        paper.classList.add('lose-color')
        setTimeout(function () { paper.classList.remove('lose-color') }, 700);
    } else {
        scissor.classList.add('lose-color')
        setTimeout(function () { scissor.classList.remove('lose-color') }, 700);
    }
}

// 4c) user draw situation

function draw(userSelect, compSelect) {
    userPoints.innerHTML = user
    compPoints.innerHTML = comp
    selectText.innerHTML = `It was a draw! You both chose ${compSelect}`
    if (userSelect === "Rock") {
        rock.classList.add('draw-color')
        setTimeout(function () { rock.classList.remove('draw-color') }, 700);
    } else if (userSelect === "Paper") {
        paper.classList.add('draw-color')
        setTimeout(function () { paper.classList.remove('draw-color') }, 700);
    } else {
        scissor.classList.add('draw-color')
        setTimeout(function () { scissor.classList.remove('draw-color') }, 700);
    }
}

// 5. end of game

function gameEnd() {
    selectText.style.display = "none"
    selectItem.style.display = "none"
    moveText.style.display = "none"
    if (user > comp) {
        roundsCounter.innerHTML = `<h1>${playerName} wins</.><img src="assets/img/celebrating.png">`
    } else if (comp === user) {
        roundsCounter.innerHTML = `<h1>This is a draw. There is no winner.</h1><img src="assets/img/equality.png">`
    } else if (user < comp) {
        roundsCounter.innerHTML = `<h1>The comp wins</h1><img src="assets/img/fatigue.png">`
    }
}

// 6. start new game

function restartGame() {
    document.location.reload();
}