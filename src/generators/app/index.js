const child_process = require('child_process');
const { chdir } = require('process');
const fs = require('fs');
const ora = require('ora');
const { promisify } = require('util');
const dependencies = require('./dependencies');
const Paths = require('../../paths');

const webpackConfig = require('./templates/webpack.config')
const tslintConfig = require('./templates/tslint.json')
const tsConfig = require('./templates/tsconfig.json')
const postcssConfig = require('./templates/postcss.config')
const indexHtml = require('./templates/index.html')
const gitignore = require('./templates/gitignore')
const babelrc = require('./templates/babelrc')
const reactIndex = require('./templates/reactIndex');
const reduxIndex = require('./templates/reduxIndex');

// const generateClassComponent = require('./generateClassComponent');

const exec = promisify(child_process.exec);
const mkdir = promisify(fs.mkdir);
const appendFile = promisify(fs.appendFile);

module.exports = async function intiApp(name, { redux, skipInstall }) {
  const paths = new Paths(name)
  if (name) {
    try {
      await mkdir(paths.root);
    } catch (err) {
      console.log(err);
      return;
    }
  }

  await intiNpm(paths);
  await initConfigFiles(paths);
  await initFolderStructure(paths);

  if (redux) {
    await initRedux(paths);
  } else {
    await initReact(paths);
  }
  if (!skipInstall) {
    await installPackages(paths, redux);
  }
}

async function initReact(paths) {
  await appendFile(`${paths.src}/index.tsx`, reactIndex);
}

async function initRedux(paths) {
  await mkdir(paths.redux);
  await appendFile(`${paths.src}/index.tsx`, reduxIndex);
  await Promise.all([
    mkdir(paths.actions),
    mkdir(paths.reducers),
    mkdir(paths.schemas),
    mkdir(paths.selectors),
  ]);
}

function initializeConponents() {
  chdir(`./componenets`);

}

async function intiNpm(paths) {
  const spinner = ora();
  spinner.start("Initializing npm...");
  await exec("npm init -y", {
    cwd: paths.root,
  });

  spinner.succeed("npm initialized");
}

async function installPackages(paths, redux) {
  const spinner = ora();
  spinner.start("Installing packages...");

  await exec(`npm i -s ${redux ? dependencies.redux.join(" ") : dependencies.react.join(" ")}`, {
    cwd: paths.root,
  });
  await exec(
    `npm i --save-dev ${dependencies.dev.join(" ")}`,
    {
      cwd: paths.root,
    }
  );
  spinner.succeed("Packages installed.");

}

async function initConfigFiles(paths) {
  const spinner = ora();
  spinner.start("Initializing config files...");
  await Promise.all([
    appendFile(`${paths.root}/webpack.config.js`, webpackConfig),
    appendFile(`${paths.root}/tslint.json`, tslintConfig),
    appendFile(`${paths.root}/tsconfig.json`, tsConfig),
    appendFile(`${paths.root}/postcss.config.js`, postcssConfig),
    appendFile(`${paths.root}/index.html`, indexHtml),
    appendFile(`${paths.root}/.gitignore`, gitignore),
    appendFile(`${paths.root}/.babelrc`, babelrc),
  ]);
  spinner.succeed("Config files initialized.");
}

async function initFolderStructure(paths) {
  const spinner = ora();
  spinner.start("Initializing folder structure...");
  await mkdir(paths.src);
  await Promise.all([
    mkdir(paths.componenets),
    mkdir(paths.helpers),
    mkdir(paths.consts),
    mkdir(paths.config),
    mkdir(paths.styles),
    mkdir(paths.services),
    mkdir(paths.routes),
  ]);
  spinner.succeed("Folder structure initialized.");
}