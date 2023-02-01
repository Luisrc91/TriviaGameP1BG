
const questionCont = document.getElementById('questionBox')
const answersBtns = document.getElementById('buttonCont')


//displaying question images//
const questionImage = document.getElementById('questionImg')

function displayQuestion(questionPic){
    questionImage.innerHTML = questions[0].questionPic
        const button = document.createElement('button')
        button.innerHTML = questions.answers.answer
        button.classList.add('btn')
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answersBtnsappendChild(button)
      }

//shuffle questions
let shuffledQuestions, currentQuestionIndex
//play button and game//
const playButton = document.getElementById('start')
playButton.addEventListener('click', playGame)

   function playGame(){
    // console.log('gamestarted')
    // playButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random()- .5)
    currentQuestionIndex = 0
    // GOT DISAPEAR PLAY BUTTON FROM THIS SITE BELOW//
    // https://stackoverflow.com/questions/8685107/hiding-a-button-in-javascript // // 
    if(playGame) {
        document.getElementById('start').style.visibility = 'hidden';
    } else {
        document.getElementById('start').style.visibility = 'visible';
    }
    displayQuestion()
}

//nextquestion
function nextQuestion(){
    displayQuestion(shuffledQuestions[currentQuestionIndex])
}



// function answerSelection (answers){
//     answersBtns.innerText = questions.answers
//     // questions.answers =
// }

// GOT AN IDEA ON THIS SITES BELOW //
//https://stackoverflow.com/questions/40569293/displaying-questions-for-a-quiz-using-javascript//
// https://stackoverflow.com/questions/49729105/how-to-add-an-image-to-javascript-quiz//
const questions = [
    {
    id : '0',    
    questionPic: `<img src='./assets/animalPictures/dog.jpg' alt="Dog">`,
    answers: [
        {answer: 'Dog', correct: true}, 
        {answer: 'Cat', correct: false},
        {answer: 'Horse', correct: false},
        {answer: 'Bird', correct: false},
    ]
},

    {
    number : 1, 
    questionPic: `<img src='./assets/animalPictures/tiger.jpg' alt="Tiger">`,
    answers: [
        {text: 'Lion', correct: false}, 
        {text: 'Tiger', correct: true},
        {text: 'Puma', correct: false},
        {text: 'Leopard', correct: false},
    ]
},

    {
    number : 2, 
    questionPic: `<img src='./assets/animalPictures/rhino.jpg' alt="Rhino">`,
    answers: [
        {text: 'Elephant', correct: false}, 
        {text: 'Turtle', correct: false},
        {text: 'Antilope', correct: false},
        {text: 'Rhino', correct: true},
    ]
},
  {
    number : 3, 
    questionPic:`<img src='./assets/animalPictures/turkey.jpg' alt="Turkey">`,
    answers: [
        {text: 'Chicken', correct: false}, 
        {text: 'Pig', correct: false},
        {text: 'Turkey', correct: true},
        {text: 'Cow', correct: false},
    ]
},

    {
    number : 4, 
    questionPic: `<img src='./assets/animalPictures/polarBear.jpg' alt="Polar Bear">`,
    answers: [
        {text: 'Zebra', correct: false}, 
        {text: 'Polar Bear', correct: true},
        {text: 'Wolf', correct: false},
        {text: 'Fox', correct: false},
    ]
}
]





























// function getElementById(ids) {
//     var idList = ids.split(" ");
//     var results = [], item;
//     for (var i = 0; i < idList.length; i++) {
//         item = document.getElementById(idList[i]);
//         if (item) {
//             results.push(item);
//         }
//     }
//     return(results);
// }

// document.addEventListener('Click', )(getElementsById("#answerOne, #answerTwo, #answerThree, #answerFour"));

// hoover event

// let anwerBox= document.getElementsByClassName('answer');

// //  Change text color on mouseover
// anwerBox.addEventListener('mouseover', function handleMouseOver() {
//   anwerBox.style.backgroundColor = 'yellow';
// });
// //  Change text color back on mouseout
// anwerBox.addEventListener('mouseout', function handleMouseOut() {
//   anwerBox.style.backgroundColor = '#6ea2eb';
// });


