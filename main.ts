#! /usr/dev/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Define the list of currencies and their exchange rates
let exchange_rate: any = {
    "USD": 1,   // Base Currency
    "EUR": 0.9, // European currency (Euro)
    "JYP": 113, // Japanese currency (yen)
    "CAD": 1.3, // Canadian dollar
    "AUD": 1.65, // Australian dollar
    "PKR": 280, // Pakistan Rupees
}

// Prompt the user to select currency to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellow("Select the currency to convert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellow("Select the currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.yellow("Enter the amount to convert:")
    }
]);

// Perform currency conversion using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = parseFloat(user_answer.amount); // Convert input to a number

// Formula for conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

// Display the converted amount
console.log(chalk.green.bold("Converted amount ="), chalk.green.bold(`${converted_amount}`));


    
        
