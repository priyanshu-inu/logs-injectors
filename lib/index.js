#!/usr/bin/env node
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const fs = require('fs');
const prettier = require('prettier');

// Helper function to insert console.log
const insertConsoleLog = (path) => {
  const functionName = path.node.id ? path.node.id.name : 'anonymous function';
  let variables = path.node.params.map((param) => param.name).join(', ');
  const logStatement = `console.log('Function: ${functionName} | Variables: ${variables}');`;

  // Create AST for the console.log statement
  const logAst = parser.parse(logStatement).program.body[0];

  // Inject log statement at the beginning of the function
  path.get('body').unshiftContainer('body', logAst);
};

// Main function to inject console logs into all functions
const addLoggingToFile = async (filePath) => {
  const code = fs.readFileSync(filePath, 'utf-8');

  // Parse the code into an AST
  const ast = parser.parse(code, { sourceType: 'module' });

  // Traverse the AST to find all functions
  traverse(ast, {
    FunctionDeclaration(path) {
      insertConsoleLog(path);
    },
    FunctionExpression(path) {
      insertConsoleLog(path);
    },
    ArrowFunctionExpression(path) {
      insertConsoleLog(path);
    },
  });

  // Generate the modified code from the AST
  let newCode = generator(ast).code;

  // Format the code with Prettier (asynchronously)
  newCode = await prettier.format(newCode, { parser: 'babel' });

  // Write the modified code back to the file
  fs.writeFileSync(filePath, newCode); // Ensure newCode is a string
};

// Usage: specify the file path you want to modify
const filePath = process.argv[2];
if (filePath) {
  addLoggingToFile(filePath)
    .then(() => {
      console.log(`Auto-inserted console.log into ${filePath}`);
    })
    .catch((err) => {
      console.error('Error:', err.message);
    });
} else {
  console.log('Please provide a file path.');
}
