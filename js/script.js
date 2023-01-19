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

// These are the functions for the quiz.

// array holding the quiz questions and answers
let quizQuestions = [
  {
    question: '2 + 2 =',
    answers: ['2', 'm a t h', '1', 'three'],
    correctAnswer: 1,
  },
  {
    question: '2/3 (9x - 6) - 4 = 9x - 6. Based on this equation, what is the value of 3x - 2?',
    answers: {
      a: '-2/3',
      b: '4',
      c: '-4',
      d: '-4/5',
    },
    correctAnswer: '-4',
  },
  {
    question: 'You have 50 biscuits. How many times can you subtract 5 from 50 biscuits?',
    answers: {
      a: '1',
      b: '10',
      c: '45',
      d: '25',
    },
    correctAnswer: '1',
  },
  {
    question: 'In a mythical land 1/2 of 5 = 3. If the same proportion holds, what is the value of 1/3 of 10?',
    answers: {
      a: '4',
      b: '3.3',
      c: '6',
      d: '3'
    },
    correctAnswer: '4',
  },
  {
    question: 'If x is the average (arithmetic mean) of m and 9, y is the average of 2m and 15, and z is the average of 3m and 18, what is the average of x, y, and z in terms of m?',
    answers: {
      a: 'm + 7',
      b: '2m + 14',
      c: 'm + 6',
      d: '3m + 21'
    },
    correctAnswer: 'm + 7',
  },
  {
    question: 'You choose an answer at random. What is the chance you are correct?',
    answers: {
      a: '25%',
      b: '0%',
      c: '50%',
      d: '25%'
    }
  },
]

let score = 0
const TOTAL_QUESTIONS = 6
let currentNumber = 0

function submitQuiz() {
  document.getElementById("box").style.display = "none"
  document.getElementById("results").style.display = "block"

  document.getElementById("score").innerHTML = score
}