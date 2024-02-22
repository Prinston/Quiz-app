
const quizData = [
    {
        question: "What is the capital city of France?",
        a: "London",
        b: "Paris",
        c: "Rome",
        d: "Berlin",
        correct: "b",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Jupiter",
        b: "Mars",
        c: "Venus",
        d: "Saturn",
        correct: "b",
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Leonardo da Vinci",
        b: "Vincent van Gogh",
        c: "Pablo Picasso",
        d: "Michelangelo",
        correct: "a",
    },
    {
        question: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Blue whale",
        c: "Giraffe",
        d: "Hippopotamus",
        correct: "b",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        a: "China",
        b: "Japan",
        c: "India",
        d: "South Korea",
        correct: "b",
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        a: "William Shakespeare",
        b: "Jane Austen",
        c: "Charles Dickens",
        d: "Mark Twain",
        correct: "a",
    },
    {
        question: "What is the tallest mountain in the world?",
        a: "Mount Kilimanjaro",
        b: "Mount Everest",
        c: "Mount Fuji",
        d: "Mount McKinley",
        correct: "b",
    },
    {
        question: "Which is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d",
    },
    {
        question: "How many continents are there in the world?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c",
    },
    {
        question: "What is the capital city of Australia?",
        a: "Sydney",
        b: "Melbourne",
        c: "Brisbane",
        d: "Canberra",
        correct: "d",
    },
    {
        question: "Who invented the light bulb?",
        a: "Thomas Edison",
        b: "Alexander Graham Bell",
        c: "Benjamin Franklin",
        d: "Nikola Tesla",
        correct: "a",
    },
    {
        question: "What is the currency of Japan?",
        a: "Yuan",
        b: "Yen",
        c: "Euro",
        d: "Dollar",
        correct: "b",
    },
    {
        question: "Which animal is known as the 'ship of the desert'?",
        a: "Elephant",
        b: "Camel",
        c: "Horse",
        d: "Giraffe",
        correct: "b",
    },
    {
        question: "What is the largest organ in the human body?",
        a: "Liver",
        b: "Skin",
        c: "Heart",
        d: "Brain",
        correct: "b",
    },
    {
        question: "Who wrote the Harry Potter book series?",
        a: "J.K. Rowling",
        b: "Stephen King",
        c: "George R.R. Martin",
        d: "J.R.R. Tolkien",
        correct: "a",
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        a: "Mars",
        b: "Venus",
        c: "Mercury",
        d: "Jupiter",
        correct: "b",
    },
    {
        question: "What is the largest species of bear?",
        a: "Polar bear",
        b: "Grizzly bear",
        c: "Brown bear",
        d: "Panda bear",
        correct: "a",
    },
    {
        question: "How many colors are there in a rainbow?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c",
    },
    {
        question: "Which country is famous for its tulip fields?",
        a: "Italy",
        b: "France",
        c: "Netherlands",
        d: "Germany",
        correct: "c",
    },
    {
        question: "Who was the first person to step on the moon?",
        a: "Neil Armstrong",
        b: "Prinston",
        c: "Michael Collins",
        d: "Yuri Gagarin",
        correct: "a",
    },
];


const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

const answerEls = document.querySelectorAll(".answer");

const quizEl = document.getElementById("quiz");


let currentQuiz = 0;
let score = 0;

loadQuiz();


function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });
        return answer;
    
}

   function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
};


function loadQuiz() {

deselectAnswers();

const currentQuizData = quizData[currentQuiz];

questionEl.innerText = currentQuizData.question
a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d

};

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        };

        currentQuiz++;


        if (currentQuiz < quizData.length){
        loadQuiz();
        }
        else{
            quizEl.innerHTML = `<h2>You have scored ${score}/${quizData.length} questions.</h2>
            
            <button onclick = "location.reload()">Reload</button>` ;
        }
    };


    
    
});

