const chalk = require("chalk");

const nota = 3;

if (nota >= 7) {
  console.log(chalk.green("Parabéns! Você está aprovado!"));
} else {
  console.log(chalk.bgRed.bold("Ops! você está de recuperação!"));
}
