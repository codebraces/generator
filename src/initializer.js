
const fs = require('fs');
const { promisify } = require('util');
const chalk = require('chalk');
const { configFileName } = require('./const');
const initialConfig = {
  root: "./",
}

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function readConfig() {

  const data = await readFile(".braces_generator");
  if (data) {
    return JSON.parse(data.toString());
  } else {
    return initializeConfig()
  }
}

async function initializeConfig() {
  try {
    await writeFile(configFileName, JSON.stringify(initialConfig, null, 1));
    return initialConfig
  } catch (err) {
    console.log(err)
  }

  return false;
}

module.exports = readConfig;