import chalk from "chalk";

export function start(config) {
  console.log(chalk.bgCyanBright("starting the app"));
  console.log(chalk.grey("Recieved configuration in start"));
}
