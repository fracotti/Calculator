"use strict"
let result = document.getElementById("result");
let userInput = document.getElementById("userInput");
let calcButtonsNumbers = document.getElementsByClassName("numbers");

let userInputNumbers;
let userInputOperations;
let userInputResult = '';
let a;

function cleanAll() {
    result.innerText = userInputNumbers = userInputOperations = " ";
    userInput.innerText = userInputNumbers = userInputOperations = " ";
}

function writeResult() {
    // result.innerText = a;
    console.log(a);
}

function buttonsNumbersAction(e){
    if(!userInputNumbers){
        userInputNumbers = e;
        userInput.innerText = userInputNumbers;
    } else if (userInputNumbers.length >= 20) {
        result.innerText = "Error"; 
        return;
    } else {
        userInputNumbers += e;
        userInput.innerText = userInputNumbers;
    }
}

function operationsButtonsAction(e) {
    userInputOperations = e;
    a = userInput.innerText += userInputNumbers + userInputOperations;
    // if(buttonsNumbersAction(e) === true) {
    //     a = userInput.innerText += userInputNumbers;
    // }
}