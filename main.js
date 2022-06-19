const question = document.getElementById('question')
const optionA = document.getElementById('A')
const optionB = document.getElementById('B')
const optionC = document.getElementById('C')
const optionD = document.getElementById('D')


const questions = [ 
    {
        question: 'what colour is pink?', 
        answers: ['pink','red','orange','rainbow']
    },
    {
        question: 'what is your name?', 
        answers: ['davide','name','i dont know', 'none of the above']
    },
    {
        question: 'what is your home address?',
        answers: ['yellow', 'not telling', 'black', 'i dont know']
    },
    {
        question: 'what is your card number and the 3 digits at the back?',
        answers: ['12345678, 123', 'why..', 'lim(1+x)^(1/x) x->0', 'i dont know']
    },
    {
        question: 'ina test a 500kg car travelling at 10 ms^-1 hits a wall. the front 0.30m of the car crumples as the car is brought to rest. what is the average force on the car during the impact?',
        answers:['830N', '7500N', '8300N', '83000N']    
    }

]




function startQuiz() {
    let score = 0;
    setQuestions()
}

function setQuestions() {
    const currentIndex = 0
    let currentQuestion = questions[currentIndex]
    question.innerHTML = '<h3>' + currentQuestion.question + '</h3>'

}