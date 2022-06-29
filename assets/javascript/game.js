var correctAnswerIndex;
var button1 = document.getElementById('btn-1')
var button2 = document.getElementById('btn-2')
var button3 = document.getElementById('btn-3')
var button4 = document.getElementById('btn-4')

var startbuttonEl = document.getElementById('start-btn');
var timerLineEl = document.querySelector("#timer_sec");
var questionContainerElement = document.getElementById('question-container')
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answers-button');
var button = document.getElementById('btn');
var correctAnswerEl = document.getElementById("correct-answer");

var currentQuestionIndex = 0;
var questions = [
  {
    question: 'what does HTML stand for',
    answers: [
      { text: 'Hyper Text Preprocessor', correct: false },
      { text: 'Hyper Text Multiple Language', correct: false },
      { text: 'Hyper Text Markup Language', correct: true },
      { text: 'Hyper Text Multi Language', correct: false }
    ],
    correctAnswer : 3

  },
  {
    question: 'what does CSS stand for',
    answers: [
      { text: 'Common Style Sheet', correct: false },
      { text: 'Colorful Style Sheet', correct: false },
      { text: 'Computer Style Sheet', correct: false },
      { text: 'Cascading Style Sheet', correct: true }
    ],
    correctAnswer : 4
  },
  {
    question: 'What does PHP stand for',
    answers: [
      { text: 'Hypertext Preprocessor', correct: true },
      { text: 'Hypertext Programming', correct: false },
      { text: 'Hypertext Preprogramming', correct: false },
      { text: 'Hometext Preprocessor', correct: false }
    ],
    correctAnswer : 1
  },
  {
    question: 'What does XML stand for?',
    answers: [
      { text: 'eXtensible Markup Language', correct: true },
      { text: 'eXecutable Multiple Language', correct: false },
      { text: 'eXTra Multi-Program Language', correct: false },
      { text: 'eXamine Multiple Language', correct: false }
    ],
    correctAnswer : 1
  }
]
//timer//
var secondsLeft = 60;
startbuttonEl.addEventListener("click", startGame)
function startGame() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerLineEl.textContent = secondsLeft;
    if (secondsLeft == 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
  startbuttonEl.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  showQuestion(currentQuestionIndex);
}

function setNextQuestion() {
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion(currentQuestionIndex);
  }
  else{
    endGame();
  }
    
}

function showQuestion(currentQuestionIndex) {
     questionEl.innerText = questions[currentQuestionIndex].question
    for (i = 0; i < 4; i++) {
    document.querySelector("#btn-" + (i + 1)).innerText = questions[currentQuestionIndex].answers[i].text;    
  }
}

// Function 'answerquestion'
//Check if the selected answer is correct
//if the answer is wrong
// then we need to subtract from 'countdown'
//INCREASING the question position by 1 
//if I've passed the Last question
// Then 'endGame()'

//Else

//Display the current  question
//displayCurrentQuestion();

  
 
button1.addEventListener("click",checkAnswer)
button2.addEventListener("click",checkAnswer)
button3.addEventListener("click",checkAnswer)
button4.addEventListener("click",checkAnswer)
function checkAnswer(event){
  //console.log(event.target.id.split('-')[1]);
  if(event.target.id.split('-')[1]==questions[currentQuestionIndex].correctAnswer){
    correctAnswerEl.textContent = "correct";  
  }
  else{
    correctAnswerEl.textContent = "wrong";
    secondsLeft-=10;
    console.log(secondsLeft);
  }
  setNextQuestion();
}

function endGame(){
  console.log("game ended");
}



//declare the 'timerEL'
//var timerEL = document.querySelector('#timer');

//function startGame(){
// currentQuestion=0;
//questionTextEl.innerHTML=question[currentQuestion].question;
//}

// startGame();  


//function 'start game'
//hide the start screen
//set question position to 0
//display the current  question
//display the currentquestion();
//set the starting value of 'countdown'
//start timer 'start Timer'
//if 'countdown===0 then 'endGame()'

//function 'endGame'
//Hide the question area
//Show the record high score
//Clear the timer interval

// Function 'answerquestion'
//Check if the selected answer is correct
//if the answer is wrong
// then we need to subtract from 'countdown'
//INCREASING the question position by 1 
//if I've passed the Last question
// Then 'endGame()'

//Else

//Display the current  question
//displayCurrentQuestion();

//Function 'displayCurrentQuestion'
function displayCurrentQuestion() {

}

//Function 'recordTheHighScore'
