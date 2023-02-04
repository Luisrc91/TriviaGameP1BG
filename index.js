const questionCont = document.getElementById('questionBox')
//displaying question images//
const questionImage = document.getElementById('questionImg')
const answersBtns = document.querySelectorAll('buttons')
const nextBtn = document.getElementById('nextbtn')
const choiceList = document.getElementById('buttonContr')

let shuffledQuestions, currentQuestion


// question Array
// https://stackoverflow.com/questions/49729105/how-to-add-an-image-to-javascript-quiz
// images form https://unsplash.com/
const questions = [
    {
        number : 0,    
        questionPic: `<img src='./assets/animalPictures/Dog.jpg' alt="Dog"credits="Taylor Kopel
        ">`,
        choices: [
            {answer: 'Dog', correct: true}, 
            {answer: 'Cat', correct: false},
            {answer: 'Horse', correct: false},
            {answer:'Bird', correct: false},
        ]
    },
    {
        number : 1, 
        questionPic: `<img src='./assets/animalPictures/Tiger.jpg' alt="Tiger"credits="A G">`,
        choices: [
            {answer: 'Lion', correct: false}, 
            {answer: 'Tiger', correct: true},
            {answer: 'Puma', correct: false},
            {answer: 'Leopard', correct: false},
        ]
    },
    {
        number : 2, 
        questionPic: `<img src='./assets/animalPictures/Rhino.jpg' alt="Rhino"credits="Glen Carrie" >`,
        choices: [
            {answer: 'Elephant', correct: false}, 
            {answer: 'Turtle', correct: false},
            {answer: 'Antilope', correct: false},
            {answer: 'Rhino', correct: true},
        ]
    },
    {
        number : 3, 
        questionPic:`<img src='./assets/animalPictures/Turkey.jpg' alt="Turkey"credits="Chris Henry">`,
        choices: [
            {answer: 'Chicken', correct: false}, 
            {answer: 'Pig', correct: false},
            {answer: 'Turkey', correct: true},
            {answer: 'Cow', correct: false},
        ]
    },
    {
        number : 4, 
        questionPic: `<img src='./assets/animalPictures/polarBear.jpg' alt="Polar Bear" credits= 
        "Hans-Jurgen Mager">`,
        choices: [
            {answer: 'Zebra', correct: false}, 
            {answer: 'Polar Bear', correct: true},
            {answer: 'Wolf', correct: false},
            {answer: 'Fox', correct: false},
        ]
    }
]
//show question
function displayQuestion(currentQuestion) {
     questionImage.innerHTML = shuffledQuestions[currentQuestion].questionPic
     const choices = shuffledQuestions[currentQuestion].choices
     choices.forEach(choice => {
         const button = document.createElement('button')
         button.textContent = choice.answer
         button.class = 'buttons'
         button.id = choice.correct
         button.addEventListener('click', selectAnswer)
      if (choice.correct) {        
        button.dataset.correct = choice.correct

    }  else{
        
    }     
      choiceList.appendChild(button)
    })
  }
//selecte choice answer
// https://stackoverflow.com/questions/66308020/how-to-add-a-score-function-to-my-quiz-using-javascript
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(choiceList.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestion + 1) {} 
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
   
    } else {
      element.classList.add('wrong')
    }
  }  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }


//play button and next button//
const playButton = document.getElementById('start')

playButton.addEventListener('click', playGame)
nextBtn.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
  })

//start game
function playGame(){     
    //shuffle questions
    shuffledQuestions = questions.sort(()=> Math.random()- .5)
    currentQuestion = 0
    if(playGame) {
        document.getElementById('start').style.visibility = 'hidden';
    } else {
        document.getElementById('start').style.visibility = 'visible';
    }   
    displayQuestion(currentQuestion)
}

//nextquestion
function nextQuestion() {
    const node = document.getElementById('buttonContr')
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }

    currentQuestion++
    displayQuestion(currentQuestion)
}



    
