let questions = [];

let questionNumber = 0;

let responses = {};

let questionObjects = [];

let totalQuestions = 0;

let test = "";

class Question {
  constructor(qid, question, options, answer) {
    this.qid = qid;
    this.question = question;
    this.options = options;
    this.answer = answer;
  }
}

// Setting data to local storage

let setupScores = () => {
  let previousScores = {};

  previousScores.java = "0 / 0";
  previousScores.cpp = "0 / 0";
  previousScores.python = "0 / 0";
  previousScores.javascript = "0 / 0";

  console.log("ALERT");

  localStorage.setItem("previousScores", JSON.stringify(previousScores));
  localStorage.setItem("scores", "true");
};

let setDataToLocalStorage = () => {
  let questionBank = {};

  questionBank.java = [
    {
      qid: 1,
      question:
        "Which of the following option leads to the portability and security of Java?",
      options: [
        "Bytecode is executed by JVM",
        "The applet makes the Java code secure and portable",
        "Use of exception handling",
        "Dynamic binding between objects",
      ],
      answer: "Bytecode is executed by the JVM",
    },
    {
      qid: 2,
      question: "Which of the following is not a Java features?",
      options: [
        "Dynamic",
        "Architecture Neutral",
        "Use of pointers",
        "Object-oriented",
      ],
      answer: "Use of pointers",
    },
    {
      qid: 3,
      question: "_____ is used to find and fix bugs in the Java programs",
      options: ["JVM", "JRE", "JDK", "JDB"],
      answer: "JDB",
    },
  ];

  questionBank.javascript = [
    {
      qid: 1,
      question: "Which one of the following is a scripting language?",
      options: ["Java", "Python", "C++", "Java Script"],
      answer: "Java Script",
    },
    {
      qid: 2,
      question: "Which one is spelled correct",
      options: ["Red", "Reed", "Redd", "Rid"],
      answer: "Red",
    },
    {
      qid: 3,
      question: "What is the browser created by Google",
      options: ["Chrome", "Edge", "Brave", "Safari"],
      answer: "Chrome",
    },
    {
      qid: 4,
      question: "Who is known as the God of Cricket",
      options: ["Dhoni", "Sachin Tendulkar", "Rahul Sharma", "Ashwin"],
      answer: "Sachin Tendulkar",
    },
  ];

  localStorage.setItem("questionBank", JSON.stringify(questionBank));
};
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// self-calling function that sets the questions data into questionObjects array
let setQuestions = () => {
  for (let i = 0; i < questions.length; i++) {
    let qid = questions[i].qid;
    let question = questions[i].question;
    let options = questions[i].options;
    let answer = questions[i].answer;

    questionObjects[i] = new Question(qid, question, options, answer);
  }
  totalQuestions = questionObjects.length;
};
// --------------------------------------------------------------------------------------------------
// Right-Click disable code
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("Nice, you triggered this alert message!", "success");
  });
}
window.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  if (event.button == 2) {
    alert("Right-Click is disabled!", "warning");
  }
});

// --------------------------------------------------------------------------------------------------

let saveOption = (optId) => {
  let id = "opt-lbl-" + optId.slice(-1);
  let optionValue = document.getElementById(id);
  let option = document.getElementById(optId);

  if (option.checked) {
    responses[questionObjects[questionNumber].qid] = optionValue.textContent;
    console.log(responses);
  }
};

