const start_screen = document.getElementById("start_screen"),
  quiz_screen = document.getElementById("quiz_screen"),
  result_screen = document.getElementById("result_screen"),
  question = document.getElementById("question"),
  question_no = document.getElementById("question_no"),
  total_questions = document.getElementById("total_questions"),
  scoreSpan = document.getElementById("score"),
  options = document.getElementById("options"),
  progress_bar = document.getElementById("progress_bar"),
  progress = document.getElementById("progress"),
  final_score = document.getElementById("final_score"),
  max_scoreSpan = document.getElementById("max_score"),
  result_message = document.getElementById("result_message"),
  start_btn = document.getElementById("start_btn"),
  restart_btn = document.getElementById("restart_btn");

//quiz questions in array of oobjext from
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which is not a programming language?",
    answers: [
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "Banana", correct: true },
      { text: "C++", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
    ],
  },

  {
    question: "Which language is used for web development?",
    answers: [
      { text: "JavaScript", correct: true },
      { text: "C", correct: false },
      { text: "Python", correct: false },
      { text: "Java", correct: false },
    ],
  },
  {
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Process Unit", correct: false },
      { text: "Central Processing Unit", correct: true },
      { text: "Computer Personal Unit", correct: false },
      { text: "Central Processor Unit", correct: false },
    ],
  },
  {
    question: "Which company made Android?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Google", correct: true },
      { text: "Microsoft", correct: false },
      { text: "IBM", correct: false },
    ],
  },
  {
    question: "What is 10 + 5?",
    answers: [
      { text: "10", correct: false },
      { text: "15", correct: true },
      { text: "20", correct: false },
      { text: "25", correct: false },
    ],
  },
  {
    question: "Which is a JavaScript framework?",
    answers: [
      { text: "React", correct: true },
      { text: "Django", correct: false },
      { text: "Laravel", correct: false },
      { text: "Flask", correct: false },
    ],
  },

  {
    question: "Which is the smallest continent?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Europe", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Which gas do humans breathe?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "What is 5 * 6?",
    answers: [
      { text: "11", correct: false },
      { text: "30", correct: true },
      { text: "25", correct: false },
      { text: "35", correct: false },
    ],
  },
  {
    question: "Which tag is used for JavaScript in HTML?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<js>", correct: false },
      { text: "<code>", correct: false },
      { text: "<link>", correct: false },
    ],
  },
  {
    question: "Which is a database?",
    answers: [
      { text: "MongoDB", correct: true },
      { text: "React", correct: false },
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
    ],
  },

  {
    question: "What is the boiling point of water?",
    answers: [
      { text: "50°C", correct: false },
      { text: "100°C", correct: true },
      { text: "150°C", correct: false },
      { text: "200°C", correct: false },
    ],
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
    ],
  },
  {
    question: "Which operator is used for addition?",
    answers: [
      { text: "+", correct: true },
      { text: "-", correct: false },
      { text: "*", correct: false },
      { text: "/", correct: false },
    ],
  },
  {
    question: "Which is not a datatype in JS?",
    answers: [
      { text: "String", correct: false },
      { text: "Number", correct: false },
      { text: "Loop", correct: true },
      { text: "Boolean", correct: false },
    ],
  },
  {
    question: "Which is a CSS framework?",
    answers: [
      { text: "Bootstrap", correct: true },
      { text: "React", correct: false },
      { text: "Node", correct: false },
      { text: "Django", correct: false },
    ],
  },

  // Remaining 25 (same clean style)

  {
    question: "Which keyword declares variable in JS?",
    answers: [
      { text: "var", correct: true },
      { text: "int", correct: false },
      { text: "string", correct: false },
      { text: "float", correct: false },
    ],
  },
  {
    question: "Which loop is used in JS?",
    answers: [
      { text: "for", correct: true },
      { text: "repeat", correct: false },
      { text: "loop", correct: false },
      { text: "iterate", correct: false },
    ],
  },
  {
    question: "Which symbol is for equality?",
    answers: [
      { text: "==", correct: true },
      { text: "=", correct: false },
      { text: "!=", correct: false },
      { text: ">", correct: false },
    ],
  },
  {
    question: "Which is frontend?",
    answers: [
      { text: "React", correct: true },
      { text: "Node", correct: false },
      { text: "MongoDB", correct: false },
      { text: "Express", correct: false },
    ],
  },
  {
    question: "Which is backend?",
    answers: [
      { text: "Node.js", correct: true },
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
      { text: "Bootstrap", correct: false },
    ],
  },

  // last 20

  {
    question: "Which company made Windows?",
    answers: [
      { text: "Microsoft", correct: true },
      { text: "Apple", correct: false },
      { text: "Google", correct: false },
      { text: "IBM", correct: false },
    ],
  },
  {
    question: "Which is a search engine?",
    answers: [
      { text: "Google", correct: true },
      { text: "Windows", correct: false },
      { text: "Linux", correct: false },
      { text: "Mac", correct: false },
    ],
  },
  {
    question: "Which is cloud service?",
    answers: [
      { text: "AWS", correct: true },
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
      { text: "C++", correct: false },
    ],
  },
  {
    question: "Which is version control?",
    answers: [
      { text: "Git", correct: true },
      { text: "Node", correct: false },
      { text: "React", correct: false },
      { text: "HTML", correct: false },
    ],
  },
  {
    question: "Which command uploads code?",
    answers: [
      { text: "git push", correct: true },
      { text: "git pull", correct: false },
      { text: "git clone", correct: false },
      { text: "git init", correct: false },
    ],
  },

  // last 15

  {
    question: "Which command downloads repo?",
    answers: [
      { text: "git clone", correct: true },
      { text: "git push", correct: false },
      { text: "git add", correct: false },
      { text: "git commit", correct: false },
    ],
  },
  {
    question: "Which tag is for CSS?",
    answers: [
      { text: "<style>", correct: true },
      { text: "<css>", correct: false },
      { text: "<script>", correct: false },
      { text: "<design>", correct: false },
    ],
  },
  {
    question: "Which selector is class?",
    answers: [
      { text: ".", correct: true },
      { text: "#", correct: false },
      { text: "*", correct: false },
      { text: "&", correct: false },
    ],
  },
  {
    question: "Which selector is id?",
    answers: [
      { text: "#", correct: true },
      { text: ".", correct: false },
      { text: "*", correct: false },
      { text: "&", correct: false },
    ],
  },
  {
    question: "Which is boolean?",
    answers: [
      { text: "true", correct: true },
      { text: "10", correct: false },
      { text: "text", correct: false },
      { text: "null", correct: false },
    ],
  },
];

