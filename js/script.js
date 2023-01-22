// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Final-Project-Liya/sw.js", {
    scope: "/ICS2O-Final-Project-Liya/",
  })
}

// functions for the quiz.

function submitQuiz() {
  document.getElementById("container").style.display = "none"
  document.getElementById("results").style.display = "block"
  console.log("end screen")

  let score = 0
  const userAnswer1 = parseInt(document.getElementById("question-one").value)
  const userAnswer2 = parseInt(document.getElementById("question-two").value)
  const userAnswer3 = parseInt(document.getElementById("question-three").value)
  const userAnswer4 = parseInt(document.getElementById("question-four").value)
  const userAnswer5 = parseInt(document.getElementById("question-five").value)
  const userAnswer6 = parseInt(document.getElementById("question-six").value)

  if (userAnswer1 == 4) {
    score++
  }

  if (userAnswer2 == -4) {
    score++
  }

  if (userAnswer3 == 4) {
    score++
  }

  if (userAnswer4 == 1) {
    score++
  }

  if (userAnswer5 == 9) {
    score++
  }

  if (userAnswer6 == 55) {
    score++
  }

  let grade = [
    "./images/a+.svg",
    "./images/b+.svg",
    "./images/c+.svg",
    "./images/d+.svg",
    "./images/disappointed.svg",
  ]

  let message = [
    "Congrats! You did it! You beat the quiz and proved that you <strong>can</strong> do math.",
    "You did pretty well!",
    "It's ok, you can do better next time.",
    "One day.",
    "...sorry but...did you even try?",
  ]

  let objNumber = 0

  if (score == 6) {
    objNumber = 0
  } else if (score == 5) {
    objNumber = 1
  } else if (score == 4) {
    objNumber = 2
  } else if (score == 3 || score == 2 || score == 1) {
    objNumber = 3
  } else {
    objNumber = 4
  }

  document.getElementById("score").innerHTML =
    "Your Final Mark is: " + score + "/6"
  document.getElementById("final-mark").innerHTML =
    "<img src='" +
    grade[objNumber] +
    "' alt='final-mark' height='200' width='300'>"
  document.getElementById("messages").innerHTML = "<br>" + message[objNumber]
}
