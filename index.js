
//start game//
const playButton = document.getElementById('start')
playButton.addEventListener('click', startGame)  

function startGame(){
    console.log('gamestarted')
    
    // https://stackoverflow.com/questions/8685107/hiding-a-button-in-javascript // // 
    if(startGame) {
        document.getElementById('start').style.visibility = 'hidden';
    } else {
        document.getElementById('start').style.visibility = 'visible';
    }
}

const answerSelected = document.getElementsByClassName('answer')
answerSelected.addEventListener('click', function answered(){
    console.log('corret')

})
// answerSelected.addEventListener('click', chooseAnswer)

// function answered(){
//     console.log('answered')

// }


// function questions() {

    
// }

