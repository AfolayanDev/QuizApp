const quizData = [
{
 question: 'How old is Florin?', 
 a: '10',
 b: '17',
 c: '26',
 d: '110',
 correct: 'c'
}, {
    question: 'What is the most used programming language in 2019?',
    a: 'java',
    b: 'c',
    c: 'phython',
    d: 'javaScript',
    correct: 'a'
}, {
    question: 'Who is the President of US?',
a: 'florin pop',
b: 'Donald Trump',
c: 'Ivan Saldamo',
d: 'Hihai Andrei',
correct: 'b'
}, {
    question: 'what does HTML stands for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Aplication programming Interface',
    correct: 'a'
}, {
    question: 'What year was Java-Script lunched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'd'
}
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question')
const a_text = document.getElementById("a_text");    
const b_text  = document.getElementById("b_text");
const c_text  = document.getElementById("c_text");
const d_text  = document.getElementById("d_text");
const submitBtm = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() { 
deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d; 
}

function getSelected() {
let answer = undefined;
answerEls.forEach((answerEl) => {
if (answerEl.checked) {
    answer = answerEl.id;
}
});

return answer;
 
}


function deselectAnswers(){
answerEls.forEach((answerEl) => {
answerEl.checked = false;
});
}


submitBtm.addEventListener("click", () => {
    // Check to see the answer
    const answer = getSelected();
 
    if (answer) {
        if (answer === quizData[currentQuiz].correct) { 
        score++;
    }

    currentQuiz++; 
    if  (currentQuiz < quizData.length) {
     loadQuiz();
    } else {
         quiz.innerHTML = `<h2>you answered correctly at ${score}/${quizData.length} questions.</h2> <button onClick="location.reload()">Reload</button>`;
        }
}
console.log()

});
