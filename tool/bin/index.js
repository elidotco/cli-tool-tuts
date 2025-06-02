#!/usr/bin/env node
import arg from "arg";
import chalk from "chalk";
import { getConfig } from "../src/config/config.mgr.js";
import { start } from "../src/commands/start.js";

// Keeping in a try-catch block to handle errors
try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });

  if (args["--start"]) {
    const config = getConfig();
    start(config);
  }
} catch (e) {
  console.log(e.message);
  usage();
}

// this funtction logs instructions on how to use the tool
// PS:More features will need to be added to make it more complete
function usage() {
  console.log(
    `tool [CMD]
    ${chalk.bgGreenBright("--start")}\tStarts the app
    ${chalk.bgGreenBright("--build")}\tBuilds the app
      `
  );
}
