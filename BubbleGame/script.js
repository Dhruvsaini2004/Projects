let timer_count;
let total_score;
const score = document.querySelector(".score");
const timer = document.querySelector(".timer");
const hit = document.querySelector(".hit");
const start = document.querySelector(".start");
const bottom = document.querySelector(".bottom");
let hitGenerated;
let countdown;

const getBubble = () => {
    bottom.innerHTML = "";
    for (let i = 0; i < 120; i++) {
        const ball = document.createElement("div")
        ball.className = "ball"
        ball.innerHTML = `<h2>${Math.floor(Math.random() * 20 + 1)}</h2>`
        bottom.appendChild(ball)
    }
}

const getHit = () => {
    hitGenerated = Math.floor(Math.random() * 20 + 1);
    hit.innerHTML = `<h2>Hit:- ${hitGenerated}</h2>`;
}

const timeStart = () => {
    clearInterval(countdown);
    countdown = setInterval(() => {
        timer_count--;
        timer.innerHTML = `<h2>${timer_count}</h2>`;
        if (timer_count <= 0) {
            clearInterval(countdown);
            timer.innerHTML = `<h2>Time's up!</h2>`;
            bottom.innerHTML = `
            <button class = "start">Restart Game</button>
            `;
        }
    }, 1000);
}

const gameStart = () => {
    timer_count = 60;
    total_score = 0;
    timer.innerHTML = `<h2>${timer_count}</h2>`;
    score.innerHTML = `<h2>Score:- ${total_score}</h2>`
    getBubble();
    getHit();
    timeStart();
}

bottom.addEventListener("click", (e) => {
    if (e.target.classList.contains("start")) {
        gameStart();
    }
    else if (e.target.closest(".ball") && e.target.textContent == hitGenerated) {
        total_score += 10;
        score.innerHTML = `<h2>Score:- ${total_score}</h2>`
        getHit();
        getBubble();
    }
    else {
        if (total_score > 0) {
            total_score -= 5;
            score.innerHTML = `<h2>Score:- ${total_score}</h2>`
        }
    }
})




