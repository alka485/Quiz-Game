var correctAnswerIndex;
var button1 = document.getElementById('btn1')
var button2 = document.getElementById('btn2')
var button3 = document.getElementById('btn3')
var button4 = document.getElementById('btn4')
button1.addEventListener("click",(event)=>{
  if (correctAnswerIndex==0)
      alert('correct')
  else
    alert('false') 
})
button2.addEventListener("click",(event)=>{
  if (correctAnswerIndex==1)
      alert('correct')
  else
    alert('false') 
})
button3.addEventListener("click",(event)=>{
  if (correctAnswerIndex==2)
      alert('correct')
  else
    alert('false') 
})
button4.addEventListener("click",(event)=>{
  if (correctAnswerIndex==4)
      alert('correct')
  else
    alert('false') 
})
var startbuttonEl = document.getElementById('start-btn');
var timerLineEl = document.querySelector("#timer_sec");
var questionContainerElement = document.getElementById('question-container')
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answers-button');
var button = document.getElementById('btn');
var correctAnswerEl = document.getElementById("correct-answer");
console.log(questionContainerElement)
console.log("check");
var currentQuestionIndex=0;
var questions = [
  {
    question : 'what does HTML stand for',
    answers  : [
      { text : 'Hyper Text Preprocessor' ,    correct : false},
      { text : 'Hyper Text Multiple Language',correct : false},
      {text  : 'Hyper Text Markup Language',  correct : true},
      {text  : 'Hyper Text Multi Language',   correct : false}
    ],
    question : 'what does CSS stand for',
    answers  : [
      { text : 'Common Style Sheet' ,    correct : false},
      { text : 'Colorful Style Sheet',correct : false},
      {text  : 'Computer Style Sheet',  correct : false},
      {text  : 'Cascading Style Sheet',   correct : true}
    ], 
    question : 'What does PHP stand for',
    answers  : [
      { text : 'Hypertext Preprocessor' ,    correct : true},
      { text : 'Hypertext Programming'  ,    correct : false},
      {text  : 'Hypertext Preprogramming',   correct : false},
      {text  : 'Hometext Preprocessor',      correct : false }
    ], 
    question : 'What does XML stand for?',
    answers  : [
      { text : 'eXtensible Markup Language' ,    correct : true},
      { text : 'eXecutable Multiple Language'  , correct : false},
      {text  : 'eXTra Multi-Program Language',   correct : false},
      {text  : 'eXamine Multiple Language'   ,   correct : false }
    ]   
  }
]
//timer//
var secondsLeft=80;
startbuttonEl.addEventListener("click",startGame)
function startGame(){
        var timerInterval = setInterval(function(){
         secondsLeft--;
        timerLineEl.textContent=secondsLeft;
        if(secondsLeft==0){
            clearInterval(timerInterval);
        }
    },1000);
  startbuttonEl.classList.add('hide')
  questionContainerElement.classList.remove('hide') 
 setNextQuestion()
}

function setNextQuestion(){
  showQuestion(currentQuestionIndex)
  console.log("Next Question")
}

function showQuestion(currentQuestionIndex){
 
  //questionEl.innerText=questions[currentQuestionIndex].question
    //console.log(questions[currentQuestionIndex].question)
    for (i=0; i<4 ;i++)
    { 
      questionEl.innerText=questions[currentQuestionIndex].question
      console.log(questions[currentQuestionIndex].question)
     console.log("#btn"+(i+1))
     console.log(currentQuestionIndex);
     document.querySelector("#btn"+(i+1)).innerText=questions[currentQuestionIndex].answers[i].text;
     console.log(questions[currentQuestionIndex].answers[i].text)
     currentQuestionIndex++;
     if (questions[currentQuestionIndex].answers[i].correct){
       correctAnswerIndex =i
       answerQuestion();
      }      
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

       function answerQuestion() {
        //var tagName = document.createElement("h3");
        button1.addEventListener("click",(event)=>{
          if (correctAnswerIndex==0)
              correctAnswerEl.textContent='correct' ;
          else
          correctAnswerEl.textContent='false' ;
        })
        button2.addEventListener("click",(event)=>{
          if (correctAnswerIndex==1)
              correctAnswerEl.textContent='correct' ;
          else
            alert('false') 
        })
        button3.addEventListener("click",(event)=>{
          if (correctAnswerIndex==2)
              alert('correct')
          else
            alert('false') 
        })
        button4.addEventListener("click",(event)=>{
          if (correctAnswerIndex==4)
              alert('correct')
          else
            alert('false') 
        })

        
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
    