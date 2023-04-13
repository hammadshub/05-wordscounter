#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function toCount() {
    const answer = await inquirer.prompt([
        {
            name: "Sentence",
            type: "input",
            message: chalk.greenBright("Enter your sentence to count the word :")
        }
    ]);
    const words = answer.Sentence.trim().split(" ");
    console.log(chalk.yellow(`Your sentence's word count are : ${words.length}`));
}
async function startAgain() {
    do {
        await toCount();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: chalk.redBright("Do you want more to count? Press Y or N: ")
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "Yes" || again.restart == "YES");
}
startAgain();
