#! /usr/bin/env node
const program = require("commander");
const process = require("process");
const readConfig = require("./initializer");
const initApp = require("./generators/app");

(async function() {
  // const config = await readConfig();

  program
    .version("0.0.1", "-v, --version")
    .description("Typescript based react and redux generator cli");

  program
    .command("init [name]")
    .description("Generate a class component")
    .option("-r, --redux", "Integrate Redux with React app")
    .action(initApp);

  program.parse(process.argv);
})();
