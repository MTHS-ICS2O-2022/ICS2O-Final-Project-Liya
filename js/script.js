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
  navigator.serviceWorker.register("/ICS2O-Unit5-05-JS/sw.js", {
    scope: "/ICS2O-Unit5-05-JS/",
  })
}

// functions for the quiz.

function submitQuiz() {
  document.getElementById("container").style.display = "none"
  document.getElementById("results").style.display = "block"
  console.log("end screen")

  let score = 0
  const userAnswer2 = parseInt(document.getElementById("sample2").value)
  const userAnswer3 = parseInt(document.getElementById("question3").value)
  const userAnswer4 = parseInt(document.getElementById("question4").value)

  if (userAnswer2 == -4) {
    score++
  }

  if (userAnswer3 == 4) {
    score++
  }

  if (userAnswer4 == 1) {
    score++
  }
    
  document.getElementById("score").innerHTML = score
  
}