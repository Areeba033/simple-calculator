#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: "Enter first number"
    },
    {
        type: "number",
        name: "secondNumber",
        message: "Enter second number"
    },
    {
        type: "list",
        name: "operator",
        message: "Select one of the operators to perform operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    if (answer.secondNumber !== 0) {
        console.log(answer.firstNumber / answer.secondNumber);
    }
    else {
        console.log("Error: Division by zero");
    }
}
else {
    console.log("Please select a valid operator");
}
