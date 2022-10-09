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
      answer: "Bytecode is executed by JVM",
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
    {
      qid: 4,
      question: "Which of the following is a reserved keyword in Java?",
      options: ["object", "strictfp", "main", "system"],
      answer: "strictfp",
    },
    {
      qid: 5,
      question: "What do you mean by nameless objects?",
      options: [
        "An object created by using the new keyword.",
        "An object of a superclass created in the subclass.",
        "An object without having any name but having a reference.",
        "An object that has no reference.",
      ],
      answer: "An object that has no reference.",
    },
    {
      qid: 6,
      question: "Which option is false about the final keyword?",
      options: [
        "A final method cannot be overridden in its subclasses.",
        "A final class cannot be extended.",
        "A final class cannot extend other classes.",
        "A final method can be inherited.",
      ],
      answer: "A final method can be inherited.",
    },
    {
      qid: 7,
      question:
        "Which of these classes are the direct subclasses of the Throwable class?",
      options: [
        "RuntimeException and Error class",
        "Exception and VirtualMachineError class",
        "Error and Exception class",
        "IOException and VirtualMachineError class",
      ],
      answer: "Error and Exception class",
    },
    {
      qid: 8,
      question:
        "In which memory a String is stored, when we create a string using new operator?",
      options: [
        "Stack",
        "String memory",
        "Heap memory",
        "Random storage space",
      ],
      answer: "Heap memory",
    },
    {
      qid: 9,
      question: "What is the use of the intern() method?",
      options: [
        "It returns the existing string from memory",
        "It creates a new string in the database",
        "It modifies the existing string in the database",
        "None of the above",
      ],
      answer: "It returns the existing string from memory",
    },
    {
      qid: 10,
      question: "In java, jar stands for_____.",
      options: [
        "Java Archive Runner",
        "Java Application Resource",
        "Java Application Runner",
        "None of the above",
      ],
      answer: "None of the above",
    },
  ];

  questionBank.cpp = [
    {
      qid: 1,
      question: "The C++ language is ______ object-oriented language.",
      options: [
        "Pure Object oriented",
        "Not Object oriented",
        "Semi Object-oriented or Partial Object-oriented",
        "None of the above",
      ],
      answer: "Semi Object-oriented or Partial Object-oriented",
    },
    {
      qid: 2,
      question:
        "Which of the following statements is correct about the formal parameters in C++?",
      options: [
        "Parameters with which functions are called",
        "Parameters which are used in the definition of the function",
        "Variables other than passed parameters in a function",
        "Variables that are never used in the function",
      ],
      answer: "Parameters with which functions are called",
    },
    {
      qid: 3,
      question:
        "Which of the following features is required to be supported by the programming language to become a pure object-oriented programming language?",
      options: [
        "Encapsulation",
        "Inheritance",
        "Polymorphism",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      qid: 4,
      question: "C++ is a ___ type of language.",
      options: [
        "High-level Language",
        "Low-level language",
        "Middle-level language",
        "None of the above",
      ],
      answer: "Middle-level language",
    },
    {
      qid: 5,
      question:
        "If we stored five elements or data items in an array, what will be the index address or the index number of the array's last data item?",
      options: ["3", "5", "4", "88"],
      answer: "4",
    },
    {
      qid: 6,
      question:
        "Which of the following is the correct syntax for declaring the array?",
      options: [
        "init array []",
        "int array [5];",
        "Array[5];",
        "None of the above",
      ],
      answer: "int array [5];",
    },
    {
      qid: 7,
      question:
        "Which of the following is the correct syntax for printing the address of the first element?",
      options: ["array[0];", "array[1];", "array[2];", "None of the above"],
      answer: "array[0];",
    },
    {
      qid: 8,
      question:
        "How many types of the array are there in the C++ programming language?",
      options: [
        "In the C++ programming language, there are three types of arrays",
        "In the C++ programming language, there are four types of arrays",
        "In the C++ programming language, there are two types of arrays",
        "Both A and B",
      ],
      answer: "In the C++ programming language, there are two types of arrays",
    },
    {
      qid: 9,
      question: "In C++, for what purpose the 'rank()' is used?",
      options: [
        "It returns the size of each dimension",
        "It returns the maximum number of elements that can be stored in the array",
        "It returns the dimension of the specified array",
        "None of the above",
      ],
      answer: "It returns the dimension of the specified array",
    },
    {
      qid: 10,
      question: "Which types of arrays are always considered as linear arrays?",
      options: [
        "Single-dimensional",
        "Multi-dimensional",
        "Both A and B",
        "None of the above",
      ],
      answer: "Single-dimensional",
    },
  ];

  questionBank.python = [
    {
      qid: 1,
      question: "What is the maximum possible length of an identifier?",
      options: ["16", "32", "64", "None of these above"],
      answer: "",
    },
    {
      qid: 2,
      question: "Who developed the Python language?",
      options: ["Zim Den", "Guido van Rossum", "Niene Stom", "Wick van Rossum"],
      answer: "Guido van Rossum",
    },
    {
      qid: 3,
      question: "In which language is Python written?",
      options: ["English", "PHP", "C", "All of the above"],
      answer: "C",
    },
    {
      qid: 4,
      question: "What do we use to define a block of code in Python language?",
      options: ["Key", "Brackets", "Indentation", "None of these"],
      answer: "Indentation",
    },
    {
      qid: 5,
      question: "What is the method inside the class in python language?",
      options: ["Object", "Function", "Attribute", "Argument"],
      answer: "Function",
    },
    {
      qid: 6,
      question: "12) Which of the following declarations is incorrect?",
      options: ["_x = 2", "__x = 3", "__xyz__ = 5", "None of these"],
      answer: "None of these",
    },
    {
      qid: 7,
      question:
        "Which of the following option is not a core data type in the python language?",
      options: ["Dictionary", "Lists", "Class", "All of the above"],
      answer: "Class",
    },
    {
      qid: 8,
      question: "What happens when '2' == 2 is executed?",
      options: ["False", "True", "ValueError occurs", "TypeError occurs"],
      answer: "False",
    },
    {
      qid: 9,
      question:
        "'print(True ** False / True)' What will be the output of this program?",
      options: [
        "True ** False / True",
        "1.0",
        "1 ** 0 / 1",
        "None of the these",
      ],
      answer: "1.0",
    },
    {
      qid: 10,
      question:
        "Which of the following arithmetic operators cannot be used with strings in python?",
      options: ["+", "*", "-", "All of the mentioned"],
      answer: "-",
    },
  ];

  questionBank.javascript = [
    {
      qid: 1,
      question: "Which type of JavaScript language is ___",
      options: [
        "Object-Oriented",
        "Object-Based",
        "Assembly-language",
        "High-level",
      ],
      answer: "Object-Based",
    },
    {
      qid: 2,
      question:
        "Which one of the following also known as Conditional Expression:",
      options: [
        "Alternative to if-else",
        "Switch statement",
        "If-then-else statement",
        "immediate if",
      ],
      answer: "immediate if",
    },
    {
      qid: 3,
      question: "In JavaScript, what is a block of statement?",
      options: [
        "Conditional block",
        "block that combines a number of statements into a single compound statement",
        "both conditional block and a single statement",
        "block that contains a single statement",
      ],
      answer:
        "block that combines a number of statements into a single compound statement",
    },
    {
      qid: 4,
      question:
        "When interpreter encounters an empty statements, what it will do:",
      options: [
        "Shows a warning",
        "Prompts to complete the statement",
        "Throws an error",
        "Ignores the statements",
      ],
      answer: "Ignores the statements",
    },
    {
      qid: 5,
      question: "The 'function' and 'var' are known as:",
      options: [
        "Keywords",
        "Data types",
        "Declaration statements",
        "Prototypes",
      ],
      answer: "Declaration statements",
    },
    {
      qid: 6,
      question:
        "Which of the following variables takes precedence over the others if the names are the same?",
      options: [
        "Global variable",
        "The local element",
        "The two of the above",
        "None of the above",
      ],
      answer: "",
    },
    {
      qid: 7,
      question:
        "Which one of the following is the correct way for calling the JavaScript code?",
      options: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
      answer: "Function/Method",
    },
    {
      qid: 8,
      question: "Which of the following type of a variable is volatile?",
      options: [
        "Mutable variable",
        "Dynamic variable",
        "Volatile variable",
        "Immutable variable",
      ],
      answer: "Mutable variable",
    },
    {
      qid: 9,
      question:
        "Which of the following option is used as hexadecimal literal beginning?",
      options: ["00", "0x", "0X", "Both 0x and 0X"],
      answer: "Both 0x and 0X",
    },
    {
      qid: 10,
      question:
        "In the JavaScript, which one of the following is not considered as an error:",
      options: [
        "Syntax error",
        "Missing of semicolons",
        "Division by zero",
        "Missing of Bracket",
      ],
      answer: "Division by zero",
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

let setIntroPage = () => {
  let welcomePage = document.getElementById("welcome-page");
  let introPage = document.getElementById("intro-page");

  welcomePage.style.display = "none";
  introPage.style.display = "block";
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
  question.classList.add("unselectable")
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
    optionLabel.setAttribute("for", optionId);
    optionLabel.classList.add("ps-2");
    optionLabel.classList.add("unselectable");
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
  let navTitle = document.getElementById("nav-exam-title");

  introPage.style.display = "none";
  testZone.style.display = "block";
  submitBtn.style.display = "inline";
  navTitle.innerText = `${name} exam`.toUpperCase();

  setQuestions();
  loadQuestion(0, questionObjects[questionNumber]);
};

if (!localStorage.getItem("scores")) {
  setupScores();
}
setPreviousScores();
setDataToLocalStorage();
