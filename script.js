let username="";
let current=0;
let score=0;

let totalTime=120; // 2 minutes total timer
let timer;

let questions=[

{q:"Which language runs in browser?",options:["JavaScript","Python","C"],answer:0},
{q:"CPU stands for?",options:["Central Processing Unit","Control Unit","Computer Process"],answer:0},
{q:"HTML used for?",options:["Structure","Styling","Database"],answer:0},
{q:"CSS used for?",options:["Design","Memory","Hardware"],answer:0},
{q:"RAM is?",options:["Memory","Software","Virus"],answer:0},
{q:"Internet works using?",options:["Protocols","Battery","Cable Only"],answer:0},
{q:"Which is search engine?",options:["Google","Windows","Linux"],answer:0},
{q:"Binary of 5?",options:["101","111","100"],answer:0},
{q:"Keyboard is?",options:["Input Device","Output Device","Storage"],answer:0},
{q:"AI means?",options:["Artificial Intelligence","Auto Input","Advanced Internet"],answer:0},
{q:"WWW stands for?",options:["World Wide Web","Web World Wide","Wide Web World"],answer:0},
{q:"Which is OS?",options:["Windows","Chrome","Google"],answer:0},
{q:"Mouse is?",options:["Input Device","Software","Memory"],answer:0},
{q:"Cloud storage means?",options:["Online Storage","Weather","Cable"],answer:0},
{q:"JavaScript file extension?",options:[".js",".css",".html"],answer:0}

];

function startQuiz(){

username=document.getElementById("username").value;

if(username===""){
alert("Enter Name");
return;
}

document.getElementById("start").style.display="none";
document.getElementById("quiz").style.display="block";

document.getElementById("welcome").innerText=
"Welcome "+username+" 🚀";

startTimer();
loadQuestion();
}

function startTimer(){

timer=setInterval(()=>{

totalTime--;

document.getElementById("timer").innerText=
"Time Left: "+totalTime+"s";

if(totalTime<=0){
finishQuiz();
}

},1000);
}

function loadQuestion(){

document.getElementById("progress").innerText=
`Question ${current+1}/${questions.length}`;

document.getElementById("question").innerText=
questions[current].q;

let html="";

questions[current].options.forEach((opt,i)=>{
html+=`<button onclick="checkAnswer(this,${i})">${opt}</button>`;
});

document.getElementById("options").innerHTML=html;
}

function checkAnswer(btn,index){

let buttons=document.querySelectorAll("#options button");

buttons.forEach(b=>b.disabled=true);

if(index===questions[current].answer){
btn.classList.add("correct");
score++;
}else{
btn.classList.add("wrong");
buttons[questions[current].answer].classList.add("correct");
}
}

function nextQuestion(){

current++;

if(current<questions.length){
loadQuestion();
}else{
finishQuiz();
}
}

function finishQuiz(){

clearInterval(timer);

document.querySelector(".quiz").innerHTML=
`<h2>Assessment Completed 🎉</h2>
<h3>${username}, Your Score: ${score}/${questions.length}</h3>
<p>Performance Level Generated Successfully</p>`;
}

document.getElementById("nextBtn").onclick=nextQuestion;