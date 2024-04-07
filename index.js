#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    POUND: 0.0029,
    OMANI_RIAL: 0.0014,
    UAE: 0.013,
    INDIAN_RUPES: 0.30,
    MALAISHIAN_RINGIT: 0.017081009,
    PKR: 277.53
};
console.log(chalk.bold.cyan("\n\t =====CURRENCY CONVERTOR===== \n\t"));
let answer = await inquirer.prompt([
    {
        name: "from",
        message: (chalk.bold.greenBright("Enter From Amount")),
        type: "list",
        choices: ["USD", "POUND", "OMANI_RIAL", "UAE", "INDIAN_RUPES", "MALAISHIAN_RINGIT", "PKR"]
    },
    {
        name: "to",
        message: (chalk.bold.greenBright("Enter to Amount")),
        type: "list",
        choices: ["USD", "POUND", "OMANI_RIAL", "UAE", "INDIAN_RUPES", "MALAISHIAN_RINGIT", "PKR"]
    },
    {
        name: "amount",
        message: (chalk.bold.greenBright("Enter Amount Would You Like to Convert")),
        type: "number",
    },
]);
let from_amount = currency[answer.from];
let to_amount = currency[answer.to];
let amountReceive = answer.amount;
let baseAmount = amountReceive / from_amount;
let currencyConvert = baseAmount * to_amount;
console.log(chalk.bold.redBright(Math.fround(currencyConvert).toFixed(1)));
