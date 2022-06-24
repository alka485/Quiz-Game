//declare 'countdown' number
//declare 'question'
var startbuttonEl = document.querySelector(".start_button");
var timerLineEl = document.querySelector("#timer_sec");
var questionContainerElement = document.getElementById('question-container')
console.log(questionContainerElement)
console.log("check");
var questions =[
    {
        id: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
          "Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language"
        ]
      },
        {
        id: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
          "Common Style Sheet",
          "Colorful Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet"
        ]
      },
        {
        id: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
          "Hypertext Preprocessor",
          "Hypertext Programming",
          "Hypertext Preprogramming",
          "Hometext Preprocessor"
        ]
      },
        {
        id: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
          "Stylish Question Language",
          "Stylesheet Query Language",
          "Statement Question Language",
          "Structured Query Language"
        ]
      },
        {
        id: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
          "eXtensible Markup Language",
          "eXecutable Multiple Language",
          "eXTra Multi-Program Language",
          "eXamine Multiple Language"
        ]
      }
    
];
//timer//
var secondsLeft=15;
startbuttonEl.addEventListener("click",startGame)
// var currentQuestion = questions[QuestionPosition]
var currentQuestionIndex
function startGame(){
  console.log('started')
  console.log("timer");
    
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerLineEl.textContent=secondsLeft;
        if(secondsLeft==0){
            clearInterval(timerInterval);
        }
    },1000);
  startbuttonEl.classList.add('hide')
  currentQuestionIndex=0;
  //questionContainerElement.classList.remove('hide')
  questionContainerElement.classList.remove('hide')
 // setNextQuestion()

}

function setNextQuestion(){
  resetState()
  showQuestion([currentQuestionIndex])
}

var currentQuestion = 0;
console.log(currentQuestion);


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
function displayCurrentQuestion(){

}

//Function 'recordTheHighScore'
    