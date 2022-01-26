"use strict"

// let result = document.getElementById("result");
// let userInput = document.getElementById("userInput");

// let data = "";

// let operation = {
//     plus: "+",
//     minus: "-",
//     multiply: "*",
//     divide: "/"
// }

// function receiveValue(p) {
//     if(!data) {
//         data = p;
//         userInput.innerText = data;
//     } else if(data.length <= 20) {
//         if(data.includes(operation)) {

//         }
//             data += p;
//             userInput.innerText = data;
//     } else {
//         result.innerText = "Too much numbers!";
//     }
// }

// function cleanAll() {
//     userInput.innerText = result.innerText = data = "";
// }

// function writeResult(data) {

// }


//---------------------------------------------------------------------------------------------------------------------------------------------

// let result = document.getElementById("result");
// let userInput = document.getElementById("userInput");

// // let userInputNumbers;
// // let userInputOperations;

// const operators = ["+", "-", "*", "/"];

// let finalResult = '';
// let holder = {
//     dataBag: '',
//     dataBagSecond: ''
// }
// let operator = "";

// function receiveValue(param) {
//     if (isNumeric(param) && !operators) {
//         createValue(param, holder, 'dataBag');
//     } else if (isNumeric(param)) {
//         createValue(param, holder, 'dataBagSecond');
//     } else {
//         operator = param;
//         // switch (param) {
//         //     case "+": 
//         //         dataBag += `+`;
//         //         userInput.innerText = dataBag;
//         //             break;

//         //     case "-": 
//         //         dataBag += `-`;
//         //         userInput.innerText = dataBag;
//         //             break;

//         //     case "*": 
//         //         dataBag += `*`;
//         //         userInput.innerText = dataBag;
//         //             break;

//         //     case "/": 
//         //         dataBag += `/`;
//         //         userInput.innerText = dataBag;
//         //             break;

//         // }
//     }
//     if(holder.dataBag && holder.dataBagSecond && operator){
//                 switch (param) {
//                     case "+":
//                         finalResult = Number(holder.dataBag) + Number(holder.dataBagSecond);
//                         result.innerText = finalResult;
//                         break;

//                     case "-":
//                         dataBag += `-`;
//                         userInput.innerText = dataBag;
//                         break;

//                     case "*":
//                         dataBag += `*`;
//                         userInput.innerText = dataBag;
//                         break;

//                     case "/":
//                         dataBag += `/`;
//                         userInput.innerText = dataBag;
//                         break;

//                 }
//     }
// }

// function writeResult(dataBag) {
//     finalResult = dataBag;

//     result.innerText = finalResult;
// }

// function createValue(param, bag, key){
//     console.log('bag', bag);
//     console.log('param', param);
//     if (!bag[key]) {
//         bag[key] = param;
//         userInput.innerText = bag[key];
//     } else if (bag[key].length >= 20) {
//         result.innerText = "Too much typed";
//     } else {
//         bag[key] += param;
//         userInput.innerText = bag[key];
//     }
// }

// function isNumeric(str) {
//     if (typeof str != "string") return false // we only process strings!  
//     return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
//         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
// }

//---------------------------------------------------------------------------------------------------------------------------------------------

// function cleanAll() {
//     result.innerText = userInput.innerText = userInputNumbers = userInputOperations = a = " ";
//     console.log(a); 
// }

// function writeResult() {
//     result.innerText = a;
//     console.log(a);
// }

// function buttonsNumbersAction(num){
//     if(!userInputNumbers){
//         userInputNumbers = num;
//         userInput.innerText = userInputNumbers;
//     } else if (userInputNumbers.length >= 20) {
//         result.innerText = "Error"; 
//         return;
//     } else {
//         userInputNumbers += num;
//         userInput.innerText = userInputNumbers;
//     }
// }

// function operationsButtonsAction(operation) {
//     userInputOperations = operation;
//     a = userInput.innerText += userInputOperations;
//     // if(buttonsNumbersAction(e) === true) {
//     //     a = userInput.innerText += userInputNumbers;
//     // }
// }