// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-05-JS/sw.js", {
    scope: "/ICS2O-Unit5-05-JS/",
  })
}


