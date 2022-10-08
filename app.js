let questions = [
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
];

let questionNumber = 0;

class Question {
  constructor(qid, question, options, answer) {
    this.qid = qid;
    this.question = question;
    this.options = options;
    this.answer = answer;
  }
}

let setStorage = () => {};

let responses = {};

let questionObjects = [];

(function () {
  for (let i = 0; i < questions.length; i++) {
    let qid = questions[i].qid;
    let question = questions[i].question;
    let options = questions[i].options;
    let answer = questions[i].answer;

    questionObjects[i] = new Question(qid, question, options, answer);
  }
})();

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
  let ques = document.getElementById("question");
  console.log(q);
  ques.innerText = q.question;

  for (let i = 0; i < q.options.length; i++) {
    let opt = document.getElementById(`opt-lbl-${i + 1}`);
    opt.innerText = q.options[i];
  }
};

let prevQuestion = () => {
  if (questionNumber == 0) {
    alert("This is the first question");
  } else {
    questionNumber--;
    const currentQuestion = questionObjects[questionNumber];
    loadQuestion(questionNumber, currentQuestion);
  }
};

let nextQuestion = () => {
  if (questionNumber == questionObjects.length - 1) {
    alert("This is the last question");
  } else {
    questionNumber++;
    const newQuestion = questionObjects[questionNumber];
    loadQuestion(questionNumber, newQuestion);
  }
};

let testScore = () => {
  let points = 0
  for(let i=0; i<questionObjects.length; i++) {
    let qid = questionObjects[i].qid;

    console.log(responses[qid])
    if (questionObjects[i].answer === responses[qid]) {
      points++;
    }
  }

  return points;
}

let testSubmit = () => {
  let para = document.createElement('p');
  para.textContent = testScore();
  document.body.appendChild(para);
}

loadQuestion(0, questionObjects[questionNumber]);
