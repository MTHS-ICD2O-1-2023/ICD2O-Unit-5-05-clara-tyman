// Copyright (c) 2024 Clara Tyman All rights reserved
//
// Created by: Clara Tyman
// Created on: May 2024
// This file contains the JS functions for index.html
"use strict"

function myButtonClicked() {
  // get inputs
  const lengthA = parseFloat(document.getElementById("side-a").value)
  const lengthB = parseFloat(document.getElementById("side-b").value)
  const lengthC = parseFloat(document.getElementById("side-c").value)

  // using the cosine law
  const angleA = Math.acos((lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)) * (180 / Math.PI)
  const angleB = Math.acos((lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)) * (180 / Math.PI)
  const angleC = Math.acos((lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)) * (180 / Math.PI)

  const sumOfAngles = Number(angleA + angleB + angleC).toFixed(2)

  // determine triangle type
  if (sumOfAngles != 180) {
    document.getElementById("answer").innerHTML = "These inputs do not make a triangle."
  } else if (((angleA == angleC) && (angleA != angleB)) || ((angleA == angleB) && (angleA != angleC)) || ((angleB == angleC) && (angleB != angleA))) {
    document.getElementById("answer").innerHTML = "This is a Isosceles triangle."
  } else if ((angleA != angleB) && (angleA != angleC) && (angleB != angleC)) {
    document.getElementById("answer").innerHTML = "This is a Scalene Triangle triangle."
  } else if ((angleA == angleB) && (angleA == angleC)) {
    document.getElementById("answer").innerHTML = "This is a Equilateral Triangle triangle."
  }
}