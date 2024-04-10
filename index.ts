#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let currency: any={
    USD : 1, //base 
    POUND : 0.79,
    OMANI_RIAL:0.38,
    UAE: 3.67,
    INDIAN_RUPES: 83.21,
    MALAISHIAN_RINGIT: 4.75,
    PKR:277.53
}
let condition: any= true;
console.log(chalk.bold.cyan("\n\t =====CURRENCY CONVERTOR===== \n\t"))
while(condition){
let answer = await inquirer.prompt(
    [
        {
            name:"from",
            message:(chalk.bold.greenBright("Enter From Amount")),
            type:"list",
            choices:["USD","POUND","OMANI_RIAL","UAE","INDIAN_RUPES","MALAISHIAN_RINGIT","PKR"]
        },
        {
            name:"to",
            message:(chalk.bold.greenBright("Enter to Amount")),
            type:"list",
            choices:["USD","POUND","OMANI_RIAL","UAE","INDIAN_RUPES","MALAISHIAN_RINGIT","PKR"]
        },
        {
            name:"amount",
            message:(chalk.bold.greenBright("Enter Amount Would You Like to Convert")),
            type:(chalk.yellow("number")),
        },
    ]
)

let from_amount=currency [answer.from];
let to_amount = currency[answer.to];
let amountReceive = answer.amount;
let baseAmount = amountReceive / from_amount;
let currencyConvert = baseAmount * to_amount;
console.log(chalk.bold.redBright(Math.fround(currencyConvert).toFixed(2)))
// for continue
let continue_Query= await inquirer.prompt(
    [
        {
            name:"question",
            message:"Are You Want To Try Again More Conversion",
            type:"confirm",
            default:"false"
        }
        
    ]
);
condition=continue_Query.question
}
console.log(chalk.red(`Exit`));
