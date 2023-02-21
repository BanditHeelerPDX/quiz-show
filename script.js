// Global variables
let currentQuestion = 0;
let score = 0;
let gameClock = 60;
let gameClockInterval;


// Questions for the quiz - or the quizQuestion array, if you will
const quizQuestions = [ {    
    question: "Which of the following will properly create an array?",    
    choices: ["let oldArray = new Array[16]", "var myarray = ['Dwayne', 16, 32, 48]", "let yourarray = myarray()", "var thearray = vacuums('hoover', 'dyson', 'magnavox')"],
    answer: "let oldArray = new Array[16]"
  },
  {
    question: "What type of programming language is Javascript?",
    choices: ["Object-focused", "Superficial", "Object-oriented", "Vanilla"],
    answer: "Object-oriented"
  },
  {
    question: "Which of the following is not a property of the navigator object?",
    choices: ["appName", "appCodeName", "appType", "appVersion"],
    answer: "appType"
  },
  {
    question: "Which of these is not a method of the Date object?",
    choices: ["getDate()", "getHours()", "getTimezoneOffset()", "getShorty()"],
    answer: "getShorty()"
  },
  {
    question: "To resize a window relative to its current size, use this method:",
    choices: ["resizeTo()", "resizeBy()", "scrollTo()", "moveBy()"],
    answer: "resizeBy()"
  },
  {
    question: "Window: message event",
    choices: ["This event bubbles, but cannot be cancelled.", "This event can be cancelled but does not bubble.", "This event bubbles and can be cancelled.", "This event is not cancellable and does not bubble."],
    answer: "This event is not cancellable and does not bubble."
  }
  // Add additional questions as required...
];

// Insert function to display question and answers
/*function displayQuestion(question) {
    console.log(question.question);
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.innerHTML = `${index + 1}. ${option}`;
      button.addEventListener("click", () => {
        handleAnswer(index, question.answer);
      });
      document.body.appendChild(button);
    });
  };*/
function showQuestion() {
    const currentQuestionObj = quizQuestions[currentQuestion];
    
    const question = document.getElementById("question");
    question.textContent = currentQuestionObj.question;

    const choicesBox = document.getElementById("choices");
    choicesBox.innerHTML = "";

    for (var i = 0; i < currentQuestionObj.choices.length; ++i) {
        const choiceLabel = document.createElement("label");
        choiceLabel.textContent = currentQuestionObj.choices[i];

        const choiceInput = document.createElement("input");
        choiceInput.type = "radio";
        choiceInput.name = "answer-choice";
        choiceInput.value = currentQuestionObj.choices[i];
        choiceInput.required = false;

        choiceLabel.appendChild(choiceInput);
        choicesBox.appendChild(choiceLabel);
      };
      
      const scoreText = document.getElementById("score-text");
      scoreText.textContent = score;
    
      document.querySelector("input").addEventListener("submit", handleAnswer);
  };

  // Insert function to handle answers
  function handleAnswer() {
    const currentQuestionObj = quizQuestions[currentQuestion];
    const selectedAnswer = document.querySelector('input[name="answer-choice"]:checked');
    if (selectedAnswer) {
      const answer = selectedAnswer.value;
        if (answer === currentQuestionObj.answer) {
        score++;
      } else {
        gameClock -= 2;
      }
      currentQuestion++;
      if (currentQuestion >= quizQuestions.length) {
        endGame();
      } else {
      showQuestion();
    }
   }
  };
  
  // Insert function to end the game and display the leaderboard
  function endGame() {
    clearInterval(gameClockInterval);

    const gameBox = document.getElementById("quiz-box");
    gameBox.innerHTML = "";
  
    const resultText = document.createElement("h2");
    resultText.textContent = `Game over! Your final score is ${score}.`;
  
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Game";
    restartButton.addEventListener("click", function() {
      location.reload();
    });
  
    gameBox.appendChild(resultText);
    gameBox.appendChild(restartButton);
  };

  // Insert function to update game clock
  function shotClock() {
    gameClock--;
    const progressBar = document.getElementById("progress-bar");
    const progressWidth = (gameClock / 60) * 100;
    progressBar.style.width = `${progressWidth}%`;
    progressBar.textContent = gameClock;
    if (gameClock <= 0) {
      endGame();
    };
  };
  


  // Insert event listener for start button
  document.getElementById("start-button").addEventListener("click", function() {
    setInterval(shotClock, 1000); 
    showQuestion(); 
  });


  
