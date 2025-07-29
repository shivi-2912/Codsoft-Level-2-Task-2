const questions=[
  {
    question: "What is the capital of India?",
    options:["Delhi","Mumbai","Kolkata","Chennai"],
    correct:"Delhi"
  },
  {
    question:"Which language runs in a web browser?",
    options:["python","Java","C","JavaScript"],
    correct: "JavaScript"
  },
  {
    question:"What does HTML stand for?",
    options:["Hyper Text Markup Language","High Text Modern Language","Home Tool Markup Language","None"],
    correct:"Hyper Text Markup Language"
  },
  {
    question:"Which tag is used for a line break in HTML?",
    options:["<break>","<br>","<lb>","<hr>"],
    correct:"<br>"
  },
  {
  question: "CSS stands for?",
  options:["Colorful Style Sheets","Cascading Style Sheets" ,"Computer Style Sheets", "Creative Style System" ],
  correct: "Cascading Style Sheets"
  },
  {
    question: "Which one is a JavaScript framework?",
    options: ["Django", "Flask", "React", "Laravel"],
    correct: "React"
  }
];
let currentIndex = 0;
let score = 0;

function loadQuestion(){
  const q = questions[currentIndex];
  document.getElementById("current").innerText = currentIndex+1;
  document.getElementById("question").innerText = q.question;

  const optionsDiv =document.getElementById("options");
  optionsDiv.innerHTML ="";

  q.options.forEach(option =>{
    const btn =document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => selectAnswer(btn,q.correct);
    optionsDiv.appendChild(btn);
  });
  
}
function selectAnswer(btn,correctAnswer){
  if(btn.innerText === correctAnswer){
    btn.style.backgroundColor ="#4caf50";
    score++;
  }else{
    btn.style.backgroundColor = "#f44336";
  }
  Array.from(document.querySelectorAll("#options button")).forEach(b =>{
    b.disabled=true;
  });
}
function nextQuestion(){
  currentIndex++;
  if(currentIndex < questions.length){
    loadQuestion();
  }else{
    document.querySelector(".quiz-box").innerHTML = `
    <h2>Quiz Completed 🎉</h2>
    <p>Your Score:${score}/${questions.length}</p>`;

  }
}
loadQuestion();


