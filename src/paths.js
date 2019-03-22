const process = require('process');
const path = require('path');


function paths(name) {
  const cwd = process.cwd();
  this.root = path.resolve(cwd, `./${name}`);
  this.src = path.resolve(this.root, "./src");

  this.componenets = path.resolve(this.src, "./componenets");
  this.helpers = path.resolve(this.src, "./helpers");
  this.consts = path.resolve(this.src, "./consts");
  this.config = path.resolve(this.src, "./config");
  this.styles = path.resolve(this.src, "./styles");
  this.services = path.resolve(this.src, "./services");
  this.routes = path.resolve(this.src, "./Routes");

  this.actions = path.resolve(this.src, "./actions");
  this.reducers = path.resolve(this.src, "./reducers");
  this.selectors = path.resolve(this.src, "./selectors");
  this.schemas = path.resolve(this.src, "./schemas");
  this.redux = path.resolve(this.src, "./redux");
}

module.exports = paths;
