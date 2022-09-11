var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName + " to the game 'Do You Know about Cricket??' ");
console.log("**INSTRUCTION** Please write the full name of cricketers.")
console.log("***************************")
var score = 0;

function quiz(question, answer) {
  var quizAnswer = readlineSync.question(question);
  if (quizAnswer.toLowerCase === answer.toLowerCase) {
    console.log("Hurray!! You are RIGHT");
    score = score + 1;
  } else {
    console.log("You are WRONG")
    console.log("Correct answer : " + answer);
  }
  console.log("Your Current Score : " + score);
  console.log("----------------------------");
}

var game = [
  {
    question: "Which batsman has highest runs in ODI Cricket? ",
    answer: "sachin tendulkar"
  },
  {
    question: "Who won the 2003 World Cup cricket? ",
    answer: "australia"
  },
  {
    question: "Who is the highest run scorer in ODI in a single match? ",
    answer: "rohit sharma"
  },
  {
    question: "Who is known as 'Little Master'? ",
    answer: "sunil gavaskar"
  },
  {
    question: "Which country won the maximum number of  cricket World Cup? ",
    answer: "australia"
  },
]
for (var i = 0; i < game.length; i++) {
  var currentQuiz = game[i];
  quiz(currentQuiz.question, currentQuiz.answer);
}
console.log("Final Score!!!")
console.log("Prateek : 5");
console.log(userName + " : " + score);