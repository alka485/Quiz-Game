//declare 'countdown' number
//declare 'question'
var startbuttonEl = document.getElementById('start-btn')
var timerLineEl = document.querySelector("#timer_sec");
var questionContainerElement = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerEl = document.getElementById('answers-button')
console.log(questionContainerElement)
console.log("check");
var shuffledQuestions , currentQuestion
var questions = [
  {
    question : 'what does HTML stand for',
    answers : [
      { text : 'Hyper Text Preprocessor' , correct : false},
      { text : 'Hyper Text Multiple Language', correct : true}
    ]  
  }
]
//timer//
var secondsLeft=15;
startbuttonEl.addEventListener("click",startGame)
// var currentQuestion = questions[QuestionPosition]
//var currentQuestionIndex = questions[questionsPosition]
function startGame(){
 // console.log('started start game')
  //console.log("timer");
    
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerLineEl.textContent=secondsLeft;
        if(secondsLeft==0){
            clearInterval(timerInterval);
        }
    },1000);
  startbuttonEl.classList.add('hide')
  
  currentQuestionIndex=0;  
  questionContainerElement.classList.remove('hide')
  
 setNextQuestion()
}

function setNextQuestion(){
  
  showQuestion(currentQuestionIndex)
  console.log(setNextQuestion)
  console.log(currentQuestionIndex)
}

function showQuestion(question){
  questionEl.innerText=question.question
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
function displayCurrentQuestion(){

}

//Function 'recordTheHighScore'
    