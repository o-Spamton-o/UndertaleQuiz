document.getElementById("submit").addEventListener("click", submitAnswers);

function submitAnswers() {
  let = answerOne = document.getElementById("answerOne").value;
  answerOne = answerOne.toLowerCase();
  let = answerTwo = document.getElementById("answerTwo").value;
  answerTwo = answerTwo.toLowerCase();
  let = answerThree = document.getElementById("answerThree").value;
  answerThree = answerThree.toLowerCase();
  let = answerFour = document.getElementById("answerFour").value;
  answerFour = answerFour.toLowerCase();
  let = answerFive = document.getElementById("answerFive").value;
  answerFive = answerFive.toLowerCase();
  let score = document.getElementById("score");
  let scoreValue = 0;
  let percent = document.getElementById("percent");
  let comment = document.getElementById("comment");

  if (answerOne === "frisk") {
    scoreValue = scoreValue + 1;
    document.getElementById("frisk").src = "images/frisk.png";
    document.getElementById("answerOne").classList.add("correct");
  } else {
    document.getElementById("answerOne").classList.add("incorrect");
  }
  if (answerTwo === "sans") {
    scoreValue = scoreValue + 1;
    document.getElementById("sans").src = "images/sans.png";
    document.getElementById("answerTwo").classList.add("correct");
  } else {
    document.getElementById("answerTwo").classList.add("incorrect");
  }
  if (answerThree === "flowey") {
    scoreValue = scoreValue + 1;
    document.getElementById("flowey").src = "images/flowey.png";
    document.getElementById("answerThree").classList.add("correct");
  } else {
    document.getElementById("answerThree").classList.add("incorrect");
  }
  if (answerFour === "six") {
    scoreValue = scoreValue + 1;
    document.getElementById("map").src = "images/map.jpg";
    document.getElementById("answerFour").classList.add("correct");
  } else {
    document.getElementById("answerFour").classList.add("incorrect");
  }
  if (answerFive === "frisk") {
    scoreValue = scoreValue + 1;
    document.getElementById("asriel").src = "images/Frisk.png";
    document.getElementById("answerFive").classList.add("correct");
  } else if (answerFive === "asriel") {
    scoreValue = scoreValue + 1;
    document.getElementById("asriel").src = "images/asriel.png";
    document.getElementById("answerFive").classList.add("correct");
  } else {
    document.getElementById("answerFive").classList.add("incorrect");
  }
  let percentValue = (scoreValue / 5) * 100;
  score.innerHTML = scoreValue;
  percent.innerHTML = percentValue;
  if (scoreValue == 5) {
    comment.innerHTML =
      "Witnessing your perfect score fills you with determination!";
  } else if (scoreValue === 4) {
    comment.innerHTML =
      "You're pretty good! Try again and see if you can get 100%.";
  } else if (scoreValue === 3) {
    comment.innerHTML = "Half way... not bad!";
  } else {
    comment.innerHTML = "Better luck next time!";
  }
}

document.getElementById("reset").addEventListener("click", resetAnswers);

function resetAnswers() {
  let = answerOne = document.getElementById("answerOne").value;
  answerOne = answerOne.toLowerCase();
  let = answerTwo = document.getElementById("answerTwo").value;
  answerTwo = answerTwo.toLowerCase();
  let = answerThree = document.getElementById("answerThree").value;
  answerThree = answerThree.toLowerCase();
  let = answerFour = document.getElementById("answerFour").value;
  answerFour = answerFour.toLowerCase();
  let = answerFive = document.getElementById("answerFive").value;
  answerFive = answerFive.toLowerCase();
  let score = document.getElementById("score");
  let scoreValue = 0;
  let percent = document.getElementById("percent");
  let comment = document.getElementById("comment");

  document.getElementById("answerOne").classList.remove("correct");
  document.getElementById("answerOne").classList.remove("incorrect");
  document.getElementById("answerTwo").classList.remove("correct");
  document.getElementById("answerTwo").classList.remove("incorrect");
  document.getElementById("answerThree").classList.remove("correct");
  document.getElementById("answerThree").classList.remove("incorrect");
  document.getElementById("answerFour").classList.remove("correct");
  document.getElementById("answerFour").classList.remove("incorrect");
  document.getElementById("answerFive").classList.remove("correct");
  document.getElementById("answerFive").classList.remove("incorrect");
  document.getElementById("answerOne").value = "";
  document.getElementById("answerTwo").value = "";
  document.getElementById("answerThree").value = "";
  document.getElementById("answerFour").value = "";
  document.getElementById("answerFive").value = "";
  document.getElementById("frisk").src = "";
  document.getElementById("sans").src = "";
  document.getElementById("flowey").src = "";
  document.getElementById("map").src = "";
  document.getElementById("asriel").src = "";
  scoreValue = 0;
  score.innerHTML = "";
  percentValue = 0;
  percent.innerHTML = "";
  comment.innerHTML = "";
}
