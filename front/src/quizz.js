/*import { evaluate, getAnswers, getProposalApi, getQuestionsApi, saveAnswer } from './store.js';
import './style.css';

export let quizzData;
export let currentQuestion;
export let score;
let questionElement;
let proposalsElement;

export async function initQuizz(questions) {
  quizzData = [];
  localStorage.clear();
  
  questionElement = document.getElementById("question");
  proposalsElement = document.getElementById("proposals");
    
  currentQuestion = 0;
  score = 0;

  
  quizzData = await getQuestionsApi();
    
  for (let i = 0; i < quizzData.length; i++) {
    let proposals = await getProposalApi(quizzData[i].id);
    quizzData[i].proposals = proposals;
  }

  showQuestion();
}
  
async function showQuestion() {
  const question = quizzData[currentQuestion];
  questionElement.innerText = question.label
  
  proposalsElement.innerHTML = "";
  question.proposals.forEach(proposal => {
    const button = document.createElement("button");
    button.innerText = proposal.label;
    proposalsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}
  
async function selectAnswer(e) {
  const selectedButton = e.target;
  let proposals = quizzData[currentQuestion].proposals;

  for (let i = 0; i < proposals.length; i++) {
    if (selectedButton.innerText === proposals[i].label) {
      saveAnswer(proposals[i])
    }
  }

  currentQuestion++;
  if (currentQuestion < quizzData.length) {
    showQuestion();
  } else {
    showResult();
  }
}
  
async function showResult() {
  let answers = getAnswers();
  const newAnswers = answers.map(({label, ...id}) => id)

  score = await evaluate(newAnswers);

  quiz.innerHTML = `
    <h1>Quizz Finis!</h1>
    <p>Ton score: ${score}/${quizzData.length}</p>
  `;
}  */

  import { evaluate, getAnswers, getProposalApi, getQuestionsApi, saveAnswer } from './store.js';
import './style.css';

export let quizzData;
export let currentQuestion;
export let score;
let questionElement;
let proposalsElement;

export async function initQuizz() {
  quizzData = [];
  localStorage.clear();
  
  questionElement = document.getElementById("question");
  proposalsElement = document.getElementById("proposals");
    
  currentQuestion = 0;
  score = 0;

  quizzData = await getQuestionsApi();
    
  for (let i = 0; i < quizzData.length; i++) {
    let proposals = await getProposalApi(quizzData[i].id);
    quizzData[i].proposals = proposals;
  }

  showQuestion();
}
  
async function showQuestion() {
  const question = quizzData[currentQuestion];
  
  // annonce automatique de la nouvelle question
  questionElement.innerText = question.label;
  questionElement.setAttribute("aria-live", "assertive");

  // focus automatique sur la question
  questionElement.focus({ focusVisible: true });

  proposalsElement.innerHTML = "";

  question.proposals.forEach(proposal => {
    const button = document.createElement("button");
    button.innerText = proposal.label;

    // accessibilité
    button.setAttribute("role", "button");
    button.setAttribute("tabindex", "0");
    button.setAttribute("aria-label", `Proposition : ${proposal.label}`);

    proposalsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}
  
async function selectAnswer(e) {
  const selectedButton = e.target;
  let proposals = quizzData[currentQuestion].proposals;

  for (let i = 0; i < proposals.length; i++) {
    if (selectedButton.innerText === proposals[i].label) {
      saveAnswer(proposals[i]);
    }
  }

  currentQuestion++;
  if (currentQuestion < quizzData.length) {
    showQuestion();
  } else {
    showResult();
  }
}
  
async function showResult() {
  let answers = getAnswers();
  const newAnswers = answers.map(({label, ...id}) => id);

  score = await evaluate(newAnswers);

  quiz.innerHTML = `
    <h1 tabindex="0">Quizz terminé !</h1>
    <p tabindex="0">Ton score : ${score}/${quizzData.length}</p>
  `;

  // focus automatique sur le résultat
  document.querySelector("h1").focus({ focusVisible: true });
}
