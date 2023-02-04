const questionCont = document.getElementById('questionBox')
const answersBtns = document.querySelectorAll('buttons')
const nextBtn = document.getElementById('nextBtn')
const choiceList = document.getElementById('buttonContr')
const yourScore = document.getElementById('yourScore')
const scoreBoard = document.createElement('h3')
scoreBoard.innerHTML = '0';
document.getElementById('yourScore').appendChild(h3)
// let score = 0;



const questions = [
    {
        number : 0,    
        questionPic: `<img src='./assets/animalPictures/Dog.jpg' alt="Dog">`,
        choices: [
            {answer: 'Dog', correct: true}, 
            {answer: 'Cat', correct: false},
            {answer: 'Horse', correct: false},
            {answer:'Bird', correct: false},
        ]
    },
    {
        number : 1, 
        questionPic: `<img src='./assets/animalPictures/Tiger.jpg' alt="Tiger">`,
        choices: [
            {answer: 'Lion', correct: false}, 
            {answer: 'Tiger', correct: true},
            {answer: 'Puma', correct: false},
            {answer: 'Leopard', correct: false},
        ]
    },
    {
        number : 2, 
        questionPic: `<img src='./assets/animalPictures/Rhino.jpg' alt="Rhino">`,
        choices: [
            {answer: 'Elephant', correct: false}, 
            {answer: 'Turtle', correct: false},
            {answer: 'Antilope', correct: false},
            {answer: 'Rhino', correct: true},
        ]
    },
    {
        number : 3, 
        questionPic:`<img src='./assets/animalPictures/Turkey.jpg' alt="Turkey">`,
        choices: [
            {answer: 'Chicken', correct: false}, 
            {answer: 'Pig', correct: false},
            {answer: 'Turkey', correct: true},
            {answer: 'Cow', correct: false},
        ]
    },
    {
        number : 4, 
        questionPic: `<img src='./assets/animalPictures/polarBear.jpg' alt="Polar Bear">`,
        choices: [
            {answer: 'Zebra', correct: false}, 
            {answer: 'Polar Bear', correct: true},
            {answer: 'Wolf', correct: false},
            {answer: 'Fox', correct: false},
        ]
    }
]


function userScore() {
    if (selectedAnswer === 'correct') {
        scoreCounter = scoreCounter + 5; // increases scoreCounter by 5

        // sets the element text to the current score
        scoreCounterElemet.innerText = scoreCounter; 
    }
    console.log('Increase Score')
}

//displaying question images//
const questionImage = document.getElementById('questionImg')

function displayQuestion(currentQuestion){
    // console.log(shuffledQuestions[currentQuestion])
    questionImage.innerHTML = shuffledQuestions[currentQuestion].questionPic
    const choices = shuffledQuestions[currentQuestion].choices
    choices.forEach(choice => {
        const button = document.createElement('button')
        button.textContent = choice.answer
        button.class = 'buttons'
        button.id = choice.correct
        button.addEventListener('click', (e) => {
            if (e.target.id === true) {      
            
                // make score go up by one and update dom
                currentQuestion++                
                nextQuestion(currentQuestion)
            } else {
                currentQuestion++
                nextQuestion(currentQuestion)
            }
            

        }) 
        const choiceList = document.getElementById('buttonContr')
        choiceList.appendChild(button) 
        
    })
}


let score = 0;
const q =questions
let userAnswer 
if (userAnswer === q ){
    score++
}
console


//shuffle questions
let shuffledQuestions, currentQuestion



//play button and game//
const playButton = document.getElementById('start')
playButton.addEventListener('click', playGame)

shuffledQuestions = questions.sort(()=> Math.random()- .5)
// console.log(shuffledQuestions)

function playGame(){
    score = 0;
    acceptingAnswers = true;
    yourScore.innerText = score;

    currentQuestion = 0
    if(playGame) {
        document.getElementById('start').style.visibility = 'hidden';
    } else {
        document.getElementById('start').style.visibility = 'visible';
    }
    displayQuestion(currentQuestion)
}

// document.getElementById('nextBtn').addEventListener('click', nextQuestion)

//nextquestion
function nextQuestion() {
    
   

    const node = document.getElementById('buttonContr')
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }

    currentQuestion++
    displayQuestion(currentQuestion)
}



    
