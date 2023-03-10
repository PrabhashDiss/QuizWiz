// Questions will be asked
const Questions = [
    {
      id: 0,
      q: "What is the most popular sport in the world?",
      a: [
        { text: "Football (Soccer)", isCorrect: true },
        { text: "Basketball", isCorrect: false },
        { text: "Cricket", isCorrect: false },
        { text: "Baseball", isCorrect: false }
      ],
      e: false
    },
    {
      id: 1,
      q: "Which team has won the most Super Bowls in NFL history?",
      a: [
        { text: "Dallas Cowboys", isCorrect: false },
        { text: "New England Patriots", isCorrect: false },
        { text: "Pittsburgh Steelers", isCorrect: true },
        { text: "San Francisco 49ers", isCorrect: false }
      ],
      e: false
    },
    {
      id: 2,
      q: "Which boxer has won the most heavyweight titles in history?",
      a: [
        { text: "Muhammad Ali", isCorrect: false },
        { text: "Joe Frazier", isCorrect: false },
        { text: "Mike Tyson", isCorrect: false },
        { text: "Evander Holyfield", isCorrect: true }
      ],
      e: false
    },
    {
      id: 3,
      q: "Which country has won the most Olympic gold medals in history?",
      a: [
        { text: "United States", isCorrect: true },
        { text: "Russia", isCorrect: false },
        { text: "China", isCorrect: false },
        { text: "Germany", isCorrect: false }
      ],
      e: false
    },
    {
      id: 4,
      q: "Which tennis player has won the most Grand Slam titles in history?",
      a: [
        { text: "Roger Federer", isCorrect: true },
        { text: "Rafael Nadal", isCorrect: false },
        { text: "Novak Djokovic", isCorrect: false },
        { text: "Pete Sampras", isCorrect: false }
      ],
      e: false
    },
    {
      id: 5,
      q: "Which country won the first ever FIFA World Cup in 1930?",
      a: [
        { text: "Brazil", isCorrect: false },
        { text: "Argentina", isCorrect: false },
        { text: "Uruguay", isCorrect: true },
        { text: "Germany", isCorrect: false }
      ],
      e: false
    },
    {
      id: 6,
      q: "Which NBA player has won the most championships in history?",
      a: [
        { text: "Michael Jordan", isCorrect: false },
        { text: "Kareem Abdul-Jabbar", isCorrect: true },
        { text: "LeBron James", isCorrect: false },
        { text: "Bill Russell", isCorrect: false }
      ],
      e: false
    },
    {
      id: 7,
      q: "Which country has won the most FIFA Women's World Cups in history?",
      a: [
        { text: "Germany", isCorrect: false },
        { text: "United States", isCorrect: true },
        { text: "Norway", isCorrect: false },
        { text: "Japan", isCorrect: false }
      ],
      e: false
    }
];

// Update time elapsed every second
const intervalId = setInterval(() => {
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

const qnumber = Questions.length;

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

const questionnumber = document.getElementById("qnumber");
questionnumber.innerText = "Question Number: " + (id + 1).toString();

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

    const percentage = (score / qnumber) * 100;
    const gradeElement = document.getElementById('grade');
    const textElement = document.getElementById('text');
    if (percentage >= 75) {
        gradeElement.innerText = 'A';
        textElement.innerText = 'Excellent';
    } else if (percentage >= 60) {
        gradeElement.innerText = 'B';
        textElement.innerText = 'Good';
    } else if (percentage >= 50) {
        gradeElement.innerText = 'C';
        textElement.innerText = 'Average';
    } else if (percentage >= 30) {
        gradeElement.innerText = 'D';
        textElement.innerText = 'Poor';
    } else {
        gradeElement.innerText = 'F';
        textElement.innerText = 'Fail';
    }
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
if (id < qnumber - 1 && isEvaluated) {
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

const restart = document.getElementById('restart');
restart.addEventListener("click", () => {
    location.reload();
})

const finish = document.getElementById('finish');
finish.addEventListener("click", () => {
    clearInterval(intervalId);
    document.getElementsByClassName("question-container")[0].style.display = "none";
    document.getElementById("qnumber").style.display = "none";
    document.getElementsByClassName("option-container")[0].style.display = "none";
    document.getElementsByClassName("navigation")[0].style.display = "none";
})
