
const questionCont = document.getElementById('questionBox')
const answersBtns = document.querySelectorAll('buttons')


//displaying question images//
const questionImage = document.getElementById('questionImg')

function displayQuestion(questionPic){
    questionImage.innerHTML = questions[0].questionPic

    
       
      }

function displayChoices(questions){
    const button = document.createElement('button')
    button.innerHTML = choices['Dog']
    answersBtns.innerText = questions.answers
}



//shuffle questions
let shuffledQuestions, currentQuestion
//play button and game//
const playButton = document.getElementById('start')
playButton.addEventListener('click', playGame)

   function playGame(){
    // console.log('gamestarted')
    shuffledQuestions = questions.sort(()=> Math.random()- .5)
    currentQuestion = 0
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
    displayQuestion(shuffledQuestions[currentQuestion])
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
    number : 0,    
    questionPic: `<img src='./assets/animalPictures/dog.jpg' alt="Dog">`,
    choices: [
        {answer: 'Dog', correct: true}, 
        {answer: 'Cat', correct: false},
        {answer: 'Horse', correct: false},
        {answer:'Bird', correct: false},
    ]
    
},

    {
    number : 1, 
    questionPic: `<img src='./assets/animalPictures/tiger.jpg' alt="Tiger">`,
    choices: [
        {answer: 'Lion', correct: false}, 
        {answer: 'Tiger', correct: true},
        {answer: 'Puma', correct: false},
        {answer: 'Leopard', correct: false},
    ]
},

    {
    number : 2, 
    questionPic: `<img src='./assets/animalPictures/rhino.jpg' alt="Rhino">`,
    choices: [
        {answer: 'Elephant', correct: false}, 
        {answer: 'Turtle', correct: false},
        {answer: 'Antilope', correct: false},
        {answer: 'Rhino', correct: true},
    ]
},
  {
    number : 3, 
    questionPic:`<img src='./assets/animalPictures/turkey.jpg' alt="Turkey">`,
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


