// declare of variables
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const correctAns = num1 * num2;
const inputEl=document.getElementById('input');
let scoreEl=document.getElementById('score');

// replace the two number in the text question by random number
const questionEl = document.getElementById ("question");
questionEl.innerText = `what is ${num1} multiply by ${num2}`;

let score = Number (localStorage.getItem('score'));
if (!score){
    score=0;
}
scoreEl.textContent = `score: ${score}`;

//add listener method to the form to track the submission of the form
const formEl = document.getElementById("form");
formEl.addEventListener("submit",function(){
    let userAns = +inputEl.value;

    if (correctAns === userAns){
        score++;
        updateScore();
    }
    else{
        score--;
        updateScore();
    }
})
 
function updateScore(){
    localStorage.setItem("score",String(score));
}