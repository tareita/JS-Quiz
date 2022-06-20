const question = document.getElementById('question')
const options=document.getElementsByClassName('btn btn-default')


const questions = [ 
    {
        question: 'what colour is pink?', 
        answers: ['pink','red','orange','rainbow'],
        correctAnswer: 'A'
    },
    {
        question: 'what is your name?', 
        answers: ['davide','name','i dont know', 'none of the above'],
        correctAnswer: 'D'
    },
    {
        question: 'what is your home address?',
        answers: ['yellow', 'not telling', 'black', 'i dont know'],
        correctAnswer: 'C'
    },
    {
        question: 'what is your card number and the 3 digits at the back?',
        answers: ['12345678, 123', 'why..', 'lim(1+x)^(1/x) x->0', 'i dont know'],
        correctAnswer: 'C'
    },
    {
        question: 'in a test a 500kg car travelling at 10 ms^-1 hits a wall. the front 0.30m of the car crumples as the car is brought to rest. what is the average force on the car during the impact?',
        answers:['830N', '7500N', '8300N', '83000N'],
        correctAnswer: 'D'
    }

]

let score = 0;
let currentIndex = 0


function startQuiz() {
    setQuestions()
}

function setQuestions() {
    question.innerHTML = '<h3>' + questions[currentIndex].question + '</h3>'
    answersList=questions[currentIndex].answers
    for (i=0;i<answersList.length;i++){
    options[i].innerHTML = '<div>' + questions[currentIndex].answers[i] + '</div>'
    }
}

function checkAnswer(answer) {
    let currentQuestion = questions[currentIndex]
    if(currentQuestion.correctAnswer == answer) {
        score++
        currentIndex++
        setQuestions();
        correctAnswer()
    }
    else {
        console.log(incorrect)
    }

}

function correctAnswer() {
    text = "Correct!"
    options.push(text)
}

function wrongAnswer() {

}