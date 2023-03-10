// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is capital of India?",
    a: [{ text: "Gandhinagar", isCorrect: false },
        { text: "Surat", isCorrect: false },
        { text: "Delhi", isCorrect: true },
        { text: "mumbai", isCorrect: false }
    ],
    e: false

},
{
    id: 1,
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
        { text: "Phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
    ],
    e: false

},
{
    id: 2,
    q: "What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ],
    e: false

}]

// Update time elapsed every second
setInterval(() => {
    const currentTime = new Date().getTime();
    const timeElapsed = currentTime - startTime;
    const seconds = Math.floor(timeElapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    document.getElementById("time-taken").innerText = days + "d " + hours % 24 + "h " + minutes % 60 + "m " + seconds % 60 + "s";
}, 1000);

// Set start
var start = true;

qnumber = Questions.length;

var isEvaluated = false;
var selectedOption = 0;

document.getElementById("total-questions").innerText = qnumber.toString();
var score = 0;
var incorrect = 0;
const startTime = new Date().getTime();

// Iterate
function iterate(id) {

// Getting the question
const question = document.getElementById("question");
// Setting the question text
question.innerText = Questions[id].q;

const qnumber = document.getElementById("qnumber");
qnumber.innerText = "Question Number: " + (id + 1).toString();

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;


var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
    selectedOption = 1;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
    selectedOption = 2;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
    selectedOption = 3;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
    selectedOption = 4;
})


// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        if (!Questions[id].e) {
            score++;
        }
        document.getElementById("score").innerText = score.toString();
        if (selectedOption == 1) {
            op1.style.backgroundColor = "lightgreen";
        }
        if (selectedOption == 2) {
            op2.style.backgroundColor = "lightgreen";
        }
        if (selectedOption == 3) {
            op3.style.backgroundColor = "lightgreen";
        }
        if (selectedOption == 4) {
            op4.style.backgroundColor = "lightgreen";
        }
    } else {
        if (!Questions[id].e) {
            incorrect++;
        }
        document.getElementById("incorrect-answers").innerText = incorrect.toString();
        if (selectedOption == 1) {
            op1.style.backgroundColor = "lightcoral";
        }
        if (selectedOption == 2) {
            op2.style.backgroundColor = "lightcoral";
        }
        if (selectedOption == 3) {
            op3.style.backgroundColor = "lightcoral";
        }
        if (selectedOption == 4) {
            op4.style.backgroundColor = "lightcoral";
        }
    }
    Questions[id].e = true;
    isEvaluated = true;
})
}


if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2 && isEvaluated) {
    id++;
    iterate(id);
    console.log(id);
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    isEvaluated = false;
}

})
