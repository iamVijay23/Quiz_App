let quizData = [
  {
    question: "What is the syntax for an if statement in JavaScript?",
    a: "if (condition) { }",
    b: "if condition { }",
    c: "if (condition) : ;",
    d: "if condition : ;",
    answer: "a ",
  },

  {
    question: "How do you add an element to the end of an array in JavaScript?",

    a: "array.push(element)",
    b: "array.append(element)",
    c: "array.add(element)",
    d: "array[array.length] = element",
    answer: "a",
  },

  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    answer: "a",
},

  {
    question: "What year was Javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    answer: "b",
  },

  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "javascript",
    answer: "d",
},

];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')



let currentQuiz = 0
let attempt =0


loadQuiz()


function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}



submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].answer) {
           attempt++;
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${attempt+1}/${quizData.length} questions correctly ></h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})