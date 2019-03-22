const fs = require("fs");
const ts = require("typescript");
const process = require("process");

const path = require("path");

const cwd = process.cwd();

const inputFile = path.resolve(__dirname, "../component/ClassComponent/ClassComponent.tsx");
console.log({inputFile})
const sourceCode = fs.readFileSync(inputFile, "utf-8");
const sourceFile = ts.createSourceFile(
  inputFile,
  sourceCode,
  ts.ScriptTarget.Latest,
  true
);
// console.log(JSON.stringify(sourceFile, null, 2));


function visit(node) {
  // ts.isClassDeclaration

  if (ts.isClassDeclaration(node)) {
    node.name.text = "ClassNameUpdated"
    // for (const param of node.flags) {
    //   console.log(param.name.getText());
    // }
  }
  // node.forEachChild(visit);
}

visit(sourceFile);

module.exports = () => {
  console.log("Test");
};
