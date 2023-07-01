// require('dotenv').config()


const questionCont = document.getElementById('questionBox') as HTMLElement;
//displaying question images//
const questionImage = document.getElementById('questionImg') as HTMLElement;
const answersBtns = document.querySelectorAll('buttons') as NodeListOf<HTMLButtonElement>;
const nextBtn = document.getElementById('nextbtn') as HTMLElement;
const choiceList = document.getElementById('buttonContr') as HTMLElement;

let shuffledQuestions: Array<any>, currentQuestion: number


// question Array
// https://stackoverflow.com/questions/49729105/how-to-add-an-image-to-javascript-quiz
// images form https://unsplash.com/
const questions = [
    {
        number : 0,    
        questionPic: `<img src='./assets/animalPictures/Dog.jpg' alt="Dog" credits="Taylor Kopel">`,
        choices: [
            {answer: 'Dog', correct: true}, 
            {answer: 'Cat', correct: false},
            {answer: 'Horse', correct: false},
            {answer:'Bird', correct: false},
        ]
    },
    {
        number : 1, 
        questionPic: `<img src='./assets/animalPictures/Tiger.jpg' alt="Tiger" credits="A G">`,
        choices: [
            {answer: 'Lion', correct: false}, 
            {answer: 'Tiger', correct: true},
            {answer: 'Puma', correct: false},
            {answer: 'Leopard', correct: false},
        ]
    },
    {
        number : 2, 
        questionPic: `<img src='./assets/animalPictures/Rhino.jpg' alt="Rhino" credits="Glen Carrie" >`,
        choices: [
            {answer: 'Elephant', correct: false}, 
            {answer: 'Turtle', correct: false},
            {answer: 'Antilope', correct: false},
            {answer: 'Rhino', correct: true},
        ]
    },
    {
        number : 3, 
        questionPic:`<img src='./assets/animalPictures/Turkey.jpg' alt="Turkey" credits="Chris Henry">`,
        choices: [
            {answer: 'Chicken', correct: false}, 
            {answer: 'Pig', correct: false},
            {answer: 'Turkey', correct: true},
            {answer: 'Cow', correct: false},
        ]
    },
    {
        number : 4, 
        questionPic: `<img src='./assets/animalPictures/polarBear.jpg' alt="Polar Bear" credits="Hans-Jurgen Mager">`,
        choices: [
            {answer: 'Zebra', correct: false}, 
            {answer: 'Polar Bear', correct: true},
            {answer: 'Wolf', correct: false},
            {answer: 'Fox', correct: false},
        ]
    }
]
//show question
function displayQuestion(currentQuestion: number) {
  questionImage.innerHTML = shuffledQuestions[currentQuestion].questionPic;
  const choices = shuffledQuestions[currentQuestion].choices;
  choices.forEach((choice: { answer: string | null; correct: boolean | undefined }) => {
    const button = document.createElement('button');
    button.textContent = choice.answer;
    button.className = 'buttons';
    button.id = choice.correct ? choice.correct.toString() : '';
    button.addEventListener('click', selectAnswer);
    if (choice.correct !== undefined) {
      button.dataset.correct = choice.correct.toString();
    }
    choiceList.appendChild(button);
  });
}
//selecte choice answer
// https://stackoverflow.com/questions/66308020/how-to-add-a-score-function-to-my-quiz-using-javascript
function selectAnswer(e: { target: any }) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset?.correct;
  setStatusClass(document.body, correct);
  Array.from(choiceList.children).forEach((button: Element) => {
    const buttonCorrect = (button as HTMLElement).dataset?.correct;
    setStatusClass(button as HTMLElement, buttonCorrect);
  });
  if (shuffledQuestions.length > currentQuestion + 1) {}
}
  function setStatusClass(element: HTMLElement, correct: any) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
   
    } else {
      element.classList.add('wrong')
    }
  }  
  function clearStatusClass(element: { classList: { remove: (arg0: string) => void } }) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
  shuffledQuestions = questions.sort(()=> Math.random()- .5)

//play button and next button//
const playButton = document.getElementById('start') as HTMLButtonElement

playButton.addEventListener('click', playGame)
nextBtn.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
  })

//start game
function playGame() {     
  // Shuffle questions
  currentQuestion = 0;
  const startButton = document.getElementById('start');
  if (startButton) {
    startButton.style.visibility = 'hidden';
  } else {
    // Handle the case when 'start' element is not found
  }   
  displayQuestion(currentQuestion);
}

//nextquestion
function nextQuestion() {
    const node = document.getElementById('buttonContr')
    while (node?.firstChild) {
        node.removeChild(node.firstChild);
    }

    currentQuestion++;
    displayQuestion(currentQuestion)
}



    
// app.listen(process.env.PORT)