let totalQuestion = Math.floor(Math.random() * 10) + 5;

let current_question = Math.floor(
  Math.random() * (quizQuestions.length - totalQuestion),
);

let current_question_no = 0;

let score = 0;

let optiondisable = false;

let present = 0;

total_questions.textContent = totalQuestion;
max_scoreSpan.textContent = totalQuestion;

start_btn.addEventListener("click", start_quiz);
restart_btn.addEventListener("click", restart_quiz);

function start_quiz() {
  current_question = Math.floor(
    Math.random() * (quizQuestions.length - totalQuestion),
  );

  current_question_no = 0;
  score = 0;
  scoreSpan.textContent = score;
  start_screen.classList.remove("active");
  quiz_screen.classList.add("active");
  showQuestion();
}

function showQuestion() {
  let optiondisable = false;

  question_no.textContent = current_question_no + 1;
  question.textContent = quizQuestions[current_question].question;
  present = (current_question_no / totalQuestion) * 100;
  console.log(present);
  progress.style.width = present + "%";

  options.innerHTML = "";
  quizQuestions[current_question].answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    console.log(answer.correct);
    button.dataset.correct = answer.correct; // Fixed spacing for consistency

    button.classList.add("option_btn");
    options.appendChild(button);
    button.addEventListener("click", verify);
  });

  function verify(event) {
    if (optiondisable) return;
    optiondisable = true;
    let selectedoption = event.target;

    let iscorrect = selectedoption.dataset.correct === "true";
    if (iscorrect) {
      selectedoption.classList.add("correct");
      score++;
      scoreSpan.textContent = score;
    } else {
      selectedoption.classList.add("incorrect");
    }
    setTimeout(() => {
      if (current_question_no + 1 < totalQuestion) {
        current_question_no++;
        current_question++;
        showQuestion();
      } else {
        resultPage();
      }
    }, 1000);
  }
}
function resultPage() {
  final_score.textContent = score;
  const per = (score / totalQuestion) * 100;
  if (per === 100) {
    result_message.textContent = "Perfect score! 🔥";
  } else if (per > 90) {
    result_message.textContent = "Great, you are intelligent";
  } else if (per > 75) {
    result_message.textContent = "Good job 👍";
  } else if (per > 50) {
    result_message.textContent = "Not bad, keep practicing";
  } else {
    result_message.textContent = "Try harder";
  }

  quiz_screen.classList.remove("active");
  result_screen.classList.add("active");
}

function restart_quiz() {
  result_screen.classList.remove("active");
  start_quiz();
}
