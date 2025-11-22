const questions = [
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephent",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is the smallest cointry in the world?",
        answers:[
            {text:"Monaco",correct:false},
            {text:"Vatican City",correct:true},
            {text:"Maldives",correct:false},
            {text:"Nauru",correct:false},
        ]
    },
    {
        question:"Which is the fastest land animal in the world?",
        answers:[
            {text:"Lion",correct:false},
            {text:"Cheetah",correct:true},
            {text:"Leopard",correct:false},
            {text:"Tiger",correct:false},
        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers:[
            {text:"Sahara",correct:false},
            {text:"Arctic",correct:false},
            {text:"Antarctica",correct:true},
            {text:"Gobi",correct:false},
        ]
    },
    {
        question:"Which is the largest ocean in the world?",
        answers:[
            {text:"Atlantic Ocean",correct:false},
            {text:"Indian Ocean",correct:false},
            {text:"Arctic Ocean",correct:false},
            {text:"Pacific Ocean",correct:true},
        ]
    }
]


const questionElement = document.querySelector("#question");
const answerElement = document.querySelector(".answer");
const nextButton = document.querySelector(".next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach((answer) =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        if(answer.correct){
            button.addEventListener("click",()=>{
                
            })

        }


        })
    }

function resetState(){
    nextButton.style.display="none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    } 
}

function selectAnswer(e){
    const
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < 5){
        currentQuestionIndex++;
        showQuestion();
    }
    else{
        nextButton.innerHTML=`Start Again`;
    }
}
)
startQuiz();
