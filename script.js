// Global variables
let currentQuestion = 0;
let score = 0;
let gameClock = 60;

// Questions for the quiz - or the quizQuestion array, if you will
const quizQuestions = [  {    
    question: "Which of the following will not properly create an array?",    
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
  },
  // Add additional questions as required...
];

// Insert function to display question and answers
function showQuestion() {
    const currentQuestionObj = quizQuestions[currentQuestion];
    
    const questionText = document.getElementById("question-text");
    questionText.textContent = currentQuestionObj.question;

    const choicesBox = document.getElementById("choices-box");
    choicesBox.innerHTML = "";

    for (let i = 0; i < currentQuestionObj.choices.length; i++) {
        const choiceLabel = document.createElement("label");
        choiceLabel.textContent = currentQuestionObj.choices[i];

        const choiceInput = document.createElement("input");
        choiceInput.type = "radio";
        choiceInput.name = "answer-choice";
        choiceInput.value = currentQuestionObj.choices[i];
        choiceInput.required = true;

        choiceLabel.appendChild(choiceInput);
        choicesBox.appendChild(choiceLabel);
      };
      
      const questionNumber = document.getElementById("question-number");
      questionNumber.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    
      const scoreText = document.getElementById("score-text");
      scoreText.textContent = `Score: ${score}`;
      
  };

  // Insert function to handle answers
  function handleAnswer(answer) {
    const currentQuestionObj = quizQuestions[currentQuestion];
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
  };
  
  // Insert function to end the game and display the leaderboard
  function endGame() {
    // Display the leaderboard and allow the user to save their initials
  };

  // Insert function to update game clock
  function shotClock() {
    gameClock--;
    if (gameClock <= 0) {
      endGame();
    } else {
     
    }
  };

  // Insert event listener for start button
  document.getElementById("start-button").addEventListener("click", function() {
    setInterval(shotClock, 1000); 
    showQuestion(); 
  });