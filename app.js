const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Nice, you triggered this alert message!', 'success')
  })
}

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
  {
    qid: 4,
    question: "Who is known as the God of Cricket",
    options: ["Dhoni", "Sachin Tendulkar", "Rahul Sharma", "Ashwin"],
    answer: "Sachin Tendulkar",
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
  let counter = document.getElementById("question-counter");
  let bar = document.getElementById("bar");

  let ques = document.getElementById("question");
  console.log(q);
  ques.innerText = q.question;

  for (let i = 0; i < q.options.length; i++) {
    let opt = document.getElementById(`opt-lbl-${i + 1}`);
    opt.innerText = q.options[i];
  }

  counter.innerText = `Question: ${qno + 1} / ${questionObjects.length}`;
  let barPercentage = ((qno + 1) / questionObjects.length) * 100;
  bar.style.width = `${barPercentage}%`;
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
  let points = 0;
  for (let i = 0; i < questionObjects.length; i++) {
    let qid = questionObjects[i].qid;

    console.log(responses[qid]);
    if (questionObjects[i].answer === responses[qid]) {
      points++;
    }
  }

  return points;
};

let testSubmit = () => {
  let testZone = document.getElementById('test-zone');
  let scoreSection = document.getElementById('score-section');
  testZone.style.display = 'none';
  scoreSection.style.display = 'block';

  let scoreContainer = document.getElementById('score')
  let points = testScore();
  let score = `${points} / ${questionObjects.length}`;
  scoreContainer.textContent = score;
};

window.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  if (event.button == 2) {
    alert("Right-Click is disabled!", "warning");
  }
});


loadQuestion(0, questionObjects[questionNumber]);