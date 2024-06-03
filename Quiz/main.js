document.getElementById("buttonclick").addEventListener("click", buttonClicked);

function buttonClicked() {
  let numCorrect = 0;
  // Mark Question #1
  // Input
  let answer = document.getElementById("answer").value;

  // Process
  let msg = `Correct`;

  // Output
  if (answer == "Polypyron") {
    document.getElementById("output").innerHTML = msg;
    numCorrect++;
  } else {
    document.getElementById("output").innerHTML = `Incorrect`;
  }

  // Mark Question #2
  // Input
  let answer2 = document.getElementById("answer2").value;

  // Process
  msg = `Correct`;

  // Output
  if (answer2 == "Pruntosecond") {
    document.getElementById("output2").innerHTML = msg;
    numCorrect++;
  } else {
    document.getElementById("output2").innerHTML = `Incorrect`;
  }

  // Mark Question #3
  // Input
  let answer3 = document.getElementById("answer3").value;

  // Process
  msg = `Correct`;

  // Output
  if (answer3 == "Housillion") {
    document.getElementById("output3").innerHTML = msg;
    numCorrect++;
  } else {
    document.getElementById("output3").innerHTML = `Incorrect`;
  }

  // Mark Question #4
  // Input
  let answer4 = document.getElementById("answer4").value;

  // Process
  msg = `Correct`;

  // Output
  if (
    answer4 == "Yes" ||
    answer4 == "Yep" ||
    answer4 == "Yeah" ||
    answer4 == "Sure"
  ) {
    document.getElementById("output4").innerHTML = msg;
    numCorrect++;
  } else {
    document.getElementById("output4").innerHTML = `Incorrect`;
  }

  // Mark Question #5
  // Input
  let answer5 = document.getElementById("answer5").value;

  // Process
  msg = `Correct`;

  // Output
  if (answer5 == "Four" || answer5 == "4") {
    document.getElementById("output5").innerHTML = msg;
    numCorrect++;
  } else {
    document.getElementById("output5").innerHTML = `Incorrect`;
  }

  // OUTPUT THE FINAL RESULTS
  if (numCorrect >= 0) {
    document.getElementById("score").innerHTML = numCorrect;
    document.getElementById("percent").innerHTML = numCorrect * 20;
  }
  if (numCorrect == 5) {
    msg2 = `HOLY COW!! YOU ARE AMAZING!`;
  } else if (numCorrect == 4) {
    msg2 = `You need one more answer correct`;
  } else if (numCorrect == 3) {
    msg2 = `Almost...`;
  } else if (numCorrect == 2) {
    msg2 = `Be careful`;
  } else if (numCorrect == 1) {
    msg2 = `Keep trying later`;
  } else {
    msg2 = `Whoops... Try again next time`;
  }
  document.getElementById("results").innerHTML = msg2;
}
