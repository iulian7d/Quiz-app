const quizData = [
  {

  question: 'How many soccer players should each team have on the field at the start of each match?',
  a: '15',
  b: '10',
  c: '11',
  d: '9',
  correct: 'c',
},{
  question: 'When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?',
  a: 'eleven',
  b: 'five',
  c: 'seven',
  d: 'six',
  correct: 'd',
},{
  question: 'In what year was the first-ever Wimbledon Championship held?',
  a: '1877',
  b: '1920',
  c: '1887',
  d: '1890',
  correct: 'a',
},{
  question: 'What year was the very first model of the iPhone released',
  a: '2006',
  b: '2007',
  c: '2005',
  d: '2008',
  correct: 'b',
},{
  question: 'Which email service is owned by Microsoft',
  a: 'Hotmail',
  b: 'Outlook',
  c: 'Gmail',
  d: 'Yahoo',
  correct: 'a',
}]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_txt = document.getElementById('a_txt');
const b_txt = document.getElementById('b_txt');
const c_txt = document.getElementById('c_txt');
const d_txt = document.getElementById('d_txt');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

  deselecteAnswer();
  const currentQuizData = quizData [currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_txt.innerText = currentQuizData.a;
  b_txt.innerText = currentQuizData.b;
  c_txt.innerText = currentQuizData.c;
  d_txt.innerText = currentQuizData.d;

}

function getSelected(){
  let answer = undefined;
  
  answerEls.forEach(answerEl => {
      if (answerEl.checked){
        answer = answerEl.id;
      }
  });
  return answer;
}

function deselecteAnswer(){
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click',() => {

  const answer = getSelected();
  if (answer){
      if (answer === quizData[currentQuiz].correct){
      score ++;
      }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    }else {
      quiz.innerHTML = "<h2>You answered correctly at " + score + " / " + quizData.length + " questions.</h2> <button onclick='location.reload()'>Reload</button>";
    }
  }

}); 

