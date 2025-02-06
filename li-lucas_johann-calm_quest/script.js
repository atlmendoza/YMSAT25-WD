function giveFeedback() {

  const survey = document.getElementById('stressForm');
  const questions = ['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];
  let total = 0; //gives base 0 score for finding level of stress

  for ( let question of questions ) { //loop each question to get total score
    const radios = survey.elements[question]; //gets button inputs for each question
    let value = 0; //default value for the question for next iteration
  

  for ( let radio of radios) { //checks which button was selected
    if (radio.checked) {
      value = parseInt(radio.value, 10); //value turns to interger
      break;
    }
  }
    total += value; //add value to total score
  }

  let feedback = " "; // will display stress level and feedback
      
  if (total <= 10) { //determines stress level based on total score
    feedback = " Low Stress: You experience little or no stress and manage your responsibilities very well :D";
  }
  else if (total <= 20) {
    feedback = " Mild Stress: You experience mild stress but you can still cope with it :)";
  }
  else if (total <= 30) {
    feedback = " Moderate Stress: You sometimes experience stress in your daily life or performance, which may be affecting you :(";
  }
  else if (total <= 40) {
    feedback = " High Stress: You experience significant stress in your daily life, which could affect your well-being D:";
  }

  if ( total >= 21 ) {
    feedback += " Your academic workload may be causing you stress. You can try using online to-do lists to break down academic tasks so that you can find time to balance academics and personal life :) . In addition, your stress may significantly impact your social or physical well-being. You can try to seek ways to relax by listening to music or games or reaching out to someone you trust, like a friend :D"
  }
  
  alert(feedback); //returns feedback to user
}

let gameWindow = ""

function game(x) {
  if (x==1) {
    gameWindow = "wordle"
    document.getElementById("wordle").style.display = "block";
    document.getElementById("x").style.display = "block";
  }
  else if (x==2) {
    gameWindow = "suika"
    document.getElementById("suika").style.display = "block";
    document.getElementById("x").style.display = "block";
  }
}

function x() {
  if (gameWindow=="wordle") {
    document.getElementById("wordle").style.display = "none";
  }
  document.getElementById("x").style.display = "none";
  if (gameWindow=="suika") {
    document.getElementById("suika").style.display = "none";
  }
}