let loadQuestion = function (qno, q) {
  let questionSection = document.getElementById("question-section");
  let answerSection = document.getElementById("answer-section");

  console.log(qno);
  console.log(q);

  let question = document.createElement("h5");
  question.className = "question";
  question.id = "question";
  question.textContent = q.question;
  questionSection.innerHTML = "";
  questionSection.appendChild(question);

  let answerSectionHeading = document.createElement("h5");

  answerSection.innerHTML = "";
  answerSectionHeading.innerText = "Select one option from below";
  answerSection.appendChild(answerSectionHeading);

  let counter = document.getElementById("question-counter");
  let bar = document.getElementById("bar");

  for (let i = 0; i < q.options.length; i++) {
    let optionContainer = document.createElement("div");
    let option = document.createElement("input");
    let optionLabel = document.createElement("label");

    optionContainer.class = "option-container";
    optionContainer.id = "option-container";

    option.type = "radio";
    option.name = "question";
    option.innerText = q.question[i];

    let optionId = `opt-${i + 1}`;
    let labelId = `opt-lbl-${i + 1}`;

    option.id = optionId;

    optionLabel.id = labelId;
    optionLabel.for = optionId;
    optionLabel.innerText = q.options[i];

    optionContainer.appendChild(option);
    optionContainer.appendChild(optionLabel);
    answerSection.append(optionContainer);

    option.onclick = () => {
      saveOption(optionId);
    };
  }

  counter.innerText = `Question: ${qno + 1} / ${totalQuestions}`;
  let barPercentage = ((qno + 1) / totalQuestions) * 100;
  bar.style.width = `${barPercentage}%`;
};

let prevQuestion = () => {
  if (questionNumber + 1 > 1) {
    questionNumber--;
    const currentQuestion = questionObjects[questionNumber];
    loadQuestion(questionNumber, currentQuestion);
  }
};

let nextQuestion = () => {
  if (questionNumber < totalQuestions - 1) {
    questionNumber++;
    const newQuestion = questionObjects[questionNumber];
    loadQuestion(questionNumber, newQuestion);
  }
};

let setPreviousScores = () => {
  let scores = JSON.parse(localStorage.getItem("previousScores"));

  let javaScore = scores.java;
  let cppScore = scores.cpp;
  let pythonScore = scores.python;
  let javascriptScore = scores.javascript;

  let javaLine = document.getElementById("java-prev-score");
  let cppLine = document.getElementById("cpp-prev-score");
  let pythonLine = document.getElementById("python-prev-score");
  let javascriptLine = document.getElementById("javascript-prev-score");

  javaLine.innerText = `Previous Score: ${javaScore}`;
  cppLine.innerText = `Previous Score: ${cppScore}`;
  pythonLine.innerText = `Previous Score: ${pythonScore}`;
  javascriptLine.innerText = `Previous Score: ${javascriptScore}`;
};

let testScore = () => {
  let points = 0;
  for (let i = 0; i < totalQuestions; i++) {
    let qid = questionObjects[i].qid;

    console.log(responses[qid]);
    if (questionObjects[i].answer === responses[qid]) {
      points++;
    }
  }

  return points;
};

let testSubmit = () => {
  let testZone = document.getElementById("test-zone");
  let scoreSection = document.getElementById("score-section");
  let submitBtn = document.getElementById("submit-btn");
  let scores = JSON.parse(localStorage.getItem("previousScores"));

  testZone.style.display = "none";
  scoreSection.style.display = "block";
  submitBtn.style.display = "none";

  let scoreContainer = document.getElementById("score");
  let points = testScore();
  let score = `${points} / ${totalQuestions}`;
  scoreContainer.textContent = score;

  scores[test] = score;
  localStorage.setItem("previousScores", JSON.stringify(scores));
};

let startTest = (testName) => {
  let name = testName.slice(4);
  let qBank = JSON.parse(localStorage.getItem("questionBank"));

  test = name;
  questions = qBank[name];

  let introPage = document.getElementById("intro-page");
  let testZone = document.getElementById("test-zone");
  let submitBtn = document.getElementById("submit-btn");

  introPage.style.display = "none";
  testZone.style.display = "block";
  submitBtn.style.display = "inline";

  setQuestions();
  loadQuestion(0, questionObjects[questionNumber]);
};

if (!localStorage.getItem("scores")) {
  setupScores();
}
setPreviousScores();
setDataToLocalStorage();
