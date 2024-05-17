#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";

console.log( "<<","=".repeat(15), "*".repeat(20) ,"=".repeat(15), ">>");
console.log(chalk.bold.italic.green("\t \t WELCOME TO CURRENCY CONVERTE"));
console.log( "<<","=".repeat(15), "*".repeat(20) ,"=".repeat(15), ">>");
//Define the list of currencies and their exchange rate
let exchange_rate : any ={
    "USD" : 1,  
    "EUR" : 0.9, 
    "JPY" : 120, 
    "AUD" : 1.5,  
    "CAD" : 1.5, 
    "Pkr" : 280 , 
}
// for usrers ( select the countries currency and convert to)
let users_answers = await inquirer.prompt ([
    {
         type: "list",
        name: "from_currency",
        message: "Select the country currency you want to convert to",
        choices: ["USD", "EUR", "JPY", "AUD", "CAD", "Pkr"]
    },
    {
        type: "list",
        name: "to_currency",
        message: "select the country  to convert into",
        choices : ["USD", "EUR", "JPY", "AUD", "CAD", "Pkr"]
    },
    {
        type: "input",
        name: "amount",
        message: "Enter the amount you want to convert",
    }
]);
// I have stored variables so that I can use them to convert currency.
let fromAmount = exchange_rate [users_answers.from_currency];
let to_amoount = exchange_rate [users_answers.to_currency];
let amount = users_answers.amount;

// use formula to coverter currency

let base_amount = amount/fromAmount
let converted_amount = base_amount*to_amoount

//Display the converted amount
console.log(`your converted amount = ${chalk.blue(converted_amount)}`);